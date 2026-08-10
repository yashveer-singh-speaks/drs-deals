import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/data/blogs';

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <div className="blog-card shadow-soft" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-champagne-gold)', background: 'rgba(188, 144, 68, 0.08)', padding: '4px 10px', borderRadius: '4px' }}>
                        {post.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-light)' }}>
                        {post.readTime}
                    </span>
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', lineHeight: 1.4, marginBottom: '12px' }}>
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {post.title}
                    </Link>
                </h3>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                    {post.excerpt}
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--color-stone)', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                        ✦ {post.author}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="link-arrow" style={{ fontSize: '0.8rem' }}>
                        Read <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
