'use client';

import React, { useState } from 'react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) return;
        if (status === 'loading') return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus('success');
            } else {
                setErrorMessage(data.error || 'Failed to subscribe. Please try again.');
                setStatus('error');
            }
        } catch (err) {
            console.error('Newsletter subscription error:', err);
            setErrorMessage('Network error. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div>
            {status === 'success' ? (
                <div style={{ padding: '16px', background: 'rgba(39, 174, 96, 0.15)', color: '#27ae60', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 600, border: '1px solid rgba(39, 174, 96, 0.3)' }}>
                    ✓ Welcome to the Privileged Circle! Subscription confirmed for {email}.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="newsletter-form">
                    {status === 'error' && (
                        <div style={{ width: '100%', marginBottom: '8px', padding: '8px 12px', background: 'rgba(231, 76, 60, 0.2)', color: '#ff6b6b', borderRadius: '6px', fontSize: '0.85rem' }}>
                            {errorMessage || 'Failed to subscribe.'}
                        </div>
                    )}
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="newsletter-input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        aria-label="Email address for newsletter"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === 'loading'}
                        style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                    >
                        {status === 'loading' ? 'Joining...' : 'Subscribe'}
                    </button>
                </form>
            )}
        </div>
    );
}
