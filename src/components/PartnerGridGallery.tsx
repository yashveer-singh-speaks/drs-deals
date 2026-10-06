'use client';

import React, { useState } from 'react';
import { PartnerBrand } from '@/data/partners';
import Link from 'next/link';

interface PartnerGridGalleryProps {
    partners: PartnerBrand[];
    categoryTitle: string;
    categoryCount: number;
}

export default function PartnerGridGallery({
    partners,
    categoryTitle,
    categoryCount
}: PartnerGridGalleryProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('All');

    // Extract unique locations for quick filtering
    const locations = ['All', ...Array.from(new Set(partners.map(p => {
        if (!p.location) return 'Pan India';
        const parts = p.location.split(',');
        return parts[parts.length - 1].trim();
    })))].slice(0, 8);

    const filtered = partners.filter(partner => {
        const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            partner.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = selectedLocation === 'All' || partner.location.toLowerCase().includes(selectedLocation.toLowerCase());
        return matchesSearch && matchesLocation;
    });

    return (
        <section className="partner-gallery-section" style={{ marginTop: '72px', marginBottom: '48px' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '12px' }}>
                        PREVIOUS CLIENTS &amp; PARTNERS DIRECTORY
                    </div>
                    <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
                        All {categoryTitle} Partners We&apos;ve Worked With ({categoryCount})
                    </h2>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                        Over two decades of established industry trust across Delhi NCR, Haryana, Punjab, Rajasthan, and Himachal Pradesh. DRS Deals serves leading B2B partners while delivering premier value to B2C guests.
                    </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="partner-gallery-controls" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                    {/* Location Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {locations.map(loc => (
                            <button
                                key={loc}
                                onClick={() => setSelectedLocation(loc)}
                                className={`partner-filter-pill ${selectedLocation === loc ? 'active' : ''}`}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div style={{ position: 'relative', minWidth: '240px' }}>
                        <input
                            type="text"
                            placeholder={`Search ${categoryTitle}...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label={`Search ${categoryTitle}`}
                            className="partner-search-input"
                        />
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#999', pointerEvents: 'none' }}>
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                    </div>
                </div>

                {/* Responsive Grid Gallery Layout */}
                <div className="partner-grid-gallery">
                    {filtered.map(partner => (
                        <div key={partner.id} className="partner-grid-card">
                            <div className="partner-card-media">
                                <img
                                    src={partner.logoSrc}
                                    alt={`${partner.name} logo`}
                                    className="partner-card-logo"
                                    loading="lazy"
                                    width={96}
                                    height={96}
                                />
                            </div>
                            <div className="partner-card-info">
                                <h3 className="partner-card-name" title={partner.name}>
                                    {partner.name}
                                </h3>
                                <div className="partner-card-location">
                                    📍 {partner.location}
                                </div>
                                {partner.brand && (
                                    <div className="partner-card-brand">
                                        {partner.brand}
                                    </div>
                                )}
                                <div className="partner-card-status">
                                    <span className="partner-verified-tag">✓ Verified Partner</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--color-white)', borderRadius: '16px', border: '1px solid var(--color-stone)' }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-charcoal-light)', marginBottom: '16px' }}>
                            No partners found matching &quot;{searchTerm}&quot;
                        </p>
                        <button onClick={() => { setSearchTerm(''); setSelectedLocation('All'); }} className="btn btn-outline">
                            Clear Filter
                        </button>
                    </div>
                )}

                {/* Bottom B2B Partnership Banner */}
                <div className="b2b-cta-card" style={{ marginTop: '56px' }}>
                    <div style={{ maxWidth: '640px' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
                            GROW YOUR VENUE WITH DRS DEALS
                        </div>
                        <h3 style={{ fontSize: '1.85rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                            Are you a Hotel, Restaurant, or Theme Park owner?
                        </h3>
                        <p style={{ color: 'var(--color-charcoal-light)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                            Join 125+ trusted hospitality establishments in North India. Gain access to verified corporate client networks, curated high-spending membership programs, and concierge-assisted bookings.
                        </p>
                    </div>
                    <div>
                        <Link href="/partners" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                            Partner With DRS Deals
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
