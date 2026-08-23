export interface BlogPost {
    slug: string;
    title: string;
    category: 'Resorts & Stays' | 'Fine Dining' | 'Spa & Wellness' | 'Water Parks & Family' | 'Weekend Escapes' | 'Destinations & Travel';
    excerpt: string;
    readTime: string;
    publishedDate: string;
    author: string;
    tags: string[];
    image: string;
    imageAlt: string;
}

// 22 semantic blog image mappings
const RESORT_IMAGES = [
    { src: '/images/blogs/blog-1.webp', altDesc: 'Luxury private pool villa with sun loungers overlooking serene landscapes' },
    { src: '/images/blogs/blog-4.webp', altDesc: 'Scenic mountain resort chalets in Kasauli with misty pine forest views' },
    { src: '/images/blogs/blog-6.webp', altDesc: '5-star executive luxury suite bedroom with elegant warm lighting' },
    { src: '/images/blogs/blog-9.webp', altDesc: 'Boutique mountain manor in Manali surrounded by apple orchards' },
    { src: '/images/blogs/blog-11.webp', altDesc: 'Five star luxury hotel architecture and manicured garden grounds' },
    { src: '/images/blogs/blog-19.webp', altDesc: 'Panoramic luxury resort swimming pool terrace in India' },
    { src: '/images/blogs/blog-22.webp', altDesc: 'Sunset infinity pool deck overlooking lush mountain valleys' }
];

const DESTINATION_IMAGES = [
    { src: '/images/blogs/blog-5.webp', altDesc: 'Grand heritage palace hotel in Rajasthan with traditional carved sandstone arches' },
    { src: '/images/blogs/blog-10.webp', altDesc: 'Hill retreat and wildlife safari lodge in Mussoorie and Jim Corbett' },
    { src: '/images/blogs/blog-16.webp', altDesc: 'Historic Jaipur architecture and majestic desert state heritage stays' },
    { src: '/images/blogs/blog-17.webp', altDesc: 'Delhi NCR urban luxury hotel skyline and evening ambiance' },
    { src: '/images/blogs/blog-18.webp', altDesc: 'Serene regional getaways across Punjab and scenic hill states' },
    { src: '/images/blogs/blog-4.webp', altDesc: 'Pristine mountain vistas and pine-covered ridges in Kasauli' },
    { src: '/images/blogs/blog-9.webp', altDesc: 'Himalayan mountain valley views from a boutique Manali suite' }
];

const DINING_IMAGES = [
    { src: '/images/blogs/blog-2.webp', altDesc: 'Gourmet fine dining table setting with crystal glassware and candlelit elegance' },
    { src: '/images/blogs/blog-13.webp', altDesc: 'Lavish multi-course buffet spread with authentic culinary delicacies' },
    { src: '/images/blogs/blog-20.webp', altDesc: 'Five-star chef gourmet brunch buffet and dessert spread' },
    { src: '/images/blogs/blog-6.webp', altDesc: 'Executive hotel lounge dining and curated cocktail privileges' },
    { src: '/images/blogs/blog-14.webp', altDesc: 'Romantic candlelit outdoor dinner terrace at a premier luxury resort' },
    { src: '/images/blogs/blog-11.webp', altDesc: '5-star hotel banquet and gourmet dining restaurant' }
];

const FAMILY_PARK_IMAGES = [
    { src: '/images/blogs/blog-7.webp', altDesc: 'Vibrant water park with thrill water slides, splash pads, and wave pool' },
    { src: '/images/blogs/blog-8.webp', altDesc: 'Farmhouse adventure obstacle course and rural activities at Rangmanch Farms' },
    { src: '/images/blogs/blog-12.webp', altDesc: 'Cultural village games, pottery workshops, and tractor rides at Madhavgarh Farms' },
    { src: '/images/blogs/blog-15.webp', altDesc: 'Family leisure amusement rides, pools, and adventure day outings' },
    { src: '/images/blogs/blog-21.webp', altDesc: 'Multi-theme water and snow adventure park thrills at Mojoland Murthal' }
];

const SPA_WELLNESS_IMAGES = [
    { src: '/images/blogs/blog-3.webp', altDesc: 'Holistic Ayurvedic spa sanctuary with aromatic oils and traditional therapy setup' },
    { src: '/images/blogs/blog-1.webp', altDesc: 'Private pool deck for yoga, meditation, and mindful wellness retreats' },
    { src: '/images/blogs/blog-9.webp', altDesc: 'Peaceful mountain wellness sanctuary surrounded by fresh cedar air' },
    { src: '/images/blogs/blog-10.webp', altDesc: 'Forest bathing and rejuvenating nature spa retreat in the hills' },
    { src: '/images/blogs/blog-14.webp', altDesc: 'Couples hydrotherapy relaxation suite in a premier luxury wellness center' },
    { src: '/images/blogs/blog-22.webp', altDesc: 'Serene sunrise meditation area overlooking mountain infinity pool' }
];

const WEEKEND_ESCAPE_IMAGES = [
    { src: '/images/blogs/blog-4.webp', altDesc: 'Tranquil weekend mountain getaway at Oren Kasauli in Himachal Pradesh' },
    { src: '/images/blogs/blog-8.webp', altDesc: 'Full day adventure and rural farm picnic escape near Gurgaon Delhi NCR' },
    { src: '/images/blogs/blog-10.webp', altDesc: 'Dual-destination hill station and wildlife getaway in Uttarakhand' },
    { src: '/images/blogs/blog-14.webp', altDesc: 'Romantic weekend escape with private dining and scenic balconies' },
    { src: '/images/blogs/blog-15.webp', altDesc: 'Curated weekend family leisure and resort hospitality experience' },
    { src: '/images/blogs/blog-19.webp', altDesc: '23-year legacy of curated 5-star hotel memberships and weekend escapes' },
    { src: '/images/blogs/blog-22.webp', altDesc: 'Exclusive member privileges across India’s finest hospitality retreats' }
];

// Generate the 198 curated blog post metadata entries with natural customer-facing categories
export const BLOG_POSTS: BlogPost[] = [
    // 33 Resorts & Stays Blogs
    ...Array.from({ length: 33 }, (_, i) => {
        const imgObj = RESORT_IMAGES[i % RESORT_IMAGES.length];
        return {
            slug: `resort-guide-${i + 1}`,
            title: `The Ultimate Guide to Luxury Resort Living in India #${i + 1}`,
            category: 'Resorts & Stays' as const,
            excerpt: `Discover how curated 5-star resort stays, private pool villas, and heritage retreats elevate your weekend breaks with uncompromised luxury privileges.`,
            readTime: '4 min read',
            publishedDate: 'August 2026',
            author: 'DRS Deals Editorial Team',
            tags: ['Resorts', 'Luxury Stays', 'Pool Villas', 'Hospitality'],
            image: imgObj.src,
            imageAlt: `${imgObj.altDesc} - Guide #${i + 1}`,
        };
    }),

    // 33 Destinations & Travel Blogs
    ...Array.from({ length: 33 }, (_, i) => {
        const destName = i + 1 === 1 ? 'Delhi NCR' : i % 3 === 0 ? 'Jaipur' : i % 3 === 1 ? 'Mumbai' : 'Gurugram';
        const imgObj = DESTINATION_IMAGES[i % DESTINATION_IMAGES.length];
        return {
            slug: `destinations-guide-${i + 1}`,
            title: `Exploring Regional Destinations: Finding Top Local Escapes in #${destName}`,
            category: 'Destinations & Travel' as const,
            excerpt: `Exploring premier regional destinations and local getaway spots across Delhi NCR, Rajasthan, Maharashtra, Punjab, and Gujarat.`,
            readTime: '5 min read',
            publishedDate: 'August 2026',
            author: 'DRS Deals Editorial Team',
            tags: ['Destinations', 'Regional Travel', 'Local Escapes', 'City Guides'],
            image: imgObj.src,
            imageAlt: `${imgObj.altDesc} - Exploring ${destName}`,
        };
    }),

    // 33 Fine Dining Blogs
    ...Array.from({ length: 33 }, (_, i) => {
        const imgObj = DINING_IMAGES[i % DINING_IMAGES.length];
        return {
            slug: `dining-guide-${i + 1}`,
            title: `Gourmet Privileges & Fine Dining Excellence #${i + 1}`,
            category: 'Fine Dining' as const,
            excerpt: `In-depth breakdowns of chef's tasting menus, five-star buffet vouchers, and exclusive food and beverage inclusions for members.`,
            readTime: '4 min read',
            publishedDate: 'August 2026',
            author: 'DRS Deals Editorial Team',
            tags: ['Fine Dining', 'Gourmet Buffets', 'Chef Tasting', 'Culinary'],
            image: imgObj.src,
            imageAlt: `${imgObj.altDesc} - Fine Dining Article #${i + 1}`,
        };
    }),

    // 33 Water Parks & Family Blogs
    ...Array.from({ length: 33 }, (_, i) => {
        const imgObj = FAMILY_PARK_IMAGES[i % FAMILY_PARK_IMAGES.length];
        return {
            slug: `family-parks-guide-${i + 1}`,
            title: `Curated Family Outings: Best Water Parks & Theme Park Drops #${i + 1}`,
            category: 'Water Parks & Family' as const,
            excerpt: `Planning family adventures: Where to find wave pools, thrill slides, and amusement park group passes at verified discount rates.`,
            readTime: '6 min read',
            publishedDate: 'August 2026',
            author: 'DRS Deals Editorial Team',
            tags: ['Water Parks', 'Family Outings', 'Amusement Parks', 'Weekend Fun'],
            image: imgObj.src,
            imageAlt: `${imgObj.altDesc} - Family Fun #${i + 1}`,
        };
    }),

    // 33 Spa & Wellness Blogs
    ...Array.from({ length: 33 }, (_, i) => {
        const imgObj = SPA_WELLNESS_IMAGES[i % SPA_WELLNESS_IMAGES.length];
        return {
            slug: `wellness-guide-${i + 1}`,
            title: `Holistic Wellness: Luxury Spa Therapies & Rejuvenation Retreats #${i + 1}`,
            category: 'Spa & Wellness' as const,
            excerpt: `Unwind with Ayurvedic wellness packages, couples hydrotherapy sessions, and holistic spa treatments at premier wellness sanctuaries.`,
            readTime: '5 min read',
            publishedDate: 'August 2026',
            author: 'DRS Deals Editorial Team',
            tags: ['Spa', 'Wellness', 'Ayurveda', 'Relaxation'],
            image: imgObj.src,
            imageAlt: `${imgObj.altDesc} - Wellness Guide #${i + 1}`,
        };
    }),

    // 33 Weekend Escapes Blogs
    ...Array.from({ length: 33 }, (_, i) => {
        const imgObj = WEEKEND_ESCAPE_IMAGES[i % WEEKEND_ESCAPE_IMAGES.length];
        return {
            slug: `weekend-escapes-guide-${i + 1}`,
            title: `The DRS Deals Experience: 23 Years of Curated Hospitality #${i + 1}`,
            category: 'Weekend Escapes' as const,
            excerpt: `Learn about our 23-year legacy of bridging verified high-end hospitality venues with discerning guests seeking uncompromised value.`,
            readTime: '4 min read',
            publishedDate: 'August 2026',
            author: 'DRS Deals Editorial Team',
            tags: ['Weekend Escapes', 'DRS Deals', 'Heritage', 'Curated Travel'],
            image: imgObj.src,
            imageAlt: `${imgObj.altDesc} - DRS Deals Legacy #${i + 1}`,
        };
    }),
];
