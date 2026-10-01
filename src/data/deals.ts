export interface DealInclusion {
    title: string;
    description?: string;
}

export interface DealSection {
    heading: string;
    items: string[];
}

export interface Deal {
    id: string;
    slug: string;
    title: string;
    propertyName: string;
    tagline: string;
    category: 'resorts' | 'water-parks' | 'farmhouses' | 'dining' | 'spa';
    categoryLabel: string;
    location: string;
    stateRegion: string;
    price: string;
    originalPrice?: string;
    validity?: string;
    estimatedValue?: string;
    isFeatured: boolean;
    featuredOrder?: number;
    overview: string[];
    whyChoose?: string[];
    inclusions: DealInclusion[];
    sections?: DealSection[];
    stayBenefits?: string[];
    diningBenefits?: string[];
    leisureBenefits?: string[];
    vouchersAndCoupons?: string[];
    conditionsAndTerms: string[];
    bookingInfo: {
        phones: string[];
        website: string;
        note?: string;
    };
    kidsPricing?: string[];
    timings?: string;
    imageSkeletonCount: number;
    featuredImage?: string;
    galleryImages?: string[];
}

const AUTHORIZED_PHONES = [
    '9911011458',
    '9911011459',
    '9911011460',
    '9911011461',
    '8368289207',
    '9625357514',
    '9811120892',
    '9811360808'
];

export const DEALS_DATA: Deal[] = [
    {
        id: 'wyndham-garden-sonipat',
        featuredImage: '/images/deals/wyndham-garden-sonipat-murthal/featured.webp',
        galleryImages: [
            '/images/deals/wyndham-garden-sonipat-murthal/gallery-1.webp',
            '/images/deals/wyndham-garden-sonipat-murthal/gallery-2.webp',
            '/images/deals/wyndham-garden-sonipat-murthal/gallery-3.webp',
            '/images/deals/wyndham-garden-sonipat-murthal/gallery-4.webp'
        ],
        slug: 'wyndham-garden-sonipat-murthal',
        title: 'Wyndham Garden Sonipat Murthal Five Star Hotel Membership',
        propertyName: 'Wyndham Garden Sonipat Murthal',
        tagline: 'Premium Five Star Hotel Membership in Sonipat Murthal',
        category: 'resorts',
        categoryLabel: 'Five Star Hotel & Resort',
        location: 'Sonipat Murthal, Haryana',
        stateRegion: 'Delhi NCR and More',
        price: '₹10,000',
        originalPrice: '₹50,000',
        validity: '1 Year',
        estimatedValue: '₹50,000+',
        isFeatured: true,
        featuredOrder: 1,
        
        overview: [
            'Discover a more rewarding way to enjoy premium stays, dining and leisure experiences at Wyndham Garden Sonipat Murthal. This five star hotel membership is designed for guests who want to enjoy multiple hospitality benefits throughout the year, from comfortable overnight stays and dining experiences to refreshments and swimming pool access.',
            'Eligible Guests: 2 Adults + Kids up to 6 years of age.',
            'The membership brings together a selection of benefits that can be enjoyed across different visits, making it suitable for individuals, couples and families looking to make their hotel experiences more valuable and memorable.'
        ],
        whyChoose: [
            'Instead of paying separately for every stay, meal or leisure experience, members can enjoy a collection of benefits through one membership.',
            'It is particularly useful for families, couples, frequent diners and guests who enjoy combining hotel stays with dining and leisure.',
            'Experience premium hospitality at Wyndham Garden Sonipat Murthal with a membership designed around stays, dining, refreshments and relaxation.'
        ],
        inclusions: [
            { title: '2 Night Stay with Breakfast', description: 'Covers 2 Adults + Kids up to 6 years.' },
            { title: '10 Dinner Vouchers', description: 'Maximum 4 vouchers can be used at a single time.' },
            { title: '4 Tea or Coffee with Cookies', description: 'Perfect for relaxed conversations and evening refreshments.' },
            { title: '4 Soup or Mocktail Servings', description: 'Freshly prepared starters and refreshing mocktails.' },
            { title: '4 Pint Beer or Juice Servings', description: 'Subject to property availability and terms.' },
            { title: '6 Swimming Pool Entries', description: 'Exclusively for family groups.' },
            { title: 'Buy One Get One & More Exclusive Offers', description: 'Special dining and beverage vouchers included.' }
        ],
        conditionsAndTerms: [
            'Prior booking is required for room nights and dining buffets.',
            'Eligible guests: 2 Adults + Kids up to 6 years.',
            'Maximum 4 dinner vouchers can be used at a time.',
            'Swimming pool entries valid for family groups only.',
            'Offers are subject to hotel availability and property guidelines.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in',
            note: 'DRS Deals is an authorised channel partner. Call directly for instant member verification & reservation.'
        },
        imageSkeletonCount: 5
    },
    {
        id: 'hotel-sk-premium',
        featuredImage: '/images/deals/hotel-sk-premium-ghaziabad/featured.webp',
        galleryImages: [
            '/images/deals/hotel-sk-premium-ghaziabad/gallery-1.webp',
            '/images/deals/hotel-sk-premium-ghaziabad/gallery-2.webp',
            '/images/deals/hotel-sk-premium-ghaziabad/gallery-3.webp',
            '/images/deals/hotel-sk-premium-ghaziabad/gallery-4.webp'
        ],
        slug: 'hotel-sk-premium-ghaziabad',
        title: 'Hotel SK Premium Membership',
        propertyName: 'Hotel SK Premium',
        tagline: 'One Membership. A Year of Hotel, Dining and Leisure Benefits.',
        category: 'dining',
        categoryLabel: 'Hotel & Fine Dining',
        location: 'Mohan Nagar, Ghaziabad, UP',
        stateRegion: 'Delhi NCR and More',
        price: '₹5,000',
        originalPrice: '₹40,000',
        validity: '1 Year',
        estimatedValue: '₹40,000+',
        isFeatured: true,
        featuredOrder: 2,
        overview: [
            'The Hotel SK Premium Membership is designed for customers who want more value from their hotel visits throughout the year. Priced at ₹5,000, the membership remains valid for one year and includes a wide selection of complimentary benefits, room stay opportunities, dining discounts and buy one get one free offers.',
            'Eligible Guests: 2 Adults + Up to 2 Kids aged 5 years or below.'
        ],
        inclusions: [
            { title: '1 Night Stay in Executive or Deluxe Room with Breakfast', description: 'Eligible for 2 Adults + Up to 2 Kids aged 5 years or below.' },
            { title: '4 Breakfast Buffet Vouchers', description: 'Enjoy lavish morning buffets at the multi-cuisine restaurant.' },
            { title: '1 Couple Dinner Buffet', description: 'Complete dinner buffet experience for two.' },
            { title: '4 Tea or Coffee with Cookies', description: 'Afternoon & evening casual refreshments.' },
            { title: '4 Desserts (Chef\'s Choice)', description: 'Delicious desserts prepared fresh daily.' },
            { title: '4 Mocktails or Soups', description: 'Starter drinks and hot soups.' },
            { title: '6 Swimming Pool Entries', description: 'Available for family groups only.' },
            { title: 'Buy One Get One & Additional Offers', description: 'Multiple BOGO food and beverage vouchers.' }
        ],
        conditionsAndTerms: [
            'Valid for 1 full year from date of issuance.',
            'Eligible guests: 2 Adults + Up to 2 Kids aged 5 years or below.',
            'Prior reservation mandatory for room bookings.',
            'Swimming pool entries valid for family groups only.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 5
    },
    {
        id: 'oren-kasauli',
        featuredImage: '/images/deals/oren-kasauli-membership/featured.webp',
        galleryImages: [
            '/images/deals/oren-kasauli-membership/gallery-1.webp',
            '/images/deals/oren-kasauli-membership/gallery-2.webp',
            '/images/deals/oren-kasauli-membership/gallery-3.webp',
            '/images/deals/oren-kasauli-membership/gallery-4.webp'
        ],
        slug: 'oren-kasauli-membership',
        title: 'Oren Kasauli Membership Card',
        propertyName: 'Oren Kasauli',
        tagline: 'One Year of Stay, Dining, Wellness and Leisure Benefits in Kasauli',
        category: 'resorts',
        categoryLabel: 'Luxury Hill Resort & Spa',
        location: 'Kasauli, Himachal Pradesh',
        stateRegion: 'Delhi NCR and More',
        price: '₹10,000',
        originalPrice: '₹50,000',
        validity: '1 Year',
        estimatedValue: '₹50,000+',
        isFeatured: true,
        featuredOrder: 3,
        overview: [
            'The Oren Kasauli Membership Card is designed for guests who enjoy travelling to the hills and want to get more value from repeated stays, dining experiences and leisure activities.',
            'Priced at ₹10,000 and valid for one year, the membership combines complimentary room stays, ₹10,000 food and beverage cash vouchers, free pool access, spa benefits, and dining privileges.',
            'Eligible Guests: 2 Adults + 2 Kids up to 10 years.'
        ],
        inclusions: [
            { title: '2 Night Stay with Breakfast', description: 'Covers 2 Adults + 2 Kids up to 10 years.' },
            { title: '10 Tea or Coffee with Cookies (Free)', description: 'Enjoy hot refreshments with scenic valley views.' },
            { title: '10 Swimming Pool Entries (Free)', description: 'Full complimentary pool access.' },
            { title: '1 Spa Utility Voucher at ₹499 + Tax', description: 'Spa treatment absolutely free.' },
            { title: '1 Spa Utility Voucher at ₹999 + Tax', description: 'Spa treatment absolutely free.' },
            { title: '₹10,000 Food and Soft Beverage Cash Vouchers', description: '₹1,000 × 10 = ₹10,000 vouchers absolutely free (Max ₹5,000 usable in a single day).' }
        ],
        conditionsAndTerms: [
            'Prior room booking required in advance.',
            'Complimentary stays cover 2 adults + 2 children up to 10 years.',
            'Maximum ₹5,000 worth of food/beverage vouchers can be used in one day.',
            'Subject to hotel availability and guidelines.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 6
    },
    {
        id: 'atmayog-luxury-manor',
        featuredImage: '/images/deals/atmayog-luxury-manor-manali/featured.webp',
        galleryImages: [
            '/images/deals/atmayog-luxury-manor-manali/gallery-1.webp',
            '/images/deals/atmayog-luxury-manor-manali/gallery-2.webp',
            '/images/deals/atmayog-luxury-manor-manali/gallery-3.webp',
            '/images/deals/atmayog-luxury-manor-manali/gallery-4.webp'
        ],
        slug: 'atmayog-luxury-manor-manali',
        title: 'Atma Yog Luxury Manor Membership',
        propertyName: 'Atma Yog Luxury Manor',
        tagline: 'A Year of Memorable Mountain Getaways in Manali',
        category: 'resorts',
        categoryLabel: 'Luxury Mountain Manor',
        location: 'Manali, Himachal Pradesh',
        stateRegion: 'Delhi NCR and More',
        price: '₹9,000',
        originalPrice: '₹50,000',
        validity: '1 Year',
        estimatedValue: '₹50,000+',
        isFeatured: true,
        featuredOrder: 4,
        overview: [
            'Atma Yog Luxury Manor in Manali offers a membership designed for guests who want to enjoy multiple stays, meals and hospitality experiences during the year.',
            'Priced at ₹9,000, it includes 3 night stay with breakfast, 8 buffet lunch or dinner vouchers, and 10 tea or coffee servings.',
            'Eligible Guests: 2 Adults + Kids up to 6 years.'
        ],
        inclusions: [
            { title: '3 Night Stay with Breakfast', description: 'Covers 2 Adults + Kids up to 6 years.' },
            { title: '8 Buffet Lunch or Dinner Vouchers', description: 'Generous dining buffet certificates for multiple visits throughout the year.' },
            { title: '10 Tea or Coffee Servings', description: 'Warm beverages overlooking the cedar forests and mountain peaks.' },
            { title: 'Many More Exclusive Offers', description: 'Includes Buy One Get One and special member dining benefits.' }
        ],
        conditionsAndTerms: [
            'Valid for 1 year from activation date.',
            'Eligible guests: 2 Adults + Kids up to 6 years.',
            'Prior reservation mandatory for room stay redemption.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 5
    },
    {
        id: 'white-flower-resorts',
        featuredImage: '/images/deals/white-flower-resorts-mussoorie-corbett/featured.webp',
        galleryImages: [
            '/images/deals/white-flower-resorts-mussoorie-corbett/gallery-1.webp',
            '/images/deals/white-flower-resorts-mussoorie-corbett/gallery-2.webp',
            '/images/deals/white-flower-resorts-mussoorie-corbett/gallery-3.webp',
            '/images/deals/white-flower-resorts-mussoorie-corbett/gallery-4.webp'
        ],
        slug: 'white-flower-resorts-mussoorie-corbett',
        title: 'The White Flower Resorts Membership',
        propertyName: 'The White Flower Resorts',
        tagline: 'One Membership. Two Destinations. A Year of Experiences.',
        category: 'resorts',
        categoryLabel: 'Multi-Destination Luxury Resort',
        location: 'Mussoorie & Jim Corbett',
        stateRegion: 'Delhi NCR and More',
        price: '₹7,999',
        originalPrice: '₹50,000',
        validity: '1 Year',
        estimatedValue: '₹50,000+',
        isFeatured: true,
        featuredOrder: 5,
        overview: [
            'The White Flower Resorts offers an exclusive one year membership that can be used across its locations in Mussoorie and Jim Corbett.',
            'Priced at ₹7,999, the membership includes stated complimentary benefits worth ₹50,000 or more, covering accommodation, breakfast, buffet dining, beverages, leisure facilities and additional food offers.',
            'For families and couples who enjoy resort holidays, the membership is designed to provide multiple opportunities to enjoy resort experiences throughout the year.'
        ],
        inclusions: [
            { title: '1 Complimentary Night with Breakfast', description: 'Valid for 2 adults and 2 children below 12 years, or 3 adults.' },
            { title: '2 Additional Room Night Coupons', description: 'Available at ₹1,999 + taxes per coupon for 2 adults + 2 children (<12 yrs) or 3 adults with breakfast.' },
            { title: '10 Complimentary Buffet Vouchers', description: '10 lunch or dinner buffets. Up to 4 coupons usable at a single time.' },
            { title: '6 Complimentary Mocktails or Soups', description: 'Starter beverage and soup vouchers.' },
            { title: '6 Complimentary Coffee Servings with Cookies', description: 'Relaxed afternoon breaks.' },
            { title: '6 Leisure Access Vouchers', description: 'Complimentary entry to Swimming Pool, Gym, and Game Room for 2 adults + 2 children.' }
        ],
        conditionsAndTerms: [
            'Valid at both Mussoorie and Jim Corbett properties.',
            'Prior booking required. Subject to availability.',
            'Max 4 buffet coupons usable simultaneously.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 6
    },
    {
        id: 'rangmanch-farms',
        featuredImage: '/images/deals/rangmanch-farms-gurgaon/featured.webp',
        galleryImages: [
            '/images/deals/rangmanch-farms-gurgaon/gallery-1.webp',
            '/images/deals/rangmanch-farms-gurgaon/gallery-2.webp',
            '/images/deals/rangmanch-farms-gurgaon/gallery-3.webp',
            '/images/deals/rangmanch-farms-gurgaon/gallery-4.webp'
        ],
        slug: 'rangmanch-farms-gurgaon',
        title: 'Rangmanch Farms Day Outing Package',
        propertyName: 'Rangmanch Farms',
        tagline: 'Trending ⏫💥💥 - A Complete Day Out Filled With Food, Adventure & Entertainment',
        category: 'farmhouses',
        categoryLabel: 'Adventure & Farmhouse Day Outing',
        location: 'Gurgaon, Haryana',
        stateRegion: 'Delhi NCR and More',
        price: 'Contact for offers',
        isFeatured: false,
        timings: 'Morning: 9:30 AM to 5:30 PM | Evening: 4:00 PM to 10:00 PM',
        overview: [
            'Rangmanch Farms is designed as a full day outing for families, friends and groups looking for a combination of adventure, food and entertainment in one place.',
            'With 80 plus activities and 40 plus meals across different cuisines, the experience is built to keep guests engaged throughout the day.',
            'Park Rate: ₹1,499. Contact DRS Deals for exclusive member offers and group packages.'
        ],
        inclusions: [
            { title: '80+ Adventure & Leisure Activities', description: 'Includes Swimming pool, Water zorbing, Sky cycling, Rock climbing, Zip line, and Adventure rides.' },
            { title: '40+ Meals Across Cuisines', description: 'Access to a wide buffet selection of regional and continental dishes throughout the day.' },
            { title: 'Two Convenient Time Slots', description: 'Morning: 9:30 AM to 5:30 PM | Evening: 4:00 PM to 10:00 PM.' },
            { title: 'Family & Kids Friendly Environment', description: 'Safe, secure environment with ample parking and activities for all age groups.' }
        ],
        conditionsAndTerms: [
            'DRS Deals is an authorised channel partner.',
            'Advance booking recommended to guarantee slot availability.',
            'Both morning and evening slots available.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 4
    },
    {
        id: 'mera-gaon-mera-desh',
        featuredImage: '/images/deals/mera-gaon-mera-desh-murthal/featured.webp',
        galleryImages: [
            '/images/deals/mera-gaon-mera-desh-murthal/gallery-1.webp',
            '/images/deals/mera-gaon-mera-desh-murthal/gallery-2.webp',
            '/images/deals/mera-gaon-mera-desh-murthal/gallery-3.webp',
            '/images/deals/mera-gaon-mera-desh-murthal/gallery-4.webp'
        ],
        slug: 'mera-gaon-mera-desh-murthal',
        title: 'Mera Gaon Mera Desh Village Experience Day Pass',
        propertyName: 'Mera Gaon Mera Desh',
        tagline: 'Trending ⏫💥💥 - Village Experience with Unlimited Food & Activities',
        category: 'water-parks',
        categoryLabel: 'Rural Cultural & Water Park',
        location: 'Murthal, Haryana',
        stateRegion: 'Delhi NCR and More',
        price: 'Contact for offers',
        timings: 'Morning: 9:30 AM to 5:30 PM',
        isFeatured: false,
        overview: [
            'Mera Gaon Mera Desh in Murthal offers a day outing experience designed around rural India\'s traditional atmosphere, food, activities and entertainment.',
            'With 60 plus activities, delicious unlimited meals and access to a water park, the experience is designed for visitors who want to spend an entire day enjoying food, adventure, and family entertainment.',
            'Contact DRS Deals for special member passes and group reservations.'
        ],
        inclusions: [
            { title: 'Unlimited Food', description: 'Enjoy traditional village buffet meals and snacks throughout your stay.' },
            { title: 'Unlimited Activities', description: 'Rope courses, traditional games, cultural performances, and adventure rides.' },
            { title: 'Water Park Access', description: 'Full access to water slides, splash pools, and family zones.' }
        ],
        kidsPricing: [
            'Kids up to 3 feet: FREE',
            'Kids 3 feet to 4 feet: Special Kid Pass Available',
            'Guests above 4 feet: Full Access Pass Available'
        ],
        conditionsAndTerms: [
            'DRS Deals is an authorised channel partner.',
            'Timing: Morning: 9:30 AM to 5:30 PM.',
            'Kids height criteria verified at entry gate.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 4
    },
    {
        id: 'madhavgarh-farms',
        featuredImage: '/images/deals/madhavgarh-farms-gurgaon/featured.webp',
        galleryImages: [
            '/images/deals/madhavgarh-farms-gurgaon/gallery-1.webp',
            '/images/deals/madhavgarh-farms-gurgaon/gallery-2.webp',
            '/images/deals/madhavgarh-farms-gurgaon/gallery-3.webp',
            '/images/deals/madhavgarh-farms-gurgaon/gallery-4.webp'
        ],
        slug: 'madhavgarh-farms-gurgaon',
        title: 'Madhavgarh Farms Village Experience Ticket',
        propertyName: 'Madhavgarh Farms',
        tagline: 'Trending ⏫💥💥 - Village Experience with Unlimited Food & Activities',
        category: 'farmhouses',
        categoryLabel: 'Village Theme & Cultural Farm',
        location: 'Tikli Village, Badshahpur Road, Gurgaon',
        stateRegion: 'Delhi NCR and More',
        price: 'Contact for offers',
        timings: 'Morning: 9:00 AM to 5:00 PM (Only morning slot available. Same day booking not available.)',
        isFeatured: false,
        overview: [
            'Madhavgarh Farms, located at Tikli Village, Badshahpur Road, Gurgaon, offers a rural themed day outing experience for customers looking for food, activities, entertainment and a refreshing change of pace.',
            'The experience includes unlimited food and activities, allowing visitors to spend the day enjoying traditional village inspired experiences, entertainment and meals.',
            'Contact DRS Deals for exclusive passes and corporate/family group packages.'
        ],
        inclusions: [
            { title: 'Unlimited Village Food', description: 'Fresh, authentic rural buffet meals, snacks, beverages, and traditional delicacies.' },
            { title: 'Unlimited Activities', description: 'Mud bath, tube well bath, pottery making, tractor rides, zip lining, and 50+ activities.' }
        ],
        kidsPricing: [
            'Kids up to 2.5 feet: FREE',
            'Kids 2.5 feet to 4 feet: Special Kid Pass Available',
            'Guests above 4 feet: Full Access Pass Available'
        ],
        conditionsAndTerms: [
            'SAME DAY BOOKING IS NOT AVAILABLE. Advance booking mandatory.',
            'Timing: Morning: 9:00 AM to 5:00 PM only (Morning slot only).',
            'Location: Tikli Village, Badshahpur Road, Gurgaon.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 4
    },
    {
        id: 'mojoland-murthal',
        featuredImage: '/images/deals/mojoland-multi-theme-park-murthal/featured.webp',
        galleryImages: [
            '/images/deals/mojoland-multi-theme-park-murthal/gallery-1.webp',
            '/images/deals/mojoland-multi-theme-park-murthal/gallery-2.webp',
            '/images/deals/mojoland-multi-theme-park-murthal/gallery-3.webp',
            '/images/deals/mojoland-multi-theme-park-murthal/gallery-4.webp'
        ],
        slug: 'mojoland-multi-theme-park-murthal',
        title: 'Mojoland Multi Theme Park Combo Pass',
        propertyName: 'Mojoland Multi Theme Park',
        tagline: 'One Ticket. Choose Any Two Parks in Murthal Sonipat.',
        category: 'water-parks',
        categoryLabel: 'Multi Theme Park (Water, Snow, Adventure, Amusement)',
        location: 'Grand Trunk Road, Murthal, Sonipat, Haryana',
        stateRegion: 'Delhi NCR and More',
        price: '₹700 (Choose Any Two Parks)',
        originalPrice: '₹800 per park',
        timings: '10:30 AM to 6:30 PM',
        isFeatured: false,
        overview: [
            'Mojoland Multi Theme Park in Murthal, Sonipat brings together multiple entertainment experiences in one destination, including Water Park, Adventure Park, Amusement Park, and Snow Park.',
            'The standard MRP is stated as ₹800 per park, while DRS Deals offers a special offer price of ₹700 to choose any two parks (such as Water + Adventure or Water + Snow).',
            'Timing: 10:30 AM to 6:30 PM.'
        ],
        inclusions: [
            { title: 'Access to Any Two Parks of Choice', description: 'Parks Available: Water Park, Adventure Park, Amusement Park, Snow Park.' },
            { title: 'Full Day Access', description: 'Valid from 10:30 AM to 6:30 PM operating hours.' }
        ],
        kidsPricing: [
            'Kids up to 2.8 feet: FREE',
            'Guests above 2.8 feet: ₹700'
        ],
        conditionsAndTerms: [
            'DRS Deals is an authorised channel partner.',
            'MRP: ₹800 per park. Offer Price: ₹700 for any two parks.',
            'Timing: 10:30 AM to 6:30 PM.',
            'Location: Grand Trunk Road, Murthal, Haryana 131039.'
        ],
        bookingInfo: {
            phones: AUTHORIZED_PHONES,
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 4
    }
];

export function getAllDeals(): Deal[] {
    return DEALS_DATA;
}

export function getFeaturedDeals(): Deal[] {
    return DEALS_DATA
        .filter(d => d.isFeatured)
        .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
}

export function getDealBySlug(slug: string): Deal | undefined {
    return DEALS_DATA.find(d => d.slug === slug);
}

export function getDealsByCategory(category: string): Deal[] {
    return DEALS_DATA.filter(d => d.category === category);
}

export function getDealsByLocation(locationKeyword: string): Deal[] {
    const kw = locationKeyword.toLowerCase();
    return DEALS_DATA.filter(d => 
        d.location.toLowerCase().includes(kw) || 
        d.stateRegion.toLowerCase().includes(kw)
    );
}
