'use client';

import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import BlogCard from '@/components/BlogCard';

export default function BlogIndexPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories = ['All', 'SEO', 'GEO', 'AEO', 'Natural Search', 'Keywords', 'Brand'];

    const filteredPosts = BLOG_POSTS.filter((post) => {
        const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesQuery;
    });

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Editorial Insights &amp; Industry Guides</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        The DRS Deals Knowledge Base
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.15rem' }}>
                        Explore 198 curated articles across search optimization, regional destinations, AI search readiness, and hospitality deals.
                    </p>
                </div>

                {/* Filter & Search Bar */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '12px', padding: '24px', marginBottom: '48px', border: '1px solid var(--color-stone)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search among 198 articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '14px 20px',
                                borderRadius: '8px',
                                border: '1px solid var(--color-stone)',
                                fontSize: '1rem',
                                outline: 'none',
                                background: 'var(--color-ivory)',
                            }}
                        />
                        
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        border: '1px solid',
                                        borderColor: selectedCategory === cat ? 'var(--color-champagne-gold)' : 'var(--color-stone)',
                                        background: selectedCategory === cat ? 'var(--color-champagne-gold)' : '#fff',
                                        color: selectedCategory === cat ? '#fff' : 'var(--color-charcoal)',
                                        fontWeight: selectedCategory === cat ? 600 : 400,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    {cat} {cat === 'All' ? `(${BLOG_POSTS.length})` : `(33)`}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Stats */}
                <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                        Showing <strong>{filteredPosts.length}</strong> of <strong>198</strong> published posts
                    </span>
                </div>

                {/* Blog Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                    {filteredPosts.slice(0, 36).map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                {filteredPosts.length > 36 && (
                    <div className="text-center" style={{ marginTop: '48px' }}>
                        <p className="text-body-small text-charcoal-light">Showing top 36 entries. Refine search or filter by category to view specific posts.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
