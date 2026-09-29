'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ShowcaseIframe() {
    const [shouldLoad, setShouldLoad] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        if (!('IntersectionObserver' in window)) {
            setShouldLoad(true);
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
    }, []);

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
