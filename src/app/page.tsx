import PartnerMarquee from '@/components/PartnerMarquee';
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';
import NewsletterForm from '@/components/NewsletterForm';
import CubeSteps from '@/components/CubeSteps';
import HoneycombFeatures from '@/components/HoneycombFeatures';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: 'DRS Deals | Premium Leisure, Dining & Resort Experiences across India',
    description: 'Since 2003, DRS Deals has curated India’s finest luxury resorts, fine dining, spa retreats, and water park passes across 50+ cities at exclusive member rates.',
    alternates: {
        canonical: 'https://www.drsdeals.in/',
    },
    openGraph: {
        images: [siteConfig.socialImage],
    },
};

export default function Home() {
    return (
        <main>
            {/* HERO SECTION */}
            <section className="hero">
                {/* DESKTOP HERO (Laptops, Desktops & Large Screens >= 1024px) */}
                <div className="hero-desktop-wrapper">
                    <div className="hero-content">
                        <div className="hero-eyebrow">PREMIUM LEISURE &amp; DINING PRIVILEGES</div>
                        <h1 className="hero-title">
                            More Experiences. <br />
                            More Memories. <br />
                            <span className="text-gold">For Less.</span>
                        </h1>
                        <p className="hero-desc text-body-large">
                            Exclusive member privileges on luxury resort stays, gourmet dining, spa retreats &amp; family leisure across 50+ cities in India.
                        </p>
                        <div className="hero-actions">
                            <Link href="/explore" className="btn btn-primary">
                                Explore 240+ Offers 
                                <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                            <Link href="/how-it-works" className="link-arrow">
                                How It Works
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                        </div>

                        <div className="hero-trust-grid">
                            <div className="trust-item">
                                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"/><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.5-6.9A2 2 0 0016.7 4H7.3a2 2 0 00-1.8 1.1z"/></svg>
                                <span className="trust-label">240+<br />Curated Offers</span>
                            </div>
                            <div className="trust-item">
                                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                                <span className="trust-label">1,000+<br />Partners</span>
                            </div>
                            <div className="trust-item">
                                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <span className="trust-label">4.9 ★<br />Member Rating</span>
                            </div>
                            <div className="trust-item">
                                <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                                <span className="trust-label">Direct<br />Concierge</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MOBILE HERO (Phones & Tablets < 1024px) */}
                <div className="hero-mobile-wrapper">
                    <div className="hero-mobile-stage">
                        <div className="hero-mobile-text">
                            <div className="hero-eyebrow">PREMIUM LEISURE &amp; DINING PRIVILEGES</div>
                            <h1 className="hero-title">
                                More Experiences. <br />
                                More Memories. <br />
                                <span className="text-gold">For Less.</span>
                            </h1>
                            <p className="hero-desc text-body-large">
                                Exclusive member privileges on luxury resort stays, gourmet dining, spa retreats &amp; family leisure across 50+ cities in India.
                            </p>
                            <div className="hero-actions">
                                <Link href="/explore" className="btn btn-primary">
                                    Explore 240+ Offers 
                                    <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </Link>
                                <Link href="/how-it-works" className="link-arrow">
                                    How It Works
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="hero-mobile-trust-list">
                        <div className="mobile-trust-row">
                            <div className="mobile-trust-left">
                                <div className="mobile-trust-icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <div>
                                    <div className="mobile-trust-title">TRUSTED PARTNERS</div>
                                    <div className="mobile-trust-sub">Curated luxury with 5-star hotel &amp; resort partners</div>
                                </div>
                            </div>
                            <div className="mobile-trust-arrow">&rsaquo;</div>
                        </div>

                        <div className="mobile-trust-row">
                            <div className="mobile-trust-left">
                                <div className="mobile-trust-icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                </div>
                                <div>
                                    <div className="mobile-trust-title">WIDE DESTINATIONS</div>
                                    <div className="mobile-trust-sub">Top verified spots across 50+ Indian cities</div>
                                </div>
                            </div>
                            <div className="mobile-trust-arrow">&rsaquo;</div>
                        </div>

                        <div className="mobile-trust-row">
                            <div className="mobile-trust-left">
                                <div className="mobile-trust-icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                </div>
                                <div>
                                    <div className="mobile-trust-title">MORE VALUE</div>
                                    <div className="mobile-trust-sub">Save more on every stay, dinner &amp; holiday pass</div>
                                </div>
                            </div>
                            <div className="mobile-trust-arrow">&rsaquo;</div>
                        </div>

                        <div className="mobile-trust-row">
                            <div className="mobile-trust-left">
                                <div className="mobile-trust-icon-box">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                                </div>
                                <div>
                                    <div className="mobile-trust-title">PRIVILEGE HELP</div>
                                    <div className="mobile-trust-sub">24/7 dedicated concierge assistance</div>
                                </div>
                            </div>
                            <div className="mobile-trust-arrow">&rsaquo;</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BRAND COLLABORATIONS & TIE-UPS MARQUEE */}
            <PartnerMarquee />

            {/* FEATURED EXPERIENCES */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <div className="hero-eyebrow" style={{ marginBottom: '8px' }}>CURATED MEMBERSHIPS</div>
                            <h2 className="section-title">Featured Experiences</h2>
                        </div>
                        <Link href="/deals" className="link-arrow">View All Deals <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                    
                    <div className="deal-grid">
                        {/* Card 1 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 1).webp" 
                                    alt="Wyndham Garden Sonipat Murthal Five Star Membership" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">5-STAR VIP</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Sonipat Murthal</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Wyndham Garden Hotel Membership</h3>
                                <div className="deal-partner">Wyndham Garden</div>
                                <div className="deal-price-row">
                                    <div className="price-original">Value ₹45k</div>
                                    <div className="price-deal">Exclusive Rates</div>
                                </div>
                                <Link href="/deals/wyndham-garden-sonipat-murthal" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 2).webp" 
                                    alt="Hotel SK Premium Membership Ghaziabad" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">COMPLIMENTARY NIGHT</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Ghaziabad</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Hotel SK Premium Membership</h3>
                                <div className="deal-partner">Hotel SK Premium</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹40,000</div>
                                    <div className="price-deal">₹5,000</div>
                                </div>
                                <Link href="/deals/hotel-sk-premium-ghaziabad" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 3).webp" 
                                    alt="Oren Kasauli Membership Card" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">2 NIGHTS FREE</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Kasauli</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Oren Kasauli Membership Card</h3>
                                <div className="deal-partner">Oren Kasauli</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹50,000</div>
                                    <div className="price-deal">₹10,000</div>
                                </div>
                                <Link href="/deals/oren-kasauli-membership" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 4).webp" 
                                    alt="Atma Yog Luxury Manor Manali" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">3 NIGHTS FREE</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Manali</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Atma Yog Luxury Manor</h3>
                                <div className="deal-partner">Atma Yog Manor</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹50,000</div>
                                    <div className="price-deal">₹8,999</div>
                                </div>
                                <Link href="/deals/atmayog-luxury-manor-manali" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 5).webp" 
                                    alt="The White Flower Resorts Mussoorie & Corbett" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">2 DESTINATIONS</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Mussoorie &amp; Corbett</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">The White Flower Resorts</h3>
                                <div className="deal-partner">The White Flower</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹50,000</div>
                                    <div className="price-deal">₹7,999</div>
                                </div>
                                <Link href="/deals/white-flower-resorts-mussoorie-corbett" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="deal-card">
                            <div className="deal-img-wrapper">
                                <img 
                                    src="/images/webp/Featured Experiences Section (Card 6).webp" 
                                    alt="Rangmanch Farms Day Outing" 
                                    width={380} 
                                    height={240} 
                                    loading="lazy" 
                                />
                                <div className="deal-badge">80+ ACTIVITIES</div>
                            </div>
                            <div className="deal-content">
                                <div className="deal-meta">
                                    <span className="deal-location">Gurgaon</span>
                                    <span className="deal-rating">★ 4.9 Verified</span>
                                </div>
                                <h3 className="deal-title">Rangmanch Farms Day Outing</h3>
                                <div className="deal-partner">Rangmanch Farms</div>
                                <div className="deal-price-row">
                                    <div className="price-original">₹1,500</div>
                                    <div className="price-deal">&lt; ₹1,500</div>
                                </div>
                                <Link href="/deals/rangmanch-farms-gurgaon" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>Enquire Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW DRS DEALS WORKS */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="section-header text-center justify-center">
                        <h2 className="section-title" style={{ marginBottom: '8px' }}>How It Works</h2>
                        <p className="text-body-large">A seamless 4-step concierge journey to your next luxury escape.</p>
                    </div>
                    
                    <CubeSteps />
                </div>
            </section>

            {/* WHY DRS DEALS EXISTS */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <div className="hero-eyebrow" style={{ marginBottom: '12px' }}>OUR 23-YEAR HERITAGE</div>
                            <h2 className="section-title" style={{ marginBottom: '24px' }}>Why DRS Deals Exists</h2>
                            <p className="text-body-large" style={{ marginBottom: '24px' }}>
                                Founded in 2003, DRS Deals has spent over two decades pioneering premium hospitality memberships across India, connecting more than 2 million happy guests with 1,000+ luxury partner venues.
                            </p>
                            <p className="text-body-small text-charcoal-light" style={{ marginBottom: '32px', lineHeight: 1.7 }}>
                                We negotiate directly with 5-star hotels, luxury resorts, gourmet restaurants, and entertainment destinations across 50+ cities, securing exclusive privileges while delivering over ₹1 Billion in savings to our discerning members.
                            </p>
                            <Link href="/about" className="btn btn-outline">Read Our 23-Year Story</Link>
                        </div>
                        <div className="story-visual">
                            <img 
                                src="/images/webp/Why DRS Deals Exists Section.webp" 
                                alt="Guests enjoying a premium vacation" 
                                className="rounded-lg shadow-soft" 
                                width={560} 
                                height={400} 
                                loading="lazy" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST GRID */}
            <section className="section-padding bg-white">
                <div className="container text-center">
                    <h2 className="section-title" style={{ marginBottom: '48px' }}>Why Guests Choose DRS Deals</h2>
                    <HoneycombFeatures />
                </div>
            </section>

            {/* PARTNER SPOTLIGHT */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <h3 className="text-eyebrow" style={{ marginBottom: '24px', textAlign: 'center' }}>Featured Destination Spotlight</h3>
                    <div className="spotlight-card rounded-lg shadow-soft">
                        <img 
                            src="/images/webp/Featured Experiences Section (Card 1).webp" 
                            alt="Wyndham Garden Sonipat Murthal" 
                            className="spotlight-img" 
                            width={1140} 
                            height={450} 
                            loading="lazy"
                            style={{ objectPosition: 'center 60%' }}
                        />
                        <div className="spotlight-content bg-white">
                            <h2 className="section-title" style={{ marginBottom: '16px' }}>Wyndham Garden Sonipat Murthal</h2>
                            <p className="text-body-large" style={{ marginBottom: '24px' }}>Five Star Hotel & Resort</p>
                            <p className="text-body-small text-charcoal-light" style={{ marginBottom: '32px', lineHeight: 1.7 }}>
                                Enjoy exclusive member rates and privileges for luxury stays, gourmet dining, and leisure escapes at Wyndham Garden Sonipat Murthal, Haryana.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <Link href="/deals/wyndham-garden-sonipat-murthal" className="btn btn-primary">View Details & Booking</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORIES & CITIES */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Explore by Category</h2>
                    </div>
                    
                    <div className="category-grid">
                        <Link href="/experiences/resorts" className="category-card">
                            <img 
                                src="/images/webp/Explore by Category Section (Resorts Category Tile).webp" 
                                alt="Resorts" 
                                width={360} 
                                height={240} 
                                loading="lazy" 
                            />
                            <div className="category-overlay">
                                <h3 className="category-title">Resorts</h3>
                            </div>
                        </Link>
                        <Link href="/experiences/dining" className="category-card">
                            <img 
                                src="/images/webp/Explore by Category Section (Dining Category Tile).webp" 
                                alt="Dining" 
                                width={360} 
                                height={240} 
                                loading="lazy" 
                            />
                            <div className="category-overlay">
                                <h3 className="category-title">Dining</h3>
                            </div>
                        </Link>
                        <Link href="/experiences/spa" className="category-card">
                            <img 
                                src="/images/webp/Explore by Category Section (Spa Category Tile).webp" 
                                alt="Spa &amp; Wellness" 
                                width={360} 
                                height={240} 
                                loading="lazy" 
                            />
                            <div className="category-overlay">
                                <h3 className="category-title">Spa &amp; Wellness</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="section-header" style={{ marginTop: '64px' }}>
                        <h2 className="section-title">Serving 50+ Cities Across India</h2>
                        <Link href="/destinations" className="link-arrow">View All Locations <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                    </div>
                    
                    <div className="cities-grid">
                        <Link href="/destinations/delhi" className="city-card">
                            <img 
                                src="/images/webp/Cities We Serve Section (Delhi NCR Tile).webp" 
                                alt="Delhi NCR" 
                                width={260} 
                                height={180} 
                                loading="lazy" 
                            />
                            <div className="city-name">Delhi NCR</div>
                        </Link>
                        <Link href="/destinations/jaipur" className="city-card">
                            <img 
                                src="/images/webp/Cities We Serve Section (Jaipur Tile).webp" 
                                alt="Jaipur" 
                                width={260} 
                                height={180} 
                                loading="lazy" 
                            />
                            <div className="city-name">Jaipur</div>
                        </Link>
                        <Link href="/destinations/mumbai" className="city-card">
                            <img 
                                src="/images/webp/Cities We Serve Section (Punjab Tile).webp" 
                                alt="Mumbai" 
                                width={260} 
                                height={180} 
                                loading="lazy" 
                            />
                            <div className="city-name">Mumbai</div>
                        </Link>
                        <Link href="/destinations" className="city-card">
                            <img 
                                src="/images/webp/Cities We Serve Section (Ahmedabad Tile).webp" 
                                alt="All Locations" 
                                width={260} 
                                height={180} 
                                loading="lazy" 
                            />
                            <div className="city-name">All 50+ Locations</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* POPULAR SEARCHES & FEATURED COLLECTIONS */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="split-grid">
                        <div>
                            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Popular Searches</h3>
                            <ul className="link-list">
                                <li><Link href="/search?q=water+parks">Water parks near Delhi NCR</Link></li>
                                <li><Link href="/search?q=weekend+resorts">Weekend luxury resorts</Link></li>
                                <li><Link href="/search?q=luxury+spa">Luxury wellness spas</Link></li>
                                <li><Link href="/search?q=dining">Fine dining chef tasting menus</Link></li>
                                <li><Link href="/search?q=farmhouse">Farmhouse day retreats</Link></li>
                                <li><Link href="/search?q=murthal">Sonipat Murthal hotel stays</Link></li>
                                <li><Link href="/search?q=corporate">Corporate retreats &amp; events</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Featured Collections</h3>
                            <div className="collection-list">
                                <Link href="/collections/weekend" className="collection-item">
                                    <img 
                                        src="/images/webp/Featured Collections Section (Weekend Escapes Thumbnail).webp" 
                                        alt="Weekend Escapes" 
                                        width={80} 
                                        height={80} 
                                        loading="lazy" 
                                    />
                                    <span>Weekend Escapes</span>
                                </Link>
                                <Link href="/collections/couples" className="collection-item">
                                    <img 
                                        src="/images/webp/Featured Collections Section (Romantic Getaways Thumbnail).webp" 
                                        alt="Romantic Getaways" 
                                        width={80} 
                                        height={80} 
                                        loading="lazy" 
                                    />
                                    <span>Romantic Getaways</span>
                                </Link>
                                <Link href="/collections/family" className="collection-item">
                                    <img 
                                        src="/images/webp/Featured Collections Section (Family Fun Thumbnail).webp" 
                                        alt="Family Fun" 
                                        width={80} 
                                        height={80} 
                                        loading="lazy" 
                                    />
                                    <span>Family Outings</span>
                                </Link>
                                <Link href="/collections/corporate" className="collection-item">
                                    <img 
                                        src="/images/webp/Featured Collections Section (Luxury Dining Thumbnail).webp" 
                                        alt="Corporate Experiences" 
                                        width={80} 
                                        height={80} 
                                        loading="lazy" 
                                    />
                                    <span>Corporate Experiences</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SAVINGS CALCULATOR */}
            <SavingsCalculator />

            {/* BUSINESS PARTNER SECTION */}
            <section className="section-padding bg-ivory text-charcoal text-center">
                <div className="container">
                    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                        <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '12px', color: 'var(--color-champagne-gold)' }}>
                            VENUE PARTNERSHIPS
                        </div>
                        <h2 className="section-title text-charcoal" style={{ marginBottom: '20px' }}>Join 1,000+ Premium Venue Partners</h2>
                        <p className="text-body-large text-charcoal-light" style={{ marginBottom: '32px', lineHeight: 1.7 }}>
                            Partner with DRS Deals to feature your resort, fine dining venue, or leisure property before an audience of over 2 million discerning guests.
                        </p>
                        <Link href="/partners" className="btn btn-primary">Discuss a Partnership</Link>
                    </div>
                </div>
            </section>

            {/* VERIFIED STATS GRID */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="stats-cards-grid">
                        <div className="stat-card">
                            <div className="stat-number">23 Years</div>
                            <div className="stat-label">Hospitality Legacy</div>
                            <div className="stat-desc">Curating luxury experiences since 2003.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">2M+</div>
                            <div className="stat-label">Happy Guests</div>
                            <div className="stat-desc">Members enjoying premium privileges.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">1,000+</div>
                            <div className="stat-label">Venue Partners</div>
                            <div className="stat-desc">Top-tier hotels, resorts &amp; dining.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Cities Covered</div>
                            <div className="stat-desc">Extensive network across India.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">₹1B+</div>
                            <div className="stat-label">Value Delivered</div>
                            <div className="stat-desc">Exclusive savings for our members.</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">4.9 ★</div>
                            <div className="stat-label">Member Rating</div>
                            <div className="stat-desc">Consistently top-rated service.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GUIDES */}
            <section className="section-padding bg-ivory">
                <div className="container">
                    <div className="section-header text-center justify-center">
                        <h2 className="section-title">The Curated Guide</h2>
                    </div>
                    <div className="guides-grid">
                        <div className="guide-card">
                            <div className="guide-visual">
                                <img 
                                    src="/images/webp/The Curated Guide Section (Guide 1 Thumbnail).webp" 
                                    alt="Resort guide" 
                                    width={320} 
                                    height={200} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="guide-content">
                                <h3 className="guide-title">Top 10 Resorts Near Delhi NCR for a Quick Escape</h3>
                                <p className="guide-desc text-body-small text-charcoal-light">Our editors review popular weekend resort properties within a 4-hour drive.</p>
                                <Link href="/guides/top-10-resorts" className="btn btn-outline" style={{ marginTop: '16px', width: '100%' }}>Read Guide</Link>
                            </div>
                        </div>
                        <div className="guide-card">
                            <div className="guide-visual">
                                <img 
                                    src="/images/webp/The Curated Guide Section (Guide 2 Thumbnail).webp" 
                                    alt="Fine dining guide" 
                                    width={320} 
                                    height={200} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="guide-content">
                                <h3 className="guide-title">The Fine Dining Etiquette &amp; Value Maximiser</h3>
                                <p className="guide-desc text-body-small text-charcoal-light">How to make the most of 5-star hotel dining passes and chef tasting menus.</p>
                                <Link href="/guides/fine-dining" className="btn btn-outline" style={{ marginTop: '16px', width: '100%' }}>Read Guide</Link>
                            </div>
                        </div>
                        <div className="guide-card">
                            <div className="guide-visual">
                                <img 
                                    src="/images/webp/The Curated Guide Section (Guide 3 Thumbnail).webp" 
                                    alt="Water park guide" 
                                    width={320} 
                                    height={200} 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="guide-content">
                                <h3 className="guide-title">Water Parks vs Theme Parks: Ultimate Family Outing</h3>
                                <p className="guide-desc text-body-small text-charcoal-light">Helpful tips before booking your family weekend passes and water park visits.</p>
                                <Link href="/guides/family-parks" className="btn btn-outline" style={{ marginTop: '16px', width: '100%' }}>Read Guide</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="newsletter-card rounded-lg bg-ivory">
                        <div className="newsletter-content">
                            <div className="hero-eyebrow" style={{ marginBottom: '8px' }}>PRIVATE ACCESS</div>
                            <h2 className="section-title" style={{ marginBottom: '12px' }}>Join the Privileged Circle</h2>
                            <p className="text-body-large text-charcoal-light" style={{ marginBottom: '24px' }}>Get curated updates on new resort memberships, venue spotlights, and seasonal privileges.</p>
                            <NewsletterForm />
                        </div>
                        <div className="newsletter-visual">
                            <img 
                                src="/images/webp/Newsletter - App Promo Section.webp" 
                                alt="DRS Deals preview" 
                                className="rounded-lg shadow-soft" 
                                width={450} 
                                height={320} 
                                loading="lazy" 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
