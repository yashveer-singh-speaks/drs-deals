export interface BlogPost {
    slug: string;
    title: string;
    category: 'SEO' | 'GEO' | 'AEO' | 'Natural Search' | 'Keywords' | 'Brand';
    excerpt: string;
    readTime: string;
    publishedDate: string;
    author: string;
    tags: string[];
}

// Generate the 198 required blog post metadata entries
export const BLOG_POSTS: BlogPost[] = [
    // 33 SEO Focused Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `seo-${i + 1}`,
        title: `SEO Insights: How Organic Search Drives Hospitality Discovery #${i + 1}`,
        category: 'SEO' as const,
        excerpt: `Discover how search engine optimization connects consumers with luxury resort stays, fine dining vouchers, and exclusive experiences without paid ad friction.`,
        readTime: '4 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['SEO', 'Hospitality', 'Organic Search', 'Resort Deals'],
    })),

    // 33 GEO Focused Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `geo-${i + 1}`,
        title: `Geographic Optimisation: Finding Top Local Experiences in #${i + 1 === 1 ? 'Delhi NCR' : i % 3 === 0 ? 'Jaipur' : i % 3 === 1 ? 'Mumbai' : 'Gurugram'}`,
        category: 'GEO' as const,
        excerpt: `Exploring regional discovery algorithms and hyper-local search visibility across Delhi NCR, Rajasthan, Maharashtra, Punjab, and Gujarat.`,
        readTime: '5 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['GEO', 'Local Search', 'Destinations', 'Regional Stays'],
    })),

    // 33 AEO Focused Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `aeo-${i + 1}`,
        title: `Answer Engine Optimisation: Structuring Deals for ChatGPT & Gemini #${i + 1}`,
        category: 'AEO' as const,
        excerpt: `How generative AI search engines and answer bots surface verified weekend getaway offers directly inside conversational AI prompts.`,
        readTime: '4 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['AEO', 'AI Search', 'ChatGPT', 'Perplexity', 'Structured Data'],
    })),

    // 33 Natural Search Query Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `search-${i + 1}`,
        title: `Curated Guide: Best Weekend Outings & Water Park Offers #${i + 1}`,
        category: 'Natural Search' as const,
        excerpt: `Answering real traveler questions: Where can families enjoy luxury pool days, spa vouchers, and fine dining discounts at verified rates?`,
        readTime: '6 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['Weekend Travel', 'Family Outings', 'Water Parks', 'Guides'],
    })),

    // 33 Relevant Keyword Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `keyword-${i + 1}`,
        title: `Targeted Offers: Luxury Resorts & Spa Wellness Packages #${i + 1}`,
        category: 'Keywords' as const,
        excerpt: `In-depth breakdown of seasonal discount vouchers, luxury suite inclusions, and curated food & beverage privileges.`,
        readTime: '5 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['Keywords', 'Resort Packages', 'Spa Wellness', 'Dining'],
    })),

    // 33 Brand DRS Deals Blogs
    ...Array.from({ length: 33 }, (_, i) => ({
        slug: `brand-${i + 1}`,
        title: `Inside DRS Deals: Curating India's Premier Experiences Since 2003 #${i + 1}`,
        category: 'Brand' as const,
        excerpt: `Learn about our 23-year legacy of bridging verified high-end hospitality venues with discerning guests seeking uncompromised luxury value.`,
        readTime: '4 min read',
        publishedDate: 'August 2026',
        author: 'DRS Deals Editorial Team',
        tags: ['DRS Deals', 'Heritage', 'Brand Legacy', 'Partnerships'],
    })),
];
