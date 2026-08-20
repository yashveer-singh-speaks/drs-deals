'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

const steps = [
    {
        number: 1,
        title: 'Browse',
        desc: 'Explore 240+ curated offers across luxury resorts, fine dining, and leisure destinations.',
    },
    {
        number: 2,
        title: 'Enquire',
        desc: 'Speak to our concierge team directly by phone (+91 98111 20892), email, or WhatsApp.',
    },
    {
        number: 3,
        title: 'Reserve',
        desc: 'Our concierge coordinates your membership or booking directly with property management.',
    },
    {
        number: 4,
        title: 'Experience',
        desc: 'Arrive at the property and enjoy verified 5-star hospitality privileges at negotiated member rates.',
    },
];

export default function CubeSteps() {
    const [current, setCurrent] = useState(0);
    const [next, setNext] = useState(1);
    const [animating, setAnimating] = useState(false);
    const [halfWidth, setHalfWidth] = useState(0);
    const viewportRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Measure viewport width for translateZ
    useEffect(() => {
        const measure = () => {
            if (viewportRef.current) {
                setHalfWidth(viewportRef.current.offsetWidth / 2);
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    const startTransition = useCallback((targetIndex: number) => {
        if (animating) return;
        setNext(targetIndex);
        setAnimating(true);
    }, [animating]);

    // Auto-advance every 2 seconds
    useEffect(() => {
        if (animating) return;

        timerRef.current = setTimeout(() => {
            startTransition((current + 1) % steps.length);
        }, 2000);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current, animating, startTransition]);

    // When CSS animation ends, commit
    const handleAnimationEnd = useCallback(() => {
        setCurrent(next);
        setAnimating(false);
    }, [next]);

    // 3D cube geometry:
    // Front face: translateZ(halfWidth) — pushed toward viewer
    // Right face: rotateY(90deg) translateZ(halfWidth) — on the right side of the cube
    // Scene: when animating, rotateY(-90deg) to bring right face to front
    const sceneStyle: React.CSSProperties = {
        transform: animating ? undefined : `translateZ(-${halfWidth}px)`,
        transition: animating ? undefined : 'none',
    };

    const frontStyle: React.CSSProperties = {
        transform: `rotateY(0deg) translateZ(${halfWidth}px)`,
    };

    const rightStyle: React.CSSProperties = {
        transform: `rotateY(90deg) translateZ(${halfWidth}px)`,
    };

    return (
        <div className="cube-steps-wrapper">
            <div className="cube-viewport" ref={viewportRef}>
                <div
                    className={`cube-scene ${animating ? 'cube-rotate' : ''}`}
                    style={animating ? {} : { transform: `translateZ(-${halfWidth}px)` }}
                    onAnimationEnd={handleAnimationEnd}
                    // Inject the halfWidth as a CSS custom property for the keyframes
                    // Since CSS keyframes can't use JS values, we use inline animation
                >
                    {/* Front face */}
                    <div className="cube-face" style={frontStyle}>
                        <StepCard step={steps[current]} />
                    </div>
                    {/* Right face */}
                    <div className="cube-face" style={rightStyle}>
                        <StepCard step={steps[next]} />
                    </div>
                </div>
            </div>

            {/* Dot indicators */}
            <div className="cube-dots">
                {steps.map((_, idx) => (
                    <button
                        key={idx}
                        className={`cube-dot ${idx === (animating ? next : current) ? 'cube-dot-active' : ''}`}
                        onClick={() => {
                            if (idx === current || animating) return;
                            if (timerRef.current) clearTimeout(timerRef.current);
                            startTransition(idx);
                        }}
                        aria-label={`Go to step ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Inject dynamic keyframes for the current halfWidth */}
            <style>{`
                @keyframes cubeRotate {
                    from {
                        transform: translateZ(-${halfWidth}px) rotateY(0deg);
                    }
                    to {
                        transform: translateZ(-${halfWidth}px) rotateY(-90deg);
                    }
                }
            `}</style>
        </div>
    );
}

function StepCard({ step }: { step: typeof steps[number] }) {
    return (
        <div className="cube-card">
            <div className="cube-card-number">{step.number}</div>
            <h3 className="cube-card-title">{step.title}</h3>
            <p className="cube-card-desc">{step.desc}</p>
            <div className="cube-card-progress">
                <span className="cube-card-step-label">Step {step.number} of {steps.length}</span>
                <div className="cube-card-progress-bar">
                    <div
                        className="cube-card-progress-fill"
                        style={{ width: `${(step.number / steps.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
