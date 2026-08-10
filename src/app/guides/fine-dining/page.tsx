import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The Ultimate Guide to Fine Dining in Mumbai | DRS Deals Guide',
    description: 'Curated guide to five-star hotel buffets, chef’s tasting menus, and luxury culinary passes in Mumbai.',
};

export default function FineDiningGuidePage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '840px' }}>
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-champagne-gold)', fontWeight: 600, textTransform: 'uppercase' }}>Fine Dining</span>
                    <h1 className="hero-title" style={{ fontSize: '2.5rem', margin: '16px 0 24px 0' }}>The Ultimate Guide to Fine Dining in Mumbai</h1>
                    <img src="/images/webp/The Curated Guide Section (Guide 2 Thumbnail).webp" alt="Fine Dining" style={{ width: '100%', borderRadius: '12px', height: '360px', objectFit: 'cover', marginBottom: '32px' }} />
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '20px' }}>
                        Mumbai's culinary scene is a vibrant blend of historical luxury and contemporary gastronomy. From sea-facing dining rooms in Colaba to modern Asian eateries in BKC, DRS Deals provides exclusive 25% to 40% savings on 5-star hotel buffets and chef's tasting menus.
                    </p>
                    <div style={{ marginTop: '32px' }}>
                        <Link href="/experiences/dining" className="btn btn-primary">Explore Dining Offers</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
