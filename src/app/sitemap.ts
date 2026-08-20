import { MetadataRoute } from 'next';
import { getAllDeals } from '@/data/deals';
import { BLOG_POSTS } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.drsdeals.in';
    const currentDate = new Date().toISOString();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
        { url: `${baseUrl}/explore`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.95 },
        { url: `${baseUrl}/deals`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.95 },
        { url: `${baseUrl}/search`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
        
        // Experiences
        { url: `${baseUrl}/experiences`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/experiences/resorts`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/experiences/dining`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/experiences/spa`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/experiences/water-parks`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/experiences/farmhouses`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        
        // Destinations
        { url: `${baseUrl}/destinations`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${baseUrl}/destinations/delhi`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/destinations/jaipur`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/destinations/mumbai`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },

        // Collections
        { url: `${baseUrl}/collections`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/collections/couples`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.75 },
        { url: `${baseUrl}/collections/family`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.75 },
        { url: `${baseUrl}/collections/weekend`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.75 },
        { url: `${baseUrl}/collections/corporate`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.75 },

        // Guides
        { url: `${baseUrl}/guides`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/guides/top-10-resorts`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${baseUrl}/guides/fine-dining`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${baseUrl}/guides/family-parks`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.75 },

        // Company & Support
        { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/how-it-works`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/partners`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${baseUrl}/help`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${baseUrl}/careers`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/press`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
        { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
        { url: `${baseUrl}/refunds`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },

        // Authority Profiles
        { url: `${baseUrl}/yashveer-singh`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${baseUrl}/yashveer-labs`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    ];

    // Dynamic Deals
    const dealRoutes: MetadataRoute.Sitemap = getAllDeals().map((deal) => ({
        url: `${baseUrl}/deals/${deal.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.85,
    }));

    // Dynamic Blog Articles
    const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.publishedDate ? new Date(post.publishedDate).toISOString() : currentDate,
        changeFrequency: 'monthly',
        priority: 0.75,
    }));

    return [...staticRoutes, ...dealRoutes, ...blogRoutes];
}
