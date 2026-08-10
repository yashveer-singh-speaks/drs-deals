import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | DRS Deals',
    description: 'Terms of service, user agreement, and membership conditions governing DRS Deals platform usage.',
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
                        Standard legal agreement governing your use of drsdeals.in.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>1. Acceptance of Terms</h2>
                    <p style={{ marginBottom: '20px' }}>
                        By accessing or using drsdeals.in, purchasing vouchers, or browsing offer listings, you agree to be bound by these Terms of Service.
                    </p>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>2. Voucher Usage &amp; Venue Privileges</h2>
                    <p style={{ marginBottom: '20px' }}>
                        Vouchers are subject to partner venue blackout dates and availability. Members must present valid digital vouchers at the venue.
                    </p>
                </div>
            </div>
        </main>
    );
}
