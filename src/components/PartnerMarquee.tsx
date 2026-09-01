import React from 'react';

const partnerLogos = [
    { src: '/images/companies-tie-up/renowned-hotels_8.png', alt: 'Wyndham & Renowned Hotel Partners' },
    { src: '/images/companies-tie-up/renowned-hotels_9.png', alt: 'Choice Hotels Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_10.png', alt: 'SK Premium Hotel Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_11.png', alt: 'Clark Inn Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_12.png', alt: 'Clarion Hotel Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_13.png', alt: 'Luxury Stays Partner' },
    { src: '/images/companies-tie-up/renowned-hotels_14.png', alt: 'Five Star Resort Partner' },
    { src: '/images/companies-tie-up/farmhouses_1.png', alt: 'Luxury Farmhouse Partner' },
    { src: '/images/companies-tie-up/farmhouses_2.png', alt: 'Boutique Farmhouse Stay' },
    { src: '/images/companies-tie-up/farmhouses_3.png', alt: 'Estate Farmhouse Partner' },
    { src: '/images/companies-tie-up/farmhouses_4.png', alt: 'Celebration Farmhouse Partner' },
    { src: '/images/companies-tie-up/farmhouses_5.png', alt: 'Private Pool Farmhouse' },
    { src: '/images/companies-tie-up/farmhouses_6.png', alt: 'Greenery Farmhouse Retreat' },
    { src: '/images/companies-tie-up/farmhouses_7.png', alt: 'Elite Farmhouse Partner' },
    { src: '/images/companies-tie-up/resort-spa_15.png', alt: 'Luxury Spa Retreat' },
    { src: '/images/companies-tie-up/resort-spa_16.png', alt: 'Ayurvedic Wellness Spa' },
    { src: '/images/companies-tie-up/resort-spa_17.png', alt: 'Hill Resort & Spa' },
    { src: '/images/companies-tie-up/resort-spa_18.png', alt: 'Thermal Springs Spa' },
    { src: '/images/companies-tie-up/resort-spa_19.png', alt: 'Heritage Spa Resort' },
    { src: '/images/companies-tie-up/resort-spa_20.png', alt: 'Aromatherapy Wellness Resort' },
    { src: '/images/companies-tie-up/restaurants_21.png', alt: 'Fine Dining Partner' },
    { src: '/images/companies-tie-up/restaurants_22.png', alt: 'Gourmet Kitchen Partner' },
    { src: '/images/companies-tie-up/restaurants_23.png', alt: 'Multi-Cuisine Dining' },
    { src: '/images/companies-tie-up/restaurants_24.png', alt: 'Rooftop Lounge Partner' },
    { src: '/images/companies-tie-up/restaurants_25.png', alt: 'Artisanal Cafe & Bistro' },
    { src: '/images/companies-tie-up/restaurants_26.png', alt: 'Authentic Heritage Dining' },
    { src: '/images/companies-tie-up/restaurants_27.png', alt: 'Chef Table Experience' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_28.png', alt: 'Aqua World Waterpark' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_29.png', alt: 'Splash Water Kingdom' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_30.png', alt: 'VIP Multiplex Cinema Partner' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_31.png', alt: 'Heritage Culture Village' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_32.png', alt: 'Amusement Theme Park' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_33.png', alt: 'Family Adventure Park' },
    { src: '/images/companies-tie-up/waterpark-cinema-village_34.png', alt: 'Eco Leisure Village' },
];

export default function PartnerMarquee() {
    return (
        <section className="partner-marquee-section" aria-label="Brand Collaborations">
            <div className="partner-marquee-header">
                <span className="partner-marquee-eyebrow">
                    OUR BRAND COLLABORATIONS &amp; TIE-UPS
                </span>
            </div>

            <div className="partner-marquee-container">
                <div className="partner-marquee-track">
                    {/* First Loop */}
                    {partnerLogos.map((logo, index) => (
                        <div key={`partner-logo-1-${index}`} className="partner-logo-item" title={logo.alt}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                width={80}
                                height={80}
                                className="partner-logo-img"
                                loading="lazy"
                            />
                        </div>
                    ))}
                    {/* Second Loop for Seamless Infinite Right-to-Left Scroll */}
                    {partnerLogos.map((logo, index) => (
                        <div key={`partner-logo-2-${index}`} className="partner-logo-item" aria-hidden="true" title={logo.alt}>
                            <img
                                src={logo.src}
                                alt=""
                                width={80}
                                height={80}
                                className="partner-logo-img"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
