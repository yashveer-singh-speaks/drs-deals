'use client';

import React from 'react';
import Image from 'next/image';
import { PartnerBrand } from '@/data/partners';

interface CategoryMarqueeProps {
    partners: PartnerBrand[];
    categoryTitle: string;
    totalCount?: number;
}

export default function CategoryMarquee({ partners, categoryTitle, totalCount }: CategoryMarqueeProps) {
    if (!partners || partners.length === 0) return null;

    // Duplicate list to achieve a seamless, continuous infinite scroll marquee loop
    const marqueeItems = [...partners, ...partners];

    // Constant speed across all category pages:
    // Each item takes 5 seconds (~40px/second constant velocity), guaranteeing that regardless of whether
    // a category has 14, 17, 28, or 68 logos, the logos glide at the exact same calm, readable speed,
    // comfortably slower than the previous rush on Restaurants & Bars.
    const secondsPerItem = 5;
    const animationDuration = partners.length * secondsPerItem;

    return (
        <section className="category-marquee-section" aria-label={`Previous ${categoryTitle} Brands and Partners`}>
            <div className="container" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
                            TRUSTED HOSPITALITY PORTFOLIO
                        </div>
                        <h2 style={{ fontSize: '1.65rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', margin: 0 }}>
                            {categoryTitle} Brands We&apos;ve Worked With
                        </h2>
                    </div>
                    {totalCount && (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(188, 144, 68, 0.1)', border: '1px solid rgba(188, 144, 68, 0.3)', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27ae60', display: 'inline-block' }}></span>
                            <span>{totalCount}+ Verified Brand Partnerships</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Horizontal Moving Logo Strip (Right to Left at constant speed) */}
            <div className="category-marquee-viewport">
                <div
                    className="category-marquee-track category-marquee-scroll-rtl"
                    style={{ animationDuration: `${animationDuration}s` }}
                >
                    {marqueeItems.map((partner, index) => (
                        <div key={`${partner.id}-${index}`} className="category-marquee-item">
                            <div className="category-marquee-logo-card">
                                <div className="category-marquee-logo-wrap">
                                    <img
                                        src={partner.logoSrc}
                                        alt={`${partner.name} logo`}
                                        className="category-marquee-logo-img"
                                        loading="lazy"
                                        width={84}
                                        height={84}
                                    />
                                </div>
                                <div className="category-marquee-name" title={partner.name}>
                                    {partner.name}
                                </div>
                                {partner.location && (
                                    <div className="category-marquee-location" title={partner.location}>
                                        {partner.location}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mandated Client Message */}
            <div className="container" style={{ marginTop: '24px' }}>
                <div className="category-marquee-notice">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-champagne-gold)', flexShrink: 0 }}>
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <p style={{ margin: 0, fontSize: '0.96rem', fontWeight: 500, color: 'var(--color-charcoal)', lineHeight: 1.6, textAlign: 'center' }}>
                            Brands we’ve worked with. For currently available offers, explore the latest deals below or contact DRS Deals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
