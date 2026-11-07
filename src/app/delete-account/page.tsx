'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DeleteAccountPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: '',
        confirmation: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct mailto link as direct fallback so user's client opens with full details
        const subject = encodeURIComponent(`Account Deletion Request - ${formData.phone || formData.email}`);
        const body = encodeURIComponent(
            `DRS Deals Account Deletion Request\n\n` +
            `Full Name: ${formData.name}\n` +
            `Registered Email: ${formData.email}\n` +
            `Primary Phone: ${formData.phone}\n` +
            `Reason / Additional Feedback: ${formData.reason || 'None provided'}\n\n` +
            `I hereby confirm my request to permanently delete my DRS Deals account and all associated personal data from the Android app (in.drsdeals.app) and website.`
        );
        
        window.location.href = `mailto:drsdeals.in@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '150px', paddingBottom: '90px' }}>
            <div className="container" style={{ maxWidth: '920px' }}>
                {/* Header Badge & Title */}
                <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '14px' }}>
                        USER DATA GOVERNANCE &amp; ACCOUNT MANAGEMENT
                    </div>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.1rem)', marginBottom: '18px', color: 'var(--color-charcoal)' }}>
                        DRS Deals &mdash; Account &amp; Data Deletion Request
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ maxWidth: '740px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
                        Self-service guidelines and online request portal for users of the official <strong>DRS Deals Android App</strong> (Package ID: <code style={{ background: '#F4ECE1', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9rem', color: '#8A6421' }}>in.drsdeals.app</code>) and web platform (<a href="https://www.drsdeals.in" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none' }}>www.drsdeals.in</a>).
                    </p>
                    <div style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--color-charcoal-light)', letterSpacing: '0.04em' }}>
                        In full compliance with Google Play Developer Policy on Account Deletion &bull; DPDP Act India
                    </div>
                </div>

                {/* Main Content Card */}
                <div 
                    className="bg-white shadow-soft" 
                    style={{ 
                        borderRadius: '20px', 
                        padding: 'clamp(28px, 4vw, 52px)', 
                        border: '1px solid var(--color-stone)', 
                        color: 'var(--color-charcoal)', 
                        lineHeight: 1.8 
                    }}
                >
                    {/* Method 1: In-App Self Service */}
                    <section style={{ marginBottom: '36px' }}>
                        <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(188, 144, 68, 0.15)', color: '#8A6421', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '12px' }}>
                            METHOD 1 &bull; INSTANT IN-APP DELETION (RECOMMENDED)
                        </div>
                        <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--color-charcoal)' }}>
                            Delete Account Directly from the Android App
                        </h2>
                        <p style={{ marginBottom: '16px', color: 'var(--color-charcoal-light)' }}>
                            If you have the <strong>DRS Deals</strong> application installed on your Android smartphone or tablet, you can execute a full, instant account deletion without waiting for manual verification:
                        </p>

                        <div style={{ display: 'grid', gap: '12px', margin: '16px 0' }}>
                            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#FAF8F5', padding: '14px 18px', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#1C1A18', color: '#D4A857', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.88rem', flexShrink: 0 }}>
                                    1
                                </div>
                                <div style={{ fontSize: '0.94rem' }}>
                                    <strong>Launch the App:</strong> Open the <em>DRS Deals</em> app (<code style={{ color: '#8A6421' }}>in.drsdeals.app</code>) and ensure you are logged into your account.
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#FAF8F5', padding: '14px 18px', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#1C1A18', color: '#D4A857', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.88rem', flexShrink: 0 }}>
                                    2
                                </div>
                                <div style={{ fontSize: '0.94rem' }}>
                                    <strong>Open Security Settings:</strong> Navigate to the <strong>Profile</strong> tab &rarr; tap <strong>Settings</strong> &rarr; select <strong>Account Security</strong>.
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#FAF8F5', padding: '14px 18px', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#1C1A18', color: '#D4A857', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.88rem', flexShrink: 0 }}>
                                    3
                                </div>
                                <div style={{ fontSize: '0.94rem' }}>
                                    <strong>Confirm Permanent Removal:</strong> Tap <strong>&ldquo;Delete Account&rdquo;</strong>, review the deletion summary, and verify with your registered one-time passcode (OTP) or authentication prompt.
                                </div>
                            </div>
                        </div>
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '32px 0' }} />

                    {/* Method 2: Web / Email Request Portal */}
                    <section style={{ marginBottom: '36px' }}>
                        <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(28, 26, 24, 0.08)', color: '#1C1A18', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '12px' }}>
                            METHOD 2 &bull; WEB &amp; EMAIL REQUEST FORM
                        </div>
                        <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--color-charcoal)' }}>
                            Submit an Online Account &amp; Data Deletion Request
                        </h2>
                        <p style={{ marginBottom: '18px', color: 'var(--color-charcoal-light)' }}>
                            If you have uninstalled the application or cannot access your device, submit the form below. It prepares an official deletion instruction directly to our privacy desk at <a href="mailto:drsdeals.in@gmail.com" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>drsdeals.in@gmail.com</a>.
                        </p>

                        {submitted ? (
                            <div style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid #16A34A', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#16A34A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontSize: '1.4rem' }}>
                                    &check;
                                </div>
                                <h3 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', color: '#14532D' }}>
                                    Deletion Request Initiated
                                </h3>
                                <p style={{ fontSize: '0.92rem', color: '#166534', margin: '0 0 14px 0' }}>
                                    Your email client has been opened with your pre-filled deletion request addressed to <strong>drsdeals.in@gmail.com</strong>. If your email client did not launch automatically, please email us directly with the subject:
                                    <br />
                                    <strong style={{ color: '#14532D' }}>Account Deletion Request - {formData.phone || formData.email}</strong>
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    style={{
                                        padding: '8px 18px',
                                        background: '#16A34A',
                                        color: '#FFFFFF',
                                        border: 'none',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        fontWeight: 600
                                    }}
                                >
                                    Submit Another Request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ background: '#FAF8F5', border: '1px solid var(--color-stone)', borderRadius: '14px', padding: 'clamp(20px, 3vw, 32px)' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                                    <div>
                                        <label htmlFor="name" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: '#1C1A18' }}>
                                            Full Name *
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="As registered on DRS Deals"
                                            style={{
                                                width: '100%',
                                                padding: '10px 14px',
                                                borderRadius: '8px',
                                                border: '1px solid var(--color-stone)',
                                                background: '#FFFFFF',
                                                fontSize: '0.92rem'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: '#1C1A18' }}>
                                            Registered Email Address *
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="youremail@example.com"
                                            style={{
                                                width: '100%',
                                                padding: '10px 14px',
                                                borderRadius: '8px',
                                                border: '1px solid var(--color-stone)',
                                                background: '#FFFFFF',
                                                fontSize: '0.92rem'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <label htmlFor="phone" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: '#1C1A18' }}>
                                        Primary Phone Number (Registered with App / Deals) *
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+91 98111 XXXXX"
                                        style={{
                                            width: '100%',
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--color-stone)',
                                            background: '#FFFFFF',
                                            fontSize: '0.92rem'
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <label htmlFor="reason" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px', color: '#1C1A18' }}>
                                        Reason for Deletion (Optional feedback)
                                    </label>
                                    <textarea
                                        id="reason"
                                        rows={3}
                                        value={formData.reason}
                                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                        placeholder="Let us know how we could improve our services..."
                                        style={{
                                            width: '100%',
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--color-stone)',
                                            background: '#FFFFFF',
                                            fontSize: '0.92rem',
                                            resize: 'vertical'
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: '22px' }}>
                                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--color-charcoal)', cursor: 'pointer' }}>
                                        <input
                                            type="checkbox"
                                            required
                                            checked={formData.confirmation}
                                            onChange={(e) => setFormData({ ...formData, confirmation: e.target.checked })}
                                            style={{ marginTop: '4px' }}
                                        />
                                        <span>
                                            I understand that deleting my account permanently erases my active vouchers, member access, profile data, and session tokens across the DRS Deals Android App and website.
                                        </span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '12px 28px',
                                        background: '#1C1A18',
                                        color: '#FAF8F5',
                                        border: '1px solid #C5A880',
                                        borderRadius: '8px',
                                        fontSize: '0.94rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <span>Transmit Deletion Request</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                                </button>
                            </form>
                        )}
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '32px 0' }} />

                    {/* What Data is Deleted vs. Retained */}
                    <section style={{ marginBottom: '36px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--color-charcoal)' }}>
                            Data Categories: Deletion vs. Retention Policy
                        </h2>
                        <p style={{ marginBottom: '16px', color: 'var(--color-charcoal-light)' }}>
                            In compliance with Google Play Developer Policy and Indian data protection regulations, we are fully transparent regarding what happens to your data upon deletion request:
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                            <div style={{ background: '#FAF8F5', border: '1px solid #EF4444', borderTop: '4px solid #EF4444', borderRadius: '12px', padding: '20px' }}>
                                <h3 style={{ fontSize: '1.05rem', color: '#991B1B', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span>&cross;</span> Permanently &amp; Immediately Deleted
                                </h3>
                                <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                                    <li>User profile credentials &amp; login records.</li>
                                    <li>Registered primary phone number and email address.</li>
                                    <li>Firebase Auth user record &amp; UID.</li>
                                    <li>Device push notification tokens &amp; installation identifiers.</li>
                                    <li>Active unredeemed vouchers, saved favorites, and in-app preferences.</li>
                                </ul>
                            </div>

                            <div style={{ background: '#FAF8F5', border: '1px solid #C5A880', borderTop: '4px solid #C5A880', borderRadius: '12px', padding: '20px' }}>
                                <h3 style={{ fontSize: '1.05rem', color: '#8A6421', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span>&check;</span> Legally Retained / Anonymized
                                </h3>
                                <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                                    <li>
                                        <strong>Statutory Tax / Financial Invoices:</strong> Payment receipts and GST transaction ledgers must be retained strictly for the duration mandated by Indian fiscal laws (e.g., GST / Income Tax Act).
                                    </li>
                                    <li>
                                        <strong>Historical Redemption Proof:</strong> Redacted, anonymized logs confirming past hotel/resort check-ins strictly to prevent fraudulent chargebacks.
                                    </li>
                                    <li>
                                        All retained records are stripped of active credentials and purged once the statutory retention window expires.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '32px 0' }} />

                    {/* Processing Timeline & Support Assistance */}
                    <section>
                        <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--color-charcoal)' }}>
                            Turnaround Timeline &amp; Assistance Desk
                        </h2>
                        <p style={{ marginBottom: '16px', color: 'var(--color-charcoal-light)' }}>
                            &bull; <strong>In-App Deletions:</strong> Processed instantaneously.<br />
                            &bull; <strong>Web &amp; Email Deletions:</strong> Reviewed, verified, and completed within <strong>7 business days</strong>. A written confirmation will be delivered to your registered email address upon completion.
                        </p>

                        <div style={{ background: '#FAF8F5', border: '1px solid var(--color-stone)', borderRadius: '12px', padding: '18px 22px' }}>
                            <div style={{ fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '6px' }}>
                                Need Immediate Deletion Assistance? Contact Our Concierge:
                            </div>
                            <div style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                                Official Email: <a href="mailto:drsdeals.in@gmail.com" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600, textDecoration: 'none' }}>drsdeals.in@gmail.com</a> (or <a href="mailto:Info@drsdeals.in" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600, textDecoration: 'none' }}>Info@drsdeals.in</a>)<br />
                                Concierge Hotline: <a href="tel:+919811120892" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600, textDecoration: 'none' }}>+91 98111 20892</a><br />
                                Entity: <strong>DRS Deals</strong>, B 14 UGF, DRS Building, Gulab Bagh, New Delhi 110059, India
                            </div>
                        </div>
                    </section>
                </div>

                {/* Bottom link back to Privacy Policy */}
                <div style={{ marginTop: '28px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                    <Link href="/privacy" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 600 }}>
                        &bull; Review Full DRS Deals Privacy Policy
                    </Link>
                    <Link href="/terms" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 600 }}>
                        &bull; Terms of Service
                    </Link>
                    <Link href="/contact" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 600 }}>
                        &bull; Contact Concierge Desk
                    </Link>
                </div>
            </div>
        </main>
    );
}
