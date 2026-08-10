import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Explore All Offers & Experiences | DRS Deals',
    description: 'Search and discover luxury resort stays, fine dining vouchers, and family entertainment passes across India.',
};

export default function ExplorePage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated Search</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Explore Experiences
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Filter by destination, category, price range, and experience type.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={9} title="Explore Offers &amp; Memberships" />
        </main>
    );
}
