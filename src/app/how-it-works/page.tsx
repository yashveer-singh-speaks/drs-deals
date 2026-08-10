import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How It Works | DRS Deals Simple 4-Step Process',
    description: 'Discover how DRS Deals makes discovering, purchasing, and redeeming luxury resort, dining, and water park vouchers effortless.',
};

export default function HowItWorksPage() {
    const steps = [
        {
            num: '1',
            title: 'Browse & Discover',
            desc: 'Explore curated resort packages, fine dining passes, spa retreats, and water parks by city or category.',
        },
        {
            num: '2',
            title: 'Purchase Instantly',
            desc: 'Buy your exclusive discount voucher securely online. Your digital voucher is delivered instantly to your email/SMS.',
        },
        {
            num: '3',
            title: 'Book Your Date',
            desc: 'Contact the partner venue directly to confirm your preferred reservation date, quoting your voucher ID.',
        },
        {
            num: '4',
            title: 'Show & Enjoy',
            desc: 'Present your digital voucher at venue check-in and enjoy uncompromised luxury privileges at 20%-50% savings.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Simple &amp; Transparent</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        How DRS Deals Works
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Four simple steps connecting you with India's finest luxury hospitality venues.
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
                    <p style={{ color: 'var(--color-stone)', marginBottom: '32px' }}>Explore active resort, dining, and entertainment vouchers now.</p>
                    <Link href="/explore" className="btn btn-primary">Explore Offers</Link>
                </div>
            </div>
        </main>
    );
}
