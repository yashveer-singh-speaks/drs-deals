import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer bg-charcoal text-white" style={{ paddingTop: '80px', paddingBottom: '40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="footer-grid-layout" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '48px', 
                    marginBottom: '64px' 
                }}>
                    <div className="footer-brand" style={{ gridColumn: '1 / -1', '@media (minWidth: 768px)': { gridColumn: 'span 2' } }}>
                        <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
                            <span className="logo-brand" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600, color: 'var(--color-ivory)', letterSpacing: '-0.02em' }}>
                                DRS<span style={{ color: 'var(--color-champagne-gold)' }}>✦</span>
                            </span>
                        </Link>
                        <p className="text-body-small" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px', maxWidth: '320px', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            Curating India's finest premium experiences. Discover, book, and enjoy exclusive access to luxury resorts, fine dining, and unforgettable entertainment.
                        </p>
                        <div className="social-links" style={{ display: 'flex', gap: '16px' }}>
                            <Link href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
                            <Link href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                            <Link href="#" aria-label="Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></Link>
                        </div>
                    </div>
                    
                    <div className="footer-links">
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-ivory)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Discover</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li><Link href="/experiences/resorts" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Resorts &amp; Hotels</Link></li>
                            <li><Link href="/experiences/dining" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Fine Dining</Link></li>
                            <li><Link href="/experiences/spa" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Spa &amp; Wellness</Link></li>
                            <li><Link href="/experiences/water-parks" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Water Parks</Link></li>
                            <li><Link href="/destinations" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>All Destinations</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-ivory)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>About Us</Link></li>
                            <li><Link href="/careers" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Careers</Link></li>
                            <li><Link href="/partners" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Partner With Us</Link></li>
                            <li><Link href="/press" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Press &amp; Media</Link></li>
                            <li><Link href="/blog" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Editorial Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-ivory)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li><Link href="/help" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Help Center</Link></li>
                            <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Contact Us</Link></li>
                            <li><Link href="/refunds" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Refund Policy</Link></li>
                            <li><Link href="/terms" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Terms of Service</Link></li>
                            <li><Link href="/privacy" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', margin: 0 }}>&copy; 2026 DRS Deals. All rights reserved.</p>
                        </div>
                        
                        <div className="payment-methods" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', fontWeight: 500 }}>100% Secure Payments</span>
                        </div>
                    </div>
                    
                    {/* User Credit Line */}
                    <div style={{ textAlign: 'center', marginTop: '32px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0.02em' }}>
                        Built by <Link href="/yashveer-singh" className="footer-credit-link" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 500 }}>Yashveer Singh</Link> under <Link href="/yashveer-labs" className="footer-credit-link" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 500 }}>Yashveer Labs</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
