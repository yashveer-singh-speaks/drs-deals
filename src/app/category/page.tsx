import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CATEGORY_METRICS } from '@/data/partners';

export const metadata: Metadata = {
    title: 'Explore Categories | DRS Deals Verified Hospitality Privileges',
    description: 'Explore Hotel & Resorts, Restaurants & Bars, Theme Parks, and Waterparks partnerships with DRS Deals across Delhi NCR and beyond.',
};

export default function CategoryDirectoryPage() {
    const categories = [
        {
            slug: 'hotel-resorts',
            title: 'Hotel & Resorts',
            image: '/images/webp/explore-category-resorts.webp',
            count: '28+ Properties',
            desc: CATEGORY_METRICS['hotel-resorts'].description,
        },
        {
            slug: 'restaurants-bars',
            title: 'Restaurants & Bars',
            image: '/images/webp/explore-category-dining.webp',
            count: '68+ Destinations',
            desc: CATEGORY_METRICS['restaurants-bars'].description,
        },
        {
            slug: 'theme-parks',
            title: 'Theme Parks',
            image: '/images/webp/explore-category-theme-parks.webp',
            count: '17+ Cultural Farms',
            desc: CATEGORY_METRICS['theme-parks'].description,
        },
        {
            slug: 'waterparks',
            title: 'Waterparks',
            image: '/images/webp/explore-category-waterparks.webp',
            count: '14+ Splash Parks',
            desc: CATEGORY_METRICS['waterparks'].description,
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 56px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        CURATED HOSPITALITY EXPERIENCES
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '20px' }}>
                        Explore by Category
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                        Discover verified partner brands, exclusive membership passes, dining certificates, and family day outings curated by DRS Deals.
                    </p>
                </div>

                <div className="category-grid" style={{ marginBottom: '64px' }}>
                    {categories.map((cat) => (
                        <Link key={cat.slug} href={`/category/${cat.slug}`} className="category-card" aria-label={`Explore ${cat.title}`}>
                            <img
                                src={cat.image}
                                alt={cat.title}
                                width={360}
                                height={240}
                                loading="lazy"
                            />
                            <div className="category-overlay">
                                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', display: 'block' }}>
                                    {cat.count}
                                </span>
                                <h3 className="category-title">{cat.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
