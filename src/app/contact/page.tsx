import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us & Customer Support | DRS Deals',
    description: 'Get in touch with DRS Deals customer concierge or venue support team.',
};

export default function ContactPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '720px' }}>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Direct Assistance</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Contact Concierge Support
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Have a question about a voucher or booking? Our team is here to assist.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Your Full Name</label>
                            <input type="text" placeholder="Enter your name" required style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Email Address</label>
                            <input type="email" placeholder="Enter your email" required style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Message / Inquiry</label>
                            <textarea rows={5} placeholder="How can we assist you today?" required style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
