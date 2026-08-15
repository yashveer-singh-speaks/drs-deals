'use client';
import Link from 'next/link';
import { useState } from 'react';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
    const [amount, setAmount] = useState(10000);
    const savings = amount * 0.35;

    return (
        <>
            <main>
        {/* HERO SECTION */}
        <section className="hero">
            <div className="hero-content">
                <div className="hero-eyebrow">Curated. Trusted. Unforgettable.</div>
                <h1 className="hero-title">
                    More Experiences. <br />
                    More Memories. <br />
                    <span className="text-gold">For Less.</span>
                </h1>
                <p className="hero-desc text-body-large">
                    Exclusive offers on leisure, dining, travel &amp; more. From premium getaways to everyday escapes, discover experiences that inspire.
                </p>
                <div className="hero-actions">
                    <Link href="/explore" className="btn btn-primary">
                        Explore Offers 
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
                        <span className="trust-label">Exclusive<br />Offers</span>
                    </div>
                    <div className="trust-item">
                        <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                        <span className="trust-label">Trusted<br />Partners</span>
                    </div>
                    <div className="trust-item">
                        <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <span className="trust-label">Memorable<br />Experiences</span>
                    </div>
                    <div className="trust-item">
                        <svg className="trust-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                        <span className="trust-label">Lasting<br />Value</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-collage">
                    <img 
                        src="/images/webp/Hero Section (Collage Primary Image).webp" 
                        alt="Luxury Resort Pool overlooking mountains" 
                        className="collage-img img-1" 
                        width={480} 
                        height={360} 
                        loading="eager"
                        fetchPriority="high"
                    />
                    <img 
                        src="/images/webp/Hero Section (Collage Overlay Image Top-Right).webp" 
                        alt="Amusement park roller coaster at sunset" 
                        className="collage-img img-2" 
                        width={240} 
                        height={180} 
                        loading="eager"
                    />
                    <img 
                        src="/images/webp/Hero Section (Collage Overlay Image Bottom-Right).webp" 
                        alt="Fine dining restaurant table setup" 
                        className="collage-img img-3" 
                        width={240} 
                        height={180} 
                        loading="eager"
                    />
                </div>
                
                <div className="hero-badge">
                    <span className="logo-main">DRS<span className="logo-star">✦</span></span>
                    <p className="hero-badge-text">Curating India's<br />Finest Experiences<br />At Exclusive Prices.</p>
                </div>
            </div>
        </section>

        {/* FEATURED EXPERIENCES */}
        <section className="section-padding bg-ivory">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Experiences</h2>
                    <Link href="/experiences" className="link-arrow">View All Deals <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
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
                                <span className="deal-rating">★ 4.9</span>
                            </div>
                            <h3 className="deal-title">Wyndham Garden Hotel Membership</h3>
                            <div className="deal-partner">Wyndham Garden</div>
                            <div className="deal-price-row">
                                <div className="price-original">Value ₹45k</div>
                                <div className="price-deal">Exclusive Rates</div>
                            </div>
                            <Link href="/deals/wyndham-garden-sonipat-murthal" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
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
                                <span className="deal-rating">★ 4.8</span>
                            </div>
                            <h3 className="deal-title">Hotel SK Premium Membership</h3>
                            <div className="deal-partner">Hotel SK Premium</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹40,000</div>
                                <div className="price-deal">₹5,000</div>
                            </div>
                            <Link href="/deals/hotel-sk-premium-ghaziabad" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
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
                                <span className="deal-rating">★ 4.9</span>
                            </div>
                            <h3 className="deal-title">Oren Kasauli Membership Card</h3>
                            <div className="deal-partner">Oren Kasauli</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹50,000</div>
                                <div className="price-deal">₹10,000</div>
                            </div>
                            <Link href="/deals/oren-kasauli-membership" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
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
                                <span className="deal-rating">★ 4.8</span>
                            </div>
                            <h3 className="deal-title">Atma Yog Luxury Manor</h3>
                            <div className="deal-partner">Atma Yog Manor</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹50,000</div>
                                <div className="price-deal">₹8,999</div>
                            </div>
                            <Link href="/deals/atmayog-luxury-manor-manali" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
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
                                <span className="deal-rating">★ 4.9</span>
                            </div>
                            <h3 className="deal-title">The White Flower Resorts</h3>
                            <div className="deal-partner">The White Flower</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹50,000</div>
                                <div className="price-deal">₹7,999</div>
                            </div>
                            <Link href="/deals/white-flower-resorts-mussoorie-corbett" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
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
                                <span className="deal-rating">★ 4.7</span>
                            </div>
                            <h3 className="deal-title">Rangmanch Farms Day Outing</h3>
                            <div className="deal-partner">Rangmanch Farms</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹1,500</div>
                                <div className="price-deal">&lt; ₹1,500</div>
                            </div>
                            <Link href="/deals/rangmanch-farms-gurgaon" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* TRUSTED BY */}
        <section className="section-padding bg-white">
            <div className="container text-center">
                <h3 className="text-eyebrow" style={{ marginBottom: '24px' }}>Trusted by 1000+ Premium Partners</h3>
                <div className="partner-logos">
                    <img src="/images/logos/taj.svg" alt="Taj Hotels" className="partner-logo" width={120} height={40} loading="lazy" />
                    <img src="/images/logos/oberoi.svg" alt="Oberoi Hotels" className="partner-logo" width={120} height={40} loading="lazy" />
                    <img src="/images/logos/radisson.svg" alt="Radisson" className="partner-logo" width={120} height={40} loading="lazy" />
                    <img src="/images/logos/marriott.svg" alt="Marriott" className="partner-logo" width={120} height={40} loading="lazy" />
                    <img src="/images/logos/hyatt.svg" alt="Hyatt" className="partner-logo" width={120} height={40} loading="lazy" />
                </div>
            </div>
        </section>

        {/* WHY DRS DEALS EXISTS */}
        <section className="section-padding bg-ivory">
            <div className="container">
                <div className="story-grid">
                    <div className="story-content">
                        <h2 className="section-title" style={{ marginBottom: '24px' }}>Why DRS Deals Exists</h2>
                        <p className="text-body-large" style={{ marginBottom: '24px' }}>
                            Since 2003, we have believed that premium experiences should be accessible. Our mission is to bridge the gap between world-class hospitality venues and individuals seeking unforgettable moments without the premium price tag.
                        </p>
                        <p className="text-body-small text-charcoal-light" style={{ marginBottom: '32px' }}>
                            We don't just list discounts. We negotiate direct partnerships with India's finest resorts, restaurants, and entertainment destinations. This ensures our customers get verified, substantial savings, while our partners welcome new, qualified visitors to their venues.
                        </p>
                        <Link href="/about" className="btn btn-outline">Read Our Story</Link>
                    </div>
                    <div className="story-visual">
                        <img 
                            src="/images/webp/Why DRS Deals Exists Section.webp" 
                            alt="Family enjoying a premium vacation" 
                            className="rounded-lg shadow-soft" 
                            width={560} 
                            height={400} 
                            loading="lazy" 
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* HOW DRS DEALS WORKS */}
        <section className="section-padding bg-white">
            <div className="container">
                <div className="section-header text-center justify-center">
                    <h2 className="section-title" style={{ marginBottom: '8px' }}>How It Works</h2>
                    <p className="text-body-large">Four simple steps to your next great experience.</p>
                </div>
                
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-icon">1</div>
                        <h3 className="step-title">Browse</h3>
                        <p className="step-desc">Explore curated offers across leisure, dining, and stays.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">2</div>
                        <h3 className="step-title">Purchase</h3>
                        <p className="step-desc">Securely buy your exclusive discount voucher.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">3</div>
                        <h3 className="step-title">Book</h3>
                        <p className="step-desc">Contact the partner venue to confirm your visit date.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">4</div>
                        <h3 className="step-title">Enjoy</h3>
                        <p className="step-desc">Redeem your voucher and enjoy the premium experience.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* TRUST GRID */}
        <section className="section-padding bg-ivory">
            <div className="container text-center">
                <h2 className="section-title" style={{ marginBottom: '48px' }}>Why Customers Trust Us</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <svg className="feature-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <h4 className="feature-title">Verified Partners</h4>
                        <p className="feature-desc text-body-small">Every venue is personally vetted by our team.</p>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <h4 className="feature-title">Secure Payments</h4>
                        <p className="feature-desc text-body-small">100% safe and encrypted transactions.</p>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        <h4 className="feature-title">Transparent Pricing</h4>
                        <p className="feature-desc text-body-small">No hidden charges or unexpected fees.</p>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        <h4 className="feature-title">Customer Support</h4>
                        <p className="feature-desc text-body-small">Dedicated assistance for a seamless experience.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CUSTOMER STORIES */}
        <section className="section-padding bg-white">
            <div className="container">
                <div className="section-header text-center justify-center">
                    <h2 className="section-title">Real Stories</h2>
                </div>
                
                <div className="stories-grid">
                    <div className="story-card">
                        <img 
                            src="/images/webp/Customer Stories Section (Story 1 Portrait).webp" 
                            alt="Priya Sharma portrait" 
                            className="story-img" 
                            width={80} 
                            height={80} 
                            loading="lazy" 
                        />
                        <div className="story-text">
                            <p className="story-quote">"The discount we got for our family weekend at the water park was incredible. Booking was seamless, and the venue treated us like VIPs."</p>
                            <div className="story-author">
                                <strong>Priya Sharma</strong><br />
                                <span className="text-charcoal-light">Saved ₹4,500 at Worlds of Wonder</span>
                            </div>
                        </div>
                    </div>
                    <div className="story-card">
                        <img 
                            src="/images/webp/Customer Stories Section (Story 2 Portrait).webp" 
                            alt="Rahul Verma portrait" 
                            className="story-img" 
                            width={80} 
                            height={80} 
                            loading="lazy" 
                        />
                        <div className="story-text">
                            <p className="story-quote">"I booked a luxury spa retreat for my wife's birthday. The 40% saving allowed us to upgrade our dining experience too. Highly recommended."</p>
                            <div className="story-author">
                                <strong>Rahul Verma</strong><br />
                                <span className="text-charcoal-light">Saved ₹8,000 at The Leela Spa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* PARTNER SPOTLIGHT */}
        <section className="section-padding bg-ivory">
            <div className="container">
                <h3 className="text-eyebrow" style={{ marginBottom: '24px', textAlign: 'center' }}>Partner Spotlight of the Month</h3>
                <div className="spotlight-card rounded-lg shadow-soft">
                    <img 
                        src="/images/webp/Partner Spotlight of the Month Section.webp" 
                        alt="The Oberoi Udaivilas" 
                        className="spotlight-img" 
                        width={1140} 
                        height={450} 
                        loading="lazy" 
                    />
                    <div className="spotlight-content bg-white">
                        <h2 className="section-title" style={{ marginBottom: '16px' }}>The Oberoi Udaivilas</h2>
                        <p className="text-body-large" style={{ marginBottom: '24px' }}>Experience the majesty of Rajasthan.</p>
                        <p className="text-body-small text-charcoal-light" style={{ marginBottom: '32px' }}>
                            Located on the banks of Lake Pichola, this legendary resort offers unparalleled luxury and heritage. We selected The Oberoi Udaivilas this month to highlight our exclusive 35% savings package on weekend heritage suites.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Link href="/deals/wyndham-garden-sonipat-murthal" className="btn btn-primary">View Exclusive Offer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CATEGORIES */}
        <section className="section-padding bg-white">
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
                            alt="Spa & Wellness" 
                            width={360} 
                            height={240} 
                            loading="lazy" 
                        />
                        <div className="category-overlay">
                            <h3 className="category-title">Spa &amp; Wellness</h3>
                        </div>
                    </Link>
                    <h2 className="section-title">Cities We Serve</h2>
                    <Link href="/destinations" className="link-arrow">View All Cities <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
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
                    <Link href="/destinations/punjab" className="city-card">
                        <img 
                            src="/images/webp/Cities We Serve Section (Punjab Tile).webp" 
                            alt="Punjab" 
                            width={260} 
                            height={180} 
                            loading="lazy" 
                        />
                        <div className="city-name">Punjab</div>
                    </Link>
                    <Link href="/destinations/ahmedabad" className="city-card">
                        <img 
                            src="/images/webp/Cities We Serve Section (Ahmedabad Tile).webp" 
                            alt="Ahmedabad" 
                            width={260} 
                            height={180} 
                            loading="lazy" 
                        />
                        <div className="city-name">Ahmedabad</div>
                    </Link>
                </div>
            </div>
        </section>

        {/* POPULAR SEARCHES & FEATURED COLLECTIONS */}
        <section className="section-padding bg-white">
            <div className="container">
                <div className="split-grid">
                    {/* Popular Searches */}
                    <div>
                        <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Popular Searches</h3>
                        <ul className="link-list">
                            <li><Link href="/search?q=water-parks-near-delhi">Water parks near Delhi</Link></li>
                            <li><Link href="/search?q=weekend-resorts">Weekend resorts</Link></li>
                            <li><Link href="/search?q=luxury-spas">Luxury spas</Link></li>
                            <li><Link href="/search?q=romantic-dinner">Romantic dinner</Link></li>
                            <li><Link href="/search?q=farmhouse-packages">Farmhouse packages</Link></li>
                            <li><Link href="/search?q=theme-parks">Theme parks</Link></li>
                            <li><Link href="/search?q=corporate-outings">Corporate outings</Link></li>
                        </ul>
                    </div>
                    
                    {/* Featured Collections */}
                    <div>
                        <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Featured Collections</h3>
                        <div className="collection-list">
                            <Link href="/collections/weekend-escapes" className="collection-item">
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
                            <Link href="/collections/family-fun" className="collection-item">
                                <img 
                                    src="/images/webp/Featured Collections Section (Family Fun Thumbnail).webp" 
                                    alt="Family Fun" 
                                    width={80} 
                                    height={80} 
                                    loading="lazy" 
                                />
                                <span>Family Fun</span>
                            </Link>
                            <Link href="/collections/luxury-dining" className="collection-item">
                                <img 
                                    src="/images/webp/Featured Collections Section (Luxury Dining Thumbnail).webp" 
                                    alt="Luxury Dining" 
                                    width={80} 
                                    height={80} 
                                    loading="lazy" 
                                />
                                <span>Luxury Dining</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SAVINGS CALCULATOR */}
        <section className="section-padding bg-ivory">
            <div className="container">
                <div className="calculator-wrapper rounded-lg shadow-soft">
                    <div className="calc-content">
                        <h2 className="section-title" style={{ marginBottom: '16px' }}>See Your Savings</h2>
                        <p className="text-body-large" style={{ marginBottom: '32px' }}>Adjust the slider to see how much you could save on your next premium experience.</p>
                        
                        <div className="calc-slider-wrapper">
                            <label htmlFor="priceSlider" className="text-eyebrow">Experience Value</label>
                            <input type="range" id="priceSlider" min="2000" max="50000" step="500" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="calc-slider" />
                        </div>
                        
                        <div className="calc-results">
                            <div className="calc-result-item">
                                <span className="calc-label">Original Price</span>
                                <span className="calc-value original" id="calcOriginal">₹{amount.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="calc-result-item highlight">
                                <span className="calc-label text-gold">DRS Deal Price</span>
                                <span className="calc-value deal text-gold" id="calcDeal">₹{(amount * 0.65).toLocaleString('en-IN')}</span>
                            </div>
                            <div className="calc-result-item">
                                <span className="calc-label">You Save</span>
                                <span className="calc-value save" id="calcSave">₹{savings.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* BUSINESS PARTNER SECTION */}
        <section className="section-padding bg-charcoal text-white text-center">
            <div className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 className="section-title text-white" style={{ marginBottom: '24px' }}>Grow Your Business With Us</h2>
                    <p className="text-body-large" style={{ marginBottom: '32px', color: 'var(--color-stone)' }}>
                        Join our network of premium partners. Fill empty inventory, reach a verified high-intent audience, and increase your revenue with zero upfront costs.
                    </p>
                    <Link href="/partners" className="btn btn-primary">Become a Partner</Link>
                </div>
            </div>
        </section>

        {/* COMPANY NUMBERS */}
        <section className="section-padding bg-ivory">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-number">2M+</div>
                        <div className="stat-label">Happy Customers</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">1000+</div>
                        <div className="stat-label">Premium Partners</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Cities Served</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">₹1B+</div>
                        <div className="stat-label">Customer Savings</div>
                    </div>
                </div>
            </div>
        </section>

        {/* EDITORIAL BUYING GUIDES */}
        <section className="section-padding bg-white">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">The Curated Guide</h2>
                    <Link href="/guides" className="link-arrow">View All Guides <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                </div>
                
                <div className="guides-grid">
                    <Link href="/guides/top-10-resorts" className="guide-card">
                        <img 
                            src="/images/webp/The Curated Guide Section (Guide 1 Thumbnail).webp" 
                            alt="Top 10 Weekend Escapes Near Delhi NCR" 
                            className="guide-img" 
                            width={360} 
                            height={220} 
                            loading="lazy" 
                        />
                        <div className="guide-content">
                            <span className="guide-category">Resorts</span>
                            <h3 className="guide-title">Top 10 Weekend Escapes Near Delhi NCR</h3>
                            <span className="guide-read-time">5 min read</span>
                        </div>
                    </Link>
                    <Link href="/guides/fine-dining" className="guide-card">
                        <img 
                            src="/images/webp/The Curated Guide Section (Guide 2 Thumbnail).webp" 
                            alt="The Ultimate Guide to Fine Dining in Mumbai" 
                            className="guide-img" 
                            width={360} 
                            height={220} 
                            loading="lazy" 
                        />
                        <div className="guide-content">
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
                            <p className="guide-desc text-body-small text-charcoal-light">Our editors rank the finest weekend resort properties within a 4-hour drive.</p>
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
                            <p className="guide-desc text-body-small text-charcoal-light">Everything you need to know before booking your family weekend pass.</p>
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
                        <h2 className="section-title" style={{ marginBottom: '12px' }}>Join the Privileged Circle</h2>
                        <p className="text-body-large text-charcoal-light" style={{ marginBottom: '24px' }}>Get weekly access to unreleased deal drops, venue previews, and private member passes.</p>
                        <NewsletterForm />
                        <div className="app-promo" style={{ marginTop: '32px' }}>
                            <span className="text-body-small text-charcoal-light" style={{ display: 'block', marginBottom: '12px' }}>Experience DRS Deals on Mobile</span>
                            <div className="app-buttons">
                                <Link href="/explore" className="app-btn"><img src="/images/logos/app-store.svg" alt="App Store" style={{ height: '40px' }} width={120} height={40} loading="lazy" /></Link>
                                <Link href="/explore" className="app-btn"><img src="/images/logos/google-play.svg" alt="Google Play" style={{ height: '40px' }} width={120} height={40} loading="lazy" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter-visual">
                        <img 
                            src="/images/webp/Newsletter - App Promo Section.webp" 
}
