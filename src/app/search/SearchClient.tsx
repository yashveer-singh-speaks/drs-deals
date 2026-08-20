'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAllDeals, Deal } from '@/data/deals';
import { BLOG_POSTS, BlogPost } from '@/data/blogs';
import BlogCard from '@/components/BlogCard';

export default function SearchClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialQuery = searchParams.get('q') || '';

    const [query, setQuery] = useState(initialQuery);
    const [filterType, setFilterType] = useState<'all' | 'deals' | 'blogs'>('all');

    useEffect(() => {
        setQuery(searchParams.get('q') || '');
    }, [searchParams]);

    const handleSearchChange = (newQuery: string) => {
        setQuery(newQuery);
        const params = new URLSearchParams(window.location.search);
        if (newQuery.trim()) {
            params.set('q', newQuery);
        } else {
            params.delete('q');
        }
        router.replace(`/search?${params.toString()}`, { scroll: false });
    };

    const allDeals = getAllDeals();

    const matchedDeals = allDeals.filter((deal) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
            deal.propertyName.toLowerCase().includes(q) ||
            deal.title.toLowerCase().includes(q) ||
            deal.location.toLowerCase().includes(q) ||
            deal.categoryLabel.toLowerCase().includes(q) ||
            deal.overview.some((ov) => ov.toLowerCase().includes(q))
        );
    });

    const matchedBlogs = BLOG_POSTS.filter((post) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
            post.title.toLowerCase().includes(q) ||
            post.category.toLowerCase().includes(q) ||
            post.excerpt.toLowerCase().includes(q)
        );
    });

    const totalResults =
        filterType === 'all'
            ? matchedDeals.length + matchedBlogs.length
            : filterType === 'deals'
            ? matchedDeals.length
            : matchedBlogs.length;

    const quickQueries = ['Sonipat Murthal', 'Buffet', 'Water Park', 'Fine Dining', 'Resorts', 'Jaipur', 'Weekend Getaways'];

    return (
        <div>
            {/* Search Input Bar */}
            <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '24px', marginBottom: '36px', border: '1px solid var(--color-stone)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ position: 'relative', flex: 1 }}>
                        <input
                            type="text"
                            placeholder="Search by hotel name, location, cuisine, or experience..."
                            value={query}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            aria-label="Search query"
                            style={{
                                width: '100%',
                                padding: '16px 20px',
                                borderRadius: '10px',
                                border: '1px solid var(--color-stone)',
                                fontSize: '1.05rem',
                                outline: 'none',
                                background: 'var(--color-ivory)',
                            }}
                        />
                        {query && (
                            <button
                                onClick={() => handleSearchChange('')}
                                aria-label="Clear search"
                                style={{
                                    position: 'absolute',
                                    right: '16px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--color-charcoal-light)',
                                    cursor: 'pointer',
                                    fontSize: '1.2rem',
                                }}
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Popular Query Chips */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-charcoal-light)', textTransform: 'uppercase' }}>Popular:</span>
                    {quickQueries.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleSearchChange(tag)}
                            style={{
                                background: 'var(--color-ivory)',
                                border: '1px solid var(--color-stone)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                color: 'var(--color-charcoal)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter Tabs & Results Count */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                        onClick={() => setFilterType('all')}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            border: '1px solid',
                            borderColor: filterType === 'all' ? 'var(--color-champagne-gold)' : 'var(--color-stone)',
                            background: filterType === 'all' ? 'var(--color-champagne-gold)' : '#fff',
                            color: filterType === 'all' ? '#fff' : 'var(--color-charcoal)',
                            fontWeight: filterType === 'all' ? 600 : 400,
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                        }}
                    >
                        All Results ({matchedDeals.length + matchedBlogs.length})
                    </button>
                    <button
                        onClick={() => setFilterType('deals')}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            border: '1px solid',
                            borderColor: filterType === 'deals' ? 'var(--color-champagne-gold)' : 'var(--color-stone)',
                            background: filterType === 'deals' ? 'var(--color-champagne-gold)' : '#fff',
                            color: filterType === 'deals' ? '#fff' : 'var(--color-charcoal)',
                            fontWeight: filterType === 'deals' ? 600 : 400,
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                        }}
                    >
                        Memberships &amp; Deals ({matchedDeals.length})
                    </button>
                    <button
                        onClick={() => setFilterType('blogs')}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            border: '1px solid',
                            borderColor: filterType === 'blogs' ? 'var(--color-champagne-gold)' : 'var(--color-stone)',
                            background: filterType === 'blogs' ? 'var(--color-champagne-gold)' : '#fff',
                            color: filterType === 'blogs' ? '#fff' : 'var(--color-charcoal)',
                            fontWeight: filterType === 'blogs' ? 600 : 400,
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                        }}
                    >
                        Editorial Articles ({matchedBlogs.length})
                    </button>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                    {query ? (
                        <>Results for &ldquo;<strong>{query}</strong>&rdquo;: <strong>{totalResults}</strong> found</>
                    ) : (
                        <>Displaying all <strong>{totalResults}</strong> catalog entries</>
                    )}
                </div>
            </div>

            {/* Results Grid */}
            {totalResults === 0 ? (
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '60px 24px', textAlign: 'center', border: '1px solid var(--color-stone)' }}>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                        No Direct Matches Found
                    </h3>
                    <p style={{ color: 'var(--color-charcoal-light)', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                        We could not find matching offers or articles for &ldquo;{query}&rdquo;. Try broader keywords like &ldquo;Resorts&rdquo;, &ldquo;Dining&rdquo;, or &ldquo;Murthal&rdquo;.
                    </p>
                    <button
                        onClick={() => handleSearchChange('')}
                        className="btn btn-outline"
                    >
                        View Full Catalog
                    </button>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                    {/* Deals Section */}
                    {(filterType === 'all' || filterType === 'deals') && matchedDeals.length > 0 && (
                        <div>
                            <div className="section-header" style={{ marginBottom: '24px' }}>
                                <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
                                    Curated Memberships &amp; Experiences ({matchedDeals.length})
                                </h2>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                                {matchedDeals.map((deal) => (
                                    <div key={deal.id} className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '28px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            {deal.featuredImage ? (
                                                <div style={{ height: '160px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px', border: '1px solid var(--color-stone)' }}>
                                                    <img src={deal.featuredImage} alt={deal.propertyName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                            ) : (
                                                <div className="skeleton-box" style={{ height: '160px', borderRadius: '12px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--color-charcoal-light)', border: '1px solid var(--color-stone)' }}>
                                                    📷 {deal.propertyName}
                                                </div>
                                            )}
                                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
                                                {deal.categoryLabel}
                                            </div>
                                            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '6px' }}>
                                                {deal.propertyName}
                                            </h3>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', marginBottom: '16px' }}>
                                                📍 {deal.location}
                                            </p>
                                            <div style={{ padding: '10px 14px', background: 'var(--color-ivory)', borderRadius: '8px', border: '1px solid var(--color-stone)', marginBottom: '20px' }}>
                                                <div style={{ fontSize: '0.7rem', color: 'var(--color-charcoal-light)', textTransform: 'uppercase' }}>Member Benefit</div>
                                                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)' }}>
                                                    {deal.price}
                                                </div>
                                            </div>
                                        </div>
                                        <Link href={`/deals/${deal.slug}`} className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>
                                            View Membership Details
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Editorial Blogs Section */}
                    {(filterType === 'all' || filterType === 'blogs') && matchedBlogs.length > 0 && (
                        <div>
                            <div className="section-header" style={{ marginBottom: '24px' }}>
                                <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
                                    Editorial Guides &amp; Articles ({matchedBlogs.length})
                                </h2>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                                {matchedBlogs.slice(0, 18).map((post) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>
                            {matchedBlogs.length > 18 && (
                                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                                    <Link href="/blog" className="btn btn-outline">
                                        View All {matchedBlogs.length} Articles in Journal
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
