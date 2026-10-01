import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Contact Concierge Desk | DRS Deals',
    description: 'Connect directly with the DRS Deals hospitality concierge team for resort memberships, bookings, and customer assistance.',
    alternates: {
        canonical: `${siteConfig.url}/contact`,
    },
};

export default function ContactPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        DIRECT ASSISTANCE
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Contact Concierge Support
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Have a question about an experience, membership package, or booking? Our concierge team is at your service.
                    </p>
                </div>

                {/* Direct Contact Cards */}
                <div className="bg-white shadow-soft" style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--color-stone)', marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px', textAlign: 'center' }}>
                        📞 Authorized Concierge Hotline Numbers
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-charcoal-light)', fontSize: '0.95rem', marginBottom: '24px' }}>
                        Call any of our direct reservation lines for immediate member verification and assistance:
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                        {siteConfig.contacts.hotlines.map((h, i) => (
                            <a
                                key={i}
                                href={`tel:${h.raw}`}
                                className="btn btn-outline"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    padding: '12px 16px',
                                    fontWeight: 700,
                                    color: 'var(--color-charcoal)',
                                    borderColor: 'var(--color-stone)',
                                    fontSize: '0.95rem',
                                    textDecoration: 'none'
                                }}
                            >
                                📞 {h.display}
                            </a>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', paddingTop: '20px', borderTop: '1px solid var(--color-stone)' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '4px' }}>💬 WhatsApp Concierge</div>
                            <a
                                href={siteConfig.getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#27ae60', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}
                            >
                                {siteConfig.contacts.whatsappDisplay}
                            </a>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '4px' }}>✉️ Official Email Desk</div>
                            <a
                                href={`mailto:${siteConfig.contacts.email}`}
                                style={{ color: 'var(--color-champagne-gold)', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}
                            >
                                {siteConfig.contacts.email}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Interactive Contact Form Component */}
                <ContactForm />
            </div>
        </main>
    );
}
