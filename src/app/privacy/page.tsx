import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | DRS Deals (Web & Android App)',
    description: 'Official Privacy Policy for DRS Deals website and Android App (in.drsdeals.app). Learn how we protect, handle, and secure your personal data in compliance with Google Play Developer Policy and Indian DPDP Act.',
    alternates: {
        canonical: 'https://www.drsdeals.in/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '150px', paddingBottom: '90px' }}>
            <div className="container" style={{ maxWidth: '920px' }}>
                {/* Header Badge & Title */}
                <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '14px' }}>
                        OFFICIAL COMPLIANCE &amp; LEGAL DISCLOSURE
                    </div>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', marginBottom: '18px', color: 'var(--color-charcoal)' }}>
                        DRS Deals Privacy Policy
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
                        Governing the DRS Deals Web Platform (<a href="https://www.drsdeals.in" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none' }}>www.drsdeals.in</a>) and the official DRS Deals Android App (Package ID: <code style={{ background: '#F4ECE1', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9rem', color: '#8A6421' }}>in.drsdeals.app</code>).
                    </p>
                    <div style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--color-charcoal-light)', letterSpacing: '0.04em' }}>
                        Last Updated &amp; Verified: November 2026 &bull; Compliant with Google Play Developer Policies &amp; Indian DPDP Act
                    </div>
                </div>

                {/* Main Legal Card */}
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
                    {/* Section 1 */}
                    <section style={{ marginBottom: '36px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '14px', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>1.</span> Entity Overview &amp; Scope
                        </h2>
                        <p style={{ marginBottom: '14px', color: 'var(--color-charcoal-light)' }}>
                            <strong>DRS Deals</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an authorized luxury hospitality concierge and member privilege coordinator headquartered in New Delhi, India. We operate the website <a href="https://www.drsdeals.in" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 600 }}>https://www.drsdeals.in</a> and the official Android mobile application titled <strong>&ldquo;DRS Deals&rdquo;</strong> (Google Play Package Name: <code style={{ background: '#F5EFEB', padding: '2px 6px', borderRadius: '4px', fontSize: '0.88rem' }}>in.drsdeals.app</code>).
                        </p>
                        <p style={{ marginBottom: '14px', color: 'var(--color-charcoal-light)' }}>
                            This Privacy Policy sets forth our firm commitment to safeguarding consumer privacy and personal data in strict compliance with Google Play Developer Program Policies, the Information Technology Act (2000), Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection (DPDP) Act of India.
                        </p>
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '28px 0' }} />

                    {/* Section 2 */}
                    <section style={{ marginBottom: '36px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '14px', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>2.</span> Information We Collect
                        </h2>
                        <p style={{ marginBottom: '14px', color: 'var(--color-charcoal-light)' }}>
                            We strictly limit data collection to the minimum personal data necessary to authenticate users, facilitate concierge reservations, and ensure seamless delivery of hospitality passes:
                        </p>
                        
                        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
                            <div style={{ background: '#FAF8F5', border: '1px solid rgba(197, 168, 128, 0.35)', borderRadius: '12px', padding: '18px 22px' }}>
                                <h3 style={{ fontSize: '1.05rem', margin: '0 0 6px 0', color: '#1C1A18', fontWeight: 700 }}>
                                    A. Personal Identification Data
                                </h3>
                                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-charcoal-light)' }}>
                                    When you create an account, log in using Google Sign-In / Firebase Authentication, or request a voucher, we collect your <strong>Full Name</strong>, <strong>Email Address</strong>, and <strong>Primary Phone Number</strong>. This information is utilized solely to verify membership identity, coordinate bookings, and communicate critical reservation confirmations.
                                </p>
                            </div>

                            <div style={{ background: '#FAF8F5', border: '1px solid rgba(197, 168, 128, 0.35)', borderRadius: '12px', padding: '18px 22px' }}>
                                <h3 style={{ fontSize: '1.05rem', margin: '0 0 6px 0', color: '#1C1A18', fontWeight: 700 }}>
                                    B. Transactions &amp; Deal Privileges History
                                </h3>
                                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-charcoal-light)' }}>
                                    Records of purchased resort memberships, valid digital coupons, concierge inquiries, and redemption history. We <em>do not</em> store credit card, debit card, or UPI PIN credentials on our servers; all electronic payment transactions are processed through certified, RBI-licensed payment gateways.
                                </p>
                            </div>

                            <div style={{ background: '#FAF8F5', border: '1px solid rgba(197, 168, 128, 0.35)', borderRadius: '12px', padding: '18px 22px' }}>
                                <h3 style={{ fontSize: '1.05rem', margin: '0 0 6px 0', color: '#1C1A18', fontWeight: 700 }}>
                                    C. Device, Performance &amp; Diagnostic Data
                                </h3>
                                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-charcoal-light)' }}>
                                    To maintain high app stability and prevent malicious exploitation, the app collects anonymous crash logs, Firebase installation identifiers, device model, and OS version through standard Google Firebase SDK tools.
                                </p>
                            </div>

                            <div style={{ background: '#FAF8F5', border: '1px solid rgba(197, 168, 128, 0.35)', borderRadius: '12px', padding: '18px 22px' }}>
                                <h3 style={{ fontSize: '1.05rem', margin: '0 0 6px 0', color: '#1C1A18', fontWeight: 700 }}>
                                    D. Approximate / Coarse Location
                                </h3>
                                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-charcoal-light)' }}>
                                    With your permission, the DRS Deals Android App may access your coarse/approximate location solely to organize and sort nearby dining, hotel, resort, and waterpark deals for convenient user discovery. <strong>We do not run continuous background tracking, nor do we track user movements over time.</strong>
                                </p>
                            </div>
                        </div>
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '28px 0' }} />

                    {/* Section 3 */}
                    <section style={{ marginBottom: '36px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '14px', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>3.</span> Purpose and Use of Collected Data
                        </h2>
                        <p style={{ marginBottom: '12px', color: 'var(--color-charcoal-light)' }}>
                            Your information is strictly processed for the following legitimate business purposes:
                        </p>
                        <ul style={{ paddingLeft: '20px', color: 'var(--color-charcoal-light)', marginBottom: '14px' }}>
                            <li style={{ marginBottom: '8px' }}>Authenticating user profiles via Google Firebase Authentication.</li>
                            <li style={{ marginBottom: '8px' }}>Coordinating and validating member privileges, room nights, and dining vouchers at partner properties (e.g., Wyndham Garden, Oren Kasauli, SK Premium, etc.).</li>
                            <li style={{ marginBottom: '8px' }}>Providing dedicated concierge assistance and answering booking inquiries via phone, email, or WhatsApp.</li>
                            <li style={{ marginBottom: '8px' }}>Detecting, diagnosing, and mitigating technical bugs, app crashes, and unauthorized access.</li>
                            <li style={{ marginBottom: '8px' }}>Fulfilling statutory tax and commercial invoicing requirements under Indian law.</li>
                        </ul>
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '28px 0' }} />

                    {/* Section 4 */}
                    <section style={{ marginBottom: '36px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '14px', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>4.</span> Non-Disclosure &amp; Third-Party Sharing Policy
                        </h2>
                        <div style={{ background: 'rgba(34, 197, 94, 0.08)', borderLeft: '4px solid #16A34A', padding: '16px 20px', borderRadius: '8px', marginBottom: '16px' }}>
                            <strong style={{ color: '#166534', fontSize: '1rem', display: 'block', marginBottom: '4px' }}>
                                We Never Sell User Data
                            </strong>
                            <p style={{ margin: 0, fontSize: '0.92rem', color: '#14532D' }}>
                                DRS Deals strictly does NOT sell, rent, monetize, broker, or trade personal data to advertising networks, data aggregators, or unsolicited marketing agencies.
                            </p>
                        </div>
                        <p style={{ marginBottom: '12px', color: 'var(--color-charcoal-light)' }}>
                            Data is shared solely under the following limited and transparent circumstances:
                        </p>
                        <ul style={{ paddingLeft: '20px', color: 'var(--color-charcoal-light)' }}>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Partner Hospitality Properties:</strong> When you initiate a reservation or voucher redemption, your guest name and booking details are securely transmitted to the relevant resort or restaurant to verify room and dining privileges.
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Essential Service Providers:</strong> Google Firebase (for backend authentication, cloud database, and crash analytics) operating under strict corporate confidentiality standards.
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <strong>Legal &amp; Regulatory Compliance:</strong> If mandated by formal summons, court decree, or law enforcement authorities under prevailing Indian statutes.
                            </li>
                        </ul>
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '28px 0' }} />

                    {/* Section 5 */}
                    <section style={{ marginBottom: '36px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '14px', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>5.</span> Data Security &amp; Encryption Standards
                        </h2>
                        <p style={{ marginBottom: '14px', color: 'var(--color-charcoal-light)' }}>
                            All communications between our Android app, web platform, and cloud servers are encrypted in transit using industry-standard <strong>Transport Layer Security (TLS 1.3 / HTTPS)</strong> protocols. Data stored at rest is guarded behind role-based access controls, firewalls, and modern cloud security infrastructure managed under Google Cloud / Firebase enterprise protocols.
                        </p>
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '28px 0' }} />

                    {/* Section 6 */}
                    <section style={{ marginBottom: '36px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '14px', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>6.</span> Data Retention &amp; User Deletion Rights
                        </h2>
                        <p style={{ marginBottom: '14px', color: 'var(--color-charcoal-light)' }}>
                            We retain personal data only for as long as your account remains active or as required to fulfill hospitality obligations. You have the full right to inspect, correct, export, or permanently delete your account and associated personal data at any time.
                        </p>
                        <p style={{ marginBottom: '14px', color: 'var(--color-charcoal-light)' }}>
                            In accordance with Google Play&apos;s Account Deletion Policy, users can request instant account and data removal directly within the Android App (via <em>Profile &gt; Settings &gt; Account Security</em>) or online via our dedicated self-serve deletion request page:
                        </p>
                        <div style={{ marginTop: '16px' }}>
                            <Link 
                                href="/delete-account" 
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    background: '#1C1A18',
                                    color: '#E2CFB4',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '0.92rem',
                                    border: '1px solid #C5A880'
                                }}
                            >
                                <span>Go to Account &amp; Data Deletion Page &rarr;</span>
                            </Link>
                        </div>
                    </section>

                    <div style={{ height: '1px', background: 'var(--color-stone)', margin: '28px 0' }} />

                    {/* Section 7 */}
                    <section style={{ marginBottom: '16px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.45rem', marginBottom: '14px', color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-champagne-gold)' }}>7.</span> Grievance Officer &amp; Support Contact
                        </h2>
                        <p style={{ marginBottom: '16px', color: 'var(--color-charcoal-light)' }}>
                            If you have questions, feedback, or grievance redressal requests regarding our data handling practices or this policy, please reach out directly to our designated compliance desk:
                        </p>
                        
                        <div style={{ background: '#FAF8F5', border: '1px solid var(--color-stone)', borderRadius: '12px', padding: '20px 24px' }}>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>Entity:</strong> DRS Deals
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>Official Support Email:</strong>{' '}
                                <a href="mailto:drsdeals.in@gmail.com" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600, textDecoration: 'none' }}>
                                    drsdeals.in@gmail.com
                                </a>{' '}
                                (or{' '}
                                <a href="mailto:Info@drsdeals.in" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600, textDecoration: 'none' }}>
                                    Info@drsdeals.in
                                </a>)
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>Concierge Phone Hotline:</strong>{' '}
                                <a href="tel:+919811120892" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600, textDecoration: 'none' }}>
                                    +91 98111 20892
                                </a>
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <strong>Headquarters:</strong> B 14 UGF, DRS Building, Gulab Bagh, Pillar No. 725, Near Nawada Metro Station, New Delhi 110059, India
                            </div>
                            <div style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--color-charcoal-light)' }}>
                                Official Website: <a href="https://www.drsdeals.in" style={{ color: 'var(--color-charcoal)', fontWeight: 600 }}>https://www.drsdeals.in</a> &bull; Android App Package ID: <code style={{ color: '#8A6421' }}>in.drsdeals.app</code>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Bottom navigation links */}
                <div style={{ marginTop: '28px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                    <Link href="/delete-account" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 600 }}>
                        &bull; Account &amp; Data Deletion Request
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
