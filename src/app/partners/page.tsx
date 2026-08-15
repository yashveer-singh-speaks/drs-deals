import React from 'react';
import type { Metadata } from 'next';
import PartnerForm from '@/components/PartnerForm';

export const metadata: Metadata = {
    title: 'Partner With Us | DRS Deals B2B Venue Growth Network',
    description: 'Fill unbooked weekday rooms, welcome high-intent guests, and expand your hospitality revenue with zero upfront fees.',
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
                        Grow Your Venue Revenue With Zero Upfront Cost
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        Join 1,000+ premium resorts, fine dining establishments, and entertainment destinations across India trusted by over 2 million guests since 2003.
                    </p>
                </div>

                {/* Content Section */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '64px' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>Why India's Finest Hospitality Brands Choose DRS Deals</h2>
                    <div style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <p>
                            In the modern hospitality landscape, unbooked resort rooms, empty restaurant tables during off-peak hours, and under-utilized weekday amusement park capacity represent permanent lost revenue. Traditional discount platforms degrade brand prestige by cluttering feeds with cheap coupons and bargain-hunting crowds.
                        </p>
                        <p>
                            DRS Deals takes an entirely different approach. As a private, curated experiences network, we protect your brand positioning while introducing verified, high-spending guests to your property. Our members do not just redeem vouchers; they spend on add-on amenities, spa upgrades, premium dining, and return as loyal full-price patrons.
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', margin: '24px 0' }}>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Zero Risk Partnership</h3>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>No setup fees, monthly subscriptions, or hidden charges. We only earn when we drive verified revenue to your venue.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Brand Protection</h3>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>Controlled voucher volume, blackout dates management, and sleek presentation that reflects luxury standards.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Multi-Channel Exposure</h3>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>Featured across organic search, AI discovery, regional hubs, Instagram, and editorial guides.</p>
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
