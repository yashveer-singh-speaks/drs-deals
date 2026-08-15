import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllDeals } from '@/data/deals';

export const metadata: Metadata = {
    title: 'Explore All Offers & Experiences | DRS Deals',
    description: 'Search and discover luxury resort stays, fine dining passes, water parks, and family entertainment passes across India.',
};

export default function ExplorePage() {
    const deals = getAllDeals();

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        CURATED DISCOVERY
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Explore All Experiences &amp; Memberships
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Discover resort stays, fine dining vouchers, water parks, and family getaways across India.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {deals.map((deal) => (
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
                            <Link href={`/deals/${deal.slug}`} className="btn btn-outline" style={{ textAlign: 'center', width: '100%' }}>
                                View Full Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
