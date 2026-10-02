'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ShowcaseIframe() {
    const [shouldLoad, setShouldLoad] = useState(() => {
        if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
            return true;
        }
        return false;
    });
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el || shouldLoad) return;

        if (!('IntersectionObserver' in window)) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [shouldLoad]);

    return (
        <section ref={containerRef} className="showcase-iframe-section" aria-label="Interactive Hospitality Showcase">
            {shouldLoad ? (
                <iframe
                    src="/section-showcase/index.html"
                    className="showcase-iframe"
                    title="DRS Deals Interactive 3D Showcase"
                    loading="lazy"
                />
            ) : null}
        </section>
    );
}
