'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CORPORATE_CLIENTS, CorporateClient } from '@/data/corporateClients';

type SpeedMultiplier = 1 | 1.5 | 2;

export default function CorporateTrainShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [speed, setSpeed] = useState<SpeedMultiplier>(1);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false); // Controls the pop-up animation state

    const totalClients = CORPORATE_CLIENTS.length;
    const currentClient: CorporateClient = CORPORATE_CLIENTS[currentIndex];

    // Total duration per client is 3500ms at 1x speed
    // 500ms rise + 2500ms stay + 500ms fall
    const BASE_CYCLE_TIME = 3500;
    const BASE_VISIBLE_TIME = 2500;
    const cycleTime = BASE_CYCLE_TIME / speed;
    const visibleTime = BASE_VISIBLE_TIME / speed;
    const transitionTime = (cycleTime - visibleTime) / 2;

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const stateTimerRef = useRef<NodeJS.Timeout | null>(null);

    const advanceClient = useCallback(() => {
        setIsVisible(false);
        stateTimerRef.current = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % totalClients);
            setIsVisible(true);
        }, transitionTime);
    }, [totalClients, transitionTime]);

    useEffect(() => {
        if (!isPlaying) {
            if (timerRef.current) clearInterval(timerRef.current);
            if (stateTimerRef.current) clearTimeout(stateTimerRef.current);
            return;
        }

        // Initial pop up
        setIsVisible(true);

        timerRef.current = setInterval(() => {
            advanceClient();
        }, cycleTime);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (stateTimerRef.current) clearTimeout(stateTimerRef.current);
        };
    }, [isPlaying, cycleTime, advanceClient]);

    const handleSpeedChange = (newSpeed: SpeedMultiplier) => {
        setSpeed(newSpeed);
    };

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    // Train animation duration based on speed. At 1x, let's say it takes 30s to scroll the track
    const baseTrainScrollDuration = 40;
    const currentTrainScrollDuration = baseTrainScrollDuration / speed;

    // Create an array for train cars to form a long continuous track
    // We'll use 8 cars duplicated once for a seamless loop (16 total in track)
    const trainCarsCount = 12;

    return (
        <section
            className="corporate-train-section"
            aria-label="DRS Deals Corporate Clients Showcase"
        >
            <div className="container">
                <div className="section-header text-center" style={{ marginBottom: '48px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '12px' }}>
                        OUR VALUED CORPORATE PARTNERSHIPS
                    </div>
                    <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.85rem)' }}>
                        The DRS Deals Corporate Express
                    </h2>
                    <p
                        className="text-body-large text-charcoal-light"
                        style={{ maxWidth: '780px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}
                    >
                        Connecting India&apos;s most prominent corporations, public enterprises, and global conglomerates with bespoke executive retreats, luxury leisure privileges, and verified hospitality vouchers.
                    </p>
                </div>

                {/* Train Stage Arena */}
                <div className="train-stage-container">
                    
                    {/* Glowing Logo Card Popup */}
                    <div className={`client-logo-card-container ${isVisible ? 'card-visible' : 'card-hidden'}`}>
                        <div className="client-logo-glow-card">
                            <div className="client-logo-image-wrapper">
                                <img
                                    src={currentClient.logoUrl}
                                    alt={currentClient.altText}
                                    className="client-logo-img"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = currentClient.logoFallback;
                                    }}
                                />
                            </div>
                            <div className="client-info-text">
                                <h3 className="client-name-bold">{currentClient.name}</h3>
                                <p className="client-industry-text">{currentClient.industry}</p>
                            </div>
                        </div>
                        <div className="card-connecting-beam" />
                    </div>

                    {/* Continuous Scrolling Train */}
                    <div className="continuous-train-viewport">
                        <div 
                            className="continuous-train-track"
                            style={{ 
                                animationDuration: `${currentTrainScrollDuration}s`,
                                animationPlayState: isPlaying ? 'running' : 'paused'
                            }}
                        >
                            {/* Original Set */}
                            <div className="train-car-set">
                                {Array.from({ length: trainCarsCount }).map((_, i) => (
                                    <div key={`car-orig-${i}`} className="train-middle-car">
                                        <img
                                            src="/images/train/delhi_metro_middle.webp"
                                            alt="Metro Coach"
                                            className="train-car-img"
                                            draggable={false}
                                        />
                                        <div className="train-car-coupler" />
                                    </div>
                                ))}
                            </div>
                            {/* Duplicated Set for Seamless Loop */}
                            <div className="train-car-set">
                                {Array.from({ length: trainCarsCount }).map((_, i) => (
                                    <div key={`car-dup-${i}`} className="train-middle-car">
                                        <img
                                            src="/images/train/delhi_metro_middle.webp"
                                            alt="Metro Coach"
                                            className="train-car-img"
                                            draggable={false}
                                        />
                                        <div className="train-car-coupler" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Track and Shadow */}
                    <div className="train-track-base">
                        <div className="track-rail-highlight" />
                        <div className="track-concrete-base" />
                    </div>
                </div>

                {/* Sleek Floating Control Pill */}
                <div className="train-control-pill-wrapper">
                    <div className="train-control-pill">
                        <button
                            type="button"
                            onClick={togglePlay}
                            className="pill-play-btn"
                            aria-label={isPlaying ? 'Pause Train Animation' : 'Resume Train Animation'}
                        >
                            {isPlaying ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="16" rx="1" />
                                    <rect x="14" y="4" width="4" height="16" rx="1" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            )}
                        </button>
                        
                        <div className="pill-divider" />

                        <div className="pill-speed-group">
                            <button
                                type="button"
                                onClick={() => handleSpeedChange(1)}
                                className={`pill-speed-btn ${speed === 1 ? 'active' : ''}`}
                            >
                                1x
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSpeedChange(1.5)}
                                className={`pill-speed-btn ${speed === 1.5 ? 'active' : ''}`}
                            >
                                1.5x
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSpeedChange(2)}
                                className={`pill-speed-btn ${speed === 2 ? 'active' : ''}`}
                            >
                                2x
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
