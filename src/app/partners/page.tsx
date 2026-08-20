import React from 'react';
import type { Metadata } from 'next';
import PartnerForm from '@/components/PartnerForm';

export const metadata: Metadata = {
    title: 'Partner With Us | DRS Deals 1,000+ Venue Growth Network',
    description: 'Join 1,000+ premium resorts, fine dining establishments, and entertainment destinations across 50+ cities trusted by over 2 million guests since 2003.',
    alternates: {
        canonical: 'https://www.drsdeals.in/partners',
    },
};

export default function PartnersPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero */}
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        B2B VENUE PARTNERSHIPS
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        Feature Your Property on DRS Deals
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Join 1,000+ premium resorts, fine dining establishments, and entertainment destinations across 50+ cities trusted by over 2 million guests since 2003.
                    </p>
                </div>

                {/* Content Section */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '64px' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>A Curated Approach to Venue Promotion</h2>
                    <div style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <p>
                            In today's hospitality landscape, maintaining brand prestige while reaching high-spending guests is essential. DRS Deals operates as a private, curated experiences platform with personalized concierge coordination rather than an open coupon directory.
                        </p>
                        <p>
                            We present your venue with bespoke editorial features and clear membership privileges that encourage higher on-property spending across dining, spa upgrades, and extended stays.
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', margin: '24px 0' }}>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Brand Protection</h3>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>Controlled membership terms, custom blackout dates, and refined editorial presentation matching 5-star standards.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Direct Concierge Coordination</h3>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>Our concierge desk coordinates reservation inquiries directly with your front desk team for seamless guest check-in.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>National Reach</h3>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>Exposure to 2M+ members across Delhi NCR, Jaipur, Mumbai, Himachal Pradesh, Uttarakhand, and 50+ cities.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partner Application Form Component */}
                <PartnerForm />
            </div>
        </main>
    );
}
