export const siteConfig = {
    name: 'DRS Deals',
    legalName: 'DRS Deals',
    url: 'https://www.drsdeals.in',
    logo: '/logo-drs-deals.webp',
    socialImage: '/social-image.png',
    tagline: 'Curated. Trusted. Unforgettable.',
    description: 'Since 2003, DRS Deals has curated India’s finest luxury resort stays, fine dining experiences, wellness retreats, and leisure passes across Delhi NCR and More at exclusive member rates.',
    
    // Centralized Contact Configuration
    contacts: {
        address: 'B 14 UGF, DRS Building, Gulab Bagh, Pillar No. 725, Near Nawada Metro Station, New Delhi 110059',
        conciergeEmail: 'Info@drsdeals.in',
        partnerEmail: 'Info@drsdeals.in',
        email: 'Info@drsdeals.in',
        
        // Priority Ordered List of Authorized Phone Hotlines
        phoneNumbers: [
            '9811120892',
            '9811360808',
            '9911011460',
            '9625357514',
            '9911011458',
            '9911011459',
            '9911011461',
            '8368289207',
        ],
        
        hotlines: [
            { raw: '+919811120892', display: '+91 98111 20892', number: '9811120892' },
            { raw: '+919811360808', display: '+91 98113 60808', number: '9811360808' },
            { raw: '+919911011460', display: '+91 99110 11460', number: '9911011460' },
            { raw: '+919625357514', display: '+91 96253 57514', number: '9625357514' },
            { raw: '+919911011458', display: '+91 99110 11458', number: '9911011458' },
            { raw: '+919911011459', display: '+91 99110 11459', number: '9911011459' },
            { raw: '+919911011461', display: '+91 99110 11461', number: '9911011461' },
            { raw: '+918368289207', display: '+91 83682 89207', number: '8368289207' },
        ],

        // Dedicated Corporate Inquiries Hotlines (ONLY these two)
        corporatePhoneNumbers: [
            '9811120892',
            '9811360808',
        ],

        corporateHotlines: [
            { raw: '+919811120892', display: '+91 98111 20892', number: '9811120892' },
            { raw: '+919811360808', display: '+91 98113 60808', number: '9811360808' },
        ],

        hotline1: '+91 98111 20892',
        hotline2: '+91 98113 60808',
        hotline1Raw: '+919811120892',
        hotline2Raw: '+919811360808',
        
        // WhatsApp Concierge Number (ONLY this number throughout website)
        whatsappNumber: '9811120892',
        whatsappCountryCode: '91',
        whatsappDisplay: '+91 98111 20892',

        // Dedicated Deal Page Contact Phone (ONLY this number for deal pages)
        dealPagePhone: '9811120892',
        dealPagePhoneDisplay: '+91 98111 20892',
    },

    // Verified Business Heritage & Scale Statistics
    stats: {
        since: '2003',
        legacy: '23 Year Legacy',
        customers: '2M+ Happy Customers',
        customersCount: '2M+',
        partners: '1000+ Premium Partners',
        partnersCount: '1000+',
        cities: 'Delhi NCR and More',
        citiesCount: 'Delhi NCR and More',
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
