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
            <div className="container" style={{ maxWidth: '800px' }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                    <div className="bg-white shadow-soft" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--color-stone)', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.25rem', marginBottom: '8px' }}>📞 Concierge Desk 1</div>
                        <a href={`tel:${siteConfig.contacts.hotline1Raw}`} style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textDecoration: 'none' }}>
                            {siteConfig.contacts.hotline1}
                        </a>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginTop: '4px' }}>Member Inquiries</div>
                    </div>

                    <div className="bg-white shadow-soft" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--color-stone)', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.25rem', marginBottom: '8px' }}>📞 Concierge Desk 2</div>
                        <a href={`tel:${siteConfig.contacts.hotline2Raw}`} style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textDecoration: 'none' }}>
                            {siteConfig.contacts.hotline2}
                        </a>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginTop: '4px' }}>Hotel Reservations</div>
                    </div>

                    <div className="bg-white shadow-soft" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--color-stone)', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.25rem', marginBottom: '8px' }}>✉️ Official Email</div>
                        <a href={`mailto:${siteConfig.contacts.conciergeEmail}`} style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-charcoal)', textDecoration: 'none' }}>
                            {siteConfig.contacts.conciergeEmail}
                        </a>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginTop: '4px' }}>Written Enquiries</div>
                    </div>
                </div>

                {/* Interactive Contact Form Component */}
                <ContactForm />
            </div>
        </main>
    );
}
