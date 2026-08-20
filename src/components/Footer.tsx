import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
    return (
        <footer className="site-footer bg-3d-dark text-white">
            <div className="container">
                <div className="footer-grid-layout footer-3d-perspective">
                    <div className="footer-brand footer-3d-item">
                        <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }} aria-label="DRS Deals Homepage">
                            <img
                                src={siteConfig.logo}
                                alt="DRS Deals Logo"
                                width={180}
                                height={48}
                                className="footer-logo-img"
                                style={{ height: '44px', width: 'auto', display: 'block', objectFit: 'contain' }}
                            />
                        </Link>
                        <p className="text-body-small" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', maxWidth: '320px', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            Curating India's finest luxury resort stays, gourmet dining, spa retreats, and family entertainment experiences at exclusive member rates.
                        </p>
                        
                        {/* Direct Contact info */}
                        <div style={{ marginBottom: '24px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                            <div style={{ marginBottom: '6px' }}>
                                Concierge: <a href={`tel:${siteConfig.contacts.hotline1Raw}`} style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 600 }}>{siteConfig.contacts.hotline1}</a>
                            </div>
                            <div>
                                Email: <a href={`mailto:${siteConfig.contacts.conciergeEmail}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>{siteConfig.contacts.conciergeEmail}</a>
                            </div>
                        </div>

                        <div className="social-links-3d">
                            <a href="https://github.com/yashveer-singh-speaks/drs-deals" target="_blank" rel="noopener noreferrer" className="social-3d-coin" aria-label="GitHub Repository">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <Link href="/yashveer-labs" className="social-3d-coin" aria-label="Yashveer Labs">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </Link>
                            <Link href="/yashveer-singh" className="social-3d-coin" aria-label="Yashveer Singh">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </Link>
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
                            <li><Link href="/search">Search Catalog</Link></li>
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
                        <h3 className="footer-heading-3d">Support &amp; Legal</h3>
                        <ul className="footer-list-3d">
                            <li><Link href="/help">Help Center &amp; FAQs</Link></li>
                            <li><Link href="/contact">Contact Concierge</Link></li>
                            <li><Link href="/how-it-works">How It Works</Link></li>
                            <li><Link href="/refunds">Refund Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom-3d">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '24px' }}>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', margin: 0, letterSpacing: '0.02em' }}>&copy; {new Date().getFullYear()} DRS Deals. All rights reserved.</p>
                        </div>
                        
                        <div className="payment-methods-3d">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lock-icon-3d"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon></svg>
                            <span>Verified Concierge Hospitality Coordination</span>
                        </div>
                    </div>
                    
                    {/* The Golden Credit Line */}
                    <div className="golden-credit-wrapper">
                        Website Built by <Link href="/yashveer-singh" className="golden-credit-link">Yashveer Singh</Link> under <Link href="/yashveer-labs" className="golden-credit-link">Yashveer Labs</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
