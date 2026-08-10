import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Private Farmhouses & Pool Estates | DRS Deals',
    description: 'Book private pool farmhouses, luxury estate stays, and event venues in Gurugram, Chattarpur, and Noida.',
};

export default function FarmhousesPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Private Estates</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Farmhouses &amp; Pool Villas
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Exclusive private pool rentals for family gatherings, celebrations, and corporate retreats.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Private Farmhouse Offer Drops" />
        </main>
    );
}
