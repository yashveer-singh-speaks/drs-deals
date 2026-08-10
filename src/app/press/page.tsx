import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Press & Media Kit | DRS Deals',
    description: 'Latest media releases, hospitality industry commentary, and press coverage for DRS Deals.',
};

export default function PressPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Media Relations</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        Press &amp; Newsroom
                    </h1>
                    <p className="text-body-large text-charcoal-light">
                        Official announcements, media kits, and brand assets for journalists and industry analysts.
                    </p>
                </div>

                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)' }}>
                    <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Recent Press Releases</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-champagne-gold)', fontWeight: 600 }}>August 2026</span>
                            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', margin: '8px 0' }}>DRS Deals Expands Curated Resort Privileges Across Rajasthan and Maharashtra</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>DRS Deals announces new direct partnership agreements with 50+ luxury heritage properties.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
