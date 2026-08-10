import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Luxury Resorts & Hotels Vouchers | DRS Deals',
    description: 'Exclusive 5-star resort packages, heritage palace stays, and weekend hotel deals with verified dining and breakfast inclusions.',
};

export default function ResortsExperiencePage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated Stays</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Resorts &amp; Luxury Hotels
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Discover 5-star resort escapes, heritage stays, and boutique hotel vouchers at exclusive rates.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Featured Resort &amp; Hotel Offer Drops" />
        </main>
    );
}
