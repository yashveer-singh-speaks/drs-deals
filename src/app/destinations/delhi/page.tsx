import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getDealsByLocation, getAllDeals } from '@/data/deals';

export const metadata: Metadata = {
    title: 'Delhi NCR Luxury Resort Deals & Dining Passes | DRS Deals',
    description: 'Discover curated leisure resort packages, water park day passes, and fine dining vouchers across Delhi, Gurgaon, Noida, and Murthal.',
};

export default function DelhiDestinationPage() {
    const regionalDeals = getDealsByLocation('Delhi').concat(getDealsByLocation('Haryana'), getDealsByLocation('Ghaziabad'));
    const displayDeals = regionalDeals.length > 0 ? Array.from(new Set(regionalDeals)) : getAllDeals();

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        CAPITAL REGION HUB
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Delhi NCR Offers &amp; Experience Drops
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Verified leisure resort vouchers, luxury hotel memberships, and family entertainment passes in Delhi, Gurugram, Ghaziabad &amp; Murthal.
                    </p>
                </div>

                {/* Destination Editorial Overview */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '16px' }}>About Delhi NCR Curated Deals</h2>
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.7, margin: 0 }}>
                        Delhi NCR remains the central hub for DRS Deals' hospitality partnership network. From 5-star hotel memberships in Sonipat Murthal to village-themed day outings in Gurgaon and dining memberships in Ghaziabad, our curated vouchers provide verified savings with zero hidden conditions.
                    </p>
                </div>

                {/* Real Deals Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {displayDeals.map((deal) => (
                        <div key={deal.id} className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '28px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div className="skeleton-box" style={{ height: '180px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--color-charcoal-light)', border: '1px solid var(--color-stone)' }}>
                                    📷 {deal.propertyName} Placeholder
                                </div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
                                    {deal.categoryLabel}
                                </div>
                                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                                    {deal.propertyName}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', marginBottom: '16px' }}>
                                    📍 {deal.location}
                                </p>
                                <div style={{ padding: '12px 16px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', marginBottom: '20px' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-light)', textTransform: 'uppercase' }}>Member Rate</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)' }}>
                                        {deal.price}
                                    </div>
                                </div>
                            </div>
                            <Link href={`/deals/${deal.slug}`} className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>
                                View Details &amp; Booking
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
