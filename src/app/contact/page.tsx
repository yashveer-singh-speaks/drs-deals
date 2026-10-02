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
                <div className="bg-white shadow-soft" style={{ padding: '36px', borderRadius: '16px', border: '1px solid var(--color-stone)', marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px', textAlign: 'center' }}>
                        📞 Authorized Concierge Hotline Numbers
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-charcoal-light)', fontSize: '0.95rem', marginBottom: '24px' }}>
                        Call any of our direct reservation lines for immediate member verification and assistance:
                    </p>

                    <div style={{ maxWidth: '420px', margin: '0 auto 28px auto', background: 'var(--color-ivory)', padding: '24px', borderRadius: '12px', border: '1px solid var(--color-stone)', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-gold)', fontWeight: 700, marginBottom: '12px' }}>
                            Priority Reservation Hotlines
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {siteConfig.contacts.hotlines.map((h, i) => (
                                <div key={i} style={{ padding: '6px 0', borderBottom: i < siteConfig.contacts.hotlines.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                                    <a
                                        href={`tel:${h.raw}`}
                                        style={{
                                            color: 'var(--color-charcoal)',
                                            fontWeight: 700,
                                            fontSize: '1.05rem',
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        📞 {h.display}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dedicated Corporate Inquiries Section */}
                    <div style={{ padding: '24px', background: 'linear-gradient(135deg, #1C1A18 0%, #2D261E 100%)', color: '#fff', borderRadius: '12px', marginBottom: '28px', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#D4A857', fontWeight: 700, marginBottom: '6px' }}>
                            🏢 Corporate Inquiries &amp; Bulk Booking Desk
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', margin: '0 0 16px 0' }}>
                            For corporate offsites, bulk voucher passes, and corporate membership partnerships, contact our corporate relationship managers:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                            {siteConfig.contacts.corporateHotlines.map((corp, idx) => (
                                <a
                                    key={idx}
                                    href={`tel:${corp.raw}`}
                                    style={{
                                        color: '#D4A857',
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    📞 {corp.display}
                                </a>
                            ))}
                        </div>
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
