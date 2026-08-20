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

export const DEALS_DATA: Deal[] = [
    {
        id: 'wyndham-garden-sonipat',
        slug: 'wyndham-garden-sonipat-murthal',
        title: 'Wyndham Garden Sonipat Murthal Five Star Hotel Membership',
        propertyName: 'Wyndham Garden Sonipat Murthal',
        tagline: 'Premium Five Star Hotel Membership in Sonipat Murthal',
        category: 'resorts',
        categoryLabel: 'Five Star Hotel & Resort',
        location: 'Sonipat Murthal, Haryana',
        stateRegion: 'Haryana / Delhi NCR',
        price: 'Contact for Exclusive Member Rates',
        validity: '1 Year',
        estimatedValue: '₹45,000+',
        isFeatured: true,
        featuredOrder: 1,
        featuredImage: '/images/deals/wyndham-garden-sonipat-murthal/featured.jpg',
        galleryImages: [
            '/images/deals/wyndham-garden-sonipat-murthal/gallery-1.jpg',
            '/images/deals/wyndham-garden-sonipat-murthal/gallery-2.jpg',
            '/images/deals/wyndham-garden-sonipat-murthal/gallery-3.jpg',
            '/images/deals/wyndham-garden-sonipat-murthal/gallery-4.jpg',
        ],
        overview: [
            'Discover a more rewarding way to enjoy premium stays, dining and leisure experiences at Wyndham Garden Sonipat Murthal. This five star hotel membership is designed for guests who want to enjoy multiple hospitality benefits throughout the year, from comfortable overnight stays and dining experiences to refreshments and swimming pool access.',
            'The membership brings together a selection of benefits that can be enjoyed across different visits, making it suitable for individuals, couples and families looking to make their hotel experiences more valuable and memorable.'
        ],
        whyChoose: [
            'Instead of paying separately for every stay, meal or leisure experience, members can enjoy a collection of benefits through one membership.',
            'It is particularly useful for families, couples, frequent diners and guests who enjoy combining hotel stays with dining and leisure.',
            'Experience premium hospitality at Wyndham Garden Sonipat Murthal with a membership designed around stays, dining, refreshments and relaxation.'
        ],
        inclusions: [
            { title: '2 Complimentary Room Nights', description: 'Giving members the opportunity to enjoy a premium hotel stay at Wyndham Garden Sonipat Murthal.' },
            { title: '10 Dinner Buffets', description: 'Making it easier to enjoy multiple dining experiences throughout the membership period.' },
            { title: '4 Tea or Coffee Servings with Cookies', description: 'Perfect for relaxed conversations, evening refreshments or casual breaks.' },
            { title: '4 Mocktails or Juice Servings', description: 'Offering refreshing beverage options during your visits.' },
            { title: '4 Pint Beer or Juice Servings', description: 'Subject to applicable hotel terms and availability.' },
            { title: '6 Swimming Pool Entries', description: 'Allowing members to enjoy leisure time at the property and make the most of their hotel visits.' },
            { title: '1 kg Complimentary Cake', description: 'Can be enjoyed while dining at the property or taken away, subject to applicable terms.' }
        ],
        conditionsAndTerms: [
            'Prior booking is required for room nights and dining buffets.',
            'Offers are subject to hotel blackout dates and peak season availability.',
            'Vouchers cannot be combined with other ongoing promotions unless explicitly stated.',
            'Taxes and utility charges are subject to property terms.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
            website: 'www.DRSdeals.in',
            note: 'DRS Deals is an authorised channel partner. Call directly for instant member verification & reservation.'
        },
        imageSkeletonCount: 5
    },
    {
        id: 'hotel-sk-premium',
        slug: 'hotel-sk-premium-ghaziabad',
        title: 'Hotel SK Premium Membership',
        propertyName: 'Hotel SK Premium',
        tagline: 'One Membership. A Year of Hotel, Dining and Leisure Benefits.',
        category: 'dining',
        categoryLabel: 'Hotel & Fine Dining',
        location: 'Mohan Nagar, Ghaziabad, UP',
        stateRegion: 'Ghaziabad / Delhi NCR',
        price: '₹5,000',
        validity: '1 Year',
        estimatedValue: '₹40,000+',
        isFeatured: true,
        featuredOrder: 2,
        overview: [
            'The Hotel SK Premium Membership is designed for customers who want more value from their hotel visits throughout the year. Priced at ₹5,000, the membership remains valid for one year and includes a wide selection of complimentary benefits, food and beverage vouchers, room stay opportunities, dining discounts and buy one get one free offers.',
            'The membership is positioned as a comprehensive hospitality package for families, couples and frequent diners who want to enjoy more experiences while controlling their overall spending.'
        ],
        inclusions: [
            { title: '1 Executive or Deluxe Room Night Stay with Breakfast', description: 'Included absolutely free with no taxes and no utility charges, subject to terms.' },
            { title: '₹5,250 Food & Beverage Cash Vouchers', description: 'Provided as 7 vouchers worth ₹750 each. Max one voucher per visit.' },
            { title: '4 Complimentary Breakfast Buffets', description: 'Enjoy morning buffets at the hotel multi-cuisine restaurant.' },
            { title: '1 Complimentary Couple Dinner Buffet', description: 'A complete evening dining experience for two.' },
            { title: '4 Tea/Coffee Servings with Cookies', description: 'Casual refreshments during afternoon or evening visits.' },
            { title: '4 Complimentary Desserts', description: 'Selected according to chef\'s choice.' },
            { title: '4 Complimentary Mocktails or Soups', description: 'Refreshing starter options.' },
            { title: '6 Swimming Pool Entries', description: 'Available for family groups.' }
        ],
        sections: [
            {
                heading: 'Additional Room Stay Offers',
                items: [
                    'Executive or Deluxe room night with breakfast available at ₹1,999 plus applicable taxes (2 coupons included).'
                ]
            },
            {
                heading: 'Regular Dining & Billing Benefits',
                items: [
                    '₹1,000 off on a ₹2,000 food and drinks bill through 10 certificates.',
                    'According to stated terms, all certificates can be used together, subject to conditions.'
                ]
            },
            {
                heading: 'Buy One Get One Free Dining Offers (10 Vouchers Each)',
                items: [
                    'Beverages (10 BOGO Vouchers)',
                    'Soup (10 BOGO Vouchers)',
                    'Starter (10 BOGO Vouchers)',
                    'Main Course (10 BOGO Vouchers)',
                    'Dessert (10 BOGO Vouchers)',
                    'Chinese (10 BOGO Vouchers)',
                    'Valid for both dine in and takeaway (except free vouchers).'
                ]
            }
        ],
        conditionsAndTerms: [
            'Valid for 1 full year from date of issuance.',
            'Prior reservation mandatory for room bookings.',
            'Free room night includes breakfast with zero hidden taxes or utility charges.',
            'BOGO vouchers apply to items of equal or lesser value.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 5
    },
    {
        id: 'oren-kasauli',
        slug: 'oren-kasauli-membership',
        title: 'Oren Kasauli Membership Card',
        propertyName: 'Oren Kasauli',
        tagline: 'One Year of Stay, Dining, Wellness and Leisure Benefits in Kasauli',
        category: 'resorts',
        categoryLabel: 'Luxury Hill Resort & Spa',
        location: 'Kasauli, Himachal Pradesh',
        stateRegion: 'Himachal Pradesh',
        price: '₹10,000',
        validity: '1 Year',
        estimatedValue: '₹50,000+',
        isFeatured: true,
        featuredOrder: 3,
        overview: [
            'The Oren Kasauli Membership Card is designed for guests who enjoy travelling to the hills and want to get more value from repeated stays, dining experiences and leisure activities.',
            'Priced at ₹10,000 and valid for one year, the membership combines complimentary room stays, food and soft beverage vouchers, swimming pool access, spa benefits, room discounts, dining savings and special occasion privileges.'
        ],
        inclusions: [
            { title: '2 Complimentary Room Nights with Breakfast', description: 'Superior Attic Room or Superior Room categories. Covers 2 adults and 2 children up to 10 years of age without GST.' },
            { title: '₹10,000 Food & Soft Beverage Cash Vouchers', description: '10 vouchers × ₹1,000 = ₹10,000. Max ₹5,000 usable in a single day.' },
            { title: '10 Complimentary Tea/Coffee Servings with Cookies', description: 'Relaxed refreshments amidst hill views.' },
            { title: '10 Complimentary Swimming Pool Entries', description: 'Full leisure access during stay or visit.' },
            { title: 'Spa Utility Treatment Voucher 1', description: '1 treatment valued at ₹499 plus applicable taxes.' },
            { title: 'Spa Utility Treatment Voucher 2', description: '1 treatment valued at ₹999 plus applicable taxes.' }
        ],
        sections: [
            {
                heading: 'Special Room Stay Offers',
                items: [
                    'Flat 50 percent discount on stays.',
                    'Pay for one room night stay and receive another room night absolutely free.'
                ]
            },
            {
                heading: 'Dining & Celebration Benefits',
                items: [
                    '₹1,000 off on a ₹2,000 food and drinks bill through 10 certificates (usable together).',
                    'Birthdays & Anniversaries: 25 percent off total bill plus a 1 kg cake.'
                ]
            },
            {
                heading: 'Buy One Get One Free Offers',
                items: [
                    'Soft Beverages BOGO',
                    'Soup BOGO',
                    'Starter BOGO',
                    'Main Course BOGO',
                    'Dessert BOGO',
                    'Whisky and Beer 2+1 Offer'
                ]
            },
            {
                heading: 'Privilege Card Discount',
                items: [
                    'Flat 30 percent discount on rooms, food and drinks through the privilege card.'
                ]
            }
        ],
        conditionsAndTerms: [
            'Prior room booking required at least 48 hours in advance.',
            'Complimentary stays cover 2 adults + 2 children (<10 yrs).',
            'Max ₹5,000 cash vouchers can be redeemed per single calendar day.',
            'Subject to hotel availability and blackout dates.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 6
    },
    {
        id: 'atmayog-luxury-manor',
        slug: 'atmayog-luxury-manor-manali',
        title: 'Atma Yog Luxury Manor Membership',
        propertyName: 'Atma Yog Luxury Manor',
        tagline: 'A Year of Memorable Mountain Getaways in Manali',
        category: 'resorts',
        categoryLabel: 'Luxury Mountain Manor',
        location: 'Manali, Himachal Pradesh',
        stateRegion: 'Himachal Pradesh',
        price: '₹8,999',
        validity: '1 Year',
        estimatedValue: '₹50,000',
        isFeatured: true,
        featuredOrder: 4,
        overview: [
            'Atma Yog Luxury Manor in Manali offers a membership designed for guests who want to enjoy multiple stays, meals and hospitality experiences during the year.',
            'The membership is available for ₹8,999, with stated complimentary benefits worth ₹50,000. It is positioned as an option for customers who want to plan more frequent mountain getaways while enjoying added value from their hotel membership.'
        ],
        inclusions: [
            { title: '3 Complimentary Room Nights with Breakfast', description: 'Enjoy 3 full night stays with morning breakfast included in the serene hills of Manali.' },
            { title: '8 Lunch or Dinner Buffets', description: 'Generous dining buffet certificates for multiple visits throughout the year.' },
            { title: '10 Tea or Coffee Servings with Cookies', description: 'Perfect evening tea/coffee breaks overlooking the Manali mountains.' }
        ],
        whyChoose: [
            'A hotel membership can be useful when the benefits match the way you already travel.',
            'Customers planning multiple stays can potentially receive more value from included room nights, meals and refreshments than by purchasing separately.',
            'Limited memberships available for high exclusivity.'
        ],
        conditionsAndTerms: [
            'Valid for 1 year from activation date.',
            'Prior reservation mandatory for room stay redemption.',
            'Buffet meals subject to restaurant operating hours.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 5
    },
    {
        id: 'white-flower-resorts',
        slug: 'white-flower-resorts-mussoorie-corbett',
        title: 'The White Flower Resorts Membership',
        propertyName: 'The White Flower Resorts',
        tagline: 'One Membership. Two Destinations. A Year of Experiences.',
        category: 'resorts',
        categoryLabel: 'Multi-Destination Luxury Resort',
        location: 'Mussoorie & Jim Corbett, Uttarakhand',
        stateRegion: 'Uttarakhand',
        price: '₹7,999',
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
        sections: [
            {
                heading: 'Buy One Get One Free Categories (4 Coupons Each)',
                items: [
                    'Starters BOGO (4 Coupons)',
                    'Buffets BOGO (4 Coupons)',
                    'Main Course BOGO (4 Coupons)',
                    'Desserts BOGO (4 Coupons)'
                ]
            },
            {
                heading: 'Stated Benefit Value Breakdown',
                items: [
                    'Room stay value: ₹8,000 × 3 = ₹24,000',
                    'Buffet meals value: ₹1,500 × 10 = ₹15,000',
                    'Beverages value: ₹300 × 6 = ₹1,800',
                    'Soups / Mocktails value: ₹400 × 6 = ₹2,400',
                    'Pool / Gym access value: ₹1,000 × 6 = ₹6,000',
                    'Approximate Estimated Total Value: ₹50,000+'
                ]
            }
        ],
        conditionsAndTerms: [
            'Valid at both Mussoorie and Jim Corbett properties.',
            'Prior booking required. Subject to availability.',
            'Max 4 buffet coupons usable simultaneously.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 6
    },
    {
        id: 'rangmanch-farms',
        slug: 'rangmanch-farms-gurgaon',
        title: 'Rangmanch Farms Day Outing Package',
        propertyName: 'Rangmanch Farms',
        tagline: 'A Complete Day Out Filled With Food, Adventure and Entertainment',
        category: 'farmhouses',
        categoryLabel: 'Adventure & Farmhouse Day Outing',
        location: 'Gurgaon, Haryana',
        stateRegion: 'Haryana / Delhi NCR',
        price: 'Less than ₹1,500',
        originalPrice: '₹1,500',
        isFeatured: false,
        overview: [
            'Rangmanch Farms is designed as a full day outing for families, friends and groups looking for a combination of adventure, food and entertainment in one place.',
            'With 80 plus activities and 40 plus meals across different cuisines, the experience is built to keep guests engaged throughout the day.',
            'The standard ticket rate is stated as ₹1,500, while DRS Deals offers the experience at a special price of less than ₹1,500.'
        ],
        inclusions: [
            { title: '80+ Adventure & Leisure Activities', description: 'Includes Swimming pool, Water zorbing, Sky cycling, Rock climbing, Zip line, and Adventure rides.' },
            { title: '40+ Meals Across Cuisines', description: 'Access to a wide buffet selection of regional and continental dishes throughout the day.' },
            { title: 'Family & Kids Friendly Environment', description: 'Safe, secure environment with ample parking and activities for all age groups.' }
        ],
        conditionsAndTerms: [
            'DRS Deals is an authorised channel partner.',
            'Valid for full day access.',
            'Prior booking recommended to guarantee slot availability.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 4
    },
    {
        id: 'mera-gaon-mera-desh',
        slug: 'mera-gaon-mera-desh-murthal',
        title: 'Mera Gaon Mera Desh Murthal Day Pass',
        propertyName: 'Mera Gaon Mera Desh',
        tagline: 'Experience the Rhythm of Rural India with Unlimited Food & Water Park',
        category: 'water-parks',
        categoryLabel: 'Rural Cultural & Water Park',
        location: 'Murthal, Haryana',
        stateRegion: 'Haryana / Delhi NCR',
        price: '₹800',
        originalPrice: '₹1,400',
        timings: '9:30 AM – 5:30 PM (Check-in: 9:30 AM | Check-out: 5:30 PM)',
        isFeatured: false,
        overview: [
            'Mera Gaon Mera Desh in Murthal offers a day outing experience designed around rural India\'s traditional atmosphere, food, activities and entertainment.',
            'With 60 plus activities, delicious meals and access to a water park, the experience is designed for visitors who want to spend an entire day enjoying a mix of food, adventure, relaxation and family entertainment.',
            'The stated park rate is ₹1,400, while DRS Deals offers the experience for ₹800.'
        ],
        inclusions: [
            { title: 'Unlimited Tasty Meals', description: 'Enjoy traditional village meals and snacks throughout your stay.' },
            { title: '60+ Exciting Activities', description: 'Rope courses, traditional games, cultural performances, and adventure rides.' },
            { title: 'Water Park Access', description: 'Full access to water slides, pools, and splash zones.' }
        ],
        kidsPricing: [
            'Kids up to 3 feet: FREE',
            'Kids 3 feet to 4 feet: ₹650',
            'Guests above 4 feet: ₹800'
        ],
        conditionsAndTerms: [
            'DRS Deals is an authorised channel partner.',
            'Check-in at 9:30 AM, Check-out at 5:30 PM.',
            'Kids height criteria verified at entry gate.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 4
    },
    {
        id: 'madhavgarh-farms',
        slug: 'madhavgarh-farms-gurgaon',
        title: 'Madhavgarh Farms Day Outing Ticket',
        propertyName: 'Madhavgarh Farms',
        tagline: 'Experience the Feel of a Village Without Leaving Gurgaon',
        category: 'farmhouses',
        categoryLabel: 'Village Theme & Cultural Farm',
        location: 'Tikli Village, Badshahpur Road, Gurgaon',
        stateRegion: 'Gurgaon / Delhi NCR',
        price: '₹749',
        originalPrice: '₹1,499',
        timings: 'Morning Slot: 9:00 AM to 5:00 PM',
        isFeatured: false,
        overview: [
            'Madhavgarh Farms, located at Tikli Village, Badshahpur Road, Gurgaon, offers a rural themed day outing experience for customers looking for food, activities, entertainment and a change of pace from everyday city life.',
            'The listed park rate is ₹1,499, while the DRS Deals offer price is ₹749.',
            'The experience includes unlimited food and activities, allowing visitors to spend the day moving between traditional village inspired experiences, entertainment and meals.'
        ],
        inclusions: [
            { title: 'Unlimited Village Food', description: 'Fresh, authentic North Indian rural buffet meals, snacks, and beverages.' },
            { title: 'Unlimited Activities', description: 'Mud bath, tube well bath, pottery making, tractor rides, zip lining, and 50+ activities.' }
        ],
        kidsPricing: [
            'Kids up to 2.5 feet: FREE',
            'Kids 2.5 feet to 4 feet: ₹600',
            'Guests above 4 feet: ₹749'
        ],
        conditionsAndTerms: [
            'SAME DAY BOOKING IS NOT AVAILABLE. Advance booking required.',
            'Available for Morning Slot (9:00 AM to 5:00 PM) only.',
            'Location: Tikli Village, Badshahpur Road, Gurgaon.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
            website: 'www.DRSdeals.in'
        },
        imageSkeletonCount: 4
    },
    {
        id: 'mojoland-murthal',
        slug: 'mojoland-multi-theme-park-murthal',
        title: 'Mojoland Multi Theme Park Combo Pass',
        propertyName: 'Mojoland Multi Theme Park',
        tagline: 'One Ticket. Choose Any Two Parks in Murthal Sonipat.',
        category: 'water-parks',
        categoryLabel: 'Multi Theme Park (Water, Snow, Adventure, Amusement)',
        location: 'Grand Trunk Road, Murthal, Sonipat, Haryana',
        stateRegion: 'Haryana / Delhi NCR',
        price: '₹700 for ANY TWO PARKS',
        originalPrice: '₹800 per park',
        timings: '10:30 AM to 6:30 PM',
        isFeatured: false,
        overview: [
            'Mojoland Multi Theme Park in Murthal, Sonipat brings together multiple entertainment experiences in one destination, including Water Park, Adventure Park, Amusement Park, and Snow Park.',
            'The standard MRP is stated as ₹800 per park, while DRS Deals offers a special price of ₹700 for any two parks.',
            'With the offer, guests can choose any two parks from Water, Adventure, Amusement, or Snow Park options, such as Water + Adventure or Water + Snow.'
        ],
        inclusions: [
            { title: 'Access to Any Two Parks of Choice', description: 'Choose 2 from Water Park, Adventure Park, Amusement Park, or Snow Park.' },
            { title: 'Full Day Access', description: 'Valid from 10:30 AM to 6:30 PM operating hours.' }
        ],
        kidsPricing: [
            'Kids up to 2.8 feet: FREE',
            'Kids above 2.8 feet: ₹700'
        ],
        conditionsAndTerms: [
            'DRS Deals is an authorised channel partner.',
            'Select any 2 parks at the time of entry/booking.',
            'Location: Grand Trunk Road, Murthal, Haryana 131039.'
        ],
        bookingInfo: {
            phones: ['9811120892', '9811360808'],
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
