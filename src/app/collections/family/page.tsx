import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Family Outings & Adventure Passes | DRS Deals',
    description: 'Family daycation packages, water park bundles, and resort passes designed for memorable family moments.',
};

export default function FamilyCollectionPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Family Fun</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Family Outings &amp; Daycations
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Water park packages, resort day passes, and fun-filled family packages.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Family Experience Drops" />
        </main>
    );
}
