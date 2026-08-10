import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Spa & Wellness Vouchers | DRS Deals',
    description: 'Save up to 40% on Ayurvedic massages, luxury hotel spa retreats, and holistic wellness therapies.',
};

export default function SpaPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Wellness Escapes</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Spa &amp; Wellness Retreats
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Exclusive couples spa therapies, holistic Ayurvedic massages, and wellness day passes.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Spa &amp; Wellness Offer Drops" />
        </main>
    );
}
