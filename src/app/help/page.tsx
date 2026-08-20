import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Help Center & FAQs | DRS Deals Concierge',
    description: 'Find answers about hotel memberships, concierge coordination, reservation dates, and member privileges on DRS Deals.',
    alternates: {
        canonical: `${siteConfig.url}/help`,
    },
};

export default function HelpPage() {
    const faqs = [
        {
            q: 'How does DRS Deals work without online checkout?',
            a: `DRS Deals operates as a personalized concierge service. Once you discover an experience or membership package on our website, you contact our concierge team directly by phone (${siteConfig.contacts.hotline1}), email, or WhatsApp. We confirm your details, coordinate availability directly with the property, and assist with your reservation.`,
        },
        {
            q: 'How do I book my stay or redeem member coupons?',
            a: `Call our direct booking hotline at ${siteConfig.contacts.hotline1} or ${siteConfig.contacts.hotline2} with your preferred dates and package choice. Our concierge handles the direct coordination with the hotel front desk to confirm your reservation.`,
        },
        {
            q: 'Are there hidden charges or extra fees?',
            a: 'No. All package inclusions, complimentary night terms, buffet entitlements, and validity dates are clearly communicated in advance.',
        },
        {
            q: 'Can I transfer or gift a membership package to family or colleagues?',
            a: 'Yes. DRS Deals membership booklets and stay certificates can typically be gifted to family, friends, or corporate colleagues. Simply notify our concierge when booking the reservation name.',
        },
        {
            q: 'How can hotels and resorts partner with DRS Deals?',
            a: 'Hospitality properties can submit their details through our /partners page or email partnerships@drsdeals.in to discuss featured placement and curated member promotions.',
        },
        {
            q: 'How do I reach the concierge team for urgent inquiries?',
            a: `Our concierge desk is reachable via phone at ${siteConfig.contacts.hotline1} / ${siteConfig.contacts.hotline2}, via email at ${siteConfig.contacts.conciergeEmail}, or via WhatsApp.`,
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.a,
            },
        })),
    };

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        SUPPORT &amp; ANSWERS
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Help Center &amp; FAQs
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Find instant answers to common questions about your memberships, stays, dining privileges, and concierge reservations.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                                    {faq.q}
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-charcoal text-white text-center" style={{ borderRadius: '16px', padding: '40px' }}>
                    <h2 className="section-title text-white" style={{ fontSize: '1.75rem', marginBottom: '12px' }}>Still Have Questions?</h2>
                    <p style={{ color: 'var(--color-stone)', marginBottom: '24px' }}>Our dedicated concierge team is ready to assist you directly.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-primary">Contact Concierge</Link>
                        <a href={`tel:${siteConfig.contacts.hotline1Raw}`} className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Call {siteConfig.contacts.hotline1}</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
