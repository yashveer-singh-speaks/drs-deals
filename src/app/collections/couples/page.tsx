import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Romantic Getaways & Couples Experiences | DRS Deals',
    description: 'Curated romantic hotel stays, private poolside dining, and couples spa packages at exclusive rates.',
};

export default function CouplesCollectionPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated For Two</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Romantic Getaways
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Luxury palace stays, private candlelight dining, and intimate wellness retreats.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Romantic Experience Drops" />
        </main>
    );
}
