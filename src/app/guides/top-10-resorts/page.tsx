import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Top 10 Weekend Escapes Near Delhi NCR | DRS Deals Guide',
    description: 'Curated ranking and editorial review of the best luxury resort escapes near Delhi, Gurgaon, and Noida.',
};

export default function TopResortsGuidePage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container" style={{ maxWidth: '840px' }}>
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-champagne-gold)', fontWeight: 600, textTransform: 'uppercase' }}>Resorts &amp; Stays</span>
                    <h1 className="hero-title" style={{ fontSize: '2.5rem', margin: '16px 0 24px 0' }}>Top 10 Weekend Escapes Near Delhi NCR</h1>
                    <img src="/images/webp/The Curated Guide Section (Guide 1 Thumbnail).webp" alt="Luxury Resort" style={{ width: '100%', borderRadius: '12px', height: '360px', objectFit: 'cover', marginBottom: '32px' }} />
                    <p style={{ color: 'var(--color-charcoal-light)', lineHeight: 1.8, marginBottom: '20px' }}>
                        Delhi NCR residents looking for a tranquil weekend getaway have a wealth of world-class resort options within a 2 to 4 hour driving radius. From heritage retreats in Neemrana and Manesar to sprawling luxury golf resorts along the Aravalli hills in Gurgaon, our editorial team evaluates each property for service excellence, pool cleanliness, culinary quality, and member value.
                    </p>
                    <div style={{ marginTop: '32px' }}>
                        <Link href="/experiences/resorts" className="btn btn-primary">Explore Resort Offers</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
