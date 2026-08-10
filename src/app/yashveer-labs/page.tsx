import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yashveer Labs | Yashveer Singh | Digital Engineering Studio',
    description: 'Yashveer Labs is the digital engineering studio led by Yashveer Singh, responsible for the web development, digital infrastructure, SEO, growth systems and digital transformation of DRS Deals.',
};

export default function YashveerLabsPage() {
    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <div className="container">
                {/* Hero Section */}
                <div style={{ maxWidth: '840px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        DIGITAL ENGINEERING STUDIO
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '16px', lineHeight: 1.15 }}>
                        Yashveer Labs
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '32px', fontWeight: 400 }}>
                        The digital engineering studio behind the DRS Deals digital transformation
                    </h2>
                    
                    <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.1rem', lineHeight: 1.75, margin: 0 }}>
                            <strong style={{ color: 'var(--color-charcoal)' }}>Yashveer Labs</strong> is a digital product studio and engineering agency led by <strong style={{ color: 'var(--color-charcoal)' }}>Yashveer Singh</strong>, a software engineer focused on building modern websites, web applications, digital systems, automation and growth infrastructure.
                        </p>
                        <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.1rem', lineHeight: 1.75, margin: 0 }}>
                            For DRS Deals, Yashveer Labs is responsible for the digital transformation of the brand across its website, search visibility, content infrastructure, social channels, advertising systems and digital acquisition strategy.
                        </p>
                        <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.1rem', lineHeight: 1.75, margin: 0 }}>
                            This partnership brings together software engineering, product thinking, search optimisation and digital growth into one connected system.
                        </p>
                        
                        <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-stone)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                ✦ Created and led by Yashveer Singh.
                            </span>
                            <Link href="/yashveer-singh" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                                About Yashveer Singh
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 1: Who is Yashveer Singh? */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '24px' }}>
                            Who is Yashveer Singh?
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)', fontSize: '1.15rem' }}>
                                Yashveer Singh is the founder of Yashveer Labs and the engineer responsible for the technical and digital work delivered for DRS Deals.
                            </p>
                            <p>
                                His work spans full stack software engineering, modern web development, digital products, business systems, search optimisation and AI enabled workflows.
                            </p>
                            <p>
                                Rather than treating a website as a standalone design project, Yashveer approaches digital products as business infrastructure. The objective is to create systems that are fast, useful, discoverable and capable of supporting real business operations.
                            </p>
                            <p>
                                His engineering work includes modern technologies such as React, Next.js, TypeScript and Firebase, alongside custom web applications, dashboards, CRM systems, automation workflows and AI integrations.
                            </p>
                            <p>
                                The DRS Deals project represents this approach in practice. The work goes beyond creating pages. It connects the website, content, search visibility, social presence, advertising and customer acquisition into a single digital ecosystem.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: What is Yashveer Labs? */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '24px' }}>
                            What is Yashveer Labs?
                        </h2>
                        <p style={{ fontWeight: 600, color: 'var(--color-charcoal)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '16px' }}>
                            Yashveer Labs is the software engineering and digital growth studio founded by Yashveer Singh.
                        </p>
                        <p style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
                            The studio works at the intersection of software engineering, digital products, search, automation and growth.
                        </p>
                        
                        <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Studio Work &amp; Core Capabilities:
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                            {[
                                'Website and web application development',
                                'Full stack software engineering',
                                'Product development',
                                'Business dashboards and internal systems',
                                'CRM development',
                                'Automation',
                                'AI integrations',
                                'Search Engine Optimisation',
                                'Answer Engine Optimisation',
                                'Geographic search optimisation',
                                'Content systems',
                                'Digital acquisition infrastructure',
                            ].map((cap, idx) => (
                                <div key={idx} style={{ padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 'bold' }}>•</span> {cap}
                                </div>
                            ))}
                        </div>

                        <p style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
                            The focus is not simply on producing attractive interfaces. Yashveer Labs builds digital systems designed to help organisations become easier to discover, easier to trust and easier to do business with.
                        </p>
                    </div>
                </div>

                {/* Section 3: Yashveer Labs and DRS Deals Case Study */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
                            CASE STUDY &amp; DIGITAL INFRASTRUCTURE
                        </div>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '12px' }}>
                            Yashveer Labs and DRS Deals
                        </h2>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '28px', fontWeight: 400 }}>
                            A digital transformation built around discovery, trust and conversion
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '36px' }}>
                            <p>
                                DRS Deals operates in the experiences and hospitality space, connecting customers with resorts, hotels, dining, wellness, water parks and other premium experiences.
                            </p>
                            <p>
                                The digital challenge was therefore larger than building a conventional website.
                            </p>
                            <p>
                                Potential customers need to discover DRS Deals through search, understand the experiences available, trust the business and then take action.
                            </p>
                            <p>
                                Yashveer Labs approached the project as a complete digital ecosystem.
                            </p>
                            <p>
                                The work combines website engineering with organic search, AI search visibility, local discovery, content distribution, social media, paid advertising and business profile optimisation.
                            </p>
                        </div>

                        <blockquote style={{ padding: '24px 32px', background: 'var(--color-ivory)', borderLeft: '4px solid var(--color-champagne-gold)', borderRadius: '0 12px 12px 0', margin: 0 }}>
                            <p style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                                "Make DRS Deals easier to discover, easier to trust and easier to choose."
                            </p>
                        </blockquote>
                    </div>
                </div>

                {/* Section 4: What Yashveer Labs delivered (6 Large Cards) */}
                <div style={{ marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px', marginBottom: '32px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '12px' }}>
                            What Yashveer Labs delivered for DRS Deals
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
                        <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-champagne-gold)', letterSpacing: '0.1em', marginBottom: '12px' }}>01. WEBSITE ENGINEERING</div>
                                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>Website Engineering</h3>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                                    Yashveer Labs designed and engineered the DRS Deals digital experience around a clearer information architecture, stronger visual presentation and more direct paths toward discovering experiences and deals.
                                </p>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                                    The website is structured to support multiple categories, destinations, experiences and informational pages while maintaining a consistent premium brand experience.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-champagne-gold)', letterSpacing: '0.1em', marginBottom: '12px' }}>02. SEARCH ENGINE OPTIMISATION</div>
                                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>Search Engine Optimisation</h3>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                                    The DRS Deals website is being structured around the way customers actually search for experiences.
                                </p>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                                    This includes searches related to resorts, hotels, water parks, dining, weekend experiences, destinations and location specific deals.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-champagne-gold)', letterSpacing: '0.1em', marginBottom: '12px' }}>03. ANSWER ENGINE OPTIMISATION</div>
                                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>Answer Engine Optimisation</h3>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                                    Search is no longer limited to traditional search engines. People increasingly ask AI systems such as ChatGPT, Gemini and Perplexity for recommendations, explanations and places to visit.
                                </p>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                                    Yashveer Labs is structuring DRS Deals information so that the business, its experiences, locations and offerings are clearly represented across its digital content.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-champagne-gold)', letterSpacing: '0.1em', marginBottom: '12px' }}>04. GEOGRAPHIC SEARCH OPTIMISATION</div>
                                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>Geographic Search Optimisation</h3>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                                    Hospitality discovery is heavily influenced by location. Someone searching for a resort near Gurugram has a different intent from someone searching for a water park near Delhi.
                                </p>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                                    Yashveer Labs therefore treats geographic discovery as a separate part of the DRS Deals strategy, building relevant location and destination signals.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-champagne-gold)', letterSpacing: '0.1em', marginBottom: '12px' }}>05. AUTHORITY AND TRUST</div>
                                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>Authority and Trust</h3>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                                    A strong digital presence needs more than keywords. DRS Deals content is being developed around clear business information, experience based content, reviews and transparent brand information.
                                </p>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                                    This supports the Experience, Expertise, Authority and Trust principles that help people understand who is behind a website.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-champagne-gold)', letterSpacing: '0.1em', marginBottom: '12px' }}>06. CONTENT AND DISTRIBUTION</div>
                                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '16px' }}>Content and Distribution</h3>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                                    The DRS Deals content ecosystem extends beyond the main website. Yashveer Labs has planned and developed distribution across the website blog, Blogger, Medium, LinkedIn, Instagram, YouTube and podcast content.
                                </p>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7 }}>
                                    This creates multiple points where customers can discover the brand across platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: The DRS Deals digital growth system (3 Visual Groups) */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '32px' }}>
                        The DRS Deals digital growth system
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                        {/* Group 1 */}
                        <div style={{ padding: '28px', background: 'var(--color-ivory)', borderRadius: '14px', border: '1px solid var(--color-stone)' }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                                PILLAR 01
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                                Organic discovery
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>Website Blog</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Search focused articles covering resorts, water parks, weekend getaways, hospitality and experiences.</span>
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>Blogger</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Additional content distribution through Google's Blogger platform, supporting broader indexed content and referral pathways.</span>
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>Medium</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Long form editorial content covering hospitality, travel, experiences and related topics.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Group 2 */}
                        <div style={{ padding: '28px', background: 'var(--color-ivory)', borderRadius: '14px', border: '1px solid var(--color-stone)' }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                                PILLAR 02
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                                Brand discovery
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>LinkedIn</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Professional content for partnerships, corporate relationships and the broader hospitality ecosystem.</span>
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>Instagram</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Visual storytelling around experiences, offers, destinations, venues and customer discovery.</span>
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>YouTube</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Long form and short form video content designed to build visibility across YouTube and Google.</span>
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>Podcast &amp; Clips</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Conversations with venue owners and hospitality figures, edited into short clips for Reels and Shorts.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Group 3 */}
                        <div style={{ padding: '28px', background: 'var(--color-ivory)', borderRadius: '14px', border: '1px solid var(--color-stone)' }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                                PILLAR 03
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                                Paid and local acquisition
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>Instagram Ads</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Targeted campaigns designed around relevant audiences and commercial intent.</span>
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>Google Ads</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Paid search campaigns designed to capture people actively looking for relevant experiences, venues and deals.</span>
                                </li>
                                <li>
                                    <strong style={{ color: 'var(--color-charcoal)', display: 'block', fontSize: '1rem' }}>Google Business Profile</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>Business information, categories, photos, offers, posts and reviews structured to improve local discovery across Google Search and Maps.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 6: Why Yashveer Labs was involved */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '12px' }}>
                            Why Yashveer Labs was involved
                        </h2>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '24px', fontWeight: 400 }}>
                            Engineering first. Growth connected to the product.
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                The distinction is important.
                            </p>
                            <p>
                                Yashveer Labs does not treat development, SEO, content and marketing as completely separate activities.
                            </p>
                            <p>
                                A technically strong website creates the foundation. Search optimisation helps people discover it. Useful content gives them a reason to stay. Social distribution expands reach. Advertising captures existing demand. Business information and reviews help establish trust.
                            </p>
                            <p>
                                Each part supports the others.
                            </p>
                            <p>
                                That is the approach Yashveer Singh has taken with DRS Deals.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                The result is intended to be more than a website. It is a digital infrastructure layer for the business.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 7: The person behind the work */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
                            FOUNDER PROFILE
                        </div>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '8px' }}>
                            The person behind the work
                        </h2>
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '4px' }}>
                            Yashveer Singh
                        </h3>
                        <div style={{ fontSize: '0.95rem', color: 'var(--color-champagne-gold)', fontWeight: 600, marginBottom: '24px' }}>
                            Founder, Yashveer Labs
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '32px' }}>
                            <p>
                                Yashveer Singh is a software engineer and digital product builder working across full stack development, web applications, business systems, automation, AI integrations and digital growth.
                            </p>
                            <p>
                                His engineering portfolio includes production web applications, CRM systems, dashboards, SaaS products and specialised digital platforms.
                            </p>
                            <p>
                                Yashveer Labs brings that engineering background into commercial projects where technology needs to serve a real business objective.
                            </p>
                            <p>
                                For DRS Deals, that means building the digital foundation required for a hospitality and experiences brand to grow its presence across websites, search engines, AI systems, social platforms and digital acquisition channels.
                            </p>
                        </div>

                        <Link href="/yashveer-singh" className="btn btn-primary">
                            View Yashveer Singh
                        </Link>
                    </div>
                </div>

                {/* Final Section & Strong Attribution Block */}
                <div className="bg-charcoal text-white" style={{ borderRadius: '16px', padding: '56px', textAlign: 'center' }}>
                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-serif)', marginBottom: '20px', color: 'var(--color-warm-white)' }}>
                            A digital studio built around real engineering
                        </h2>
                        <p style={{ color: 'var(--color-stone)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '20px' }}>
                            Yashveer Labs is intentionally positioned as an engineering led studio. The work begins with understanding the business, its customers and its digital bottlenecks. From there, technology, content and growth systems are designed around the actual objective.
                        </p>
                        <p style={{ color: 'var(--color-stone)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '32px' }}>
                            For DRS Deals, that objective is to create a stronger digital presence capable of supporting discovery, trust, engagement and bookings.
                        </p>
                        
                        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '36px', fontStyle: 'italic', fontSize: '0.98rem', color: 'var(--color-champagne-gold)', fontWeight: 500 }}>
                            Yashveer Labs is responsible for the digital engineering and growth work described on this page, under the direction of its founder, Yashveer Singh.
                        </div>

                        <div style={{ paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: '#fff', margin: 0 }}>
                                Built by Yashveer Singh. Delivered through Yashveer Labs.
                            </h3>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-stone)' }}>
                                <strong>Yashveer Labs</strong> — Digital Product Studio &amp; Engineering Agency
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: 1.6 }}>
                                <strong>Founder:</strong> Yashveer Singh | <strong>Project:</strong> DRS Deals | <strong>Scope:</strong> Website Engineering, SEO, AEO, Geographic Optimisation, Content, Digital Distribution, Social Media, Paid Acquisition and Local Search
                            </div>

                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
                                <Link href="/yashveer-singh" className="btn btn-primary">
                                    About Yashveer Singh
                                </Link>
                                <Link href="/explore" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                                    Explore DRS Deals
                                </Link>
                                <Link href="/partners" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                                    Partner With Yashveer Labs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
