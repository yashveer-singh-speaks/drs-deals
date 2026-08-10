import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Weekend Escapes & Drive-To Resorts | DRS Deals',
    description: 'Quick weekend resort escapes within short driving distance from Delhi NCR, Jaipur, and Mumbai.',
};

export default function WeekendCollectionPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Short Getaways</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Weekend Escapes
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Premium drive-to resorts and quick escapes for effortless weekend relaxation.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Weekend Escape Offer Drops" />
        </main>
    );
}
