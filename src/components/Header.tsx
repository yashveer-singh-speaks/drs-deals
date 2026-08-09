'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <header className={`premium-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="premium-header-container">
                {/* Left: Logo */}
                <Link href="/" className="premium-logo">
                    DRS<span>✦</span>
                </Link>

                {/* Center: Navigation */}
                <nav className="premium-desktop-nav">
                    <Link href="/" className={`premium-nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                    
                    <div 
                        className="premium-nav-item-dropdown"
                        onMouseEnter={() => setOpenDropdown('experiences')}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <button className={`premium-nav-link ${pathname && pathname.includes('/experiences') ? 'active' : ''}`} aria-haspopup="true" aria-expanded={openDropdown === 'experiences'}>
                            Experiences <svg className={`premium-dropdown-arrow ${openDropdown === 'experiences' ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        
                        {/* Mega Menu Overlay */}
                        <div className={`premium-mega-menu ${openDropdown === 'experiences' ? 'open' : ''}`}>
                            <div className="premium-mega-menu-inner">
                                <div className="mega-menu-grid">
                                    <div className="mega-menu-list-col">
                                        <h4 className="mega-menu-title">Destinations</h4>
                                        <Link href="/destinations/delhi">Delhi NCR</Link>
                                        <Link href="/destinations/jaipur">Jaipur</Link>
                                        <Link href="/destinations/mumbai">Mumbai</Link>
                                        <Link href="/destinations" className="mega-menu-link-all">View All Locations <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
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
                                    <img src="https://images.unsplash.com/photo-1542314831-c6a4d142104d?auto=format&fit=crop&w=600&q=80" alt="Luxury Resort Tent" className="mega-menu-featured-img" />
                                    <div className="mega-menu-featured-content">
                                        <h5>The Ultimate Escape</h5>
                                        <p>Discover our curated luxury stays.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/deals" className={`premium-nav-link ${pathname === '/deals' ? 'active' : ''}`}>Deals</Link>
                    <Link href="/partners" className={`premium-nav-link ${pathname === '/partners' ? 'active' : ''}`}>Partner With Us</Link>
                    <Link href="/about" className={`premium-nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                </nav>

                {/* Right: CTA */}
                <div className="premium-header-actions">
                    <Link href="/explore" className="premium-btn-cta">Explore Deals</Link>
                    <button className="premium-mobile-toggle" aria-label="Toggle menu" onClick={toggleDrawer} aria-expanded={drawerOpen}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            <div className={`premium-drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer} aria-hidden="true"></div>

            {/* Mobile Drawer */}
            <div className={`premium-mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
                <div className="drawer-header">
                    <span className="premium-logo">DRS<span>✦</span></span>
                    <button className="close-drawer" aria-label="Close menu" onClick={toggleDrawer}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="drawer-body">
                    <nav className="premium-drawer-nav">
                        <Link href="/" className="drawer-link" onClick={toggleDrawer}>Home</Link>
                        
                        <div className="drawer-accordion-group">
                            <button 
                                className="drawer-link drawer-accordion-toggle" 
                                onClick={() => toggleDropdown('mobile-experiences')}
                                aria-expanded={openDropdown === 'mobile-experiences'}
                            >
                                Experiences <svg className={`accordion-arrow ${openDropdown === 'mobile-experiences' ? 'open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
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
                        <Link href="/partners" className="drawer-link" onClick={toggleDrawer}>Partner With Us</Link>
                        <Link href="/about" className="drawer-link" onClick={toggleDrawer}>About</Link>
                    </nav>
                </div>
                <div className="drawer-footer">
                    <Link href="/explore" className="premium-btn-cta full-width" onClick={toggleDrawer}>Explore Deals</Link>
                </div>
            </div>
        </header>
    );
}
