'use client';

import React, { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim() || !email.trim() || !message.trim()) {
            setErrorMessage('Please fill in all required fields.');
            setStatus('error');
            return;
        }

        if (status === 'loading') return;

        setStatus('loading');
        setErrorMessage('');

        // Simulate client-side validation & dispatch delay
        setTimeout(() => {
            setStatus('success');
        }, 1000);
    };

    return (
        <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)' }}>
            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(39, 174, 96, 0.1)', color: '#27ae60', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        ✓
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                        Message Received
                    </h3>
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.6, marginBottom: '24px' }}>
                        Thank you, <strong>{name}</strong>. Our concierge desk has logged your inquiry and will reach out to <strong>{email}</strong> shortly.
                    </p>
                    <button
                        onClick={() => { setStatus('idle'); setName(''); setEmail(''); setPhone(''); setMessage(''); }}
                        className="btn btn-outline"
                    >
                        Send Another Inquiry
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {status === 'error' && (
                        <div style={{ padding: '12px 16px', background: 'rgba(231, 76, 60, 0.1)', color: '#c0392b', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 500 }}>
                            ⚠️ {errorMessage || 'An error occurred. Please check your information and try again.'}
                        </div>
                    )}

                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Full Name *</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={status === 'loading'}
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)', outline: 'none' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Email Address *</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)', outline: 'none' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Phone Number (Optional)</label>
                        <input
                            type="tel"
                            placeholder="Enter your 10-digit mobile number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={status === 'loading'}
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)', outline: 'none' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Message / Voucher Inquiry *</label>
                        <textarea
                            rows={4}
                            placeholder="How can our concierge assist you today?"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={status === 'loading'}
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)', outline: 'none', resize: 'vertical' }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === 'loading'}
                        style={{ width: '100%', padding: '16px', opacity: status === 'loading' ? 0.7 : 1 }}
                    >
                        {status === 'loading' ? 'Transmitting Message...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
}
