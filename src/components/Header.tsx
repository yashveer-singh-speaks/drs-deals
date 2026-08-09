'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
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
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
                {/* Logo */}
                <Link href="/" className="logo-brand" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-charcoal)', textDecoration: 'none', letterSpacing: '-0.02em', zIndex: 10 }}>
                    DRS<span style={{ color: 'var(--color-champagne-gold)' }}>✦</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <div className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </div>

                    <div className="nav-item has-dropdown">
                        <button className="nav-link" aria-haspopup="true" aria-expanded={openDropdown === 'desktop-experiences'} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', background: 'none', border: 'none', fontSize: 'inherit', color: 'inherit', padding: 0 }}>
                            Experiences <svg className="dropdown-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div className="mega-menu">
                            <div className="mega-menu-inner container">
                                <div className="mega-menu-column">
                                    <h4>By Category</h4>
                                    <Link href="/experiences/resorts">Resorts &amp; Hotels</Link>
                                    <Link href="/experiences/dining">Fine Dining</Link>
                                    <Link href="/experiences/spa">Spa &amp; Wellness</Link>
                                    <Link href="/experiences/water-parks">Water Parks</Link>
                                </div>
                                <div className="mega-menu-column">
                                    <h4>By Location</h4>
                                    <Link href="/destinations/delhi">Delhi NCR</Link>
                                    <Link href="/destinations/jaipur">Jaipur</Link>
                                    <Link href="/destinations/mumbai">Mumbai</Link>
                                    <Link href="/destinations">View All Cities</Link>
                                </div>
                                <div className="mega-menu-column">
                                    <h4>Curated Collections</h4>
                                    <Link href="/collections/couples">Romantic Getaways</Link>
                                    <Link href="/collections/family">Family Outings</Link>
                                    <Link href="/collections/corporate">Corporate Offsites</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-item">
                        <Link href="/partners" className="nav-link">Partner With Us</Link>
                    </div>

                    <div className="nav-item">
                        <Link href="/about" className="nav-link">About</Link>
                    </div>
                </nav>

                {/* Right Actions */}
                <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <Link href="/explore" className="btn btn-primary header-cta" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>Explore Deals</Link>
                    <button className="menu-toggle" aria-label="Toggle menu" onClick={toggleDrawer} aria-expanded={drawerOpen}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer} aria-hidden="true"></div>

            {/* Mobile Drawer */}
            <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
                <div className="drawer-header">
                    <span className="logo-brand" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600 }}>DRS<span style={{ color: 'var(--color-champagne-gold)' }}>✦</span></span>
                    <button className="close-drawer" aria-label="Close menu" onClick={toggleDrawer}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="drawer-body">
                    <nav className="drawer-nav">
                        <Link href="/" className="drawer-nav-link" onClick={toggleDrawer}>Home</Link>
                        
                        <button 
                            className="drawer-nav-link" 
                            style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                            onClick={() => toggleDropdown('experiences')}
                            aria-expanded={openDropdown === 'experiences'}
                        >
                            Experiences <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: openDropdown === 'experiences' ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div className={`drawer-dropdown ${openDropdown === 'experiences' ? 'open' : ''}`}>
                            <div className="drawer-dropdown-inner">
                                <Link href="/experiences/resorts" onClick={toggleDrawer}>Resorts &amp; Hotels</Link>
                                <Link href="/experiences/dining" onClick={toggleDrawer}>Fine Dining</Link>
                                <Link href="/experiences/spa" onClick={toggleDrawer}>Spa &amp; Wellness</Link>
                            </div>
                        </div>

                        <Link href="/partners" className="drawer-nav-link" onClick={toggleDrawer}>Partner With Us</Link>
                        <Link href="/about" className="drawer-nav-link" onClick={toggleDrawer}>About</Link>
                    </nav>
                </div>
                <div className="drawer-footer">
                    <Link href="/explore" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={toggleDrawer}>Explore Deals</Link>
                </div>
            </div>
        </header>
    );
}
