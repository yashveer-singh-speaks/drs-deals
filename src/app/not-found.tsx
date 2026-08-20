import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="section-padding bg-ivory" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '160px', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
                <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', color: 'var(--color-champagne-gold)', letterSpacing: '0.2em' }}>
                    404 — EXPERIENCE NOT FOUND
                </div>
                <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '24px', lineHeight: 1.15 }}>
                    This Destination Lies Beyond Our Map
                </h1>
                <p className="text-body-large text-charcoal-light" style={{ marginBottom: '40px', lineHeight: 1.7 }}>
                    The page or private voucher you are seeking may have expired, relocated, or is currently reserved. Our concierge desk is standing by to guide you to our curated experiences.
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
                    <Link href="/" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                        Return to Homepage
                    </Link>
                    <Link href="/explore" className="btn btn-outline" style={{ padding: '14px 28px' }}>
                        Explore All Deals
                    </Link>
                    <Link href="/contact" className="btn btn-outline" style={{ padding: '14px 28px' }}>
                        Contact Concierge
                    </Link>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '32px', border: '1px solid var(--color-stone)', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>
                        Popular Destinations &amp; Experiences:
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', fontSize: '0.9rem' }}>
                        <Link href="/experiences/resorts" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>✦</span> Luxury Resorts
                        </Link>
                        <Link href="/experiences/dining" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>✦</span> Fine Dining Passes
                        </Link>
                        <Link href="/experiences/water-parks" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>✦</span> Water Parks
                        </Link>
                        <Link href="/destinations/delhi" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>✦</span> Delhi NCR Stays
                        </Link>
                        <Link href="/destinations/jaipur" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>✦</span> Jaipur Heritage
                        </Link>
                        <Link href="/blog" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>✦</span> Editorial Journal
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
