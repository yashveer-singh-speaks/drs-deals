'use client';

import React, { useEffect, useRef } from 'react';

export default function HomeTopVideo() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Ensure muted & continuous playback across all browser autoplay policies (Safari, Chrome, iOS, Android)
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay will proceed once document is active
            });
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
            <div className="home-top-video-wrapper">
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
                >
                    <source src="/videos/bg-vid-drs.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Subtle Luxury Gradient Overlays for Smooth Header & Next Section Blend */}
                <div className="home-top-video-overlay-top" aria-hidden="true" />
                <div className="home-top-video-overlay-bottom" aria-hidden="true" />

                {/* Bottom Center Scroll Cue pointing to Section 2 (Hero Section) */}
                <div className="home-top-video-scroll-wrap">
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
