import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDealBySlug, getAllDeals, Deal } from '@/data/deals';
import { siteConfig } from '@/config/site';

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
        description: `${deal.propertyName} in ${deal.location}. ${deal.tagline}. Exclusive member rate: ${deal.price}. Direct concierge reservation assistance.`,
        keywords: [deal.propertyName, deal.location, deal.categoryLabel, 'DRS Deals', 'Hospitality Membership Offers'],
        alternates: {
            canonical: `${siteConfig.url}/deals/${deal.slug}`,
        },
        openGraph: {
            title: `${deal.title} | DRS Deals`,
            description: `${deal.propertyName} in ${deal.location}. Exclusive pricing, stays, dining, and leisure benefits.`,
            url: `${siteConfig.url}/deals/${deal.slug}`,
            siteName: siteConfig.name,
            images: [
                {
                    url: deal.featuredImage ? `${siteConfig.url}${deal.featuredImage}` : siteConfig.socialImage,
                    width: 1200,
                    height: 630,
                    alt: deal.propertyName,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${deal.title} | DRS Deals`,
            description: `${deal.propertyName} in ${deal.location}. Exclusive member rates and verified dining & stay inclusions.`,
            images: [deal.featuredImage ? `${siteConfig.url}${deal.featuredImage}` : siteConfig.socialImage],
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
    const whatsappInquiryUrl = siteConfig.getWhatsAppUrl(`Hello DRS Deals Concierge, I would like to enquire about ${deal.propertyName} (${deal.title}).`);

    // Schema.org JSON-LD (Strictly factual)
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
                        'item': `${siteConfig.url}/`,
                    },
                    {
                        '@type': 'ListItem',
                        'position': 2,
                        'name': 'Deals',
                        'item': `${siteConfig.url}/deals`,
                    },
                    {
                        '@type': 'ListItem',
                        'position': 3,
                        'name': deal.propertyName,
                        'item': `${siteConfig.url}/deals/${deal.slug}`,
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
                    'url': `${siteConfig.url}/deals/${deal.slug}`,
                    'seller': {
                        '@type': 'Organization',
                        'name': siteConfig.name,
                    },
                },
            },
            {
                '@type': 'LocalBusiness',
                'name': deal.propertyName,
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': deal.location,
                    'addressRegion': deal.stateRegion,
                    'addressCountry': 'IN',
                },
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
                <nav aria-label="Breadcrumb" style={{ marginBottom: '32px', fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                    <Link href="/" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none' }}>Home</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <Link href="/deals" style={{ color: 'var(--color-charcoal-light)', textDecoration: 'none' }}>Deals</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>{deal.propertyName}</span>
                </nav>

                {/* Deal Hero Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '64px' }}>
                    {/* Left: Visual Gallery */}
                    <div>
                        {deal.featuredImage ? (
                            <img
                                src={deal.featuredImage}
                                alt={deal.title}
                                style={{
                                    width: '100%',
                                    height: '380px',
                                    objectFit: 'cover',
                                    borderRadius: '16px',
                                    border: '1px solid var(--color-stone)',
                                    marginBottom: '16px',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                                }}
                            />
                        ) : (
                            <div className="skeleton-box" style={{ width: '100%', height: '380px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'var(--color-charcoal-light)', border: '1px solid var(--color-stone)', marginBottom: '16px', background: 'var(--color-stone-light)' }}>
                                📷 {deal.propertyName} — Featured Image
                            </div>
                        )}

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                            {deal.galleryImages && deal.galleryImages.length > 0 ? (
                                deal.galleryImages.slice(0, 4).map((imgUrl, i) => (
                                    <div key={i} style={{ height: '80px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-stone)' }}>
                                        <img
                                            src={imgUrl}
                                            alt={`${deal.propertyName} Gallery ${i + 1}`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                ))
                            ) : (
                                Array.from({ length: deal.imageSkeletonCount || 4 }).slice(0, 4).map((_, i) => (
                                    <div key={i} className="skeleton-box" style={{ height: '80px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'var(--color-charcoal-light)', border: '1px solid var(--color-stone)' }}>
                                        Gallery {i + 1}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Right: Key Details Card */}
                    <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '40px', border: '1px solid var(--color-stone)' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                            {deal.categoryLabel}
                        </div>
                        <h1 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px', lineHeight: 1.2 }}>
                            {deal.title}
                        </h1>
                        <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal-light)', marginBottom: '20px', lineHeight: 1.5 }}>
                            📍 {deal.location} &bull; {deal.stateRegion}
                        </p>

                        {/* Pricing & Value Pill */}
                        <div style={{ background: 'var(--color-ivory)', borderRadius: '12px', padding: '20px', border: '1px solid var(--color-stone)', marginBottom: '28px' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-light)', textTransform: 'uppercase', marginBottom: '4px' }}>
                                Member Pricing / Rate
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

                        {/* Booking & Concierge Direct Contact Box */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                                <strong>Direct Concierge &amp; Reservation Assistance:</strong>
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
                                <a
                                    href={whatsappInquiryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}
                                >
                                    💬 Enquire on WhatsApp
                                </a>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-light)', margin: 0, fontStyle: 'italic' }}>
                                DRS Deals coordinates directly with property management for verified member privileges.
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
                        What is Included in This Membership
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                        {deal.inclusions.map((inc, index) => (
                            <div key={index} style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ fontWeight: 700, color: 'var(--color-charcoal)', fontSize: '1.05rem', marginBottom: '6px' }}>
                                    ✨ {inc.title}
                                </div>
                                {inc.description && (
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.5 }}>
                                        {inc.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {deal.timings && (
                        <div style={{ padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '8px', border: '1px solid var(--color-stone)', marginBottom: '24px' }}>
                            <strong>⏰ Operational Timings:</strong> {deal.timings}
                        </div>
                    )}
                </div>

                {/* Conditions & How to Redeem */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>
                        Terms, Conditions &amp; How to Reserve
                    </h2>

                    <div style={{ marginBottom: '32px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                            Membership Conditions &amp; Guidelines
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {deal.conditionsAndTerms.map((term, i) => (
                                <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-charcoal-light)' }}>
                                    <span style={{ color: 'var(--color-champagne-gold)' }}>•</span> {term}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                        <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                            How to Reserve
                        </h3>
                        <ol style={{ paddingLeft: '20px', margin: 0, color: 'var(--color-charcoal-light)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            <li>Contact the DRS Deals concierge desk at <strong>{deal.bookingInfo.phones.join(' / ')}</strong>.</li>
                            <li>State your desired date, property (<strong>{deal.propertyName}</strong>), and package preference.</li>
                            <li>Our team confirms availability and coordinates directly with property reception.</li>
                            <li>Arrive at the property and enjoy verified member hospitality.</li>
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
