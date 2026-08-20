import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getFeaturedDeals, getAllDeals } from '@/data/deals';

export const metadata: Metadata = {
    title: 'Exclusive Deals & Hotel Memberships | DRS Deals',
    description: 'Explore verified memberships and deals on luxury stays, fine dining, water parks, and resort packages across Delhi NCR, Himachal Pradesh, and Uttarakhand.',
};

export default function DealsPage() {
    const featuredDeals = getFeaturedDeals(); // Returns strictly the 5 specified featured properties
    const allDeals = getAllDeals();

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 56px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        VERIFIED HOTEL &amp; EXPERIENCE MEMBERSHIPS
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '20px' }}>
                        DRS Deals Memberships &amp; Offers
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                        Curated annual memberships, room night packages, buffet certificates, and day outings across premier destinations.
                    </p>
                </div>

                {/* Section 1: Featured Deals (Strictly 5 Specified Properties) */}
                <div style={{ marginBottom: '80px' }}>
                    <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                                HANDPICKED SELECTION
                            </div>
                            <h2 className="section-title" style={{ fontSize: '2.25rem', margin: 0 }}>
                                Featured Memberships
                            </h2>
                        </div>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', margin: 0 }}>
                            5 Premier Hospitality Memberships
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                        {featuredDeals.map((deal) => (
                            <div key={deal.id} className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '28px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    {/* Image Box */}
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
                </div>

                {/* Section 2: All Active Experience Offers & Day Passes */}
                <div>
                    <div style={{ marginBottom: '32px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                            COMPLETE CATALOGUE
                        </div>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', margin: 0 }}>
                            All Active Experiences &amp; Day Outings
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                        {allDeals.map((deal) => (
                            <div key={deal.id} className="bg-white shadow-soft" style={{ borderRadius: '14px', padding: '24px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    {deal.featuredImage ? (
                                        <div style={{ height: '160px', borderRadius: '10px', overflow: 'hidden', marginBottom: '16px', border: '1px solid var(--color-stone)' }}>
                                            <img src={deal.featuredImage} alt={deal.propertyName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    ) : (
                                        <div className="skeleton-box" style={{ height: '160px', borderRadius: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--color-charcoal-light)', border: '1px solid var(--color-stone)' }}>
                                            📷 {deal.propertyName} Placeholder
                                        </div>
                                    )}

                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                                        {deal.categoryLabel}
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '6px' }}>
                                        {deal.propertyName}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginBottom: '12px' }}>
                                        📍 {deal.location}
                                    </p>
                                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '16px' }}>
                                        {deal.price}
                                    </div>
                                </div>

                                <Link href={`/deals/${deal.slug}`} className="btn btn-outline" style={{ textAlign: 'center', width: '100%', fontSize: '0.9rem' }}>
                                    Explore Package
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
