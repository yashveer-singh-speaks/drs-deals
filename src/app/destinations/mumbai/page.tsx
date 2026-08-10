import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Mumbai Luxury Seafront Stays & Fine Dining Deals | DRS Deals',
    description: 'Curated seafront hotel stays, gourmet restaurant passes, and luxury spa retreat vouchers across Mumbai and Pune.',
};

export default function MumbaiDestinationPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Western Coastal Hub</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Mumbai &amp; Maharashtra Offers
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Coastal resort packages, Michelin-standard dining passes, and exclusive wellness retreats.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '16px' }}>About Mumbai Experience Deals</h2>
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                        From South Mumbai's iconic sea-facing properties to quiet weekend villas in Lonavala and Alibaug, DRS Deals negotiates direct privileges for members looking for uncompromised luxury escapes along India's western coast.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Mumbai Upcoming Offer Drops" />
        </main>
    );
}
