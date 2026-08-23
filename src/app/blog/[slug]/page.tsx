import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import { getAllDeals } from '@/data/deals';
import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: 'Article Not Found | DRS Deals Journal' };

    return {
        title: `${post.title} | DRS Deals Journal`,
        description: post.excerpt,
        keywords: [post.category, 'DRS Deals', 'Hospitality Guide', 'Travel Privileges', 'Luxury Stays'],
        alternates: {
            canonical: `${siteConfig.url}/blog/${post.slug}`,
        },
        openGraph: {
            title: `${post.title} | DRS Deals Journal`,
            description: post.excerpt,
            url: `${siteConfig.url}/blog/${post.slug}`,
            siteName: siteConfig.name,
            type: 'article',
            publishedTime: post.publishedDate,
            authors: [post.author],
            images: [
                {
                    url: `${siteConfig.url}${post.image}`,
                    width: 1200,
                    height: 630,
                    alt: post.imageAlt,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | DRS Deals`,
            description: post.excerpt,
            images: [`${siteConfig.url}${post.image}`],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Related articles in same category
    const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
    const featuredDeals = getAllDeals().slice(0, 3);

    // Schema.org BlogPosting
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    {
                        '@type': 'ListItem',
                        'position': 1,
                        'name': 'Home',
                        'item': 'https://www.drsdeals.in/',
                    },
                    {
                        '@type': 'ListItem',
                        'position': 2,
                        'name': 'Journal',
                        'item': 'https://www.drsdeals.in/blog',
                    },
                    {
                        '@type': 'ListItem',
                        'position': 3,
                        'name': post.title,
                        'item': `https://www.drsdeals.in/blog/${post.slug}`,
                    },
                ],
            },
            {
                '@type': 'BlogPosting',
                'headline': post.title,
                'description': post.excerpt,
                'datePublished': post.publishedDate,
                'author': {
                    '@type': 'Person',
                    'name': post.author,
                    'jobTitle': 'Senior Hospitality Editor',
                },
                'publisher': {
                    '@type': 'Organization',
                    'name': 'DRS Deals',
                    'url': 'https://www.drsdeals.in/',
                },
                'mainEntityOfPage': `https://www.drsdeals.in/blog/${post.slug}`,
            },
        ],
    };

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container" style={{ maxWidth: '880px' }}>
                {/* E-E-A-T Breadcrumb */}
                <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginBottom: '24px' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Journal</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>{post.category}</span>
                </div>

                {/* Article Header */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-gold)', background: 'rgba(188, 144, 68, 0.08)', padding: '4px 12px', borderRadius: '4px' }}>
                            {post.category}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)' }}>• {post.readTime}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)' }}>• Published {post.publishedDate}</span>
                    </div>

                    <h1 className="hero-title" style={{ fontSize: '2.5rem', lineHeight: 1.25, marginBottom: '20px' }}>
                        {post.title}
                    </h1>

                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '28px' }}>
                        {post.excerpt}
                    </p>

                    {/* Author & Verification Card */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-champagne-gold)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem' }}>
                            DRS
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-charcoal)' }}>
                                Written by {post.author}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-light)' }}>
                                Senior Hospitality &amp; Travel Editorial Desk • Verified Experience Standards
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Editorial Header Image */}
                <div style={{ width: '100%', height: '420px', borderRadius: '16px', marginBottom: '40px', overflow: 'hidden', border: '1px solid var(--color-stone)', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
                    <img 
                        src={post.image} 
                        alt={post.imageAlt}
                        width={1200}
                        height={630}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* Article Body Content */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.05rem', color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                        <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                            Welcome to this comprehensive DRS Deals editorial guide on <strong>{post.category}</strong>. Our travel research team regularly evaluates top hospitality properties across India to help members access premier experiences with unmatched clarity and savings.
                        </p>

                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginTop: '16px', marginBottom: '8px' }}>
                            Understanding the Value of Curated Hospitality Memberships
                        </h2>
                        <p>
                            When planning vacations, family weekend getaways, or luxury dining celebrations, standard rack rates often include substantial hidden markups. DRS Deals works directly with premier partner properties—including 5-star hotels, hill retreats, water parks, and rural adventure farms—to structure annual memberships that bundle room stays, dining buffets, spa vouchers, and leisure access into single, cost-effective packages.
                        </p>
                        <p>
                            By securing memberships such as <Link href="/deals/wyndham-garden-sonipat-murthal" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'underline' }}>Wyndham Garden Sonipat Murthal</Link>, <Link href="/deals/hotel-sk-premium-ghaziabad" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'underline' }}>Hotel SK Premium</Link>, or <Link href="/deals/oren-kasauli-membership" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'underline' }}>Oren Kasauli</Link>, guests receive complimentary room nights, zero-utility-charge stays, and up to ₹50,000 in estimated dining and leisure vouchers.
                        </p>

                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginTop: '16px', marginBottom: '8px' }}>
                            Key Takeaways &amp; Member Benefits
                        </h2>
                        <ul style={{ paddingLeft: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><strong>Guaranteed Savings:</strong> Memberships unlock 20% to 50% true savings compared to booking individual nights or meals separately.</li>
                            <li><strong>Multi-Visit Flexibility:</strong> Valid for a full year, vouchers can be redeemed across multiple weekend trips or special occasions.</li>
                            <li><strong>Transparent Conditions:</strong> Clear rules on weekend usage, advance booking, and child height criteria ensure zero surprises at reception.</li>
                        </ul>

                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginTop: '16px', marginBottom: '8px' }}>
                            How to Reserve &amp; Maximize Your Privileges
                        </h2>
                        <p>
                            To redeem any offer mentioned in our journal, contact the official DRS Deals booking hotline at <strong>9811120892</strong> or <strong>9811360808</strong>. Our reservation concierge confirms availability directly with property desks to ensure seamless check-in and priority guest treatment.
                        </p>
                    </div>

                    {/* FAQ Accordion Section */}
                    <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--color-stone)' }}>
                        <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                            Frequently Asked Questions
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                                <strong style={{ color: 'var(--color-charcoal)', display: 'block', marginBottom: '6px' }}>How do I purchase a DRS Deals membership?</strong>
                                <span style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)' }}>Call our authorized booking numbers (9811120892 / 9811360808) for instant verification and physical membership card delivery.</span>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)' }}>
                                <strong style={{ color: 'var(--color-charcoal)', display: 'block', marginBottom: '6px' }}>Are there blackout dates for complimentary stays?</strong>
                                <span style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)' }}>Complimentary room nights are subject to property availability and peak holiday blackout dates. Prior booking is recommended.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Relevant DRS Deals Experiences Grid */}
                <div style={{ marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>
                        Featured Experiences Related to This Article
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                        {featuredDeals.map((deal) => (
                            <div key={deal.id} className="bg-white shadow-soft" style={{ borderRadius: '14px', padding: '24px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                                        {deal.categoryLabel}
                                    </div>
                                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '6px' }}>
                                        {deal.propertyName}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginBottom: '12px' }}>
                                        📍 {deal.location}
                                    </p>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '16px' }}>
                                        {deal.price}
                                    </div>
                                </div>
                                <Link href={`/deals/${deal.slug}`} className="btn btn-primary" style={{ textAlign: 'center', fontSize: '0.85rem' }}>
                                    View Membership
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Articles Grid */}
                {relatedPosts.length > 0 && (
                    <div style={{ paddingTop: '32px', borderTop: '1px solid var(--color-stone)' }}>
                        <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '24px' }}>
                            More Articles in {post.category}
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                            {relatedPosts.map((rel) => (
                                <div key={rel.slug} className="bg-white shadow-soft" style={{ borderRadius: '14px', padding: '24px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>
                                            {rel.category}
                                        </div>
                                        <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px', lineHeight: 1.3 }}>
                                            {rel.title}
                                        </h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', lineHeight: 1.5, marginBottom: '16px' }}>
                                            {rel.excerpt.slice(0, 90)}...
                                        </p>
                                    </div>
                                    <Link href={`/blog/${rel.slug}`} className="btn btn-outline" style={{ textAlign: 'center', fontSize: '0.85rem' }}>
                                        Read Article
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
