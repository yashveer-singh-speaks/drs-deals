'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
        document.body.style.overflow = !drawerOpen ? 'hidden' : '';
    };

    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <header className={`lux-header ${isScrolled ? 'scrolled' : ''}`}>

            {/* ── Floating Ivory Panel ── */}
            <div className="lux-panel">

                {/* Top champagne gold accent line */}
                <div className="lux-panel-topline" aria-hidden="true" />

                {/* Three-zone inner grid: logo | divider | nav | cta */}
                <div className="lux-panel-inner">

                    {/* ── ZONE 1: Logo ── */}
                    <Link href="/" className="lux-logo-zone" aria-label="DRS Deals – Homepage">
                        <img
                            src={siteConfig.logo}
                            alt="DRS Deals Logo"
                            className="lux-logo-img"
                        />
                    </Link>

                    {/* ── Thin vertical gold divider ── */}
                    <div className="lux-divider" aria-hidden="true" />

                    {/* ── ZONE 2: Desktop Navigation ── */}
                    <nav className="lux-desktop-nav" aria-label="Main Navigation">

                        <Link
                            href="/"
                            className={`lux-nav-link ${pathname === '/' ? 'active' : ''}`}
                        >
                            Home
                        </Link>

                        {/* Experiences with mega menu */}
                        <div
                            className="lux-nav-dropdown-wrap"
                            onMouseEnter={() => setOpenDropdown('experiences')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button
                                className={`lux-nav-link ${pathname && pathname.includes('/experiences') ? 'active' : ''}`}
                                aria-haspopup="true"
                                aria-expanded={openDropdown === 'experiences'}
                            >
                                Experiences
                                {/* Refined champagne gold chevron */}
                                <svg
                                    className={`lux-chevron ${openDropdown === 'experiences' ? 'open' : ''}`}
                                    width="11"
                                    height="11"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    stroke="#BC9044"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <polyline points="2 4.5 6 8.5 10 4.5" />
                                </svg>
                            </button>

                            {/* Mega Menu — structure unchanged */}
                            <div className={`premium-mega-menu ${openDropdown === 'experiences' ? 'open' : ''}`}>
                                <div className="premium-mega-menu-inner">
                                    <div className="mega-menu-grid">
                                        <div className="mega-menu-list-col">
                                            <h4 className="mega-menu-title">Destinations</h4>
                                            <Link href="/destinations/delhi">Delhi NCR</Link>
                                            <Link href="/destinations/jaipur">Jaipur</Link>
                                            <Link href="/destinations/mumbai">Mumbai</Link>
                                            <Link href="/destinations" className="mega-menu-link-all">
                                                View All Locations{' '}
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="mega-menu-list-col">
                                            <h4 className="mega-menu-title">Experiences</h4>
                                            <Link href="/experiences/resorts">Resorts &amp; Hotels</Link>
                                            <Link href="/experiences/water-parks">Water Parks</Link>
                                            <Link href="/experiences/farmhouses">Farmhouses</Link>
                                            <Link href="/experiences/dining">Fine Dining</Link>
                                            <Link href="/experiences/spa">Spa &amp; Wellness</Link>
                                        </div>
                                        <div className="mega-menu-list-col">
                                            <h4 className="mega-menu-title">Collections</h4>
                                            <Link href="/collections/couples">Romantic Getaways</Link>
                                            <Link href="/collections/family">Family Outings</Link>
                                            <Link href="/collections/weekend">Weekend Escapes</Link>
                                            <Link href="/collections/corporate">Corporate Experiences</Link>
                                        </div>
                                    </div>
                                    <div className="mega-menu-featured">
                                        <img
                                            src="/images/webp/Header Mega Menu.webp"
                                            alt="Curated Luxury Stay"
                                            className="mega-menu-featured-img"
                                            width={280}
                                            height={200}
                                            loading="lazy"
                                        />
                                        <div className="mega-menu-featured-content">
                                            <h5>The Ultimate Escape</h5>
                                            <p>Discover our curated luxury stays.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/deals" className={`lux-nav-link ${pathname === '/deals' ? 'active' : ''}`}>
                            Deals
                        </Link>
                        <Link href="/blog" className={`lux-nav-link ${pathname && pathname.includes('/blog') ? 'active' : ''}`}>
                            Blog
                        </Link>
                        <Link href="/partners" className={`lux-nav-link ${pathname === '/partners' ? 'active' : ''}`}>
                            Partner With Us
                        </Link>
                        <Link href="/about" className={`lux-nav-link ${pathname === '/about' ? 'active' : ''}`}>
                            About
                        </Link>

                        {/* Search: label + outlined magnifying glass */}
                        <Link
                            href="/search"
                            className={`lux-nav-link lux-search-link ${pathname === '/search' ? 'active' : ''}`}
                            aria-label="Search DRS Deals"
                        >
                            <span>Search</span>
                            <svg
                                className="lux-search-icon"
                                width="19"
                                height="19"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </Link>
                    </nav>

                    {/* ── ZONE 3: CTA + Mobile Toggle ── */}
                    <div className="lux-actions">

                        {/* Explore Offers — deep charcoal with gold text & sparkle */}
                        <Link href="/explore" className="lux-cta-btn">
                            {/* Four-point sparkle SVG */}
                            <svg
                                className="lux-sparkle"
                                width="14"
                                height="14"
                                viewBox="0 0 16 16"
                                fill="#BC9044"
                                aria-hidden="true"
                            >
                                <path d="M8 0 C8.6 3.8 10.1 5.9 12.2 7.4 C14.3 8 16 8 16 8 C16 8 12.2 8.6 10.1 10.1 C8.6 12.2 8 16 8 16 C7.4 12.2 5.9 10.1 3.8 8.6 C1.7 7.4 0 8 0 8 C0 8 3.8 7.4 5.9 5.9 C7.4 3.8 8 0 8 0Z" />
                            </svg>
                            Explore Offers
                        </Link>

                        {/* Mobile hamburger (unchanged) */}
                        <button
                            className="premium-mobile-toggle"
                            aria-label="Toggle menu"
                            onClick={toggleDrawer}
                            aria-expanded={drawerOpen}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Drawer Overlay (untouched) ── */}
            <div className={`premium-drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer} aria-hidden="true"></div>

            {/* ── Mobile Drawer (untouched) ── */}
            <div className={`premium-mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
                <div className="drawer-header">
                    <Link href="/" className="premium-logo-wrapper" onClick={toggleDrawer} aria-label="DRS Deals Homepage">
                        <img
                            src={siteConfig.logo}
                            alt="DRS Deals Logo"
                            width={140}
                            height={38}
                            className="brand-logo-img"
                            style={{ height: '34px', width: 'auto', display: 'block', objectFit: 'contain' }}
                        />
                    </Link>
                    <button className="close-drawer" aria-label="Close menu" onClick={toggleDrawer}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="drawer-body">
                    <nav className="premium-drawer-nav" aria-label="Mobile Navigation">
                        <Link href="/" className="drawer-link" onClick={toggleDrawer}>Home</Link>

                        <div className="drawer-accordion-group">
                            <button
                                className="drawer-link drawer-accordion-toggle"
                                onClick={() => toggleDropdown('mobile-experiences')}
                                aria-expanded={openDropdown === 'mobile-experiences'}
                            >
                                Experiences
                                <svg
                                    className={`accordion-arrow ${openDropdown === 'mobile-experiences' ? 'open' : ''}`}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div className={`drawer-accordion-content ${openDropdown === 'mobile-experiences' ? 'open' : ''}`}>
                                <div className="drawer-accordion-inner">
                                    <Link href="/destinations" onClick={toggleDrawer}>Destinations</Link>
                                    <Link href="/experiences/resorts" onClick={toggleDrawer}>Resorts &amp; Hotels</Link>
                                    <Link href="/experiences/water-parks" onClick={toggleDrawer}>Water Parks</Link>
                                    <Link href="/experiences/farmhouses" onClick={toggleDrawer}>Farmhouses</Link>
                                    <Link href="/experiences/dining" onClick={toggleDrawer}>Fine Dining</Link>
                                    <Link href="/experiences/spa" onClick={toggleDrawer}>Spa &amp; Wellness</Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/deals" className="drawer-link" onClick={toggleDrawer}>Deals</Link>
                        <Link href="/search" className="drawer-link" onClick={toggleDrawer}>Search Deals</Link>
                        <Link href="/blog" className="drawer-link" onClick={toggleDrawer}>Blog</Link>
                        <Link href="/partners" className="drawer-link" onClick={toggleDrawer}>Partner With Us</Link>
                        <Link href="/about" className="drawer-link" onClick={toggleDrawer}>About</Link>
                        <Link href="/contact" className="drawer-link" onClick={toggleDrawer}>Contact Concierge</Link>
                    </nav>
                </div>
                <div className="drawer-footer">
                    <Link href="/explore" className="premium-btn-cta full-width" onClick={toggleDrawer}>Explore Offers</Link>
                </div>
            </div>

        </header>
    );
}
