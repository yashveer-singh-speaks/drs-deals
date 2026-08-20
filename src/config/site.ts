export const siteConfig = {
    name: 'DRS Deals',
    legalName: 'DRS Deals',
    url: 'https://www.drsdeals.in',
    logo: '/logo-drs-deals.webp',
    socialImage: '/social image.png',
    tagline: 'Curated. Trusted. Unforgettable.',
    description: 'Since 2003, DRS Deals has curated India’s finest luxury resort stays, fine dining experiences, wellness retreats, and leisure passes across 50+ cities at exclusive member rates.',
    
    // Centralized Contact Configuration
    contacts: {
        conciergeEmail: 'concierge@drsdeals.in',
        partnerEmail: 'partnerships@drsdeals.in',
        hotline1: '+91 98111 20892',
        hotline2: '+91 98113 60808',
        hotline1Raw: '+919811120892',
        hotline2Raw: '+919811360808',
        
        // Final WhatsApp Concierge Number (+91 98111 20892)
        whatsappNumber: '9811120892',
        whatsappCountryCode: '91',
        whatsappDisplay: '+91 98111 20892',
    },

    // Verified Business Heritage & Scale Statistics
    stats: {
        since: '2003',
        legacy: '23 Year Legacy',
        customers: '2M+ Happy Customers',
        customersCount: '2M+',
        partners: '1000+ Premium Partners',
        partnersCount: '1000+',
        cities: '50+ Cities',
        citiesCount: '50+',
        savings: '₹1B+ Savings',
        savingsAmount: '₹1B+',
        offers: '240+ Verified Offers',
        offersCount: '240+',
        rating: '4.9',
        ratingDisplay: '4.9 / 5.0 Rating',
    },
    
    // Helper to generate pre-filled WhatsApp URLs
    getWhatsAppUrl(customMessage?: string) {
        const phone = `${this.contacts.whatsappCountryCode}${this.contacts.whatsappNumber}`;
        const defaultMsg = 'Hello DRS Deals Concierge, I would like to enquire about your curated experiences and memberships.';
        const text = encodeURIComponent(customMessage || defaultMsg);
        return `https://wa.me/${phone}?text=${text}`;
    },

    creator: {
        name: 'Yashveer Labs',
        url: 'https://www.drsdeals.in/yashveer-labs',
    },
    founder: {
        name: 'Yashveer Singh',
        url: 'https://www.drsdeals.in/yashveer-singh',
    },
};
