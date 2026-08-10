export interface BlogPost {
    slug: string;
    title: string;
    category: 'Resorts & Stays' | 'Fine Dining' | 'Spa & Wellness' | 'Water Parks & Family' | 'Weekend Escapes' | 'Destinations & Travel';
    excerpt: string;
    readTime: string;
    publishedDate: string;
    author: string;
    tags: string[];
}

// Generate the 198 curated blog post metadata entries with natural customer-facing categories
export const BLOG_POSTS: BlogPost[] = [
    // 33 Resorts & Stays Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `resort-guide-${i + 1}`,
        title: `The Ultimate Guide to Luxury Resort Living in India #${i + 1}`,
        category: 'Resorts & Stays' as const,
        excerpt: `Discover how curated 5-star resort stays, private pool villas, and heritage retreats elevate your weekend breaks with uncompromised luxury privileges.`,
        readTime: '4 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['Resorts', 'Luxury Stays', 'Pool Villas', 'Hospitality'],
    })),

    // 33 Destinations & Travel Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `destinations-guide-${i + 1}`,
        title: `Exploring Regional Destinations: Finding Top Local Escapes in #${i + 1 === 1 ? 'Delhi NCR' : i % 3 === 0 ? 'Jaipur' : i % 3 === 1 ? 'Mumbai' : 'Gurugram'}`,
        category: 'Destinations & Travel' as const,
        excerpt: `Exploring premier regional destinations and local getaway spots across Delhi NCR, Rajasthan, Maharashtra, Punjab, and Gujarat.`,
        readTime: '5 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['Destinations', 'Regional Travel', 'Local Escapes', 'City Guides'],
    })),

    // 33 Fine Dining Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `dining-guide-${i + 1}`,
        title: `Gourmet Privileges & Fine Dining Excellence #${i + 1}`,
        category: 'Fine Dining' as const,
        excerpt: `In-depth breakdowns of chef's tasting menus, five-star buffet vouchers, and exclusive food and beverage inclusions for members.`,
        readTime: '4 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['Fine Dining', 'Gourmet Buffets', 'Chef Tasting', 'Culinary'],
    })),

    // 33 Water Parks & Family Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `family-parks-guide-${i + 1}`,
        title: `Curated Family Outings: Best Water Parks & Theme Park Drops #${i + 1}`,
        category: 'Water Parks & Family' as const,
        excerpt: `Planning family adventures: Where to find wave pools, thrill slides, and amusement park group passes at verified discount rates.`,
        readTime: '6 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['Water Parks', 'Family Outings', 'Amusement Parks', 'Weekend Fun'],
    })),

    // 33 Spa & Wellness Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `wellness-guide-${i + 1}`,
        title: `Holistic Wellness: Luxury Spa Therapies & Rejuvenation Retreats #${i + 1}`,
        category: 'Spa & Wellness' as const,
        excerpt: `Unwind with Ayurvedic wellness packages, couples hydrotherapy sessions, and holistic spa treatments at premier wellness sanctuaries.`,
        readTime: '5 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['Spa', 'Wellness', 'Ayurveda', 'Relaxation'],
    })),

    // 33 Weekend Escapes Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `weekend-escapes-guide-${i + 1}`,
        title: `The DRS Deals Experience: 23 Years of Curated Hospitality #${i + 1}`,
        category: 'Weekend Escapes' as const,
        excerpt: `Learn about our 23-year legacy of bridging verified high-end hospitality venues with discerning guests seeking uncompromised value.`,
        readTime: '4 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['Weekend Escapes', 'DRS Deals', 'Heritage', 'Curated Travel'],
    })),
];
