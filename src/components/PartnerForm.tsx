'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function PartnerForm() {
    const [businessName, setBusinessName] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('Luxury Resort / Hotel');
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [copied, setCopied] = useState(false);

    const generateMailtoUrl = () => {
        const recipient = siteConfig.contacts.partnerEmail;
        const subject = `DRS Deals Partnership Discussion - ${businessName.trim()}`;
        const body = `Hello DRS Deals Partnerships Team,

We would like to discuss a partnership with DRS Deals for our property/venue.

Property Details:
• Property / Business Name: ${businessName.trim()}
• Category: ${category}
• Location / City: ${location.trim() || 'Not specified'}
• Official Email: ${email.trim()}
• Contact Phone: ${phone.trim()}

Additional Notes / Overview:
${notes.trim() || 'N/A'}

---------------------------------------------
Sent via DRS Deals Partner Onboarding Form (www.drsdeals.in)`;

        return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!businessName.trim() || !email.trim() || !phone.trim()) {
            setErrorMessage('Please fill in all required fields (Property Name, Email, and Phone).');
            setStatus('error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setErrorMessage('Please provide a valid official email address.');
            setStatus('error');
            return;
        }

        setErrorMessage('');
        setStatus('success');

        // Open default email application
        const mailtoUrl = generateMailtoUrl();
        window.location.href = mailtoUrl;
    };

    const handleCopyDetails = () => {
        const text = `Property: ${businessName}\nCategory: ${category}\nLocation: ${location}\nEmail: ${email}\nPhone: ${phone}\nNotes: ${notes}`;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        });
    };

    return (
        <div className="bg-charcoal text-white" style={{ borderRadius: '16px', padding: '48px' }}>
            <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
                <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '12px', color: 'var(--color-champagne-gold)' }}>
                    PARTNER COLLABORATION
                </div>
                <h2 className="section-title text-white" style={{ marginBottom: '16px' }}>Discuss a Partnership</h2>
                <p style={{ color: 'var(--color-stone)', marginBottom: '32px', lineHeight: 1.6 }}>
                    Share your property details with our venue partnerships team to explore featured placements and member curation.
                </p>

                {status === 'success' ? (
                    <div style={{ padding: '32px 20px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }}>
                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(188, 144, 68, 0.2)', color: 'var(--color-champagne-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            ✉️
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '12px' }}>
                            Partnership Inquiry Draft Created
                        </h3>
                        <p style={{ color: 'var(--color-stone)', lineHeight: 1.6, marginBottom: '24px', fontSize: '0.95rem' }}>
                            We have opened your email client pre-addressed to <strong>{siteConfig.contacts.partnerEmail}</strong> with your property details for <strong>{businessName}</strong>. Please click <strong>Send</strong> in your email client to complete transmission.
                        </p>

                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
                            <a
                                href={generateMailtoUrl()}
                                className="btn btn-primary"
                                style={{ padding: '12px 24px' }}
                            >
                                Re-open Email App
                            </a>
                            <button
                                type="button"
                                onClick={handleCopyDetails}
                                className="btn btn-outline"
                                style={{ padding: '12px 24px', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
                            >
                                {copied ? '✓ Details Copied!' : 'Copy Property Details'}
                            </button>
                        </div>

                        <div>
                            <button
                                onClick={() => { setStatus('idle'); setBusinessName(''); setEmail(''); setPhone(''); setLocation(''); setNotes(''); }}
                                style={{ background: 'none', border: 'none', color: 'var(--color-stone)', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}
                            >
                                Submit Another Venue Inquiry
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                        {status === 'error' && (
                            <div style={{ padding: '12px', background: 'rgba(231, 76, 60, 0.2)', color: '#ff6b6b', borderRadius: '8px', fontSize: '0.85rem', lineHeight: 1.5 }}>
                                {errorMessage || 'Please fill in all required fields to submit your partnership inquiry.'}
                            </div>
                        )}
                        
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-stone)', marginBottom: '6px' }}>Property / Business Name *</label>
                            <input
                                type="text"
                                placeholder="e.g. Heritage Grand Resort"
                                required
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                aria-label="Property or Business Name"
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-stone)', marginBottom: '6px' }}>Official Business Email *</label>
                                <input
                                    type="email"
                                    placeholder="contact@property.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-label="Official Business Email"
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-stone)', marginBottom: '6px' }}>Contact Phone Number *</label>
                                <input
                                    type="tel"
                                    placeholder="Direct Phone / Mobile"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    aria-label="Contact Phone Number"
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-stone)', marginBottom: '6px' }}>Category *</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    aria-label="Property Category"
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: '#12110E', color: '#fff', outline: 'none' }}
                                >
                                    <option value="Luxury Resort / Hotel">Luxury Resort / Hotel</option>
                                    <option value="Fine Dining Restaurant">Fine Dining Restaurant</option>
                                    <option value="Water Park / Amusement Park">Water Park / Amusement Park</option>
                                    <option value="Spa &amp; Wellness Sanctuary">Spa &amp; Wellness Sanctuary</option>
                                    <option value="Farmhouse / Day Retreat">Farmhouse / Day Retreat</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-stone)', marginBottom: '6px' }}>Location / City</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Jaipur, Rajasthan"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    aria-label="Property Location"
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-stone)', marginBottom: '6px' }}>Brief Overview / Proposed Collaboration</label>
                            <textarea
                                rows={3}
                                placeholder="Tell us briefly about your property, amenities, or partnership interest..."
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                aria-label="Notes or Overview"
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none', resize: 'vertical' }}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ marginTop: '12px', padding: '16px', cursor: 'pointer', textAlign: 'center' }}
                        >
                            Discuss a Partnership via Email
                        </button>

                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-stone)', margin: 0 }}>
                            Submitting will open your email client pre-addressed to {siteConfig.contacts.partnerEmail}
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
