import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Jaipur Palace Resort Stays & Heritage Deals | DRS Deals',
    description: 'Exclusive heritage resort stays, royal dining experiences, and spa packages in Jaipur and Rajasthan at verified discount prices.',
};

export default function JaipurDestinationPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Royal Heritage Hub</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Jaipur &amp; Rajasthan Offers
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Experience royal hospitality, heritage palace stays, and authentic Rajasthani dining privileges.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '16px' }}>About Jaipur Heritage Deals</h2>
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                        Jaipur represents the pinnacle of luxury heritage tourism in India. DRS Deals partners directly with historic havelis, luxury palace hotels, and authentic Rajasthani dining venues across the Pink City to bring members uncompromised luxury stays with exclusive dining inclusions.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Jaipur Heritage Offer Drops" />
        </main>
    );
}
