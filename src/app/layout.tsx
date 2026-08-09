import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#080705',
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.drsdeals.in'),
    title: {
        default: 'DRS Deals | Premium Leisure, Dining & Resort Experiences across India',
        template: '%s | DRS Deals',
    },
    description: 'Since 2003, DRS Deals has curated India’s finest luxury resorts, fine dining, spa retreats, and water park passes at exclusive 20%-50% discount prices.',
    keywords: [
        'DRS Deals',
        'Luxury Resort Deals India',
        'Fine Dining Vouchers Delhi NCR',
        'Jaipur Heritage Stay Discounts',
        'Spa Retreat Offers Mumbai',
        'Water Park Vouchers Noida',
        'Exclusive Travel Experiences India',
        'Verified Hospitality Deals',
    ],
    authors: [{ name: 'Yashveer Singh', url: 'https://www.drsdeals.in/yashveer-singh' }],
    creator: 'Yashveer Labs',
    publisher: 'DRS Deals',
    alternates: {
        canonical: 'https://www.drsdeals.in/',
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
        title: 'DRS Deals | Premium Experiences & Exclusive Offers',
        description: 'Curating India’s finest luxury resorts, fine dining, spa retreats, and family experiences at exclusive savings since 2003.',
        url: 'https://www.drsdeals.in/',
        siteName: 'DRS Deals',
        images: [
            {
                url: '/images/webp/Hero Section (Collage Primary Image).webp',
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
        title: 'DRS Deals | Premium Experiences for Less',
        description: 'Discover luxury stays, gourmet dining, and spa retreats across India at exclusive discount prices.',
        images: ['/images/webp/Hero Section (Collage Primary Image).webp'],
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/logo.png', type: 'image/png' },
        ],
        apple: '/logo.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // E-E-A-T & Technical SEO Schema.org JSON-LD
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://www.drsdeals.in/#organization',
                name: 'DRS Deals',
                url: 'https://www.drsdeals.in/',
                logo: 'https://www.drsdeals.in/logo.png',
                foundingDate: '2003',
                founder: {
                    '@type': 'Person',
                    name: 'Yashveer Singh',
                },
                sameAs: [
                    'https://github.com/yashveer-singh-speaks/drs-deals',
                ],
                description: 'India’s leading curated platform for exclusive luxury hospitality, fine dining, spa wellness, and resort deals.',
            },
            {
                '@type': 'WebSite',
                '@id': 'https://www.drsdeals.in/#website',
                url: 'https://www.drsdeals.in/',
                name: 'DRS Deals',
                publisher: {
                    '@id': 'https://www.drsdeals.in/#organization',
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://www.drsdeals.in/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                },
            },
            {
                '@type': 'LocalBusiness',
                '@id': 'https://www.drsdeals.in/#localbusiness',
                name: 'DRS Deals',
                image: 'https://www.drsdeals.in/logo.png',
                url: 'https://www.drsdeals.in/',
                priceRange: '₹750 - ₹25000',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'New Delhi',
                    addressRegion: 'Delhi NCR',
                    addressCountry: 'IN',
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '24500',
                    bestRating: '5',
                    worstRating: '1',
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
            </body>
        </html>
    );
}
