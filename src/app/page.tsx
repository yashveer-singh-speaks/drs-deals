
'use client';
import Link from 'next/link';
import { useState } from 'react';

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
                    Exclusive offers on leisure, dining, travel & more. From premium getaways to everyday escapes, discover experiences that inspire.
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
                    <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury Resort Pool overlooking mountains" className="collage-img img-1" />
                    <img src="https://images.unsplash.com/photo-1575203091586-611ffa505bfc?auto=format&fit=crop&w=400&q=80" alt="Amusement park and roller coaster at sunset" className="collage-img img-2" />
                    <img src="https://images.unsplash.com/photo-1414235077428-338988691f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Fine dining restaurant table setup" className="collage-img img-3" />
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
                            <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80" alt="Premium Resort" />
                            <div className="deal-badge">30% OFF</div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-meta">
                                <span className="deal-location">Jaipur</span>
                                <span className="deal-rating">★ 4.8</span>
                            </div>
                            <h3 className="deal-title">Luxury Palace Resort Stay</h3>
                            <div className="deal-partner">Taj Hotels</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹15,000</div>
                                <div className="price-deal">₹10,500</div>
                            </div>
                            <Link href="#" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
                        </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="deal-card">
                        <div className="deal-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" alt="Spa and Wellness" />
                            <div className="deal-badge">40% OFF</div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-meta">
                                <span className="deal-location">New Delhi</span>
                                <span className="deal-rating">★ 4.9</span>
                            </div>
                            <h3 className="deal-title">Couples Ayurvedic Spa Retreat</h3>
                            <div className="deal-partner">Kama Wellness</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹8,000</div>
                                <div className="price-deal">₹4,800</div>
                            </div>
                            <Link href="#" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="deal-card">
                        <div className="deal-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" alt="Fine Dining" />
                            <div className="deal-badge">25% OFF</div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-meta">
                                <span className="deal-location">Gurgaon</span>
                                <span className="deal-rating">★ 4.7</span>
                            </div>
                            <h3 className="deal-title">5-Course Chef's Tasting Menu</h3>
                            <div className="deal-partner">The Leela Ambience</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹6,000</div>
                                <div className="price-deal">₹4,500</div>
                            </div>
                            <Link href="#" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="deal-card">
                        <div className="deal-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1582559938555-6b586036814c?auto=format&fit=crop&w=800&q=80" alt="Water Park" />
                            <div className="deal-badge">50% OFF</div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-meta">
                                <span className="deal-location">Noida</span>
                                <span className="deal-rating">★ 4.6</span>
                            </div>
                            <h3 className="deal-title">Family Water Park Day Pass</h3>
                            <div className="deal-partner">Worlds of Wonder</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹1,500</div>
                                <div className="price-deal">₹750</div>
                            </div>
                            <Link href="#" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="deal-card">
                        <div className="deal-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80" alt="Boutique Hotel" />
                            <div className="deal-badge">35% OFF</div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-meta">
                                <span className="deal-location">Udaipur</span>
                                <span className="deal-rating">★ 4.9</span>
                            </div>
                            <h3 className="deal-title">Lakeview Heritage Suite</h3>
                            <div className="deal-partner">The Oberoi Udaivilas</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹25,000</div>
                                <div className="price-deal">₹16,250</div>
                            </div>
                            <Link href="#" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="deal-card">
                        <div className="deal-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1533552755457-5b45a0abb299?auto=format&fit=crop&w=800&q=80" alt="Adventure Park" />
                            <div className="deal-badge">20% OFF</div>
                        </div>
                        <div className="deal-content">
                            <div className="deal-meta">
                                <span className="deal-location">Pune</span>
                                <span className="deal-rating">★ 4.5</span>
                            </div>
                            <h3 className="deal-title">Weekend Adventure Pass</h3>
                            <div className="deal-partner">Della Adventure Park</div>
                            <div className="deal-price-row">
                                <div className="price-original">₹2,500</div>
                                <div className="price-deal">₹2,000</div>
                            </div>
                            <Link href="#" className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View Details</Link>
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Taj_Hotels_logo.svg" alt="Taj Hotels" className="partner-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Oberoi_Hotels_%26_Resorts_logo.svg" alt="Oberoi Hotels" className="partner-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Radisson_Hotels_logo.svg" alt="Radisson" className="partner-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Marriott_International_Logo.svg" alt="Marriott" className="partner-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Hyatt_logo.svg" alt="Hyatt" className="partner-logo" />
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
                        <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d8376?auto=format&fit=crop&w=1200&q=80" alt="Family enjoying a premium vacation" className="rounded-lg shadow-soft" />
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
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" alt="Customer portrait" className="story-img" />
                        <div className="story-text">
                            <p className="story-quote">"The discount we got for our family weekend at the water park was incredible. Booking was seamless, and the venue treated us like VIPs."</p>
                            <div className="story-author">
                                <strong>Priya Sharma</strong><br />
                                <span className="text-charcoal-light">Saved ₹4,500 at Worlds of Wonder</span>
                            </div>
                        </div>
                    </div>
                    <div className="story-card">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" alt="Customer portrait" className="story-img" />
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
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80" alt="The Oberoi Udaivilas" className="spotlight-img" />
                    <div className="spotlight-content bg-white">
                        <h2 className="section-title" style={{ marginBottom: '16px' }}>The Oberoi Udaivilas</h2>
                        <p className="text-body-large" style={{ marginBottom: '24px' }}>Experience the majesty of Rajasthan.</p>
                        <p className="text-body-small text-charcoal-light" style={{ marginBottom: '32px' }}>
                            Located on the banks of Lake Pichola, this legendary resort offers unparalleled luxury and heritage. We selected The Oberoi Udaivilas this month to highlight our exclusive 35% savings package on weekend heritage suites.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Link href="#" className="btn btn-primary">View Exclusive Offer</Link>
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
                        <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80" alt="Resorts" />
                        <div className="category-overlay">
                            <h3 className="category-title">Resorts</h3>
                        </div>
                    </Link>
                    <Link href="/experiences/dining" className="category-card">
                        <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80" alt="Dining" />
                        <div className="category-overlay">
                            <h3 className="category-title">Dining</h3>
                        </div>
                    </Link>
                    <Link href="/experiences/spa" className="category-card">
                        <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Spa & Wellness" />
                        <div className="category-overlay">
                            <h3 className="category-title">Spa & Wellness</h3>
                        </div>
                    </Link>
                    <h2 className="section-title">Cities We Serve</h2>
                    <Link href="/destinations" className="link-arrow">View All Cities <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
                </div>
                
                <div className="cities-grid">
                    <Link href="/destinations/delhi" className="city-card">
                        <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80" alt="Delhi NCR" />
                        <div className="city-name">Delhi NCR</div>
                    </Link>
                    <Link href="/destinations/jaipur" className="city-card">
                        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80" alt="Jaipur" />
                        <div className="city-name">Jaipur</div>
                    </Link>
                    <Link href="/destinations/punjab" className="city-card">
                        <img src="https://images.unsplash.com/photo-1623910398686-2244bbd99c4d?auto=format&fit=crop&w=800&q=80" alt="Punjab" />
                        <div className="city-name">Punjab</div>
                    </Link>
                    <Link href="/destinations/ahmedabad" className="city-card">
                        <img src="https://images.unsplash.com/photo-1588613437146-2715456209c1?auto=format&fit=crop&w=800&q=80" alt="Ahmedabad" />
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
                                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=150&q=80" alt="Weekend Escapes" />
                                <span>Weekend Escapes</span>
                            </Link>
                            <Link href="/collections/couples" className="collection-item">
                                <img src="https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?auto=format&fit=crop&w=150&q=80" alt="Romantic Getaways" />
                                <span>Romantic Getaways</span>
                            </Link>
                            <Link href="/collections/family-fun" className="collection-item">
                                <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d8376?auto=format&fit=crop&w=150&q=80" alt="Family Fun" />
                                <span>Family Fun</span>
                            </Link>
                            <Link href="/collections/luxury-dining" className="collection-item">
                                <img src="https://images.unsplash.com/photo-1414235077428-338988691f68?auto=format&fit=crop&w=150&q=80" alt="Luxury Dining" />
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
                        <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d8376?auto=format&fit=crop&w=800&q=80" alt="Resort Guide" className="guide-img" />
                        <div className="guide-content">
                            <span className="guide-category">Resorts</span>
                            <h3 className="guide-title">Top 10 Weekend Escapes Near Delhi NCR</h3>
                            <span className="guide-read-time">5 min read</span>
                        </div>
                    </Link>
                    <Link href="/guides/fine-dining" className="guide-card">
                        <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" alt="Dining Guide" className="guide-img" />
                        <div className="guide-content">
                            <span className="guide-category">Dining</span>
                            <h3 className="guide-title">The Ultimate Guide to Fine Dining in Mumbai</h3>
                            <span className="guide-read-time">4 min read</span>
                        </div>
                    </Link>
                    <Link href="/guides/family-parks" className="guide-card">
                        <img src="https://images.unsplash.com/photo-1582559938555-6b586036814c?auto=format&fit=crop&w=800&q=80" alt="Theme Parks" className="guide-img" />
                        <div className="guide-content">
                            <span className="guide-category">Family</span>
                            <h3 className="guide-title">Best Water Parks for a Family Day Out</h3>
                            <span className="guide-read-time">6 min read</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        {/* NEWSLETTER / APP PROMO */}
        <section className="section-padding bg-ivory">
            <div className="container">
                <div className="promo-box bg-white rounded-lg shadow-soft">
                    <div className="promo-content">
                        <h2 className="section-title" style={{ marginBottom: '16px' }}>Never Miss a Deal</h2>
                        <p className="text-body-large" style={{ marginBottom: '32px' }}>Subscribe to our newsletter for exclusive weekly offers, or download our app for instant notifications.</p>
                        
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email address" required className="newsletter-input" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                        
                        <div className="app-links" style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
                            <Link href="#" className="app-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: '40px' }} /></Link>
                            <Link href="#" className="app-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '40px' }} /></Link>
                        </div>
                    </div>
                    <div className="promo-image">
                        <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80" alt="Mobile App Preview" style={{ borderRadius: 'var(--radius-md)' }} />
                    </div>
                </div>
            </div>
        </section>

    </main>
        </>
    );
}
