import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About DRS Deals | Our 23-Year Legacy & Inception Story',
    description: 'Since 2003, DRS Deals has been India’s premier curated platform connecting guests with 5-star hospitality, dining, and leisure at exclusive savings.',
};

export default function AboutPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated Since 2003</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        Democratizing Uncompromised Luxury
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Building India’s most trusted hospitality and curated experiences network over two decades.
                    </p>
                </div>

                {/* Main Story (1500+ words target layout) */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '64px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '48px' }}>
                        <div>
                            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Foundational Belief</h2>
                            <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '16px' }}>
                                Founded in 2003, DRS Deals was established with a singular conviction: premium leisure experiences, 5-star resort stays, and gourmet dining should be accessible to discerning individuals without requiring exorbitant markups.
                            </p>
                            <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                                Over the past 23 years, we have built direct relationships with over 1,000 top-tier venues across Delhi NCR, Jaipur, Mumbai, Punjab, and Gujarat. We do not operate as an open marketplace or coupon aggregator. Every single deal is negotiated directly with venue management to deliver genuine 20% to 50% savings while ensuring guests receive full VIP treatment.
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
                                Every resort, spa, water park, and restaurant is personally vetted by our editorial team prior to onboarding.
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
                                Our customer success team assists members directly with booking confirmations and special requests.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Digital Strategy Acknowledgment */}
                <div className="text-center bg-charcoal text-white" style={{ borderRadius: '16px', padding: '48px' }}>
                    <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '16px', color: 'var(--color-warm-white)' }}>
                        Digital Transformation &amp; Architecture
                    </h3>
                    <p style={{ maxWidth: '640px', margin: '0 auto 32px auto', color: 'var(--color-stone)', lineHeight: 1.6 }}>
                        The complete website rebuild, search optimization, regional expansion, and multi-channel content architecture of DRS Deals was architected by <strong style={{ color: 'var(--color-charcoal)' }}>Yashveer Singh</strong> under <strong style={{ color: 'var(--color-charcoal)' }}>Yashveer Labs</strong>.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <Link href="/yashveer-singh" className="btn btn-primary">Meet The Architect</Link>
                        <Link href="/explore" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Explore Deals</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
