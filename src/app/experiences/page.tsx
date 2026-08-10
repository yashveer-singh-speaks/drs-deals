import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Experiences & Leisure Offer Categories | DRS Deals',
    description: 'Browse luxury resort stays, family water park passes, private farmhouses, fine dining tasting menus, and spa wellness vouchers.',
};

export default function ExperiencesOverviewPage() {
    const categories = [
        {
            title: 'Resorts & Hotels',
            slug: 'resorts',
            img: '/images/webp/Explore by Category Section (Resorts Category Tile).webp',
            desc: 'Five-star weekend escapes, heritage palace stays, and luxury pool villas with verified breakfast & dining inclusions.',
        },
        {
            title: 'Fine Dining',
            slug: 'dining',
            img: '/images/webp/Explore by Category Section (Dining Category Tile).webp',
            desc: 'Chef’s tasting menus, buffet passes, and exclusive beverage privileges at top-rated hotel dining venues.',
        },
        {
            title: 'Spa & Wellness',
            slug: 'spa',
            img: '/images/webp/Explore by Category Section (Spa Category Tile).webp',
            desc: 'Ayurvedic wellness therapies, couples spa packages, and hydrotherapy retreats at 40% verified savings.',
        },
        {
            title: 'Water Parks & Amusement',
            slug: 'water-parks',
            img: '/images/webp/Hero Section (Collage Overlay Image Top-Right).webp',
            desc: 'Family adventure passes, wave pool day passes, and thrill park group tickets at guaranteed lowest prices.',
        },
        {
            title: 'Private Farmhouses',
            slug: 'farmhouses',
            img: '/images/webp/Why DRS Deals Exists Section.webp',
            desc: 'Secluded pool farmhouses and private estate rentals for family celebrations, corporate retreats, and weekend gatherings.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated Categories</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        Browse By Experience
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Discover tailored hospitality vouchers engineered for uncompromised luxury and verified savings.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '64px' }}>
                    {categories.map((cat) => (
                        <div key={cat.slug} className="shadow-soft" style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-stone)' }}>
                            <div style={{ height: '220px', overflow: 'hidden' }}>
                                <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '32px' }}>
                                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                                    {cat.title}
                                </h2>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, marginBottom: '24px' }}>
                                    {cat.desc}
                                </p>
                                <Link href={`/experiences/${cat.slug}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                                    Explore {cat.title} Offers
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
