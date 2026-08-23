'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogs';
import BlogCard from '@/components/BlogCard';

const ITEMS_PER_PAGE = 36;

function BlogIndex() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Read state from URL search params
    const pageParam = searchParams.get('page');
    const categoryParam = searchParams.get('category');
    const queryParam = searchParams.get('q');

    const currentPage = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;
    const selectedCategory = categoryParam || 'All';
    const searchQuery = queryParam || '';

    // Local state for search input text to keep typing responsive
    const [searchInput, setSearchInput] = useState(searchQuery);
    const gridHeaderRef = useRef<HTMLDivElement>(null);

    // Sync local input with search query parameter (e.g., on back/forward navigation)
    useEffect(() => {
        setSearchInput(searchQuery);
    }, [searchQuery]);

    const categories = [
        'All',
        'Resorts & Stays',
        'Fine Dining',
        'Spa & Wellness',
        'Water Parks & Family',
        'Weekend Escapes',
        'Destinations & Travel',
    ];

    // Filter posts
    const filteredPosts = BLOG_POSTS.filter((post) => {
        const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesQuery;
    });

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE) || 1;

    // Helper to update URL params
    const updateUrlParams = (updates: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString());
        Object.entries(updates).forEach(([key, value]) => {
            if (value === null) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        updateUrlParams({ page: newPage.toString() });

        // Scroll back to the top of the blog grid smoothly
        if (gridHeaderRef.current) {
            const headerOffset = 100;
            const elementPosition = gridHeaderRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleCategoryChange = (cat: string) => {
        updateUrlParams({
            category: cat === 'All' ? null : cat,
            page: '1' // reset page
        });
    };

    const handleSearchChange = (val: string) => {
        updateUrlParams({
            q: val ? val : null,
            page: '1' // reset page
        });
    };

    // Slice posts for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Editorial Journal &amp; Guides</div>
                    <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        The DRS Deals Editorial Journal
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.15rem' }}>
                        Explore 198 curated articles covering luxury resorts, gourmet fine dining, spa retreats, water parks, and regional weekend getaways.
                    </p>
                </div>

                {/* Filter & Search Bar */}
                <div ref={gridHeaderRef} className="bg-white shadow-soft" style={{ borderRadius: '12px', padding: '24px', marginBottom: '48px', border: '1px solid var(--color-stone)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search articles, resorts, dining, or destinations..."
                            value={searchInput}
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                                handleSearchChange(e.target.value);
                            }}
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
                                    onClick={() => handleCategoryChange(cat)}
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
                        Showing <strong>{startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredPosts.length)}</strong> of <strong>{filteredPosts.length}</strong> published articles
                    </span>
                </div>

                {/* Blog Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
                    {paginatedPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                {/* Premium Pagination Control */}
                {totalPages > 1 && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        marginTop: '56px',
                        paddingTop: '32px',
                        borderTop: '1px solid var(--color-stone)'
                    }}>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '6px',
                                border: '1px solid',
                                borderColor: currentPage === 1 ? 'rgba(178, 153, 110, 0.15)' : 'var(--color-champagne-gold)',
                                background: 'transparent',
                                color: currentPage === 1 ? 'rgba(44, 42, 38, 0.3)' : 'var(--color-charcoal)',
                                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                transition: 'all 0.2s ease',
                                opacity: currentPage === 1 ? 0.5 : 1
                            }}
                            className={currentPage === 1 ? '' : 'btn-hover-gold'}
                        >
                            Prev
                        </button>

                        <span style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.1rem',
                            color: 'var(--color-charcoal)',
                            fontWeight: 500,
                            letterSpacing: '0.05em'
                        }}>
                            <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>{currentPage}</span>
                            <span style={{ margin: '0 8px', color: 'rgba(44, 42, 38, 0.4)' }}>/</span>
                            <span>{totalPages}</span>
                        </span>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '6px',
                                border: '1px solid',
                                borderColor: currentPage === totalPages ? 'rgba(178, 153, 110, 0.15)' : 'var(--color-champagne-gold)',
                                background: 'transparent',
                                color: currentPage === totalPages ? 'rgba(44, 42, 38, 0.3)' : 'var(--color-charcoal)',
                                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                transition: 'all 0.2s ease',
                                opacity: currentPage === totalPages ? 0.5 : 1
                            }}
                            className={currentPage === totalPages ? '' : 'btn-hover-gold'}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}

export default function BlogIndexPage() {
    return (
        <Suspense fallback={
            <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
                <div className="container text-center">
                    <p style={{ color: 'var(--color-charcoal-light)', fontSize: '1.1rem' }}>Loading Journal...</p>
                </div>
            </main>
        }>
            <BlogIndex />
        </Suspense>
    );
}
