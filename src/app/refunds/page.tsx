import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Refund & Concierge Assistance Policy | DRS Deals',
    description: 'Learn about our booking policies, cancellation assistance, and member satisfaction guidelines.',
    alternates: {
        canonical: `${siteConfig.url}/refunds`,
    },
};

export default function RefundsPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>MEMBER ASSURANCE</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Refund &amp; Cancellation Policy
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Clear policies and direct concierge support for membership bookings.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Our Service Commitment</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DRS Deals is dedicated to providing transparent, verified hospitality memberships. Because we coordinate bookings individually with property management, cancellations and rescheduling are handled with personalized concierge care.
                    </p>

                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>Guidelines &amp; Rescheduling</h3>
                    <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                        <li><strong>Membership Inquiries:</strong> If you have questions prior to purchasing a physical or digital membership card, our concierge is available by phone to clarify all terms.</li>
                        <li><strong>Reservation Rescheduling:</strong> Room night reservations may be rescheduled subject to the individual property's advance notice policy (typically 48 to 72 hours prior to check-in).</li>
                        <li><strong>Property Coordination:</strong> In the rare event of property unavailability during your validity period, our concierge team will assist in arranging an alternative date or suitable partner venue.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>Contact Concierge for Assistance</h3>
                    <p style={{ marginBottom: 0 }}>
                        For cancellation, rescheduling, or refund inquiries, please email <a href={`mailto:${siteConfig.contacts.conciergeEmail}`} style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>{siteConfig.contacts.conciergeEmail}</a> or call our booking hotline at {siteConfig.contacts.hotline1}.
                    </p>
                </div>
            </div>
        </main>
    );
}
