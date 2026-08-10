import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yashveer Labs | Digital Studio & Engineering Agency',
    description: 'Yashveer Labs is the specialized studio behind the complete website rebuild, engineering, multi-channel growth, and content strategy for DRS Deals.',
};

export default function YashveerLabsPage() {
    const services = [
        {
            title: 'Website Rebuild',
            desc: 'A complete rebuild of drsdeals.in with a premium interface and a clear booking flow. The current site acts as a catalogue; a rebuilt site turns visitors into enquiries and creates a credible first impression.',
        },
        {
            title: 'SEO — Search Engine Optimisation',
            desc: 'When someone searches “water park deals Delhi” or “resort near Gurugram”, SEO determines whether DRS Deals appears. Stronger SEO means consistent organic discovery without paying per click.',
        },
        {
            title: 'AEO — Answer Engine Optimisation',
            desc: 'AI tools such as ChatGPT, Gemini and Perplexity answer search queries directly. AEO structures DRS Deals content so these systems understand the brand and surface its offers in their responses.',
        },
        {
            title: 'GEO — Geographic Optimisation',
            desc: 'People search by city, region and neighbourhood. GEO ensures DRS Deals is visible for searches like “deals near Noida” or “farmhouse Gurugram” across all seven states the business serves.',
        },
        {
            title: 'E-E-A-T Strengthening',
            desc: 'Google gives priority to websites it considers trustworthy and authoritative. This builds Experience, Expertise, Authority and Trust signals through reviews, verified information and well-structured content.',
        },
        {
            title: 'Website Blog',
            desc: 'Publishing useful articles about resorts, water parks, weekend getaways and deals creates organic search entry points — bringing relevant visitors to drsdeals.in every day without paid promotion.',
        },
        {
            title: 'Blogger',
            desc: 'Selected content repurposed on Google’s own Blogger platform creates additional indexed pages that extend reach and build SEO authority pointing back to the main DRS Deals website.',
        },
        {
            title: 'Medium',
            desc: 'Deeper articles on hospitality, travel and experiences published on Medium build wider authority and introduce DRS Deals to readers who discover the platform through their own searches.',
        },
        {
            title: 'LinkedIn',
            desc: 'Professional content around promotions, partnerships and the hospitality ecosystem positions DRS Deals credibly for corporate clients, bulk bookings and B2B venue relationships.',
        },
        {
            title: 'Instagram',
            desc: 'The primary visual brand channel: offers, experiences, short videos, behind-the-scenes content and customer stories. This builds an audience that recognises DRS Deals rather than just seeing it once.',
        },
        {
            title: 'Instagram Ads',
            desc: 'Targeted paid campaigns reaching people already interested in deals, outings and experiences — focused on useful outcomes such as enquiries and bookings, not vanity metrics like follower counts.',
        },
        {
            title: 'YouTube',
            desc: 'Video content around hospitality, experiences and deals. YouTube videos also rank in Google search results directly, extending DRS Deals’ discoverability well beyond social media audiences.',
        },
        {
            title: 'Podcast',
            desc: 'Conversations with venue owners, hospitality professionals and industry figures. Each episode builds brand familiarity, establishes credibility and grows a returning audience around DRS Deals.',
        },
        {
            title: 'Podcast Clips',
            desc: 'Each podcast episode is edited into multiple short clips for Instagram Reels and YouTube Shorts — multiplying one conversation into several distribution pieces across platforms at minimal added effort.',
        },
        {
            title: 'Google Ads',
            desc: 'Paid search ads appearing when someone is actively searching for the deals, venues and experiences DRS Deals already offers. This captures ready buyers at the exact moment of purchase intent.',
        },
        {
            title: 'Google Business Profile',
            desc: 'Optimising the official business listing with accurate categories, active posts, photos, offers and managed reviews — improving how DRS Deals appears in Google Maps and local search results.',
        },
    ];

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Header */}
                <div style={{ maxWidth: '800px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>Digital Product Studio &amp; Growth Agency</div>
                    <h1 className="hero-title" style={{ fontSize: '3.25rem', marginBottom: '24px' }}>
                        Yashveer Labs
                    </h1>
                    <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
                        The specialized digital engineering studio led by <Link href="/yashveer-singh" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 600 }}>Yashveer Singh</Link>, responsible for the complete web transformation and growth strategy for <strong style={{ color: 'var(--color-charcoal)' }}>DRS Deals</strong>.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '64px' }}>
                    <div style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--color-stone)' }}>
                        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '12px' }}>Agency Service Capabilities Delivered</h2>
                        <p className="text-body-large text-charcoal-light">
                            All of the following 16 strategic services, engineering systems, and organic acquisition channels for <strong>DRS Deals</strong> were provided by <strong>Yashveer Labs</strong> under the direction of <strong>Yashveer Singh</strong>:
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                        {services.map((srv, idx) => (
                            <div key={idx} style={{ padding: '24px', borderRadius: '12px', background: 'var(--color-ivory)', border: '1px solid var(--color-stone)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                    Capability #{idx + 1}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                                    {srv.title}
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                                    {srv.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Agency Philosophy */}
                <div className="text-center bg-charcoal text-white" style={{ borderRadius: '16px', padding: '48px' }}>
                    <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '16px', color: 'var(--color-warm-white)' }}>
                        Crafted for Precision, Authority &amp; Scale
                    </h3>
                    <p style={{ maxWidth: '640px', margin: '0 auto 32px auto', color: 'var(--color-stone)', lineHeight: 1.6 }}>
                        At Yashveer Labs, we combine engineering rigor with hospitality domain intelligence to build platforms that convey instant trust, retain high-intent users, and out-rank legacy competitors.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <Link href="/yashveer-singh" className="btn btn-primary">About Yashveer Singh</Link>
                        <Link href="/partners" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Partner Network</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
