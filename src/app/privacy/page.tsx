import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | DRS Deals',
    description: 'Learn how DRS Deals protects your personal data, privacy, and payment security.',
};

export default function PrivacyPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Privacy Policy
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        How we handle, safeguard, and respect your data.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Data Encryption &amp; Protection</h2>
                    <p style={{ marginBottom: '20px' }}>
                        DRS Deals respects user privacy. We collect minimal necessary information (email, phone, name) strictly to fulfill voucher purchases and provide customer support. We do not sell or trade user data with unauthorized third parties.
                    </p>
                </div>
            </div>
        </main>
    );
}
