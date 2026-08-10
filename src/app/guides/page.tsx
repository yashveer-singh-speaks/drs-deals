import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Curated Guide | Hospitality & Escapes Journal',
    description: 'In-depth editorial buying guides on top weekend resorts, fine dining recommendations, and family water park passes.',
};

export default function GuidesPage() {
    const guides = [
        {
            slug: 'top-10-resorts',
            category: 'Resorts',
            title: 'Top 10 Weekend Escapes Near Delhi NCR',
            time: '5 min read',
            img: '/images/webp/The Curated Guide Section (Guide 1 Thumbnail).webp',
            excerpt: 'Our editors evaluate luxury pool resorts, heritage properties, and golf retreats within a short 2 to 4 hour drive of the capital.',
        },
        {
            slug: 'fine-dining',
            category: 'Dining',
            title: 'The Ultimate Guide to Fine Dining in Mumbai',
            time: '4 min read',
            img: '/images/webp/The Curated Guide Section (Guide 2 Thumbnail).webp',
            excerpt: 'Exploring chef’s tasting menus, seafront buffets, and private dining rooms across Mumbai and Pune.',
        },
        {
            slug: 'family-parks',
            category: 'Family',
            title: 'Best Water Parks for a Family Day Out',
            time: '6 min read',
            img: '/images/webp/The Curated Guide Section (Guide 3 Thumbnail).webp',
            excerpt: 'A comprehensive ranking of wave pools, thrill slides, and family amusement parks in North and West India.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Editorial Journal</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        The Curated Guide
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Insider recommendations and expert breakdowns on hospitality, fine dining, and weekend travel.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {guides.map((gd) => (
                        <div key={gd.slug} className="shadow-soft" style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-stone)' }}>
                            <div style={{ height: '220px', overflow: 'hidden' }}>
                                <img src={gd.img} alt={gd.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-champagne-gold)', fontWeight: 600, textTransform: 'uppercase' }}>{gd.category}</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-light)' }}>{gd.time}</span>
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                                    {gd.title}
                                </h2>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, marginBottom: '24px' }}>
                                    {gd.excerpt}
                                </p>
                                <Link href={`/guides/${gd.slug}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                                    Read Guide
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
