import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund & Verification Policy | DRS Deals',
    description: 'Learn about our 100% customer satisfaction and hassle-free voucher refund guarantee policy.',
};

export default function RefundsPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Member Assurance</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Refund &amp; Guarantee Policy
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        100% money-back verification policy for unused vouchers.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Our Unused Voucher Money-Back Assurance</h2>
                    <p style={{ marginBottom: '20px' }}>
                        At DRS Deals, we stand behind the authenticity and validity of every single offer published on our platform. If you purchase a voucher and are unable to redeem it during its validity window due to venue unavailability or personal schedule changes, you are eligible for a 100% refund or platform credit with zero hassle.
                    </p>
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>Refund Conditions</h3>
                    <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                        <li>The voucher must be completely unused and unredeemed at the venue.</li>
                        <li>Refund requests must be submitted before the stated expiration date on the voucher.</li>
                        <li>Approved refunds are credited to the original payment method within 5 to 7 business days.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
