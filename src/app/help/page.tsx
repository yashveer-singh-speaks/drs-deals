import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Help Center & FAQs | DRS Deals',
    description: 'Find answers about voucher redemption, booking confirmations, refund policies, and venue check-ins.',
};

export default function HelpPage() {
    const faqs = [
        {
            q: 'How do I redeem my purchased DRS Deals voucher at the venue?',
            a: 'Simply present your digital voucher code on your phone at the venue front desk or restaurant reception during check-in. The staff will verify your voucher code instantly.',
        },
        {
            q: 'Do I need to make a prior reservation with the venue?',
            a: 'Yes, for resort stays, spa treatments, and fine dining, we recommend calling the venue 24-48 hours in advance quoting your DRS Deals voucher ID to secure your preferred slot.',
        },
        {
            q: 'Are there any hidden taxes or fees at the venue?',
            a: 'No. All applicable taxes and inclusions are clearly detailed on your voucher prior to purchase. No unexpected surcharges apply for covered items.',
        },
        {
            q: 'What is the refund policy if I cannot use my voucher?',
            a: 'DRS Deals provides a 100% money-back guarantee for unused vouchers within their validity window subject to our refund terms.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Support &amp; Answers</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Help Center &amp; FAQs
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Find instant answers to common questions about your vouchers and bookings.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                                    {faq.q}
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
