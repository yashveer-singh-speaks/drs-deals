'use client';

import React, { useState } from 'react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) return;
        if (status === 'loading') return;

        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
        }, 800);
    };

    return (
        <div>
            {status === 'success' ? (
                <div style={{ padding: '16px', background: 'rgba(39, 174, 96, 0.1)', color: '#27ae60', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 600 }}>
                    ✓ Welcome to the Privileged Circle! Subscription confirmed for {email}.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="newsletter-input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === 'loading'}
                        style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                    >
                        {status === 'loading' ? 'Joining...' : 'Subscribe'}
                    </button>
                </form>
            )}
        </div>
    );
}
