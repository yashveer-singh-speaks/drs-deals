import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Exclusive Deals & Discount Vouchers | DRS Deals',
    description: 'Explore verified discounts on luxury stays, dining passes, water parks, and spa treatments.',
};

export default function DealsPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Verified Offers</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        All Active Deals
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Discover 20% to 50% savings on premier leisure, stays, and dining experiences.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={9} title="Featured Offer Drops" />
        </main>
    );
}
