import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'Terms of Service | DRS Deals',
    description: 'Terms of service, user agreement, and membership conditions governing DRS Deals platform usage.',
    alternates: {
        canonical: `${siteConfig.url}/terms`,
    },
};

export default function TermsPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Terms of Service
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Agreement governing the discovery, consultation, and usage of services provided on drsdeals.in.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>1. Acceptance of Terms</h2>
                    <p style={{ marginBottom: '20px' }}>
                        By accessing drsdeals.in, contacting our concierge desk, or inquiring about membership packages, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>

                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>2. Concierge Coordination &amp; Booking Model</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DRS Deals operates as a curated hospitality concierge platform. Our team coordinates member rates and reservations directly with verified third-party hotel, resort, restaurant, and wellness partners. All bookings are subject to partner venue room/table availability, operational policies, and designated blackout dates.
                    </p>

                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>3. Member Privileges &amp; Conditions</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Membership benefits, complimentary room night certificates, dining discounts, and passes must be redeemed strictly in accordance with the terms specified on each package. Government ID verification is required upon check-in at partner venues.
                    </p>

                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>4. Contact &amp; Inquiries</h2>
                    <p style={{ marginBottom: '0' }}>
                        For any questions regarding these terms, please contact our concierge team at <a href={`mailto:${siteConfig.contacts.conciergeEmail}`} style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>{siteConfig.contacts.conciergeEmail}</a> or call {siteConfig.contacts.hotline1}.
                    </p>
                </div>
            </div>
        </main>
    );
}
