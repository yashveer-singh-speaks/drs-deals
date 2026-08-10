import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Corporate Experiences & Offsite Venues | DRS Deals',
    description: 'B2B venue bookings, team offsite packages, corporate dining privileges, and bulk voucher solutions.',
};

export default function CorporateCollectionPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>B2B &amp; Offsites</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Corporate Experiences
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Tailored team outings, corporate dining vouchers, and offsite resort packages.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Corporate Offer Drops" />
        </main>
    );
}
