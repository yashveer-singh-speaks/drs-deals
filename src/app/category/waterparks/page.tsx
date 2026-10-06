import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getDealsByCategory } from '@/data/deals';
import { getPartnersByCategory, CATEGORY_METRICS } from '@/data/partners';
import CategoryMarquee from '@/components/CategoryMarquee';
import PartnerGridGallery from '@/components/PartnerGridGallery';

export const metadata: Metadata = {
    title: 'Waterparks Passes & Tickets | DRS Deals',
    description: 'Explore 14+ premier water park partnerships across Delhi NCR, Gurugram, Sonipat, and beyond including Mojoland and Mera Gaon Mera Desh with full splash zones access.',
};

export default function WaterparksCategoryPage() {
    const deals = getDealsByCategory('waterparks');
    const partners = getPartnersByCategory('waterparks');
    const metrics = CATEGORY_METRICS['waterparks'];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '820px', margin: '0 auto 40px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        AQUATIC ADVENTURES &amp; SPLASH ZONES
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3.1rem', marginBottom: '18px' }}>
                        Waterparks
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                        {metrics.description}
                    </p>
                </div>
            </div>

            {/* Horizontal Moving Logo Strip (Continuous Left to Right) */}
            <CategoryMarquee
                partners={partners}
                categoryTitle="Waterparks"
                totalCount={metrics.count}
            />

            {/* Currently Available Deals Section */}
            <div className="container" style={{ marginTop: '56px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                    <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
                            SUMMER SPLASH &amp; COMBO PASSES
                        </div>
                        <h2 className="section-title" style={{ fontSize: '2.2rem', margin: 0 }}>
                            Currently Available Waterpark Deals ({deals.length})
                        </h2>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', margin: 0 }}>
                        Verified passes with water slide &amp; wave pool access
                    </p>
                </div>

                {deals.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                        {deals.map((deal) => (
                            <div key={deal.id} className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '28px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    {deal.featuredImage ? (
                                        <div style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', border: '1px solid var(--color-stone)' }}>
                                            <img src={deal.featuredImage} alt={deal.propertyName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    ) : (
                                        <div className="skeleton-box" style={{ height: '200px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--color-charcoal-light)', border: '1px solid var(--color-stone)' }}>
                                            📷 {deal.propertyName} Image Placeholder
                                        </div>
                                    )}

                                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
                                        {deal.categoryLabel}
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px', lineHeight: 1.3 }}>
                                        {deal.propertyName}
                                    </h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', marginBottom: '16px' }}>
                                        📍 {deal.location}
                                    </p>

                                    <div style={{ padding: '16px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', marginBottom: '20px' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-light)', textTransform: 'uppercase' }}>Pass Rate</div>
                                        <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)' }}>
                                            {deal.price}
                                        </div>
                                        {deal.originalPrice && (
                                            <div style={{ fontSize: '0.85rem', color: '#999', textDecoration: 'line-through', marginTop: '2px' }}>
                                                MRP: {deal.originalPrice}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <Link href={`/deals/${deal.slug}`} className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>
                                    View Waterpark Pass
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--color-white)', borderRadius: '16px', border: '1px solid var(--color-stone)' }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-charcoal-light)', marginBottom: '20px' }}>
                            Waterpark season passes are updating. Contact our concierge desk for group outing discounts.
                        </p>
                        <Link href="/contact" className="btn btn-primary">Contact Concierge Desk</Link>
                    </div>
                )}
            </div>

            {/* Responsive Grid Gallery Layout of All 14 Previous Waterpark Partners */}
            <PartnerGridGallery
                partners={partners}
                categoryTitle="Waterparks"
                categoryCount={metrics.count}
            />
        </main>
    );
}
