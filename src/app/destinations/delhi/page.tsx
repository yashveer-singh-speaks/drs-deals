import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Delhi NCR Luxury Resort Deals & Dining Passes | DRS Deals',
    description: 'Discover curated leisure resort packages, water park day passes, and fine dining vouchers across Delhi, Gurgaon, Noida, and Faridabad.',
};

export default function DelhiDestinationPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Capital Region Hub</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Delhi NCR Offers &amp; Experience Drops
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Verified leisure resort vouchers, luxury spa retreats, and family entertainment passes in Delhi, Gurugram, Noida &amp; Greater Noida.
                    </p>
                </div>

                {/* Destination Editorial Overview */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '16px' }}>About Delhi NCR Curated Deals</h2>
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                        Delhi NCR remains the central hub for DRS Deals' hospitality partnership network. From heritage dining venues near Lutyens Delhi to expansive 5-star golf resorts along the Aravalli hills in Gurgaon and world-class amusement parks in Noida, our curated vouchers provide 20% to 50% verified savings with zero hidden conditions.
                    </p>
                </div>
            </div>

            {/* Skeleton Placeholders for Offers */}
            <OfferSkeletonGrid count={6} title="Delhi NCR Upcoming Deal Drops" />
        </main>
    );
}
