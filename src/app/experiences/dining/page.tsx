import React from 'react';
import type { Metadata } from 'next';
import OfferSkeletonGrid from '@/components/OfferSkeletonGrid';

export const metadata: Metadata = {
    title: 'Fine Dining Vouchers & Gourmet Tasting Menus | DRS Deals',
    description: 'Exclusive 25%-40% discount passes on 5-star hotel buffets, chef’s tasting menus, and luxury dining across India.',
};

export default function DiningPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Culinary Privileges</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Fine Dining &amp; Gourmet Pass
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Verified 5-star hotel dining vouchers, tasting menus, and exclusive beverage inclusions.
                    </p>
                </div>
            </div>

            <OfferSkeletonGrid count={6} title="Fine Dining Offer Drops" />
        </main>
    );
}
