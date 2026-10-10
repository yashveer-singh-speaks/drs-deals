'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { CORPORATE_CLIENTS, CorporateClient } from '@/data/corporateClients';

type SpeedMultiplier = 1 | 1.5 | 2;
type TrainPhase = 'TRAVELING' | 'STOPPED' | 'DEPARTING';

export default function CorporateTrainShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [speed, setSpeed] = useState<SpeedMultiplier>(1);
    const [isPlaying, setIsPlaying] = useState(true);
    const [phase, setPhase] = useState<TrainPhase>('TRAVELING');
    const [isHovered, setIsHovered] = useState(false);
    const [trainOffset, setTrainOffset] = useState(0);

    const totalClients = CORPORATE_CLIENTS.length;
    const currentClient: CorporateClient = CORPORATE_CLIENTS[currentIndex];

    // Base timings in milliseconds at 1x speed (38 clients * ~1580ms ≈ 60 seconds total journey)
    const BASE_TRAVEL_TIME = 480; // train travel between station points
    const BASE_STOP_TIME = 1100; // logo rising, centered inspection, and descent

    const travelTime = BASE_TRAVEL_TIME / speed;
    const stopTime = BASE_STOP_TIME / speed;

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Step to specific client
    const goToClient = useCallback((index: number) => {
        if (timerRef.current) clearTimeout(timerRef.current);
        const safeIndex = (index + totalClients) % totalClients;
        setCurrentIndex(safeIndex);
        setPhase('STOPPED');
        setTrainOffset(safeIndex * 260);
    }, [totalClients]);

    // Handle train journey cycle
    useEffect(() => {
        if (!isPlaying || isHovered) {
            if (timerRef.current) clearTimeout(timerRef.current);
            return;
        }

        if (phase === 'TRAVELING') {
            // Train is moving towards the next client station point
            timerRef.current = setTimeout(() => {
                setPhase('STOPPED');
            }, travelTime);
        } else if (phase === 'STOPPED') {
            // Train is halted at the station, corporate logo rises & stays visible
            timerRef.current = setTimeout(() => {
                setPhase('DEPARTING');
            }, stopTime);
        } else if (phase === 'DEPARTING') {
            // Train resumes accelerating to next client
            timerRef.current = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % totalClients);
                setTrainOffset((prev) => prev + 260);
                setPhase('TRAVELING');
            }, 200);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [phase, isPlaying, isHovered, travelTime, stopTime, totalClients]);

    const handleSpeedChange = (newSpeed: SpeedMultiplier) => {
        setSpeed(newSpeed);
    };

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    const handlePrev = () => {
        goToClient(currentIndex - 1);
    };

    const handleNext = () => {
        goToClient(currentIndex + 1);
    };

    return (
        <section
            className="corporate-train-section"
            aria-label="DRS Deals Corporate Clients Metro Train Showcase"
        >
            <div className="container">
                {/* Header */}
                <div className="section-header text-center" style={{ marginBottom: '32px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '10px' }}>
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
                <div
                    className="train-stage-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Atmospheric Sky Backdrop with Subtle Golden City Grid */}
                    <div className="train-sky-backdrop" aria-hidden="true">
                        <div className="train-sky-stars" />
                        <div className="train-sky-glow" />
                        <div className="delhi-skyline-silhouette" />
                    </div>

                    {/* Elevated Metro Overhead Wire & Cantilever System */}
                    <div className="train-catenary-line" aria-hidden="true" />

                    {/* 3D POPPING CORPORATE CLIENT LOGO PODIUM */}
                    <div
                        className={`client-logo-podium ${phase === 'STOPPED' ? 'podium-active' : 'podium-hidden'}`}
                        aria-live="polite"
                    >
                        <div className="podium-aura-ring" aria-hidden="true" />
                        <div className="podium-card shadow-soft">
                            {/* Company Logo Image */}
                            <div className="podium-logo-wrap">
                                <img
                                    src={currentClient.logoUrl}
                                    alt={currentClient.altText}
                                    className="podium-logo-img"
                                    onError={(e) => {
                                        // Fallback to original JPG if webp fails
                                        (e.target as HTMLImageElement).src = currentClient.logoFallback;
                                    }}
                                />
                            </div>

                            {/* Company Name as Real Text for Visitors & AI Engines */}
                            <div className="podium-info">
                                <div className="podium-client-badge">
                                    <span className="podium-station-tag">Station #{currentIndex + 1} of {totalClients}</span>
                                    <span className="podium-corp-tag">Corporate Client</span>
                                </div>
                                <h3 className="podium-company-name">
                                    {currentClient.name}
                                </h3>
                                <div className="podium-industry-name">
                                    {currentClient.industry}
                                </div>
                            </div>

                            {/* Upward Laser / Hologram Beam connecting to the train car */}
                            <div className="podium-light-beam" aria-hidden="true" />
                        </div>
                    </div>

                    {/* 3D MOVING DELHI METRO TRAIN */}
                    <div className="train-viewport">
                        <div
                            className={`train-motion-assembly ${phase === 'STOPPED' ? 'train-braked' : 'train-rolling'}`}
                            style={{
                                transform: `translateX(-${(currentIndex * 280) % 2200}px)`,
                                transition: phase === 'STOPPED' 
                                    ? `transform ${travelTime}ms cubic-bezier(0.25, 1, 0.5, 1)`
                                    : `transform ${travelTime}ms cubic-bezier(0.3, 0, 0.7, 1)`,
                            }}
                        >
                            {/* Coach 1: Aerodynamic Lead Driving Cab (Facing Left) */}
                            <div className="train-car train-car-front">
                                <img
                                    src="/images/train/delhi_metro_front.webp"
                                    alt="Delhi Metro Front Aerodynamic Cab - DRS Deals Corporate Client"
                                    className="train-car-img"
                                    draggable={false}
                                />
                                <div className="train-live-badge-glow">
                                    <span className="live-badge-pulse" />
                                    <span>Delhi Metro &bull; Our Corporate Client</span>
                                </div>
                            </div>

                            {/* Coach 2: Middle Passenger Coach */}
                            <div className="train-car train-car-middle">
                                <img
                                    src="/images/train/delhi_metro_middle.webp"
                                    alt="Delhi Metro Passenger Coach - DRS Deals Corporate Client"
                                    className="train-car-img"
                                    draggable={false}
                                />
                                <div className="train-car-coupler" />
                            </div>

                            {/* Coach 3: Middle Executive Coach */}
                            <div className="train-car train-car-middle">
                                <img
                                    src="/images/train/delhi_metro_middle.webp"
                                    alt="Delhi Metro Executive Coach - DRS Deals Corporate Client"
                                    className="train-car-img"
                                    draggable={false}
                                />
                                <div className="train-car-coupler" />
                            </div>

                            {/* Coach 4: Middle Transit Coach */}
                            <div className="train-car train-car-middle">
                                <img
                                    src="/images/train/delhi_metro_middle.webp"
                                    alt="Delhi Metro Transit Coach - DRS Deals Corporate Client"
                                    className="train-car-img"
                                    draggable={false}
                                />
                                <div className="train-car-coupler" />
                            </div>

                            {/* Coach 5: Middle Lounge Coach */}
                            <div className="train-car train-car-middle">
                                <img
                                    src="/images/train/delhi_metro_middle.webp"
                                    alt="Delhi Metro Hospitality Coach - DRS Deals Corporate Client"
                                    className="train-car-img"
                                    draggable={false}
                                />
                                <div className="train-car-coupler" />
                            </div>

                            {/* Coach 6: Middle Corporate Coach */}
                            <div className="train-car train-car-middle">
                                <img
                                    src="/images/train/delhi_metro_middle.webp"
                                    alt="Delhi Metro Corporate Express - DRS Deals Corporate Client"
                                    className="train-car-img"
                                    draggable={false}
                                />
                                <div className="train-car-coupler" />
                            </div>

                            {/* Coach 7: Middle Member Coach */}
                            <div className="train-car train-car-middle">
                                <img
                                    src="/images/train/delhi_metro_middle.webp"
                                    alt="Delhi Metro Member Coach - DRS Deals Corporate Client"
                                    className="train-car-img"
                                    draggable={false}
                                />
                                <div className="train-car-coupler" />
                            </div>

                            {/* Coach 8: Rear Driving Cab (Facing Right) */}
                            <div className="train-car train-car-rear">
                                <img
                                    src="/images/train/delhi_metro_rear.webp"
                                    alt="Delhi Metro Rear Cab - DRS Deals Corporate Client"
                                    className="train-car-img"
                                    draggable={false}
                                />
                            </div>
                        </div>

                        {/* Center Stage Station Dock Marker */}
                        <div className="train-center-dock" aria-hidden="true">
                            <div className="dock-beam-vertical" />
                            <div className="dock-beam-glow" />
                        </div>
                    </div>

                    {/* Elevated Track Viaduct with Concrete Sleepers & Third Rail */}
                    <div className="train-track-viaduct" aria-hidden="true">
                        <div className="track-rail-top" />
                        <div className="track-sleepers-row" />
                        <div className="track-rail-bottom" />
                        <div className="track-concrete-deck" />
                    </div>
                </div>

                {/* Train Dashboard & Interactive Speed Controls */}
                <div className="train-controls-bar">
                    {/* Left: Client Progress Indicator */}
                    <div className="train-progress-info">
                        <div className="train-pulse-status">
                            <span className={`status-indicator-dot ${isPlaying ? 'dot-active' : 'dot-paused'}`} />
                            <span className="status-indicator-text">
                                {isPlaying ? (phase === 'STOPPED' ? 'Station Inspection' : 'Cruising Track') : 'Paused'}
                            </span>
                        </div>
                        <div className="train-counter-text">
                            <strong>{currentIndex + 1}</strong> of <strong>{totalClients}</strong> Corporate Clients
                        </div>
                    </div>

                    {/* Center: Play/Pause and Skip Buttons */}
                    <div className="train-nav-buttons">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="train-nav-btn"
                            aria-label="Previous Corporate Client"
                            title="Previous Corporate Client"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>

                        <button
                            type="button"
                            onClick={togglePlay}
                            className={`train-play-btn ${!isPlaying ? 'is-paused' : ''}`}
                            aria-label={isPlaying ? 'Pause Train Animation' : 'Resume Train Animation'}
                            title={isPlaying ? 'Pause Animation' : 'Resume Animation'}
                        >
                            {isPlaying ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <rect x="6" y="4" width="4" height="16" rx="1" />
                                        <rect x="14" y="4" width="4" height="16" rx="1" />
                                    </svg>
                                    <span>Pause</span>
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                    <span>Resume</span>
                                </>
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            className="train-nav-btn"
                            aria-label="Next Corporate Client"
                            title="Next Corporate Client"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                        </button>
                    </div>

                    {/* Right: Speed Multiplier Controls (1x | 1.5x | 2x) */}
                    <div className="train-speed-selector">
                        <span className="speed-label">Speed:</span>
                        <div className="speed-button-group" role="group" aria-label="Train Speed Selection">
                            <button
                                type="button"
                                onClick={() => handleSpeedChange(1)}
                                className={`speed-btn ${speed === 1 ? 'active' : ''}`}
                                aria-pressed={speed === 1}
                                title="Normal Speed (~60s full tour)"
                            >
                                1x
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSpeedChange(1.5)}
                                className={`speed-btn ${speed === 1.5 ? 'active' : ''}`}
                                aria-pressed={speed === 1.5}
                                title="1.5x Speed (~40s tour)"
                            >
                                1.5x
                            </button>
                            <button
                                type="button"
                                onClick={() => handleSpeedChange(2)}
                                className={`speed-btn ${speed === 2 ? 'active' : ''}`}
                                aria-pressed={speed === 2}
                                title="2x Speed (~30s tour)"
                            >
                                2x
                            </button>
                        </div>
                    </div>
                </div>

                {/* Corporate Client Quick Selection Bar */}
                <div className="client-scroller-track" role="region" aria-label="Browse Corporate Clients Directly">
                    <div className="client-scroller-inner">
                        {CORPORATE_CLIENTS.map((client, idx) => (
                            <button
                                key={client.id}
                                type="button"
                                onClick={() => goToClient(idx)}
                                className={`client-pill-chip ${idx === currentIndex ? 'active-chip' : ''}`}
                                aria-label={`View ${client.name}`}
                            >
                                <img
                                    src={client.logoUrl}
                                    alt=""
                                    className="chip-mini-logo"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = client.logoFallback;
                                    }}
                                />
                                <span className="chip-name">{client.name.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Subtitle / Verification Footer */}
                <div className="train-section-footer">
                    <p className="train-footer-note">
                        &bull; <strong>Delhi Metro</strong>, <strong>Tata Group</strong>, <strong>Bharti Airtel</strong>, <strong>Reliance</strong>, <strong>Maruti Suzuki</strong>, <strong>Wipro</strong>, <strong>Yakult</strong>, and 30+ enterprise leaders partner with DRS Deals for corporate hospitality privileges, executive gifting, and team wellness outings.
                    </p>
                </div>

                {/* Accessible Full Client Roster for Search Engines & AI Models */}
                <div className="sr-only" aria-hidden="true">
                    <h3>Full List of DRS Deals Corporate Clients and Enterprise Partners:</h3>
                    <ul>
                        {CORPORATE_CLIENTS.map((client) => (
                            <li key={`sr-${client.id}`}>
                                <strong>{client.name}</strong> - {client.industry}. Verified corporate client partner of DRS Deals since 2003.
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
