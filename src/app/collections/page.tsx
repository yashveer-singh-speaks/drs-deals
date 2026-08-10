import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Curated Collections & Seasonal Themes | DRS Deals',
    description: 'Explore tailored collections for Romantic Getaways, Family Outings, Weekend Escapes, and Corporate Retreats.',
};

export default function CollectionsOverviewPage() {
    const collections = [
        {
            title: 'Romantic Getaways',
            slug: 'couples',
            img: '/images/webp/Featured Collections Section (Romantic Getaways Thumbnail).webp',
            desc: 'Private candlelight dinners, luxury spa suites, and secluded palace stays curated for couples.',
        },
        {
            title: 'Family Outings',
            slug: 'family',
            img: '/images/webp/Featured Collections Section (Family Fun Thumbnail).webp',
            desc: 'Action-packed water park passes, resort daycations, and theme park group packages for all ages.',
        },
        {
            title: 'Weekend Escapes',
            slug: 'weekend',
            img: '/images/webp/Featured Collections Section (Weekend Escapes Thumbnail).webp',
            desc: 'Short drive-to luxury resort escapes within 2 to 4 hours of major metro cities.',
        },
        {
            title: 'Corporate Experiences',
            slug: 'corporate',
            img: '/images/webp/Featured Collections Section (Luxury Dining Thumbnail).webp',
            desc: 'B2B team dayouts, corporate dining privileges, conference venues, and bulk voucher packages.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Handcrafted Themes</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        Curated Collections
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Tailored experience bundles designed for every occasion, mood, and group size.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '64px' }}>
                    {collections.map((col) => (
                        <div key={col.slug} className="shadow-soft" style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-stone)' }}>
                            <div style={{ height: '220px', overflow: 'hidden' }}>
                                <img src={col.img} alt={col.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '32px' }}>
                                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                                    {col.title}
                                </h2>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, marginBottom: '24px' }}>
                                    {col.desc}
                                </p>
                                <Link href={`/collections/${col.slug}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                                    Explore Collection
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
