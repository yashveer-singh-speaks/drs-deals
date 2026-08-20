'use client';

import React, { useState, useRef, useEffect } from 'react';

const SLIDER_MIN = 10000;
const SLIDER_MAX = 100000;
const SLIDER_STEP = 500;
const DEFAULT_VALUE = 50000;

const SCALE_LABELS = [
    { value: 10000, label: '10K' },
    { value: 25000, label: '25K' },
    { value: 50000, label: '50K' },
    { value: 75000, label: '75K' },
    { value: 100000, label: '1L+' },
];

function formatINR(n: number): string {
    return '₹' + n.toLocaleString('en-IN');
}

export default function SavingsCalculator() {
    const [amount, setAmount] = useState(DEFAULT_VALUE);
    const savings = Math.round(amount * 0.35);
    const dealPrice = Math.round(amount * 0.65);
    const trackPercent = ((amount - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;

    return (
        <section className="sc-section">
            {/* Atmospheric section background */}
            <div className="sc-bg" aria-hidden="true">
                {/* Left: luxury resort atmospheric image */}
                <div className="sc-bg-left">
                    <img
                        src="/images/webp/luxury-resort-atmospheric.jpg"
                        alt=""
                        className="sc-bg-img"
                    />
                </div>
                {/* Right: champagne contour lines */}
                <div className="sc-bg-right">
                    <svg
                        className="sc-bg-contours"
                        viewBox="0 0 300 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <ellipse cx="200" cy="250" rx="180" ry="300" stroke="rgba(178,153,110,0.12)" strokeWidth="1"/>
                        <ellipse cx="220" cy="250" rx="140" ry="240" stroke="rgba(178,153,110,0.09)" strokeWidth="0.8"/>
                        <ellipse cx="240" cy="250" rx="100" ry="180" stroke="rgba(178,153,110,0.07)" strokeWidth="0.6"/>
                        <path d="M280 50 Q200 250 260 450" stroke="rgba(178,153,110,0.10)" strokeWidth="0.8"/>
                        <path d="M260 80 Q180 250 240 430" stroke="rgba(178,153,110,0.07)" strokeWidth="0.6"/>
                        {/* DRS monogram - subtle geometric */}
                        <g transform="translate(195,230)" opacity="0.08">
                            <circle cx="30" cy="30" r="28" stroke="rgba(178,153,110,1)" strokeWidth="1.2"/>
                            <text x="30" y="36" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="rgba(178,153,110,1)" fontWeight="400">DRS</text>
                        </g>
                    </svg>
                </div>
            </div>

            <div className="sc-container">
                {/* Main glass panel */}
                <div className="sc-panel">
                    {/* Decorative top ornament */}
                    <div className="sc-ornament" aria-hidden="true">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 2 L18.5 13.5 L30 16 L18.5 18.5 L16 30 L13.5 18.5 L2 16 L13.5 13.5 Z" fill="none" stroke="rgba(178,153,110,0.7)" strokeWidth="0.8"/>
                            <circle cx="16" cy="16" r="4" fill="none" stroke="rgba(178,153,110,0.5)" strokeWidth="0.6"/>
                        </svg>
                    </div>

                    {/* Eyebrow */}
                    <div className="sc-eyebrow" aria-label="Value Estimator">
                        <span className="sc-eyebrow-rule" aria-hidden="true"/>
                        <span className="sc-eyebrow-text">VALUE ESTIMATOR</span>
                        <span className="sc-eyebrow-rule" aria-hidden="true"/>
                    </div>

                    {/* Heading */}
                    <h2 className="sc-heading">
                        See Your <em className="sc-heading-gold">Privileged</em> Savings
                    </h2>

                    {/* Ornamental separator */}
                    <div className="sc-separator" aria-hidden="true">
                        <span className="sc-sep-line"/>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 0L6.2 3.8H10L7 6.2L8.1 10L5 7.5L1.9 10L3 6.2L0 3.8H3.8Z" fill="rgba(178,153,110,0.65)"/>
                        </svg>
                        <span className="sc-sep-line"/>
                    </div>

                    {/* Subtext */}
                    <p className="sc-subtext">
                        Discover the exclusive value you unlock with DRS Deals across<br className="sc-br"/>
                        luxury stays, fine dining, and wellness experiences.
                    </p>

                    {/* Slider area */}
                    <div className="sc-slider-area">
                        <div className="sc-slider-header">
                            <label htmlFor="scSlider" className="sc-slider-label">
                                EXPERIENCE RACK RATE VALUE
                            </label>
                            <span className="sc-slider-value">
                                {formatINR(amount)}
                                <span className="sc-slider-edit" aria-hidden="true">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                    </svg>
                                </span>
                            </span>
                        </div>

                        {/* Custom slider track */}
                        <div className="sc-track-wrapper">
                            <div className="sc-track">
                                <div
                                    className="sc-track-fill"
                                    style={{ width: `${trackPercent}%` }}
                                />
                            </div>
                            <input
                                type="range"
                                id="scSlider"
                                min={SLIDER_MIN}
                                max={SLIDER_MAX}
                                step={SLIDER_STEP}
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                aria-label="Experience Rack Rate Value Slider"
                                aria-valuemin={SLIDER_MIN}
                                aria-valuemax={SLIDER_MAX}
                                aria-valuenow={amount}
                                aria-valuetext={formatINR(amount)}
                                className="sc-slider"
                            />
                        </div>

                        {/* Scale labels */}
                        <div className="sc-scale">
                            {SCALE_LABELS.map((l) => (
                                <span
                                    key={l.label}
                                    className={`sc-scale-label${amount >= l.value ? ' sc-scale-label-active' : ''}`}
                                >
                                    {l.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Results panel */}
                    <div className="sc-results">
                        {/* Standard rate */}
                        <div className="sc-result-col">
                            <span className="sc-result-tag">STANDARD RATE</span>
                            <span className="sc-result-amount sc-result-amount--strikethrough">
                                {formatINR(amount)}
                            </span>
                            <span className="sc-result-micro">What Others Pay</span>
                        </div>

                        {/* Vertical divider */}
                        <div className="sc-divider" aria-hidden="true"/>

                        {/* DRS Deals rate */}
                        <div className="sc-result-col">
                            <span className="sc-result-tag sc-result-tag--gold">DRS DEALS RATE</span>
                            <span className="sc-result-amount sc-result-amount--gold">
                                {formatINR(dealPrice)}
                            </span>
                            <span className="sc-result-micro">Your Exclusive Rate</span>
                        </div>

                        {/* Vertical divider */}
                        <div className="sc-divider" aria-hidden="true"/>

                        {/* Net savings */}
                        <div className="sc-result-col sc-result-col--savings">
                            {/* Premium ribbon badge */}
                            <div className="sc-ribbon" aria-hidden="true">
                                <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                                    <path d="M0 0H10V12L5 9.5L0 12V0Z" fill="rgba(74,111,88,0.85)"/>
                                    <path d="M5 5L5.7 7.2H8L6.2 8.5L6.9 10.7L5 9.5L3.1 10.7L3.8 8.5L2 7.2H4.3Z" fill="rgba(255,255,255,0.7)" strokeWidth="0"/>
                                </svg>
                            </div>
                            <span className="sc-result-tag sc-result-tag--sage">YOUR NET SAVINGS</span>
                            <span className="sc-result-amount sc-result-amount--sage">
                                {formatINR(savings)}
                            </span>
                            <span className="sc-result-micro sc-result-micro--sage">You Save</span>
                        </div>
                    </div>

                    {/* Footer statement */}
                    <div className="sc-footer" aria-label="Privileged Access. Exclusive Savings.">
                        <span className="sc-footer-rule" aria-hidden="true"/>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path d="M5 0L6.2 3.8H10L7 6.2L8.1 10L5 7.5L1.9 10L3 6.2L0 3.8H3.8Z" fill="rgba(178,153,110,0.5)"/>
                        </svg>
                        <span className="sc-footer-text">PRIVILEGED ACCESS. EXCLUSIVE SAVINGS.</span>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path d="M5 0L6.2 3.8H10L7 6.2L8.1 10L5 7.5L1.9 10L3 6.2L0 3.8H3.8Z" fill="rgba(178,153,110,0.5)"/>
                        </svg>
                        <span className="sc-footer-rule" aria-hidden="true"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
