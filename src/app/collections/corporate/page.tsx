import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllDeals } from '@/data/deals';

export const metadata: Metadata = {
    title: 'Corporate Offsites & Outing Packages | DRS Deals',
    description: 'Bulk corporate retreat passes, conference dining memberships, and team building day packages.',
};

export default function CorporateCollectionPage() {
    const deals = getAllDeals();

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        CORPORATE &amp; TEAM OFFSITES
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Corporate Offsites &amp; Group Packages
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Bulk corporate memberships, resort conference venues, team-building adventure passes, and banquet privileges.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                    {deals.map((deal) => (
                        <div key={deal.id} className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '28px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                {deal.featuredImage ? (
                                    <div style={{ height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', border: '1px solid var(--color-stone)' }}>
                                        <img src={deal.featuredImage} alt={deal.propertyName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ) : (
                                    <div className="skeleton-box" style={{ height: '180px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--color-charcoal-light)', border: '1px solid var(--color-stone)' }}>
                                        📷 {deal.propertyName} Placeholder
                                    </div>
                                )}
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
                                    {deal.categoryLabel}
                                </div>
                                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                                    {deal.propertyName}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', marginBottom: '16px' }}>
                                    📍 {deal.location}
                                </p>
                                <div style={{ padding: '12px 16px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', marginBottom: '20px' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-light)', textTransform: 'uppercase' }}>Corporate Rate</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)' }}>
                                        {deal.price}
                                    </div>
                                </div>
                            </div>
                            <Link href={`/deals/${deal.slug}`} className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>
                                View Corporate Privileges
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Corporate Inquiries Dedicated Contact Section */}
                <div style={{ marginTop: '64px', background: 'linear-gradient(135deg, #1C1A18 0%, #2D261E 100%)', color: '#fff', borderRadius: '16px', padding: '48px 32px', textAlign: 'center', boxShadow: 'var(--shadow-hover)' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '12px', color: '#D4A857' }}>
                        DEDICATED CORPORATE DESK
                    </div>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '16px' }}>
                        Plan Your Corporate Offsite or Bulk Membership
                    </h2>
                    <p style={{ maxWidth: '650px', margin: '0 auto 24px auto', fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.7 }}>
                        Our corporate relationship managers specialize in customized offsite packages, banquet bookings, and bulk voucher distribution. Contact our corporate desk directly:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                        <a
                            href="tel:+919811120892"
                            style={{
                                color: '#D4A857',
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            📞 +91 98111 20892
                        </a>
                        <a
                            href="tel:+919811360808"
                            style={{
                                color: '#D4A857',
                                fontWeight: 700,
                                fontSize: '1.25rem',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            📞 +91 98113 60808
                        </a>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-primary">
                            Submit Corporate Inquiry
                        </Link>
                        <a
                            href="https://wa.me/919811120892?text=Hello%20DRS%20Deals%20Corporate%20Desk%2C%20I%20would%20like%20to%20enquire%20about%20corporate%20packages."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                        >
                            💬 Corporate WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
