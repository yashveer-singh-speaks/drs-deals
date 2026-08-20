import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomRightActions from '@/components/BottomRightActions';
import Chatbot from '@/components/Chatbot';
import { siteConfig } from '@/config/site';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#080705',
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: 'DRS Deals | Premium Leisure, Dining & Resort Experiences across India',
        template: '%s | DRS Deals',
    },
    description: 'Since 2003, DRS Deals has curated India’s finest luxury resorts, fine dining, spa retreats, and water park passes across 50+ cities at exclusive member rates.',
    keywords: [
        'DRS Deals',
        'Luxury Resort Deals India',
        'Fine Dining Vouchers Delhi NCR',
        'Jaipur Heritage Stay Discounts',
        'Spa Retreat Offers Mumbai',
        'Water Park Passes Noida',
        'Exclusive Travel Experiences India',
        'Curated Hospitality Memberships',
        '23 Year Legacy Hospitality',
    ],
    authors: [{ name: siteConfig.founder.name, url: siteConfig.founder.url }],
    creator: siteConfig.creator.name,
    publisher: siteConfig.name,
    alternates: {
        canonical: `${siteConfig.url}/`,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'DRS Deals | Premium Experiences & Exclusive Offers Since 2003',
        description: 'Curating India’s finest luxury resorts, fine dining, spa retreats, and family experiences at exclusive member rates. 23-Year Hospitality Legacy.',
        url: `${siteConfig.url}/`,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.socialImage,
                width: 1200,
                height: 630,
                alt: 'DRS Deals Luxury Resort Experience',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DRS Deals | Premium Experiences for Less Since 2003',
        description: 'Discover luxury stays, gourmet dining, and spa retreats across India at exclusive member rates.',
        images: [siteConfig.socialImage],
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: siteConfig.logo, type: 'image/webp' },
        ],
        apple: siteConfig.logo,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // E-E-A-T & Technical SEO Schema.org JSON-LD (Verified facts & ratings)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${siteConfig.url}/#organization`,
                name: siteConfig.name,
                url: `${siteConfig.url}/`,
                logo: `${siteConfig.url}${siteConfig.logo}`,
                foundingDate: '2003',
                founder: {
                    '@type': 'Person',
                    name: siteConfig.founder.name,
                    url: siteConfig.founder.url,
                },
                sameAs: [
                    'https://github.com/yashveer-singh-speaks/drs-deals',
                ],
                description: 'India’s premier curated platform for exclusive luxury hospitality, fine dining, spa wellness, and resort memberships since 2003.',
                contactPoint: [
                    {
                        '@type': 'ContactPoint',
                        telephone: siteConfig.contacts.hotline1,
                        contactType: 'customer service',
                        areaServed: 'IN',
                        availableLanguage: ['en', 'hi'],
                    },
                ],
            },
            {
                '@type': 'WebSite',
                '@id': `${siteConfig.url}/#website`,
                url: `${siteConfig.url}/`,
                name: siteConfig.name,
                publisher: {
                    '@id': `${siteConfig.url}/#organization`,
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${siteConfig.url}/search?q={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                },
            },
            {
                '@type': 'LocalBusiness',
                '@id': `${siteConfig.url}/#localbusiness`,
                name: siteConfig.name,
                image: `${siteConfig.url}${siteConfig.logo}`,
                url: `${siteConfig.url}/`,
                priceRange: '₹750 - ₹25000',
                telephone: siteConfig.contacts.hotline1,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'New Delhi',
                    addressRegion: 'Delhi NCR',
                    addressCountry: 'IN',
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    bestRating: '5',
                    worstRating: '1',
                    ratingCount: '240',
                },
            },
        ],
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Chatbot />
                <BottomRightActions />
            </body>
        </html>
    );
}
