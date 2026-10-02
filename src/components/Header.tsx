'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

const TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [prevPathname, setPrevPathname] = useState(pathname);
    if (prevPathname !== pathname) {
        setPrevPathname(pathname);
        if (drawerOpen) setDrawerOpen(false);
        if (openDropdown) setOpenDropdown(null);
    }

    // Ensure body scroll is unlocked on navigation
    useEffect(() => {
        document.body.style.overflow = '';
    }, [pathname]);

    // Handle Escape key to close open menus
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setDrawerOpen(false);
                setOpenDropdown(null);
                document.body.style.overflow = '';
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const toggleDrawer = () => {
        const nextState = !drawerOpen;
        setDrawerOpen(nextState);
        document.body.style.overflow = nextState ? 'hidden' : '';
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        document.body.style.overflow = '';
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
                    <Link href="/" className="lux-logo-zone" aria-label="DRS Deals: Homepage">
                        <img
                            src={siteConfig.logo}
                            alt="DRS Deals Luxury Hospitality Logo"
                            width={180}
                            height={56}
                            decoding="async"
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

                        {/* Experiences dropdown trigger */}
                        <div
                            className="lux-nav-dropdown-wrap"
                            onMouseEnter={() => setOpenDropdown('experiences')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button
                                onClick={() => toggleDropdown('experiences')}
                                className={`lux-nav-link ${pathname && pathname.includes('/experiences') ? 'active' : ''}`}
                                aria-haspopup="true"
                                aria-expanded={openDropdown === 'experiences'}
                            >
                                Experiences
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

                    {/* ── ZONE 3: CTA + Mobile Hamburger ── */}
                    <div className="lux-actions">
                        <Link href="/explore" className="lux-cta-btn">
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

                        {/* Hamburger button for mobile */}
                        <button
                            className="premium-mobile-toggle"
                            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={drawerOpen}
                            aria-controls="mobile-navigation-drawer"
                            onClick={toggleDrawer}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* ── Desktop Mega Menu: Bounded relative to lux-panel ── */}
                <div
                    className={`premium-mega-menu ${openDropdown === 'experiences' ? 'open' : ''}`}
                    onMouseEnter={() => setOpenDropdown('experiences')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    aria-hidden={openDropdown !== 'experiences'}
                >
                    <div className="premium-mega-menu-inner">
                        <div className="mega-menu-grid">
                            <div className="mega-menu-list-col">
                                <div className="mega-menu-title">Destinations</div>
                                <Link href="/destinations/delhi" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Delhi NCR</Link>
                                <Link href="/destinations/jaipur" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Jaipur</Link>
                                <Link href="/destinations/mumbai" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Mumbai</Link>
                                <Link href="/destinations" className="mega-menu-link-all" tabIndex={openDropdown === 'experiences' ? 0 : -1}>
                                    View All Locations{' '}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="mega-menu-list-col">
                                <div className="mega-menu-title">Experiences</div>
                                <Link href="/experiences/resorts" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Resorts &amp; Hotels</Link>
                                <Link href="/experiences/water-parks" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Water Parks</Link>
                                <Link href="/experiences/farmhouses" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Farmhouses</Link>
                                <Link href="/experiences/dining" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Fine Dining</Link>
                                <Link href="/experiences/spa" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Spa &amp; Wellness</Link>
                            </div>
                            <div className="mega-menu-list-col">
                                <div className="mega-menu-title">Collections</div>
                                <Link href="/collections/couples" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Romantic Getaways</Link>
                                <Link href="/collections/family" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Family Outings</Link>
                                <Link href="/collections/weekend" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Weekend Escapes</Link>
                                <Link href="/collections/corporate" tabIndex={openDropdown === 'experiences' ? 0 : -1}>Corporate Experiences</Link>
                            </div>
                        </div>
                        <div className="mega-menu-featured">
                            <img
                                src={openDropdown === 'experiences' ? '/images/webp/header-mega-menu.webp' : TRANSPARENT_PIXEL}
                                alt="Curated luxury resort stay experience on DRS Deals"
                                className="mega-menu-featured-img"
                                width={280}
                                height={200}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="mega-menu-featured-content">
                                <div style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '2px', fontFamily: 'var(--font-serif)' }}>The Ultimate Escape</div>
                                <p>Discover our curated luxury stays.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Mobile Drawer Overlay ── */}
            <div
                className={`premium-drawer-overlay ${drawerOpen ? 'open' : ''}`}
                onClick={closeDrawer}
                aria-hidden="true"
            />

            {/* ── Mobile Navigation Drawer (100% Screen Coverage) ── */}
            <div
                id="mobile-navigation-drawer"
                className={`premium-mobile-drawer ${drawerOpen ? 'open' : ''}`}
                role={drawerOpen ? 'dialog' : undefined}
                aria-modal={drawerOpen ? 'true' : undefined}
                aria-hidden={!drawerOpen}
                aria-label="Mobile Navigation Menu"
            >
                <div className="drawer-header">
                    <Link href="/" onClick={closeDrawer} aria-label="DRS Deals Homepage" tabIndex={drawerOpen ? 0 : -1}>
                        <img
                            src={siteConfig.logo}
                            alt="DRS Deals Logo"
                            width={130}
                            height={32}
                            loading="lazy"
                            decoding="async"
                            className="brand-logo-img"
                            style={{ height: '32px', width: 'auto', display: 'block', objectFit: 'contain' }}
                        />
                    </Link>
                    <button className="close-drawer" aria-label="Close menu" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="drawer-body">
                    <nav className="premium-drawer-nav" aria-label="Mobile Navigation">
                        <Link href="/" className="drawer-link" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>Home</Link>

                        <div className="drawer-accordion-group">
                            <button
                                className="drawer-link drawer-accordion-toggle"
                                onClick={() => toggleDropdown('mobile-experiences')}
                                aria-expanded={openDropdown === 'mobile-experiences'}
                                tabIndex={drawerOpen ? 0 : -1}
                            >
                                <span>Experiences</span>
                                <svg
                                    className={`accordion-arrow ${openDropdown === 'mobile-experiences' ? 'open' : ''}`}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    aria-hidden="true"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            <div className={`drawer-accordion-content ${openDropdown === 'mobile-experiences' ? 'open' : ''}`} aria-hidden={openDropdown !== 'mobile-experiences'}>
                                <div className="drawer-accordion-inner">
                                    <Link href="/destinations" onClick={closeDrawer} tabIndex={drawerOpen && openDropdown === 'mobile-experiences' ? 0 : -1}>Destinations</Link>
                                    <Link href="/experiences/resorts" onClick={closeDrawer} tabIndex={drawerOpen && openDropdown === 'mobile-experiences' ? 0 : -1}>Resorts &amp; Hotels</Link>
                                    <Link href="/experiences/water-parks" onClick={closeDrawer} tabIndex={drawerOpen && openDropdown === 'mobile-experiences' ? 0 : -1}>Water Parks</Link>
                                    <Link href="/experiences/farmhouses" onClick={closeDrawer} tabIndex={drawerOpen && openDropdown === 'mobile-experiences' ? 0 : -1}>Farmhouses</Link>
                                    <Link href="/experiences/dining" onClick={closeDrawer} tabIndex={drawerOpen && openDropdown === 'mobile-experiences' ? 0 : -1}>Fine Dining</Link>
                                    <Link href="/experiences/spa" onClick={closeDrawer} tabIndex={drawerOpen && openDropdown === 'mobile-experiences' ? 0 : -1}>Spa &amp; Wellness</Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/deals" className="drawer-link" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>Deals</Link>
                        <Link href="/search" className="drawer-link" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>Search Deals</Link>
                        <Link href="/blog" className="drawer-link" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>Blog</Link>
                        <Link href="/partners" className="drawer-link" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>Partner With Us</Link>
                        <Link href="/about" className="drawer-link" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>About</Link>
                        <Link href="/contact" className="drawer-link" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>Contact Concierge</Link>
                    </nav>
                </div>

                <div className="drawer-footer">
                    <Link href="/explore" className="lux-cta-btn full-width" onClick={closeDrawer} tabIndex={drawerOpen ? 0 : -1}>
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
                </div>
            </div>

        </header>
    );
}
