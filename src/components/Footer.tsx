import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-footer bg-3d-dark text-white">
            <div className="container">
                <div className="footer-grid-layout footer-3d-perspective">
                    <div className="footer-brand footer-3d-item">
                        <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
                            <img src="/logo.png" alt="DRS Deals Logo" width={150} height={42} style={{ height: '40px', width: 'auto', display: 'block' }} />
                        </Link>
                        <p className="text-body-small" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px', maxWidth: '320px', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            Curating India's finest premium experiences. Discover, book, and enjoy exclusive access to luxury resorts, fine dining, and unforgettable entertainment.
                        </p>
                        <div className="social-links-3d">
                            <Link href="#" className="social-3d-coin" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
                            <Link href="#" className="social-3d-coin" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                            <Link href="#" className="social-3d-coin" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></Link>
                        </div>
                    </div>
                    
                    <div className="footer-links footer-3d-item">
                        <h3 className="footer-heading-3d">Discover</h3>
                        <ul className="footer-list-3d">
                            <li><Link href="/experiences/resorts">Resorts &amp; Hotels</Link></li>
                            <li><Link href="/experiences/dining">Fine Dining</Link></li>
                            <li><Link href="/experiences/spa">Spa &amp; Wellness</Link></li>
                            <li><Link href="/experiences/water-parks">Water Parks</Link></li>
                            <li><Link href="/destinations">All Destinations</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links footer-3d-item">
                        <h3 className="footer-heading-3d">Company</h3>
                        <ul className="footer-list-3d">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/partners">Partner With Us</Link></li>
                            <li><Link href="/press">Press &amp; Media</Link></li>
                            <li><Link href="/blog">Editorial Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links footer-3d-item">
                        <h3 className="footer-heading-3d">Support</h3>
                        <ul className="footer-list-3d">
                            <li><Link href="/help">Help Center</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/refunds">Refund Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom-3d">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', margin: 0, letterSpacing: '0.02em' }}>&copy; 2026 DRS Deals. All rights reserved.</p>
                        </div>
                        
                        <div className="payment-methods-3d">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lock-icon-3d"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span>100% Secure Payments</span>
                        </div>
                    </div>
                    
                    {/* The Golden Credit Line */}
                    <div className="golden-credit-wrapper">
                        Built by <Link href="/yashveer-singh" className="golden-credit-link">Yashveer Singh</Link> under <Link href="/yashveer-labs" className="golden-credit-link">Yashveer Labs</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
