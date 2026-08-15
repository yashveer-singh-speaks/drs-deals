'use client';

import React, { useState } from 'react';

export default function PartnerForm() {
    const [businessName, setBusinessName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('resort');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!businessName.trim() || !email.trim() || !phone.trim()) {
            setStatus('error');
            return;
        }

        if (status === 'loading') return;

        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
        }, 1000);
    };

    return (
        <div className="bg-charcoal text-white" style={{ borderRadius: '16px', padding: '48px' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <h2 className="section-title text-white" style={{ marginBottom: '16px' }}>Apply For Partner Onboarding</h2>
                <p style={{ color: 'var(--color-stone)', marginBottom: '32px' }}>Fill out your property details below. Our venue acquisition director will contact you within 24 hours.</p>

                {status === 'success' ? (
                    <div style={{ padding: '32px 16px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }}>
                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(39, 174, 96, 0.2)', color: '#27ae60', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            ✓
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '8px' }}>
                            Application Submitted
                        </h3>
                        <p style={{ color: 'var(--color-stone)', lineHeight: 1.6, marginBottom: '24px', fontSize: '0.95rem' }}>
                            Thank you for applying with <strong>{businessName}</strong>. Our partnership director will review your venue details and contact <strong>{email}</strong> within 24 hours.
                        </p>
                        <button
                            onClick={() => { setStatus('idle'); setBusinessName(''); setEmail(''); setPhone(''); }}
                            className="btn btn-outline"
                            style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
                        >
                            Submit Another Venue
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {status === 'error' && (
                            <div style={{ padding: '12px', background: 'rgba(231, 76, 60, 0.2)', color: '#ff6b6b', borderRadius: '8px', fontSize: '0.85rem' }}>
                                Please fill in all required fields to submit your partnership application.
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Property / Business Name *"
                            required
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            disabled={status === 'loading'}
                            style={{ padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }}
                        />
                        <input
                            type="email"
                            placeholder="Official Business Email *"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                            style={{ padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }}
                        />
                        <input
                            type="tel"
                            placeholder="Contact Phone Number *"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={status === 'loading'}
                            style={{ padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }}
                        />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled={status === 'loading'}
                            style={{ padding: '14px 18px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }}
                        >
                            <option value="resort" style={{ background: '#080705' }}>Luxury Resort / Hotel</option>
                            <option value="dining" style={{ background: '#080705' }}>Fine Dining Restaurant</option>
                            <option value="park" style={{ background: '#080705' }}>Water Park / Theme Park</option>
                            <option value="spa" style={{ background: '#080705' }}>Spa &amp; Wellness Sanctuary</option>
                        </select>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status === 'loading'}
                            style={{ marginTop: '12px', opacity: status === 'loading' ? 0.7 : 1 }}
                        >
                            {status === 'loading' ? 'Submitting Application...' : 'Submit Partner Application'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
