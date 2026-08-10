import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogs';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: 'Article Not Found | DRS Deals' };

    return {
        title: `${post.title} | DRS Deals Journal`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '840px' }}>
                {/* E-E-A-T Breadcrumb */}
                <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginBottom: '24px' }}>
                    <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Journal</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 500 }}>{post.category}</span>
                </div>

                {/* Article Header */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-gold)', background: 'rgba(188, 144, 68, 0.08)', padding: '4px 12px', borderRadius: '4px' }}>
                            {post.category}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)' }}>• {post.readTime}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)' }}>• {post.publishedDate}</span>
                    </div>

                    <h1 className="hero-title" style={{ fontSize: '2.5rem', lineHeight: 1.3, marginBottom: '24px' }}>
                        {post.title}
                    </h1>

                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>
                        "{post.excerpt}"
                    </p>

                    {/* Author Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'var(--color-ivory)', borderRadius: '8px', border: '1px solid var(--color-stone)' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-champagne-gold)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            DRS
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-charcoal)' }}>
                                Written by {post.author}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-light)' }}>
                                Verified Hospitality Expertise Standard
                            </div>
                        </div>
                    </div>
                </div>

                {/* Under Development Placeholder Section */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', margin: '0 auto 24px auto', borderRadius: '50%', background: 'rgba(188, 144, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne-gold)' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                    </div>

                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-champagne-gold)' }}>
                        Under Development
                    </h2>

                    <p className="text-body-large text-charcoal-light" style={{ maxWidth: '600px', margin: '0 auto 32px auto', lineHeight: 1.7 }}>
                        This article is fully registered in our editorial index. The team is currently formatting the full body content for optimal reading.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <Link href="/blog" className="btn btn-primary">Back to All Articles</Link>
                        <Link href="/deals" className="btn btn-outline">Explore Featured Deals</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
