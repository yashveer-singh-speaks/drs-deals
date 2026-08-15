import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDealBySlug, getAllDeals, Deal } from '@/data/deals';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const deals = getAllDeals();
    return deals.map((deal) => ({
        slug: deal.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const deal = getDealBySlug(slug);
    if (!deal) {
        return {
            title: 'Deal Not Found | DRS Deals',
        };
    }

    return {
        title: `${deal.title} | DRS Deals Exclusive Membership`,
        description: `${deal.propertyName} in ${deal.location}. ${deal.tagline}. Exclusive price: ${deal.price}. Verified DRS Deals partner offer.`,
        keywords: [deal.propertyName, deal.location, deal.categoryLabel, 'DRS Deals', 'Membership Offers'],
        alternates: {
            canonical: `https://www.drsdeals.in/deals/${deal.slug}`,
        },
        openGraph: {
            title: `${deal.title} | DRS Deals`,
            description: `${deal.propertyName} in ${deal.location}. Exclusive pricing, stays, dining, and leisure benefits.`,
            url: `https://www.drsdeals.in/deals/${deal.slug}`,
            siteName: 'DRS Deals',
            type: 'website',
        },
    };
}

export default async function DealDetailPage({ params }: Props) {
    const { slug } = await params;
    const deal = getDealBySlug(slug);

    if (!deal) {
        notFound();
    }

    const allDeals = getAllDeals();
    const relatedDeals = allDeals.filter(d => d.slug !== deal.slug).slice(0, 3);

    // Schema.org JSON-LD
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
                        'name': 'Deals',
                        'item': 'https://www.drsdeals.in/deals',
                    },
                    {
                        '@type': 'ListItem',
                        'position': 3,
                        'name': deal.propertyName,
                        'item': `https://www.drsdeals.in/deals/${deal.slug}`,
                    },
                ],
            },
            {
                '@type': 'Product',
                'name': deal.title,
                'description': deal.tagline,
                'category': deal.categoryLabel,
                'offers': {
                    '@type': 'Offer',
                    'priceCurrency': 'INR',
                    'price': deal.price.replace(/[^0-9]/g, '') || '0',
                    'availability': 'https://schema.org/InStock',
                    'url': `https://www.drsdeals.in/deals/${deal.slug}`,
                    'seller': {
                        '@type': 'Organization',
                        'name': 'DRS Deals',
                    },
                },
            },
            {
                '@type': 'LocalBusiness',
                'name': deal.propertyName,
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': deal.location,
                },
                'telephone': deal.bookingInfo.phones.join(', '),
            },
        ],
    };

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                    <Link href="/" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none' }}>Home</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <Link href="/deals" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none' }}>Deals</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <span style={{ color: 'var(--color-charcoal)', fontWeight: 600 }}>{deal.propertyName}</span>
                </nav>

                {/* Main Offer Hero Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', marginBottom: '64px', alignItems: 'start' }}>
                    {/* Left: Image Placeholder Skeletons Gallery */}
                    <div>
                        {/* Main Featured Skeleton */}
                        <div className="skeleton-box" style={{ width: '100%', height: '360px', borderRadius: '16px', marginBottom: '16px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', padding: '12px 16px', borderRadius: '8px', color: '#fff', fontSize: '0.85rem', fontWeight: 500, width: 'fit-content' }}>
                                📷 Main Property Gallery Placeholder
                            </div>
                        </div>

                        {/* Thumbnail Grid Skeletons */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                            {Array.from({ length: Math.min(deal.imageSkeletonCount - 1, 4) }).map((_, i) => (
                                <div key={i} className="skeleton-box" style={{ height: '90px', borderRadius: '10px', border: '1px solid var(--color-stone)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'var(--color-charcoal-light)' }}>
                                    Slot #{i + 2}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Key Summary Card */}
                    <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
                            {deal.categoryLabel}
                        </div>
                        <h1 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px', lineHeight: 1.2 }}>
                            {deal.propertyName}
                        </h1>
                        <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, marginBottom: '24px' }}>
                            📍 {deal.location}
                        </p>

                        <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)', marginBottom: '28px' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                                Membership Rate / Pricing
                            </div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-charcoal)', fontFamily: 'var(--font-serif)' }}>
                                    {deal.price}
                                </span>
                                {deal.originalPrice && (
                                    <span style={{ fontSize: '1.1rem', textDecoration: 'line-through', color: '#999' }}>
                                        {deal.originalPrice}
                                    </span>
                                )}
                            </div>
                            {deal.validity && (
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-champagne-gold)', fontWeight: 600, marginTop: '4px' }}>
                                    ⏳ Validity: {deal.validity}
                                </div>
                            )}
                            {deal.estimatedValue && (
                                <div style={{ fontSize: '0.9rem', color: '#27ae60', fontWeight: 600, marginTop: '2px' }}>
                                    🎁 Estimated Benefit Value: {deal.estimatedValue}
                                </div>
                            )}
                        </div>

                        {/* Booking & Partner Direct Contact Box */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                                <strong>Direct Booking &amp; Reservation Desk:</strong>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                {deal.bookingInfo.phones.map((phone, idx) => (
                                    <a
                                        key={idx}
                                        href={`tel:+91${phone}`}
                                        className="btn btn-primary"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}
                                    >
                                        📞 Call {phone}
                                    </a>
                                ))}
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', margin: 0, fontStyle: 'italic' }}>
                                Mention <strong>DRS Deals</strong> for instant member verification &amp; priority privileges.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Overview & Description Section */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>
                        About {deal.propertyName}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.05rem', color: 'var(--color-charcoal-light)', lineHeight: 1.8 }}>
                        {deal.overview.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    {deal.whyChoose && (
                        <div style={{ marginTop: '32px', paddingTop: '28px', borderTop: '1px solid var(--color-stone)' }}>
                            <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>
                                Why Choose This Membership?
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {deal.whyChoose.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '1rem', color: 'var(--color-charcoal-light)' }}>
                                        <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 'bold' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Membership Inclusions & Benefits */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>
                        Included Membership Benefits &amp; Inclusions
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                        {deal.inclusions.map((inc, i) => (
                            <div key={i} style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                    Inclusion #{i + 1}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                                    {inc.title}
                                </h3>
                                {inc.description && (
                                    <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>
                                        {inc.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Additional Sub-sections (Vouchers, BOGO, Special Stays) */}
                    {deal.sections && deal.sections.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '28px', borderTop: '1px solid var(--color-stone)' }}>
                            {deal.sections.map((sec, i) => (
                                <div key={i} style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>
                                        {sec.heading}
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {sec.items.map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-charcoal-light)' }}>
                                                <span style={{ color: 'var(--color-champagne-gold)' }}>✦</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Kids Pricing & Timings */}
                    {(deal.kidsPricing || deal.timings) && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '32px', paddingTop: '28px', borderTop: '1px solid var(--color-stone)' }}>
                            {deal.timings && (
                                <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                                        ⏰ Operating Timings
                                    </h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', margin: 0 }}>
                                        {deal.timings}
                                    </p>
                                </div>
                            )}
                            {deal.kidsPricing && (
                                <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                                        🧒 Kids &amp; Height Pricing Policy
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        {deal.kidsPricing.map((k, idx) => (
                                            <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                                                • {k}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Conditions & How to Redemption */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>
                        Important Terms, Conditions &amp; How to Redeem
                    </h2>

                    <div style={{ marginBottom: '32px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                            Membership Conditions &amp; Rules
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {deal.conditionsAndTerms.map((term, i) => (
                                <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-charcoal-light)' }}>
                                    <span style={{ color: '#e74c3c' }}>•</span> {term}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                        <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                            How to Reserve &amp; Redeem Your Vouchers
                        </h3>
                        <ol style={{ paddingLeft: '20px', margin: 0, color: 'var(--color-charcoal-light)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            <li>Contact the DRS Deals booking hotline at <strong>9811120892</strong> or <strong>9811360808</strong>.</li>
                            <li>State your desired date, property (<strong>{deal.propertyName}</strong>), and voucher type.</li>
                            <li>Your reservation code will be issued and verified directly with the hotel/venue reception.</li>
                            <li>Present your physical card or digital voucher code upon arrival at the venue desk.</li>
                        </ol>
                    </div>
                </div>

                {/* Related Experiences */}
                <div>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '28px' }}>
                        Explore Other Curated Deals &amp; Memberships
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
                        {relatedDeals.map((rel) => (
                            <div key={rel.id} className="bg-white shadow-soft" style={{ borderRadius: '14px', padding: '28px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                                        {rel.categoryLabel}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                                        {rel.propertyName}
                                    </h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', marginBottom: '16px' }}>
                                        📍 {rel.location}
                                    </p>
                                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                                        {rel.price}
                                    </div>
                                </div>
                                <Link href={`/deals/${rel.slug}`} className="btn btn-outline" style={{ textAlign: 'center' }}>
                                    View Membership Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
