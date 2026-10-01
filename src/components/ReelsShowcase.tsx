'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ReelItem {
    id: string;
    videoUrl: string;
    posterUrl: string;
    title: string;
    location: string;
    tag: string;
    views: string;
}

const REELS: ReelItem[] = [
    {
        id: 'reel-1',
        videoUrl: '/videos/cover-1.mp4',
        posterUrl: '/videos/cover-1.webp',
        title: '5-Star Luxury Stays & Fine Dining',
        location: 'Sonipat Murthal & Delhi NCR',
        tag: '#DRSDeals #LuxuryStays',
        views: '45.2K views',
    },
    {
        id: 'reel-2',
        videoUrl: '/videos/cover-2.mp4',
        posterUrl: '/videos/cover-2.webp',
        title: 'Adventure & Splash Waterpark Pass',
        location: 'Mojoland Multi Theme Park',
        tag: '#FamilyAdventure #Waterpark',
        views: '38.9K views',
    },
    {
        id: 'reel-3',
        videoUrl: '/videos/cover-3.mp4',
        posterUrl: '/videos/cover-3.webp',
        title: 'Serene Mountain Retreats & Manors',
        location: 'Manali & Kasauli Hills',
        tag: '#MountainVibes #ResortLife',
        views: '52.1K views',
    },
];

export default function ReelsShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const centerVideoRef = useRef<HTMLVideoElement | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const total = REELS.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % total);
    }, [total]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    // Handle video auto-slide
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);

        const video = centerVideoRef.current;
        if (video) {
            video.currentTime = 0;
            video.play().catch(() => {
                // Autoplay with sound restricted by browser; fallback to muted
                if (!video.muted) {
                    video.muted = true;
                    setIsMuted(true);
                    video.play().catch(() => {});
                }
            });
            setIsPlaying(true);
        }

        // Fallback interval in case video has issues or finishes
        timerRef.current = setTimeout(() => {
            handleNext();
        }, 12000);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [activeIndex, handleNext]);

    const handleVideoEnded = () => {
        handleNext();
    };

    const togglePlay = () => {
        const video = centerVideoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        const video = centerVideoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    return (
        <section className="section-padding reels-showcase-section" aria-label="DRS Deals Live Experiences">
            <div className="container">
                <div className="section-header text-center" style={{ marginBottom: '40px' }}>
                    <div className="hero-eyebrow" style={{ marginBottom: '8px' }}>REAL EXPERIENCES</div>
                    <h2 className="section-title">Live Moments &amp; Hospitality Reels</h2>
                    <p style={{ maxWidth: '640px', margin: '0 auto', color: 'var(--color-charcoal-light)', fontSize: '1rem', lineHeight: 1.6 }}>
                        Watch authentic moments captured across our partner 5-star resorts, waterparks, and heritage estates.
                    </p>
                </div>

                {/* Reels 3-Slot Stage */}
                <div className="reels-stage-container">
                    {/* Left Preview Card */}
                    <div 
                        className="reel-card reel-card-left" 
                        onClick={handlePrev}
                        role="button"
                        tabIndex={0}
                        aria-label={`View previous reel: ${REELS[prevIndex].title}`}
                    >
                        <div className="reel-media-wrapper">
                            <img 
                                src={REELS[prevIndex].posterUrl} 
                                alt={REELS[prevIndex].title} 
                                className="reel-poster-img"
                                width={320}
                                height={568}
                                loading="lazy"
                            />
                            <div className="reel-overlay-gradient" />
                            <div className="reel-info-preview">
                                <span className="reel-tag">{REELS[prevIndex].tag}</span>
                                <h3 className="reel-mini-title">{REELS[prevIndex].title}</h3>
                            </div>
                        </div>
                    </div>

                    {/* Center Active Playing Video */}
                    <div className="reel-card reel-card-center" onClick={togglePlay}>
                        <div className="reel-media-wrapper">
                            <video
                                ref={centerVideoRef}
                                key={REELS[activeIndex].videoUrl}
                                src={REELS[activeIndex].videoUrl}
                                poster={REELS[activeIndex].posterUrl}
                                playsInline
                                autoPlay
                                muted={isMuted}
                                onEnded={handleVideoEnded}
                                className="reel-active-video"
                            />
                            <div className="reel-overlay-gradient" />

                            {/* Badges & Meta */}
                            <div className="reel-top-bar">
                                <span className="reel-live-badge">
                                    <span className="live-dot" /> DRS LIVE
                                </span>
                                <span className="reel-views-pill">{REELS[activeIndex].views}</span>
                            </div>

                            {/* Controls */}
                            <div className="reel-controls-bar">
                                <button
                                    type="button"
                                    onClick={toggleMute}
                                    className="reel-icon-btn"
                                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                                >
                                    {isMuted ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={togglePlay}
                                    className="reel-icon-btn"
                                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                                >
                                    {isPlaying ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                    )}
                                </button>
                            </div>

                            {/* Caption Content */}
                            <div className="reel-caption-box">
                                <span className="reel-tag">{REELS[activeIndex].tag}</span>
                                <h3 className="reel-main-title">{REELS[activeIndex].title}</h3>
                                <p className="reel-location">📍 {REELS[activeIndex].location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Preview Card */}
                    <div 
                        className="reel-card reel-card-right" 
                        onClick={handleNext}
                        role="button"
                        tabIndex={0}
                        aria-label={`View next reel: ${REELS[nextIndex].title}`}
                    >
                        <div className="reel-media-wrapper">
                            <img 
                                src={REELS[nextIndex].posterUrl} 
                                alt={REELS[nextIndex].title} 
                                className="reel-poster-img"
                                width={320}
                                height={568}
                                loading="lazy"
                            />
                            <div className="reel-overlay-gradient" />
                            <div className="reel-info-preview">
                                <span className="reel-tag">{REELS[nextIndex].tag}</span>
                                <h3 className="reel-mini-title">{REELS[nextIndex].title}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows and Indicator Dots */}
                <div className="reels-nav-footer">
                    <button 
                        onClick={handlePrev} 
                        className="reels-arrow-btn"
                        aria-label="Previous reel"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    
                    <div className="reels-dots">
                        {REELS.map((reel, idx) => (
                            <button
                                key={reel.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`reel-dot ${idx === activeIndex ? 'active' : ''}`}
                                aria-label={`Go to reel ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={handleNext} 
                        className="reels-arrow-btn"
                        aria-label="Next reel"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
