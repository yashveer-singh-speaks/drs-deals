import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import SearchClient from './SearchClient';

export const metadata: Metadata = {
    title: 'Search Experiences, Deals & Editorial Guides | DRS Deals',
    description: 'Search across 198+ editorial travel articles, five-star hotel memberships, fine dining passes, and water park packages on DRS Deals.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function SearchPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px', minHeight: '85vh' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        SEARCH &amp; DISCOVERY
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '16px' }}>
                        Find Your Next Luxury Experience
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Explore verified hotel memberships, dining packages, water park passes, and editorial destination guides across India.
                    </p>
                </div>

                <Suspense fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading search catalog...</div>}>
                    <SearchClient />
                </Suspense>
            </div>
        </main>
    );
}
