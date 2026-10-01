'use client';

import React, { useState, useEffect } from 'react';

const TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const partnerLogos = [
    { src: '/images/companies-tie-up/renowned-hotels_8.webp', alt: 'Wyndham and Renowned Hotel Partners' },
    { src: '/images/companies-tie-up/renowned-hotels_9.webp', alt: 'Choice Hotels Hospitality Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_10.webp', alt: 'SK Premium Hotel Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_11.webp', alt: 'Clark Inn Hospitality Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_12.webp', alt: 'Clarion Hotel Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_13.webp', alt: 'Luxury Stays Resort Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_14.webp', alt: 'Five Star Resort Partner' },
    { src: '/images/companies-tie-up/farmhouses_1.webp', alt: 'Luxury Farmhouse Retreat Partner' },
    { src: '/images/companies-tie-up/farmhouses_2.webp', alt: 'Boutique Farmhouse Stay Partner' },
    { src: '/images/companies-tie-up/farmhouses_3.webp', alt: 'Estate Farmhouse Partner' },
    { src: '/images/companies-tie-up/farmhouses_4.webp', alt: 'Celebration Farmhouse Partner' },
    { src: '/images/companies-tie-up/farmhouses_5.webp', alt: 'Private Pool Farmhouse Partner' },
    { src: '/images/companies-tie-up/farmhouses_6.webp', alt: 'Greenery Farmhouse Retreat' },
    { src: '/images/companies-tie-up/farmhouses_7.webp', alt: 'Elite Farmhouse Partner' },
    { src: '/images/companies-tie-up/resort-spa_15.webp', alt: 'Luxury Spa Retreat Partner' },
    { src: '/images/companies-tie-up/resort-spa_16.webp', alt: 'Ayurvedic Wellness Spa Partner' },
    { src: '/images/companies-tie-up/resort-spa_17.webp', alt: 'Hill Resort and Spa Partner' },
    { src: '/images/companies-tie-up/resort-spa_18.webp', alt: 'Thermal Springs Spa Partner' },
    { src: '/images/companies-tie-up/resort-spa_19.webp', alt: 'Heritage Spa Resort Partner' },
    { src: '/images/companies-tie-up/resort-spa_20.webp', alt: 'Aromatherapy Wellness Resort' },
    { src: '/images/companies-tie-up/restaurants_21.webp', alt: 'Fine Dining Restaurant Partner' },
    { src: '/images/companies-tie-up/restaurants_22.webp', alt: 'Gourmet Kitchen Partner' },
    { src: '/images/companies-tie-up/restaurants_23.webp', alt: 'Multi-Cuisine Dining Partner' },
    { src: '/images/companies-tie-up/restaurants_24.webp', alt: 'Rooftop Lounge Partner' },
    { src: '/images/companies-tie-up/restaurants_25.webp', alt: 'Artisanal Cafe and Bistro Partner' },
    { src: '/images/companies-tie-up/restaurants_26.webp', alt: 'Authentic Heritage Dining Partner' },
    { src: '/images/companies-tie-up/restaurants_27.webp', alt: 'Chef Table Dining Experience' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_28.webp', alt: 'Aqua World Waterpark Partner' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_29.webp', alt: 'Splash Water Kingdom Partner' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_30.webp', alt: 'VIP Multiplex Cinema Partner' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_31.webp', alt: 'Heritage Culture Village Partner' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_32.webp', alt: 'Amusement Theme Park Partner' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_33.webp', alt: 'Family Adventure Park Partner' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_34.webp', alt: 'Eco Leisure Village Partner' },
];

export default function PartnerMarquee() {
    const [loadAll, setLoadAll] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setLoadAll(true);
        }, 2500);
        const onInteraction = () => setLoadAll(true);
        window.addEventListener('scroll', onInteraction, { once: true, passive: true });
        return () => {
            window.clearTimeout(timer);
            window.removeEventListener('scroll', onInteraction);
        };
    }, []);

    return (
        <section className="partner-marquee-section" aria-label="Brand Collaborations">
            <div className="partner-marquee-header">
                <span className="partner-marquee-eyebrow">
                    200+ TRUSTED BRAND COLLABORATIONS &amp; TIE-UPS
                </span>
                <p className="partner-marquee-subhead" style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', marginTop: '4px' }}>
                    Hotels &amp; Resorts &bull; Fine Dining &bull; Wellness &amp; Spa &bull; Waterparks &amp; Entertainment
                </p>
            </div>

            <div className="partner-marquee-container">
                <div className="partner-marquee-track">
                    {/* First Loop */}
                    {partnerLogos.map((logo, index) => {
                        const shouldShowSrc = index < 8 || loadAll;
                        return (
                            <div key={`partner-logo-1-${index}`} className="partner-logo-item" title={logo.alt}>
                                <img
                                    src={shouldShowSrc ? logo.src : TRANSPARENT_PIXEL}
                                    alt={logo.alt}
                                    width={120}
                                    height={120}
                                    className="partner-logo-img"
                                    loading="lazy"
                                    decoding="async"
                                    fetchPriority="low"
                                />
                            </div>
                        );
                    })}
                    {/* Second Loop for Seamless Infinite Right-to-Left Scroll */}
                    {loadAll && partnerLogos.map((logo, index) => (
                        <div key={`partner-logo-2-${index}`} className="partner-logo-item" aria-hidden="true">
                            <img
                                src={logo.src}
                                alt=""
                                width={120}
                                height={120}
                                className="partner-logo-img"
                                loading="lazy"
                                decoding="async"
                                fetchPriority="low"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
