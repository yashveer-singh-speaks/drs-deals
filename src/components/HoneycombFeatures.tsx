'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';

const features = [
    {
        title: 'Vetted 5-Star Properties',
        desc: 'Over 1,000+ premier venues reviewed for quality, amenities, and hospitality standards.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
    {
        title: 'Direct Verification',
        desc: 'Personalized booking coordination with property front desks across 50+ cities.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
    },
    {
        title: '₹1B+ Value Delivered',
        desc: 'All membership inclusions and terms are clearly itemized in advance with zero hidden costs.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
    },
    {
        title: 'Dedicated Concierge',
        desc: 'Direct phone (+91 98111 20892) and WhatsApp support for inquiries and reservations.',
        icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
];

interface HexCell {
    x: number;
    y: number;
    w: number;
    h: number;
    delay: number;
}

function buildHexGrid(containerW: number, containerH: number): HexCell[] {
    // Pointy-top hexagons
    const hexW = Math.max(40, Math.min(70, containerW / 8));
    const hexH = hexW * 2 / Math.sqrt(3);
    const rowSpacing = hexH * 0.75;
    const centerX = containerW / 2;
    const centerY = containerH / 2;

    const cells: HexCell[] = [];
    const rows = Math.ceil(containerH / rowSpacing) + 3;
    const cols = Math.ceil(containerW / hexW) + 3;

    for (let r = -1; r <= rows; r++) {
        const isOdd = Math.abs(r) % 2 === 1;
        const xOff = isOdd ? hexW / 2 : 0;
        for (let c = -1; c <= cols; c++) {
            const x = c * hexW + xOff - hexW / 2;
            const y = r * rowSpacing - hexH / 2;
            const cx = x + hexW / 2;
            const cy = y + hexH / 2;
            const dist = Math.hypot(cx - centerX, cy - centerY);
            cells.push({ x, y, w: hexW, h: hexH, delay: dist });
        }
    }

    const maxDist = Math.max(...cells.map(c => c.delay));
    return cells.map(c => ({
        ...c,
        delay: maxDist > 0 ? (c.delay / maxDist) * 450 : 0,
    }));
}

export default function HoneycombFeatures() {
    const [current, setCurrent] = useState(0);
    const [nextIdx, setNextIdx] = useState(1);
    const [transitioning, setTransitioning] = useState(false);
    const viewportRef = useRef<HTMLDivElement>(null);
    const [dims, setDims] = useState({ w: 520, h: 325 });
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const transTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Measure container
    useEffect(() => {
        const measure = () => {
            if (viewportRef.current) {
                setDims({
                    w: viewportRef.current.offsetWidth,
                    h: viewportRef.current.offsetHeight,
                });
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    const hexCells = useMemo(() => buildHexGrid(dims.w, dims.h), [dims]);
    const maxDelay = useMemo(
        () => Math.max(...hexCells.map(c => c.delay), 0),
        [hexCells]
    );

    const startTransition = useCallback((target: number) => {
        if (transitioning) return;
        setNextIdx(target);
        setTransitioning(true);
    }, [transitioning]);

    // Auto-advance every 2 seconds
    useEffect(() => {
        if (transitioning) return;
        timerRef.current = setTimeout(() => {
            startTransition((current + 1) % features.length);
        }, 2000);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current, transitioning, startTransition]);

    // Complete transition after hex dissolve finishes
    useEffect(() => {
        if (!transitioning) return;
        transTimerRef.current = setTimeout(() => {
            setCurrent(nextIdx);
            setTransitioning(false);
        }, maxDelay + 420);
        return () => {
            if (transTimerRef.current) clearTimeout(transTimerRef.current);
        };
    }, [transitioning, nextIdx, maxDelay]);

    return (
        <div className="honeycomb-wrapper">
            <div className="honeycomb-viewport" ref={viewportRef}>
                {/* Base layer: current card (always visible underneath) */}
                <div className="honeycomb-card-layer honeycomb-base">
                    <FeatureCard feature={features[current]} index={current} />
                </div>

                {/* Transition layer: next card + hex dissolve overlay */}
                {transitioning && (
                    <div className="honeycomb-card-layer honeycomb-reveal">
                        <FeatureCard feature={features[nextIdx]} index={nextIdx} />
                        <div className="honeycomb-hex-overlay" aria-hidden="true">
                            {hexCells.map((cell, i) => (
                                <div
                                    key={i}
                                    className="hex-cell"
                                    style={{
                                        left: `${cell.x}px`,
                                        top: `${cell.y}px`,
                                        width: `${cell.w}px`,
                                        height: `${cell.h}px`,
                                        animationDelay: `${cell.delay}ms`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Dot indicators */}
            <div className="honeycomb-dots">
                {features.map((_, idx) => (
                    <button
                        key={idx}
                        className={`honeycomb-dot ${idx === (transitioning ? nextIdx : current) ? 'honeycomb-dot-active' : ''}`}
                        onClick={() => {
                            if (idx === current || transitioning) return;
                            if (timerRef.current) clearTimeout(timerRef.current);
                            startTransition(idx);
                        }}
                        aria-label={`Go to feature ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

function FeatureCard({
    feature,
    index,
}: {
    feature: (typeof features)[number];
    index: number;
}) {
    return (
        <div className="honeycomb-card">
            <div className="honeycomb-card-icon">{feature.icon}</div>
            <h3 className="honeycomb-card-title">{feature.title}</h3>
            <p className="honeycomb-card-desc">{feature.desc}</p>
            <div className="honeycomb-card-counter">
                {index + 1} / {features.length}
            </div>
        </div>
    );
}
