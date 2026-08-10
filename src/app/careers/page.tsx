import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers & Culture | DRS Deals',
    description: 'Join our team in shaping the future of curated luxury hospitality and experience discovery in India.',
};

export default function CareersPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Build With Us</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Careers at DRS Deals
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        We are looking for passionate individuals across venue relations, hospitality editorial, software engineering, and customer success.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)' }}>
                    <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Open Positions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '4px' }}>Venue Partnership Manager</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)' }}>New Delhi / Gurgaon • Full-Time</p>
                            </div>
                            <button className="btn btn-outline">View Details</button>
                        </div>
                        <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '4px' }}>Hospitality Editorial Writer</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)' }}>Remote / New Delhi • Full-Time</p>
                            </div>
                            <button className="btn btn-outline">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
