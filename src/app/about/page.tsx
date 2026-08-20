import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About DRS Deals | Our 23-Year Legacy & Inception Story',
    description: 'Since 2003, DRS Deals has been India’s premier curated platform connecting over 2M+ guests with 1,000+ luxury hospitality, dining, and leisure partners across 50+ cities.',
    alternates: {
        canonical: 'https://www.drsdeals.in/about',
    },
};

export default function AboutPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated Since 2003 &bull; 23-Year Legacy</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        Democratizing Uncompromised Luxury
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Building India’s most trusted hospitality and curated experiences network over more than two decades.
                    </p>
                </div>

                {/* Main Story */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '64px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '48px' }}>
                        <div>
                            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Foundational Conviction</h2>
                            <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '16px' }}>
                                Founded in 2003, DRS Deals was established with a singular conviction: premium leisure experiences, 5-star resort stays, and gourmet dining should be accessible to discerning individuals without requiring exorbitant markups.
                            </p>
                            <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                                Over the past 23 years, we have built direct relationships with over 1,000 premier partner venues across 50+ cities in India, serving more than 2 million happy guests and delivering over ₹1 Billion in member savings while ensuring guests receive full VIP hospitality.
                            </p>
                        </div>
                        <div>
                            <img src="/images/webp/Why DRS Deals Exists Section.webp" alt="DRS Deals Heritage" style={{ borderRadius: '12px', width: '100%', height: 'auto', objectFit: 'cover' }} />
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--color-stone)', margin: '48px 0' }} />

                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>Our Core Pillars of Excellence</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>1. Personal Venue Verification</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                                Every resort, spa, water park, and restaurant is vetted by our editorial team prior to member onboarding.
                            </p>
                        </div>
                        <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>2. Transparent Pricing</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                                What you see is what you pay. Zero convenience fees, zero unexpected surcharge traps at the venue desk.
                            </p>
                        </div>
                        <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>3. Dedicated Concierge Support</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                                Our dedicated team assists members directly with reservation confirmations and custom arrangements at +91 98111 20892.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Digital Strategy Acknowledgment */}
                <div className="text-center bg-charcoal text-white" style={{ borderRadius: '16px', padding: '48px' }}>
                    <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '16px', color: '#fff' }}>
                        Digital Transformation &amp; Architecture
                    </h3>
                    <p style={{ maxWidth: '640px', margin: '0 auto 32px auto', color: 'var(--color-stone)', lineHeight: 1.6 }}>
                        The website rebuild, platform engineering, user experience, and search optimization of DRS Deals was designed and developed by <strong style={{ color: '#fff' }}>Yashveer Singh</strong> under <strong style={{ color: '#fff' }}>Yashveer Labs</strong>.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/yashveer-singh" className="btn btn-primary">Meet The Architect</Link>
                        <Link href="/explore" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Explore 240+ Offers</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
