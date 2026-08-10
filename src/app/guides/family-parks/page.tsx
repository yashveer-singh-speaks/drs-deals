import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Best Water Parks for a Family Day Out | DRS Deals Guide',
    description: 'Detailed rankings and tips for family water parks, wave pools, and theme park day passes.',
};

export default function FamilyParksGuidePage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '840px' }}>
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-champagne-gold)', fontWeight: 600, textTransform: 'uppercase' }}>Family &amp; Parks</span>
                    <h1 className="hero-title" style={{ fontSize: '2.5rem', margin: '16px 0 24px 0' }}>Best Water Parks for a Family Day Out</h1>
                    <img src="/images/webp/The Curated Guide Section (Guide 3 Thumbnail).webp" alt="Water Park" style={{ width: '100%', borderRadius: '12px', height: '360px', objectFit: 'cover', marginBottom: '32px' }} />
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '20px' }}>
                        Planning a summer day out with family requires finding venues with clean water filtration, safety-certified slides, and comfortable dining amenities. DRS Deals lists verified water parks across Noida, Gurgaon, Pune, and Jaipur with exclusive family group pass savings.
                    </p>
                    <div style={{ marginTop: '32px' }}>
                        <Link href="/experiences/water-parks" className="btn btn-primary">Explore Water Park Offers</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
