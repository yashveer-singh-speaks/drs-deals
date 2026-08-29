import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import NewsletterForm from '@/components/NewsletterForm';
import CubeSteps from '@/components/CubeSteps';
import HoneycombFeatures from '@/components/HoneycombFeatures';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'DRS Deals | Premium Leisure, Dining & Resort Experiences across India',
    description: 'Since 2003, DRS Deals has curated India’s finest luxury resorts, fine dining, spa retreats, and water park passes across 50+ cities at exclusive member rates.',
    alternates: {
        canonical: 'https://www.drsdeals.in/',
    },
    openGraph: {
        images: [siteConfig.socialImage],
    },
};

export default function Home() {
    return (
        <main>
            {/* HERO SECTION */}
            <section className="hero">
                {/* DESKTOP HERO (Laptops, Desktops & Large Screens >= 1024px) */}
                <div className="hero-desktop-wrapper">
                    {/* 1. Left Typography & Content (Z-index above canvas) */}
                    <div className="hero-content">
                        <div className="hero-eyebrow">PREMIUM LEISURE &amp; DINING PRIVILEGES</div>
                        <h1 className="hero-title">
                            More Experiences. <br />
                            More Memories. <br />
                            <span className="text-gold">For Less.</span>
                        </h1>
                        <p className="hero-desc text-body-large">
                            Exclusive member privileges on luxury resort stays, gourmet dining, spa retreats &amp; family leisure across 50+ cities in India.
                        </p>
                        <div className="hero-actions">
                            <Link href="/explore" className="btn btn-primary">
                                Explore 240+ Offers 
                                <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                            <Link href="/how-it-works" className="link-arrow">
                                How It Works
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                        </div>

                        <div className="hero-trust-grid">
                            <div className="trust-item">
                                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"/><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.5-6.9A2 2 0 0016.7 4H7.3a2 2 0 00-1.8 1.1z"/></svg>
                                <span className="trust-label">240+<br />Curated Offers</span>
                            </div>
                            <div className="trust-item">
                                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                                <span className="trust-label">1,000+<br />Partners</span>
                            </div>
                            <div className="trust-item">
                                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <span className="trust-label">4.9 ★<br />Member Rating</span>
                            </div>
                            <div className="trust-item">
                                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                                <span className="trust-label">Direct<br />Concierge</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Full-Bleed Sculptural Ribbon Artwork Layer */}
                    <div className="hero-visual">
                        <svg className="hero-svg-collage" viewBox="0 0 1440 850" preserveAspectRatio="none">
                            <defs>
                                {/* 1. Top Hotel/Resort Ribbon Mask (Upper-right entering at top) */}
                                <clipPath id="d-ribbon-resort">
                                    <path d="M 1020 0 L 1440 0 L 1440 360 L 1260 430 C 1120 340, 960 260, 920 180 C 960 100, 990 40, 1020 0 Z" />
                                </clipPath>

                                {/* 2. Dining Ribbon Mask (Curves across center underneath resort) */}
                                <clipPath id="d-ribbon-dining">
                                    <path d="M 640 320 C 760 240, 860 200, 920 180 C 960 260, 1120 340, 1260 430 L 1440 360 L 1440 500 L 1060 620 C 920 540, 780 440, 640 320 Z" />
                                </clipPath>

                                {/* 3. Spa/Wellness Ribbon Mask (Sweeps toward lower-left) */}
                                <clipPath id="d-ribbon-spa">
                                    <path d="M 440 850 C 480 720, 550 560, 640 320 C 780 440, 920 540, 1060 620 L 980 740 C 820 800, 640 840, 440 850 Z" />
                                </clipPath>

                                {/* 4. Leisure / Pool Ribbon Mask (Emerges lower-right) */}
                                <clipPath id="d-ribbon-pool">
                                    <path d="M 1260 540 L 1440 480 L 1440 850 L 920 850 C 960 780, 1100 680, 1260 540 Z" />
                                </clipPath>
                            </defs>

                            {/* LAYER 1: Top Hotel / Resort Image */}
                            <g clipPath="url(#d-ribbon-resort)">
                                <image href="/images/webp/hero_collage_1.jpg" x="900" y="-30" width="560" height="480" preserveAspectRatio="xMidYMid slice" />
                            </g>

                            {/* LAYER 2: Dining Image */}
                            <g clipPath="url(#d-ribbon-dining)">
                                <image href="/images/webp/hero_collage_2.jpg" x="600" y="160" width="860" height="480" preserveAspectRatio="xMidYMid slice" />
                            </g>

                            {/* LAYER 3: Spa / Wellness Image */}
                            <g clipPath="url(#d-ribbon-spa)">
                                <image href="/images/webp/hero_collage_3.jpg" x="380" y="300" width="700" height="560" preserveAspectRatio="xMidYMid slice" />
                            </g>

                            {/* LAYER 4: Leisure / Pool Image */}
                            <g clipPath="url(#d-ribbon-pool)">
                                <image href="/images/webp/hero_collage_4.jpg" x="880" y="460" width="580" height="400" preserveAspectRatio="xMidYMid slice" />
                            </g>

                            {/* LAYER 5: Broad Woven Ivory Curated Offers Ribbon */}
                            <path d="M 1440 460 L 1080 580 C 960 630, 940 700, 1020 780 L 1440 740 Z" fill="var(--color-ivory)" />

                            {/* REFINED 1.5PX CHAMPAGNE GOLD INTERWOVEN BOUNDARY SEAMS */}
                            {/* Grand Left Silhouette Sweep */}
                            <path d="M 1020 0 C 990 40, 960 100, 920 180 C 860 200, 760 240, 640 320 C 550 560, 480 720, 440 850" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.5" opacity="0.85" />
                            
                            {/* Seam: Resort to Dining */}
                            <path d="M 920 180 C 960 260, 1120 340, 1260 430 L 1440 360" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.5" opacity="0.85" />

                            {/* Seam: Dining to Spa */}
                            <path d="M 640 320 C 780 440, 920 540, 1060 620" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.5" opacity="0.85" />

                            {/* Seam: Spa to Ivory Ribbon */}
                            <path d="M 1060 620 L 980 740 C 820 800, 640 840, 440 850" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.5" opacity="0.85" />

                            {/* Seam: Pool to Ivory Ribbon */}
                            <path d="M 1020 780 L 1440 740" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.5" opacity="0.85" />

                            {/* CURATED OFFERS CONTENT (Interwoven inside the ivory ribbon) */}
                            <foreignObject x="1000" y="560" width="340" height="200">
                                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '12px', fontFamily: 'var(--font-sans)' }}>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--color-champagne-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne-gold)', marginBottom: '8px', background: 'rgba(197, 168, 128, 0.08)' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"></path>
                                            <circle cx="7" cy="7" r="1.5" fill="currentColor"></circle>
                                        </svg>
                                    </div>
                                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-charcoal)', marginBottom: '4px', textTransform: 'uppercase' }}>
                                        CURATED OFFERS
                                    </div>
                                    <div style={{ fontSize: '10.5px', lineHeight: '1.45', color: 'var(--color-charcoal-light)', maxWidth: '220px' }}>
                                        Handpicked deals from trusted partners across leisure &amp; hospitality.
                                    </div>
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                </div>
                {/* MOBILE HERO (Phones & Tablets < 1024px) */}
                <div className="hero-mobile-wrapper">
                    {/* Hero Stage: Text and Interwoven Artwork Coexisting in First Viewport */}
                    <div className="hero-mobile-stage">
                        {/* 1. Mobile Text Content (Left ~68%) */}
                        <div className="hero-mobile-text">
                            <div className="hero-eyebrow" style={{ fontSize: '0.75rem', marginBottom: '10px' }}>PREMIUM PRIVILEGES</div>
                            <h1 className="hero-title" style={{ fontSize: '2rem', lineHeight: '1.15', marginBottom: '12px' }}>
                                More Experiences.<br />
                                <em>Greater Value.</em>
                            </h1>
                            <p className="hero-desc" style={{ fontSize: '0.8rem', lineHeight: '1.45', marginBottom: '14px', maxWidth: '240px' }}>
                                Exclusive member privileges on luxury resort stays, gourmet dining and artisanal retreats curated for moments that matter.
                            </p>
                            <div style={{ display: 'flex', gap: '10px', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--color-charcoal)', marginBottom: '16px', alignItems: 'center' }}>
                                <span>50+ CITIES</span>
                                <span>&bull;</span>
                                <span>240+ OFFERS</span>
                            </div>
                            <div className="hero-actions" style={{ margin: 0 }}>
                                <Link href="/explore" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.75rem' }}>
                                    Explore 240+ Offers 
                                    <svg className="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </Link>
                            </div>
                        </div>

                        {/* 2. Sculptural Artwork Layer (Enters from Top-Right beside text) */}
                        <div className="hero-visual">
                            <svg className="hero-svg-collage" viewBox="0 0 390 560" preserveAspectRatio="none">
                                <defs>
                                    {/* 1. Top Hotel/Resort Ribbon Mask (Visible from top right beside text) */}
                                    <clipPath id="mob-clip-resort">
                                        <path d="M 230 0 L 390 0 L 390 220 L 260 280 C 220 210, 240 90, 230 0 Z" />
                                    </clipPath>

                                    {/* 2. Dining Ribbon Mask (Curves across center underneath resort) */}
                                    <clipPath id="mob-clip-dining">
                                        <path d="M 160 210 C 230 190, 260 210, 360 160 L 390 220 L 290 360 C 210 320, 170 260, 160 210 Z" />
                                    </clipPath>

                                    {/* 3. Spa/Wellness Ribbon Mask (Sweeps towards lower-left) */}
                                    <clipPath id="mob-clip-spa">
                                        <path d="M 0 360 C 70 320, 130 260, 160 210 C 170 260, 210 320, 200 330 C 170 350, 150 390, 180 420 C 190 440, 240 470, 280 510 L 0 560 Z" />
                                    </clipPath>

                                    {/* 4. Leisure / Pool Ribbon Mask (Emerges lower-right) */}
                                    <clipPath id="mob-clip-pool">
                                        <path d="M 390 300 L 390 560 L 240 560 C 250 510, 300 450, 310 400 L 390 300 Z" />
                                    </clipPath>
                                </defs>

                                {/* LAYER 1: Top Resort Image */}
                                <g clipPath="url(#mob-clip-resort)">
                                    <image href="/images/webp/hero_collage_1.jpg" x="180" y="-20" width="230" height="310" preserveAspectRatio="xMidYMid slice" />
                                </g>

                                {/* LAYER 2: Dining Image */}
                                <g clipPath="url(#mob-clip-dining)">
                                    <image href="/images/webp/hero_collage_2.jpg" x="140" y="140" width="260" height="230" preserveAspectRatio="xMidYMid slice" />
                                </g>

                                {/* LAYER 3: Spa / Wellness Image */}
                                <g clipPath="url(#mob-clip-spa)">
                                    <image href="/images/webp/hero_collage_3.jpg" x="-20" y="200" width="310" height="370" preserveAspectRatio="xMidYMid slice" />
                                </g>

                                {/* LAYER 4: Pool / Leisure Image */}
                                <g clipPath="url(#mob-clip-pool)">
                                    <image href="/images/webp/hero_collage_4.jpg" x="220" y="290" width="180" height="280" preserveAspectRatio="xMidYMid slice" />
                                </g>

                                {/* LAYER 5: Broad Ivory Curated Offers Ribbon (Woven seamlessly) */}
                                <path d="M 390 220 L 250 320 C 220 340, 210 370, 240 410 L 390 420 Z" fill="var(--color-ivory)" />
                                
                                {/* Fine Gold Boundary Seams (1.2px) */}
                                {/* Grand Left Silhouette Sweep */}
                                <path d="M 230 0 C 240 90, 220 210, 160 210 C 130 260, 70 320, 0 360" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.2" opacity="0.8" />
                                
                                {/* Seam: Resort to Dining */}
                                <path d="M 230 210 C 260 210, 310 180, 390 170" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.2" opacity="0.8" />
                                
                                {/* Seam: Dining to Ivory Ribbon */}
                                <path d="M 160 210 C 190 270, 230 300, 390 220" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.2" opacity="0.8" />
                                
                                {/* Seam: Spa to Ivory Ribbon */}
                                <path d="M 160 210 C 170 260, 210 320, 250 320 C 220 340, 210 370, 240 410 C 270 460, 330 510, 390 530" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.2" opacity="0.8" />
                                
                                {/* Seam: Pool to Ivory Ribbon */}
                                <path d="M 240 410 L 390 420" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="1.2" opacity="0.8" />

                                {/* CURATED OFFERS CONTENT (Positioned inside the woven ivory ribbon) */}
                                <foreignObject x="220" y="260" width="160" height="150">
                                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4px', fontFamily: 'var(--font-sans)' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--color-champagne-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne-gold)', marginBottom: '4px', background: 'rgba(197, 168, 128, 0.08)' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"></path>
                                                <circle cx="7" cy="7" r="1.5" fill="currentColor"></circle>
                                            </svg>
                                        </div>
                                        <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-charcoal)', marginBottom: '2px', textTransform: 'uppercase' }}>
                                            CURATED OFFERS
                                        </div>
                                        <div style={{ fontSize: '7.5px', lineHeight: '1.35', color: 'var(--color-charcoal-light)', maxWidth: '120px' }}>
                                            Handpicked deals from trusted partners across leisure.
                                        </div>
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>

                    {/* 3. Mobile Trust List (Positioned cleanly below the hero stage) */}
                    <div className="hero-mobile-trust-list">
                        <div className="mobile-trust-row">
                            <div className="mobile-trust-left">
                                <div className="mobile-trust-icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <div>
                                    <div className="mobile-trust-title">TRUSTED PARTNERS</div>
                                    <div className="mobile-trust-sub">Curated luxury with 5-star hotel &amp; resort partners</div>
                                </div>
                            </div>
                            <div className="mobile-trust-arrow">&rsaquo;</div>
                        </div>

                        <div className="mobile-trust-row">
                            <div className="mobile-trust-left">
                                <div className="mobile-trust-icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                </div>
                                <div>
                                    <div className="mobile-trust-title">WIDE DESTINATIONS</div>
                                    <div className="mobile-trust-sub">Top verified spots across 50+ Indian cities</div>
                                </div>
                            </div>
                            <div className="mobile-trust-arrow">&rsaquo;</div>
                        </div>

                        <div className="mobile-trust-row">
                            <div className="mobile-trust-left">
                                <div className="mobile-trust-icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                </div>
                                <div>
                                    <div className="mobile-trust-title">MORE VALUE</div>
                                    <div className="mobile-trust-sub">Save more on every stay, dinner &amp; holiday pass</div>
                                </div>
                            </div>
                            <div className="mobile-trust-arrow">&rsaquo;</div>
                        </div>

                        <div className="mobile-trust-row">
                            <div className="mobile-trust-left">
                                <div className="mobile-trust-icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                                </div>
                                <div>
                                    <div className="mobile-trust-title">PRIVILEGE HELP</div>
                                    <div className="mobile-trust-sub">24/7 dedicated concierge assistance</div>
                                </div>
                            </div>
                            <div className="mobile-trust-arrow">&rsaquo;</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED EXPERIENCES */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <div className="hero-eyebrow" style={{ marginBottom: '8px' }}>CURATED MEMBERSHIPS</div>
                            <h2 className="section-title">Featured Experiences</h2>
                        </div>
                        <Link href="/deals" className="link-arrow">View All Deals <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                    
                    <div className="deal-grid">
                        {/* Card 1 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 1).webp" 
                                    alt="Wyndham Garden Sonipat Murthal Five Star Membership" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">5-STAR VIP</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Sonipat Murthal</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Wyndham Garden Hotel Membership</h3>
                                <div className="deal-partner">Wyndham Garden</div>
                                <div className="deal-price-row">
                                    <div className="price-original">Value ₹45k</div>
                                    <div className="price-deal">Exclusive Rates</div>
                                </div>
                                <Link href="/deals/wyndham-garden-sonipat-murthal" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 2).webp" 
                                    alt="Hotel SK Premium Membership Ghaziabad" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">COMPLIMENTARY NIGHT</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Ghaziabad</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Hotel SK Premium Membership</h3>
                                <div className="deal-partner">Hotel SK Premium</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹40,000</div>
                                    <div className="price-deal">₹5,000</div>
                                </div>
                                <Link href="/deals/hotel-sk-premium-ghaziabad" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 3).webp" 
                                    alt="Oren Kasauli Membership Card" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">2 NIGHTS FREE</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Kasauli</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Oren Kasauli Membership Card</h3>
                                <div className="deal-partner">Oren Kasauli</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹50,000</div>
                                    <div className="price-deal">₹10,000</div>
                                </div>
                                <Link href="/deals/oren-kasauli-membership" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 4).webp" 
                                    alt="Atma Yog Luxury Manor Manali" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">3 NIGHTS FREE</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Manali</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Atma Yog Luxury Manor</h3>
                                <div className="deal-partner">Atma Yog Manor</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹50,000</div>
                                    <div className="price-deal">₹8,999</div>
                                </div>
                                <Link href="/deals/atmayog-luxury-manor-manali" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 5).webp" 
                                    alt="The White Flower Resorts Mussoorie & Corbett" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">2 DESTINATIONS</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Mussoorie &amp; Corbett</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">The White Flower Resorts</h3>
                                <div className="deal-partner">The White Flower</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹50,000</div>
                                    <div className="price-deal">₹7,999</div>
                                </div>
                                <Link href="/deals/white-flower-resorts-mussoorie-corbett" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 6).webp" 
                                    alt="Rangmanch Farms Day Outing" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">80+ ACTIVITIES</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Gurgaon</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Rangmanch Farms Day Outing</h3>
                                <div className="deal-partner">Rangmanch Farms</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹1,500</div>
                                    <div className="price-deal">&lt; ₹1,500</div>
                                </div>
                                <Link href="/deals/rangmanch-farms-gurgaon" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW DRS DEALS WORKS */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="section-header text-center justify-center">
                        <h2 className="section-title" style={{ marginBottom: '8px' }}>How It Works</h2>
                        <p className="text-body-large">A seamless 4-step concierge journey to your next luxury escape.</p>
                    </div>
                    
                    <CubeSteps />
                </div>
            </section>

            {/* WHY DRS DEALS EXISTS */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <div className="hero-eyebrow" style={{ marginBottom: '12px' }}>OUR 23-YEAR HERITAGE</div>
                            <h2 className="section-title" style={{ marginBottom: '24px' }}>Why DRS Deals Exists</h2>
                            <p className="text-body-large" style={{ marginBottom: '24px' }}>
                                Founded in 2003, DRS Deals has spent over two decades pioneering premium hospitality memberships across India, connecting more than 2 million happy guests with 1,000+ luxury partner venues.
                            </p>
                            <p className="text-body-small text-charcoal-light" style={{ marginBottom: '32px', lineHeight: 1.7 }}>
                                We negotiate directly with 5-star hotels, luxury resorts, gourmet restaurants, and entertainment destinations across 50+ cities, securing exclusive privileges while delivering over ₹1 Billion in savings to our discerning members.
                            </p>
                            <Link href="/about" className="btn btn-outline">Read Our 23-Year Story</Link>
                        </div>
                        <div className="story-visual">
                            <img 
                                src="/images/webp/Why DRS Deals Exists Section.webp" 
                                alt="Guests enjoying a premium vacation" 
                                className="rounded-lg shadow-soft" 
                                width={560} 
                                height={400} 
                                loading="lazy" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST GRID */}
            <section className="section-padding bg-white">
                <div className="container text-center">
                    <h2 className="section-title" style={{ marginBottom: '48px' }}>Why Guests Choose DRS Deals</h2>
                    <HoneycombFeatures />
                </div>
            </section>

            {/* PARTNER SPOTLIGHT */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <h3 className="text-eyebrow" style={{ marginBottom: '24px', textAlign: 'center' }}>Featured Destination Spotlight</h3>
                    <div className="spotlight-card rounded-lg shadow-soft">
                        <img 
                            src="/images/webp/Featured Experiences Section (Card 1).webp" 
                            alt="Wyndham Garden Sonipat Murthal" 
                            className="spotlight-img" 
                            width={1140} 
                            height={450} 
                            loading="lazy"
                            style={{ objectPosition: 'center 60%' }}
                        />
                        <div className="spotlight-content bg-white">
                            <h2 className="section-title" style={{ marginBottom: '16px' }}>Wyndham Garden Sonipat Murthal</h2>
                            <p className="text-body-large" style={{ marginBottom: '24px' }}>Five Star Hotel & Resort</p>
                            <p className="text-body-small text-charcoal-light" style={{ marginBottom: '32px', lineHeight: 1.7 }}>
                                Enjoy exclusive member rates and privileges for luxury stays, gourmet dining, and leisure escapes at Wyndham Garden Sonipat Murthal, Haryana.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <Link href="/deals/wyndham-garden-sonipat-murthal" className="btn btn-primary">View Details & Booking</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORIES & CITIES */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Explore by Category</h2>
                    </div>
                    
                    <div className="category-grid">
                        <Link href="/experiences/resorts" className="category-card">
                            <img 
                                src="/images/webp/Explore by Category Section (Resorts Category Tile).webp" 
                                alt="Resorts" 
                                width={360} 
                                height={240} 
                                loading="lazy" 
                            />
                            <div className="category-overlay">
                                <h3 className="category-title">Resorts</h3>
                            </div>
                        </Link>
                        <Link href="/experiences/dining" className="category-card">
                            <img 
                                src="/images/webp/Explore by Category Section (Dining Category Tile).webp" 
                                alt="Dining" 
                                width={360} 
                                height={240} 
                                loading="lazy" 
                            />
                            <div className="category-overlay">
                                <h3 className="category-title">Dining</h3>
                            </div>
                        </Link>
                        <Link href="/experiences/spa" className="category-card">
                            <img 
                                src="/images/webp/Explore by Category Section (Spa Category Tile).webp" 
                                alt="Spa &amp; Wellness" 
                                width={360} 
                                height={240} 
                                loading="lazy" 
                            />
                            <div className="category-overlay">
                                <h3 className="category-title">Spa &amp; Wellness</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="section-header" style={{ marginTop: '64px' }}>
                        <h2 className="section-title">Serving 50+ Cities Across India</h2>
                        <Link href="/destinations" className="link-arrow">View All Locations <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                    
                    <div className="cities-grid">
                        <Link href="/destinations/delhi" className="city-card">
                            <img 
                                src="/images/webp/Cities We Serve Section (Delhi NCR Tile).webp" 
                                alt="Delhi NCR" 
                                width={260} 
                                height={180} 
                                loading="lazy" 
                            />
                            <div className="city-name">Delhi NCR</div>
                        </Link>
                        <Link href="/destinations/jaipur" className="city-card">
                            <img 
                                src="/images/webp/Cities We Serve Section (Jaipur Tile).webp" 
                                alt="Jaipur" 
                                width={260} 
                                height={180} 
                                loading="lazy" 
                            />
                            <div className="city-name">Jaipur</div>
                        </Link>
                        <Link href="/destinations/mumbai" className="city-card">
                            <img 
                                src="/images/webp/Cities We Serve Section (Punjab Tile).webp" 
                                alt="Mumbai" 
                                width={260} 
                                height={180} 
                                loading="lazy" 
                            />
                            <div className="city-name">Mumbai</div>
                        </Link>
                        <Link href="/destinations" className="city-card">
                            <img 
                                src="/images/webp/Cities We Serve Section (Ahmedabad Tile).webp" 
                                alt="All Locations" 
                                width={260} 
                                height={180} 
                                loading="lazy" 
                            />
                            <div className="city-name">All 50+ Locations</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* POPULAR SEARCHES & FEATURED COLLECTIONS */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="split-grid">
                        <div>
                            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Popular Searches</h3>
                            <ul className="link-list">
                                <li><Link href="/search?q=water+parks">Water parks near Delhi NCR</Link></li>
                                <li><Link href="/search?q=weekend+resorts">Weekend luxury resorts</Link></li>
                                <li><Link href="/search?q=luxury+spa">Luxury wellness spas</Link></li>
                                <li><Link href="/search?q=dining">Fine dining chef tasting menus</Link></li>
                                <li><Link href="/search?q=farmhouse">Farmhouse day retreats</Link></li>
                                <li><Link href="/search?q=murthal">Sonipat Murthal hotel stays</Link></li>
                                <li><Link href="/search?q=corporate">Corporate retreats &amp; events</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Featured Collections</h3>
                            <div className="collection-list">
                                <Link href="/collections/weekend" className="collection-item">
                                    <img 
                                        src="/images/webp/Featured Collections Section (Weekend Escapes Thumbnail).webp" 
                                        alt="Weekend Escapes" 
                                        width={80} 
                                        height={80} 
                                        loading="lazy" 
                                    />
                                    <span>Weekend Escapes</span>
                                </Link>
                                <Link href="/collections/couples" className="collection-item">
                                    <img 
                                        src="/images/webp/Featured Collections Section (Romantic Getaways Thumbnail).webp" 
                                        alt="Romantic Getaways" 
                                        width={80} 
                                        height={80} 
                                        loading="lazy" 
                                    />
                                    <span>Romantic Getaways</span>
                                </Link>
                                <Link href="/collections/family" className="collection-item">
                                    <img 
                                        src="/images/webp/Featured Collections Section (Family Fun Thumbnail).webp" 
                                        alt="Family Fun" 
                                        width={80} 
                                        height={80} 
                                        loading="lazy" 
                                    />
                                    <span>Family Outings</span>
                                </Link>
                                <Link href="/collections/corporate" className="collection-item">
                                    <img 
                                        src="/images/webp/Featured Collections Section (Luxury Dining Thumbnail).webp" 
                                        alt="Corporate Experiences" 
                                        width={80} 
                                        height={80} 
                                        loading="lazy" 
                                    />
                                    <span>Corporate Experiences</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SAVINGS CALCULATOR */}
            <SavingsCalculator />

            {/* BUSINESS PARTNER SECTION */}
            <section className="section-padding bg-ivory text-charcoal text-center">
                <div className="container">
                    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                        <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '12px', color: 'var(--color-champagne-gold)' }}>
                            VENUE PARTNERSHIPS
                        </div>
                        <h2 className="section-title text-charcoal" style={{ marginBottom: '20px' }}>Join 1,000+ Premium Venue Partners</h2>
                        <p className="text-body-large text-charcoal-light" style={{ marginBottom: '32px', lineHeight: 1.7 }}>
                            Partner with DRS Deals to feature your resort, fine dining venue, or leisure property before an audience of over 2 million discerning guests.
                        </p>
                        <Link href="/partners" className="btn btn-primary">Discuss a Partnership</Link>
                    </div>
                </div>
            </section>

            {/* VERIFIED STATS GRID */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="stats-cards-grid">
                        <div className="stat-card">
                            <div className="stat-number">23 Years</div>
                            <div className="stat-label">Hospitality Legacy</div>
                            <div className="stat-desc">Curating luxury experiences since 2003.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">2M+</div>
                            <div className="stat-label">Happy Guests</div>
                            <div className="stat-desc">Members enjoying premium privileges.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">1,000+</div>
                            <div className="stat-label">Venue Partners</div>
                            <div className="stat-desc">Top-tier hotels, resorts &amp; dining.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Cities Covered</div>
                            <div className="stat-desc">Extensive network across India.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">₹1B+</div>
                            <div className="stat-label">Value Delivered</div>
                            <div className="stat-desc">Exclusive savings for our members.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">4.9 ★</div>
                            <div className="stat-label">Member Rating</div>
                            <div className="stat-desc">Consistently top-rated service.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GUIDES */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <div className="section-header text-center justify-center">
                        <h2 className="section-title">The Curated Guide</h2>
                    </div>
                    <div className="guides-grid">
                        <div className="guide-card">
                            <div className="guide-visual">
                                <img 
                                    src="/images/webp/The Curated Guide Section (Guide 1 Thumbnail).webp" 
                                    alt="Resort guide" 
                                    width={320} 
                                    height={200} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="guide-content">
                                <h3 className="guide-title">Top 10 Resorts Near Delhi NCR for a Quick Escape</h3>
                                <p className="guide-desc text-body-small text-charcoal-light">Our editors review popular weekend resort properties within a 4-hour drive.</p>
                                <Link href="/guides/top-10-resorts" className="btn btn-outline" style={{ marginTop: '16px', width: '100%' }}>Read Guide</Link>
                            </div>
                        </div>
                        <div className="guide-card">
                            <div className="guide-visual">
                                <img 
                                    src="/images/webp/The Curated Guide Section (Guide 2 Thumbnail).webp" 
                                    alt="Fine dining guide" 
                                    width={320} 
                                    height={200} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="guide-content">
                                <h3 className="guide-title">The Fine Dining Etiquette &amp; Value Maximiser</h3>
                                <p className="guide-desc text-body-small text-charcoal-light">How to make the most of 5-star hotel dining passes and chef tasting menus.</p>
                                <Link href="/guides/fine-dining" className="btn btn-outline" style={{ marginTop: '16px', width: '100%' }}>Read Guide</Link>
                            </div>
                        </div>
                        <div className="guide-card">
                            <div className="guide-visual">
                                <img 
                                    src="/images/webp/The Curated Guide Section (Guide 3 Thumbnail).webp" 
                                    alt="Water park guide" 
                                    width={320} 
                                    height={200} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="guide-content">
                                <h3 className="guide-title">Water Parks vs Theme Parks: Ultimate Family Outing</h3>
                                <p className="guide-desc text-body-small text-charcoal-light">Helpful tips before booking your family weekend passes and water park visits.</p>
                                <Link href="/guides/family-parks" className="btn btn-outline" style={{ marginTop: '16px', width: '100%' }}>Read Guide</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="newsletter-card rounded-lg bg-ivory">
                        <div className="newsletter-content">
                            <div className="hero-eyebrow" style={{ marginBottom: '8px' }}>PRIVATE ACCESS</div>
                            <h2 className="section-title" style={{ marginBottom: '12px' }}>Join the Privileged Circle</h2>
                            <p className="text-body-large text-charcoal-light" style={{ marginBottom: '24px' }}>Get curated updates on new resort memberships, venue spotlights, and seasonal privileges.</p>
                            <NewsletterForm />
                        </div>
                        <div className="newsletter-visual">
                            <img 
                                src="/images/webp/Newsletter - App Promo Section.webp" 
                                alt="DRS Deals preview" 
                                className="rounded-lg shadow-soft" 
                                width={450} 
                                height={320} 
                                loading="lazy" 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
