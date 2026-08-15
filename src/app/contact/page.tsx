import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us & Concierge Desk | DRS Deals',
    description: 'Get in touch with DRS Deals customer concierge or venue support team.',
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
                        Have a question about a voucher, membership, or booking? Our concierge team is at your service.
                    </p>
                </div>

                {/* Direct Phone & Contact Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                    <div className="bg-white shadow-soft" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--color-stone)', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.25rem', marginBottom: '8px' }}>📞 Booking Hotline 1</div>
                        <a href="tel:+919811120892" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textDecoration: 'none' }}>
                            +91 98111 20892
                        </a>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginTop: '4px' }}>Instant Member Assistance</div>
                    </div>
                    <div className="bg-white shadow-soft" style={{ padding: '24px', borderRadius: '12px', border: '1px solid var(--color-stone)', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.25rem', marginBottom: '8px' }}>📞 Booking Hotline 2</div>
                        <a href="tel:+919811360808" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textDecoration: 'none' }}>
                            +91 98113 60808
                        </a>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginTop: '4px' }}>Priority Hotel Reservations</div>
                    </div>
                </div>

                {/* Interactive Contact Form Component */}
                <ContactForm />
            </div>
        </main>
    );
}
