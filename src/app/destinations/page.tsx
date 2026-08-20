import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Destinations & Regional Experience Hubs | DRS Deals',
    description: 'Explore 240+ verified luxury resort stays, fine dining vouchers, and entertainment deals across 50+ cities including Delhi NCR, Jaipur, and Mumbai since 2003.',
    alternates: {
        canonical: 'https://www.drsdeals.in/destinations',
    },
};

export default function DestinationsPage() {
    const destinations = [
        {
            name: 'Delhi NCR',
            slug: 'delhi',
            img: '/images/webp/Cities We Serve Section (Delhi NCR Tile).webp',
            tag: '240+ Curated Offers',
            desc: 'Luxury 5-star hotel memberships, fine dining chef tables, and premier leisure passes across Delhi, Gurgaon, Noida, and Sonipat Murthal.',
        },
        {
            name: 'Jaipur & Rajasthan',
            slug: 'jaipur',
            img: '/images/webp/Cities We Serve Section (Jaipur Tile).webp',
            tag: 'Heritage Stays & Palaces',
            desc: 'Heritage palace retreats, luxury glamping experiences, and authentic royal dining packages across Rajasthan.',
        },
        {
            name: 'Mumbai & Maharashtra',
            slug: 'mumbai',
            img: '/images/webp/Cities We Serve Section (Ahmedabad Tile).webp',
            tag: 'Coastal & Urban Escapes',
            desc: 'Luxury urban suites, gourmet fine dining passes, and relaxing spa wellness retreats.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated Since 2003 &bull; 50+ Cities</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        Explore Regional Experience Hubs
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Since 2003, DRS Deals has partnered with over 1,000 premier hospitality venues across India's most vibrant metropolitan regions and tourist destinations.
                    </p>
                </div>

                {/* Destinations Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', marginBottom: '64px' }}>
                    {destinations.map((dest) => (
                        <div key={dest.slug} className="shadow-soft" style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-stone)' }}>
                            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(8, 7, 5, 0.85)', color: 'var(--color-champagne-gold)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, backdropFilter: 'blur(4px)', border: '1px solid rgba(188, 144, 68, 0.3)' }}>
                                    {dest.tag}
                                </div>
                            </div>
                            <div style={{ padding: '32px' }}>
                                <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                                    {dest.name}
                                </h2>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, marginBottom: '24px' }}>
                                    {dest.desc}
                                </p>
                                <Link href={`/destinations/${dest.slug}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                                    Explore {dest.name} Experiences
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Editorial Content Section */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>23 Years of Direct Venue Alignment</h2>
                    <div style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p>
                            Every destination listed on DRS Deals represents an audited ecosystem of hospitality providers built over two decades. We do not aggregate random listing feeds or unverified online vouchers.
                        </p>
                        <p>
                            Whether you are searching for a quiet heritage haveli stay near Jaipur, a 5-star hotel membership in Sonipat Murthal, or a fine dining experience in South Mumbai, our concierge coordinates directly with property management to ensure uncompromised VIP member privileges.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
