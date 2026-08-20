'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [copied, setCopied] = useState(false);

    const generateMailtoUrl = () => {
        const recipient = siteConfig.contacts.conciergeEmail;
        const subject = `DRS Deals Inquiry from ${name.trim()}`;
        const body = `Hello DRS Deals Concierge Team,

I would like to enquire about your curated experiences and memberships.

Here are my details:
• Full Name: ${name.trim()}
• Email Address: ${email.trim()}
• Phone Number: ${phone.trim() || 'Not provided'}

Message / Inquiry:
${message.trim()}

---------------------------------------------
Sent via DRS Deals Concierge Form (www.drsdeals.in)`;

        return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim() || !email.trim() || !message.trim()) {
            setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
            setStatus('error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setErrorMessage('Please provide a valid email address.');
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
        const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        });
    };

    return (
        <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)' }}>
            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '16px 8px' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(188, 144, 68, 0.15)', color: 'var(--color-champagne-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        ✉️
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                        Email Draft Created
                    </h3>
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.6, marginBottom: '20px', maxWidth: '520px', margin: '0 auto 20px auto' }}>
                        We have opened your default email application with your inquiry prefilled to <strong>{siteConfig.contacts.conciergeEmail}</strong>. Simply click <strong>Send</strong> in your email client to dispatch your message.
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
                            style={{ padding: '12px 24px' }}
                        >
                            {copied ? '✓ Details Copied!' : 'Copy Inquiry Details'}
                        </button>
                    </div>

                    <div style={{ padding: '16px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', fontSize: '0.9rem', color: 'var(--color-charcoal-light)', textAlign: 'left', maxWidth: '480px', margin: '0 auto 24px auto' }}>
                        <strong>Prefer to speak with us directly?</strong>
                        <div style={{ marginTop: '6px' }}>
                            Call our concierge hotline: <a href={`tel:${siteConfig.contacts.hotline1Raw}`} style={{ color: 'var(--color-champagne-gold)', fontWeight: 700 }}>{siteConfig.contacts.hotline1}</a> or <a href={`tel:${siteConfig.contacts.hotline2Raw}`} style={{ color: 'var(--color-champagne-gold)', fontWeight: 700 }}>{siteConfig.contacts.hotline2}</a>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={() => { setStatus('idle'); setName(''); setEmail(''); setPhone(''); setMessage(''); }}
                            style={{ background: 'none', border: 'none', color: 'var(--color-charcoal-light)', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}
                        >
                            Write Another Message
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {status === 'error' && (
                        <div style={{ padding: '12px 16px', background: 'rgba(231, 76, 60, 0.1)', color: '#c0392b', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.5 }}>
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
                            aria-label="Full Name"
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
                            aria-label="Email Address"
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)', outline: 'none' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Phone Number (Optional)</label>
                        <input
                            type="tel"
                            placeholder="Enter your contact number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            aria-label="Phone Number"
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)', outline: 'none' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>Message / Experience Inquiry *</label>
                        <textarea
                            rows={4}
                            placeholder="Tell us about the property, dates, or experience you are interested in..."
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            aria-label="Message"
                            style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-stone)', background: 'var(--color-ivory)', outline: 'none', resize: 'vertical' }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '16px', cursor: 'pointer' }}
                    >
                        Send Inquiry via Email
                    </button>
                    
                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-charcoal-light)', margin: 0 }}>
                        Submitting will open your email client pre-addressed to {siteConfig.contacts.conciergeEmail}
                    </p>
                </form>
            )}
        </div>
    );
}
