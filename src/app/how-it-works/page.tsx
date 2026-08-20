import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'How It Works | DRS Deals Concierge Experience Process',
    description: 'Discover how DRS Deals connects guests with luxury resorts, fine dining, and leisure privileges through personalized concierge coordination.',
    alternates: {
        canonical: 'https://www.drsdeals.in/how-it-works',
    },
};

export default function HowItWorksPage() {
    const steps = [
        {
            num: '1',
            title: 'Browse & Discover',
            desc: 'Explore curated resort packages, fine dining memberships, spa retreats, and water park passes by destination or experience category.',
        },
        {
            num: '2',
            title: 'Enquire & Consult',
            desc: `Connect directly with our hospitality concierge desk by phone (${siteConfig.contacts.hotline1}), email, or WhatsApp to discuss dates and package inclusions.`,
        },
        {
            num: '3',
            title: 'Reserve With Property',
            desc: 'Our concierge verifies member availability and confirms your reservation or membership directly with property management.',
        },
        {
            num: '4',
            title: 'Arrive & Enjoy',
            desc: 'Arrive at the venue, present your verified member confirmation at reception, and enjoy your uncompromised luxury experience.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>SIMPLE &amp; PERSONALIZED</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        How DRS Deals Works
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Four simple concierge-guided steps connecting you with India's premier luxury hospitality properties.
                    </p>
                </div>

                <div className="steps-grid" style={{ marginBottom: '64px' }}>
                    {steps.map((st) => (
                        <div key={st.num} className="step-card bg-white shadow-soft" style={{ borderRadius: '16px', padding: '32px', border: '1px solid var(--color-stone)' }}>
                            <div className="step-icon" style={{ background: 'var(--color-champagne-gold)', color: '#fff', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '20px' }}>
                                {st.num}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                                {st.title}
                            </h3>
                            <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                                {st.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-charcoal text-white" style={{ borderRadius: '16px', padding: '48px' }}>
                    <h2 className="section-title text-white" style={{ marginBottom: '16px' }}>Ready For Your Next Escape?</h2>
                    <p style={{ color: 'var(--color-stone)', marginBottom: '32px' }}>Explore active resort stays, dining packages, and leisure memberships now.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/deals" className="btn btn-primary">Explore Memberships</Link>
                        <Link href="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Contact Concierge</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
