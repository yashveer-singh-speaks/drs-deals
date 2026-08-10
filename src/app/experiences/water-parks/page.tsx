import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Water Parks & Family Entertainment Deals | DRS Deals',
    description: 'Save up to 50% on family water park passes, wave pools, theme parks, and weekend adventure passes.',
};

export default function WaterParksPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Family Entertainment</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Water Parks &amp; Theme Parks
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Guaranteed discounts on premier water parks, wave pools, and family day-out vouchers.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Water Park &amp; Entertainment Drops" />
        </main>
    );
}
