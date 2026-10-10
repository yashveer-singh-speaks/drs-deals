'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function HomeTopVideo() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force muted on mount for guaranteed cross-browser autoplay compliance (Safari, iOS, Chrome)
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                })
                .catch(() => {
                    // Browser prevented autoplay before user gesture
                    setIsPlaying(false);
                });
        }
    }, []);

    const toggleSound = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;

        setHasInteracted(true);
        if (video.muted) {
            video.muted = false;
            setIsMuted(false);
            if (video.paused) {
                video.play().then(() => setIsPlaying(true)).catch(() => {});
            }
        } else {
            video.muted = true;
            setIsMuted(true);
        }
    }, []);

    const togglePlayback = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        setHasInteracted(true);
        if (video.paused) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }, []);

    const scrollToHero = (e: React.MouseEvent) => {
        e.preventDefault();
        const hero = document.getElementById('hero-section');
        if (hero) {
            hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            className="home-top-video-section"
            aria-label="DRS Deals Curated Experiences Video Showcase"
        >
            <div className="home-top-video-wrapper" onClick={togglePlayback}>
                <video
                    ref={videoRef}
                    className="home-top-video-player"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/videos/bg-vid-drs.webp"
                    aria-label="DRS Deals Luxury Leisure and Resort Highlights"
                    tabIndex={0}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source src="/videos/bg-vid-drs.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Subtle Luxury Gradient Overlays for Smooth Header & Next Section Blend */}
                <div className="home-top-video-overlay-top" aria-hidden="true" />
                <div className="home-top-video-overlay-bottom" aria-hidden="true" />

                {/* Video Floating Controls: Audio & Playback */}
                <div className="home-top-video-controls" onClick={(e) => e.stopPropagation()}>
                    <button
                        type="button"
                        onClick={toggleSound}
                        className={`video-control-pill ${!isMuted ? 'active-audio' : ''}`}
                        aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                        title={isMuted ? 'Unmute audio' : 'Mute audio'}
                    >
                        {isMuted ? (
                            <>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                                    <line x1="23" y1="9" x2="17" y2="15" />
                                    <line x1="17" y1="9" x2="23" y2="15" />
                                </svg>
                                <span className="video-control-label">Sound Off</span>
                            </>
                        ) : (
                            <>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                </svg>
                                <span className="video-control-label">Sound On</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={togglePlayback}
                        className="video-control-pill video-control-play-pill"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        title={isPlaying ? 'Pause video' : 'Play video'}
                    >
                        {isPlaying ? (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="16" rx="1" />
                                    <rect x="14" y="4" width="4" height="16" rx="1" />
                                </svg>
                                <span className="video-control-label">Pause</span>
                            </>
                        ) : (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                                <span className="video-control-label">Play</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Bottom Center Scroll Cue pointing to Section 2 (Hero Section) */}
                <div className="home-top-video-scroll-wrap" onClick={(e) => e.stopPropagation()}>
                    <a
                        href="#hero-section"
                        onClick={scrollToHero}
                        className="home-top-video-scroll-btn"
                        aria-label="Scroll to DRS Deals Offers and Details"
                    >
                        <span className="scroll-btn-dot" />
                        <span className="scroll-btn-text">Explore DRS Deals</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
