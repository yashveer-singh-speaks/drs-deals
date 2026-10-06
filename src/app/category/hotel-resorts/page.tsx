import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getDealsByCategory } from '@/data/deals';
import { getPartnersByCategory, CATEGORY_METRICS } from '@/data/partners';
import CategoryMarquee from '@/components/CategoryMarquee';
import PartnerGridGallery from '@/components/PartnerGridGallery';

export const metadata: Metadata = {
    title: 'Hotel & Resorts Memberships & Stays | DRS Deals',
    description: 'Explore 28+ premier 5-star hotel and resort partnerships across Delhi NCR, Kasauli, Manali, and Corbett with verified stays and dining inclusions.',
};

export default function HotelResortsCategoryPage() {
    const deals = getDealsByCategory('hotel-resorts');
    const partners = getPartnersByCategory('hotel-resorts');
    const metrics = CATEGORY_METRICS['hotel-resorts'];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '820px', margin: '0 auto 40px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        LUXURY STAYS &amp; RESORTS DIRECTORY
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3.1rem', marginBottom: '18px' }}>
                        Hotel &amp; Resorts
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                        {metrics.description}
                    </p>
                </div>
            </div>

            {/* Horizontal Moving Logo Strip (Continuous Left to Right) */}
            <CategoryMarquee
                partners={partners}
                categoryTitle="Hotel & Resorts"
                totalCount={metrics.count}
            />

            {/* Currently Available Deals Section */}
            <div className="container" style={{ marginTop: '56px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                    <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>
                            EXCLUSIVE MEMBER RATES
                        </div>
                        <h2 className="section-title" style={{ fontSize: '2.2rem', margin: 0 }}>
                            Currently Available Hotel &amp; Resort Deals ({deals.length})
                        </h2>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', margin: 0 }}>
                        All offers verified with property management
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
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-light)', textTransform: 'uppercase' }}>Member Price</div>
                                        <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)' }}>
                                            {deal.price}
                                        </div>
                                        {deal.estimatedValue && (
                                            <div style={{ fontSize: '0.85rem', color: '#27ae60', fontWeight: 600, marginTop: '2px' }}>
                                                Benefit Value: {deal.estimatedValue}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <Link href={`/deals/${deal.slug}`} className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>
                                    View Membership Details
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--color-white)', borderRadius: '16px', border: '1px solid var(--color-stone)' }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-charcoal-light)', marginBottom: '20px' }}>
                            Currently curated deals are updating for this season. Contact our concierge desk for direct property bookings.
                        </p>
                        <Link href="/contact" className="btn btn-primary">Contact Concierge Desk</Link>
                    </div>
                )}
            </div>

            {/* Responsive Grid Gallery Layout of All Previous Brand Clients */}
            <PartnerGridGallery
                partners={partners}
                categoryTitle="Hotel & Resorts"
                categoryCount={metrics.count}
            />
        </main>
    );
}
