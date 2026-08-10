import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Destinations & Regional Experience Hubs | DRS Deals',
    description: 'Explore verified luxury resort stays, fine dining vouchers, and entertainment deals across Delhi NCR, Jaipur, Mumbai, Punjab, and Gujarat.',
};

export default function DestinationsPage() {
    const destinations = [
        {
            name: 'Delhi NCR',
            slug: 'delhi',
            img: '/images/webp/Cities We Serve Section (Delhi NCR Tile).webp',
            count: '240+ Verified Offers',
            desc: 'Luxury daycation resorts, five-star dining vouchers, and premier water parks across Delhi, Gurgaon, Noida & Faridabad.',
        },
        {
            name: 'Jaipur & Rajasthan',
            slug: 'jaipur',
            img: '/images/webp/Cities We Serve Section (Jaipur Tile).webp',
            count: '180+ Palace Stays',
            desc: 'Heritage palace retreats, desert glamping experiences, and authentic royal Rajasthani dining packages.',
        },
        {
            name: 'Mumbai & Konkan',
            slug: 'mumbai',
            img: '/images/webp/Cities We Serve Section (Ahmedabad Tile).webp',
            count: '190+ Coastal Escapes',
            desc: 'Seafront luxury suites, gourmet fine dining passes, and relaxing spa wellness vouchers.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated Regional Hubs</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        Explore All Destinations
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Since 2003, DRS Deals has partnered with premier hospitality venues across India's most vibrant metropolitan regions and heritage tourist hubs.
                    </p>
                </div>

                {/* Destinations Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', marginBottom: '64px' }}>
                    {destinations.map((dest) => (
                        <div key={dest.slug} className="shadow-soft" style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-stone)' }}>
                            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(8, 7, 5, 0.75)', color: 'var(--color-champagne-gold)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                                    {dest.count}
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
                                    Explore {dest.name} Deals
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Editorial Content Section (1500+ words target) */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>How We Select Regional Venue Partners</h2>
                    <div style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p>
                            Every destination listed on DRS Deals represents a meticulously audited ecosystem of hospitality providers. We do not aggregate random listing feeds or unverified online vouchers. Instead, our regional acquisition team visits properties in person across Delhi NCR, Rajasthan, Maharashtra, and North India to inspect facility standards, hygiene certifications, staff responsiveness, and guest review consistency.
                        </p>
                        <p>
                            Whether you are searching for a quiet heritage haveli stay near Jaipur, a high-octane family water park day pass in Greater Noida, or a Michelin-inspired chef's tasting menu in South Mumbai, DRS Deals guarantees direct venue alignment. Our pricing contract models ensure that partners benefit from filled weekday inventory while our members enjoy uncompromised VIP privileges.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
