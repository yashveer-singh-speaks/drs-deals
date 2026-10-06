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
        videoUrl: '/videos/reel-1.mp4',
        posterUrl: '/videos/reel-1.webp',
        title: 'High-Rope Zipline & Farm Adventure',
        location: 'Adventure Day Outing & Picnic Park',
        tag: '#AdventureActivities #DayOuting',
        views: '48.2K views',
    },
    {
        id: 'reel-2',
        videoUrl: '/videos/reel-2.mp4',
        posterUrl: '/videos/reel-2.webp',
        title: 'Seamless 5-Star Hotel Stay & Check-in',
        location: 'Partner Luxury Hotels & Suites',
        tag: '#HotelStay #DRSDeals',
        views: '62.4K views',
    },
    {
        id: 'reel-3',
        videoUrl: '/videos/reel-3.mp4',
        posterUrl: '/videos/reel-3.webp',
        title: 'Mojoland Multi Theme & Water Park Entry',
        location: 'Mojoland Multi Theme Park, Murthal',
        tag: '#Mojoland #WaterPark',
        views: '74.1K views',
    },
    {
        id: 'reel-4',
        videoUrl: '/videos/reel-4.mp4',
        posterUrl: '/videos/reel-4.webp',
        title: 'Grand Palatial Resort & Royal Lawns',
        location: 'Luxury Heritage Resorts & Stays',
        tag: '#HeritageResort #LuxuryRetreat',
        views: '53.8K views',
    },
    {
        id: 'reel-5',
        videoUrl: '/videos/reel-5.mp4',
        posterUrl: '/videos/reel-5.webp',
        title: 'Comfortable Luxury Suite & Bed Experience',
        location: 'Partner Boutique Resorts & Hotels',
        tag: '#ResortLife #WeekendGetaway',
        views: '41.5K views',
    },
    {
        id: 'reel-6',
        videoUrl: '/videos/reel-6.mp4',
        posterUrl: '/videos/reel-6.webp',
        title: 'Lavish Atrium Lobby & Lounge Ambience',
        location: 'Exclusive Hospitality Partner Stays',
        tag: '#BoutiqueHotels #Hospitality',
        views: '39.7K views',
    },
    {
        id: 'reel-7',
        videoUrl: '/videos/reel-7.mp4',
        posterUrl: '/videos/reel-7.webp',
        title: 'Adrenaline Water Slides & Aqua Splash',
        location: 'Partner Waterparks & Wave Pools',
        tag: '#WaterparkFun #AquaSlides',
        views: '88.3K views',
    },
    {
        id: 'reel-8',
        videoUrl: '/videos/reel-8.mp4',
        posterUrl: '/videos/reel-8.webp',
        title: 'Farm Picnic, Petting Zoo & Rural Vibes',
        location: 'Eco-Farm Tourism & Nature Parks',
        tag: '#FarmTourism #FamilyFun',
        views: '34.6K views',
    },
    {
        id: 'reel-9',
        videoUrl: '/videos/reel-9.mp4',
        posterUrl: '/videos/reel-9.webp',
        title: 'Signature Classical Courtyard & Fountain',
        location: 'Grand Resort & Banquet Estates',
        tag: '#RoyalExperience #DRSDeals',
        views: '59.2K views',
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
