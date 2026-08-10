import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yashveer Singh | Software Engineer & Founder of Yashveer Labs',
    description: 'Yashveer Singh is a software engineer and founder of Yashveer Labs, building web applications, digital products, business systems, AI integrations and growth infrastructure.',
};

export default function YashveerSinghPage() {
    const profileJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        'mainEntity': {
            '@type': 'Person',
            'name': 'Yashveer Singh',
            'jobTitle': 'Software Engineer & Founder',
            'worksFor': {
                '@type': 'Organization',
                'name': 'Yashveer Labs',
                'url': 'https://www.drsdeals.in/yashveer-labs',
            },
            'url': 'https://www.drsdeals.in/yashveer-singh',
            'sameAs': [
                'https://github.com/yashveer-singh-speaks/drs-deals',
            ],
            'knowsAbout': [
                'Software Engineering',
                'Full Stack Development',
                'React',
                'Next.js',
                'TypeScript',
                'Firebase',
                'Artificial Intelligence',
                'Automation Systems',
                'Search Engine Optimisation',
            ],
        },
    };

    return (
        <main className="section-padding bg-ivory" style={{ paddingTop: '140px' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
            />

            <div className="container">
                {/* Hero Section */}
                <div style={{ maxWidth: '840px', margin: '0 auto 64px auto', textAlign: 'center' }}>
                    <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                        SOFTWARE ENGINEER · FOUNDER · DIGITAL PRODUCT BUILDER
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '16px', lineHeight: 1.15 }}>
                        Yashveer Singh
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '32px', fontWeight: 400 }}>
                        Software Engineer and Founder of Yashveer Labs
                    </h2>

                    <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '36px', border: '1px solid var(--color-stone)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.1rem', lineHeight: 1.75, margin: 0 }}>
                            <strong style={{ color: 'var(--color-charcoal)' }}>Yashveer Singh</strong> is a software engineer, digital product builder and the founder of <strong style={{ color: 'var(--color-charcoal)' }}>Yashveer Labs</strong>, an independent digital engineering studio focused on building modern web applications, business systems, digital products, automation and AI enabled software.
                        </p>
                        <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.1rem', lineHeight: 1.75, margin: 0 }}>
                            His work sits at the intersection of engineering and business.
                        </p>
                        <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.1rem', lineHeight: 1.75, margin: 0 }}>
                            Instead of treating software as something that simply needs to look good, Yashveer focuses on building products and systems that solve practical problems, improve workflows, support growth and create a stronger digital presence.
                        </p>
                        <p className="text-body-large text-charcoal-light" style={{ fontSize: '1.1rem', lineHeight: 1.75, margin: 0 }}>
                            Through Yashveer Labs, he works across full stack web development, product engineering, business applications, search infrastructure, automation, AI integrations and digital growth systems.
                        </p>

                        <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-stone)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                            <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                ✦ Founder &amp; Lead Architect, Yashveer Labs
                            </span>
                            <Link href="/yashveer-labs" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                                Explore Yashveer Labs
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
                                Yashveer Singh is an independent software engineer and technology entrepreneur based in India.
                            </p>
                            <p>
                                He is the founder of <strong style={{ color: 'var(--color-charcoal)' }}>Yashveer Labs</strong>, where he builds software and digital infrastructure for businesses, organisations and product ideas.
                            </p>
                            <p>
                                His engineering work covers the full product lifecycle, from understanding a business problem and planning the architecture to designing interfaces, writing application logic, connecting databases and APIs, deploying applications and refining the product after launch.
                            </p>
                            <p>
                                Yashveer works primarily with modern web technologies including <strong style={{ color: 'var(--color-charcoal)' }}>React, Next.js, TypeScript and Firebase</strong>, while also working with AI tools and integrations to accelerate development and build practical intelligent systems.
                            </p>
                            <p>
                                His interests extend across software engineering, artificial intelligence, machine learning, computer vision, natural language processing, databases, automation and robotics.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                The common thread across this work is simple: build useful technology and make it work reliably.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Yashveer Labs */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
                            DIGITAL ENGINEERING STUDIO
                        </div>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '8px' }}>
                            Yashveer Labs
                        </h2>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '24px', fontWeight: 400 }}>
                            The engineering studio founded by Yashveer Singh
                        </h3>

                        <p style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
                            <strong style={{ color: 'var(--color-charcoal)' }}>Yashveer Labs</strong> is the digital engineering studio founded and led by Yashveer Singh. The studio combines software engineering with digital product development and growth infrastructure.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '36px' }}>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Web Development</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Modern websites and web applications built with production focused engineering practices.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Product Engineering</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Custom digital products developed around specific business requirements rather than generic templates.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Business Systems</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>CRMs, dashboards, administrative systems and internal applications designed to reduce manual work.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Automation</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Software workflows that connect tools, data and repetitive processes to streamline operations.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>AI Integration</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Practical applications of artificial intelligence, including LLM features and intelligent workflows.</p>
                            </div>
                            <div style={{ padding: '24px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Digital Growth Infrastructure</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Search, content, website and distribution systems designed to help businesses become easier to discover.</p>
                            </div>
                        </div>

                        <Link href="/yashveer-labs" className="btn btn-outline">
                            Visit Yashveer Labs
                        </Link>
                    </div>
                </div>

                {/* Section 3: How Yashveer approaches software engineering */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '8px' }}>
                            How Yashveer approaches software engineering
                        </h2>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '24px', fontWeight: 400 }}>
                            Engineering before decoration
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                A digital product is not successful because it has a polished homepage. It needs to work.
                            </p>
                            <p>
                                Yashveer approaches development by looking at the complete system behind a product. That includes the user interface, application logic, data model, authentication, permissions, APIs, performance, deployment and the operational requirements of the business.
                            </p>
                            <p>
                                The goal is to build software that can move from an idea to a working product without losing sight of reliability or maintainability.
                            </p>
                            <p>
                                This approach also influences how Yashveer uses AI during development.
                            </p>
                            <p>
                                AI can accelerate implementation, exploration and problem solving, but generated code still needs engineering judgement. Yashveer's workflow focuses on reviewing, adapting, testing and improving AI assisted output rather than treating generated code as finished software.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                The result is a development process that combines the speed of modern AI tools with conventional software engineering discipline.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Selected work */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '8px' }}>
                            Selected work
                        </h2>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '32px', fontWeight: 400 }}>
                            Building products instead of just pages
                        </h3>

                        <p style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
                            Yashveer's portfolio includes projects across education, real estate, hospitality, gaming, artificial intelligence and developer tooling.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '36px' }}>
                            {/* Nexli */}
                            <div style={{ padding: '28px', background: 'var(--color-ivory)', borderRadius: '14px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                    EDUCATION PLATFORM
                                </div>
                                <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '4px' }}>Nexli</h4>
                                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '12px' }}>School operating system</div>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, margin: 0 }}>
                                    Nexli is a multi tenant school operating system designed for K 12 schools, with support for English and Hindi. The project focuses on the operational side of education, bringing different school workflows into a connected software environment.
                                </p>
                            </div>

                            {/* Dwarka Bricks */}
                            <div style={{ padding: '28px', background: 'var(--color-ivory)', borderRadius: '14px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                    REAL ESTATE SOFTWARE
                                </div>
                                <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '4px' }}>Dwarka Bricks</h4>
                                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '12px' }}>Real estate web application, CRM and business dashboard</div>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, margin: 0 }}>
                                    Dwarka Bricks combines a full stack real estate website with a CRM, dashboards and role based administration. The project demonstrates Yashveer's approach to building software beyond the public facing website.
                                </p>
                            </div>

                            {/* Expert Tutorials */}
                            <div style={{ padding: '28px', background: 'var(--color-ivory)', borderRadius: '14px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                    EDTECH WEB APP
                                </div>
                                <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '4px' }}>Expert Tutorials</h4>
                                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '12px' }}>Education website</div>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, margin: 0 }}>
                                    Expert Tutorials is a focused education website built with an emphasis on speed, clarity and conversion. The project demonstrates the ability to turn a business requirement into a production ready web experience.
                                </p>
                            </div>

                            {/* Astrologer Reviews */}
                            <div style={{ padding: '28px', background: 'var(--color-ivory)', borderRadius: '14px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                    REVIEW PLATFORM
                                </div>
                                <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '4px' }}>Astrologer Reviews</h4>
                                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '12px' }}>Specialised review platform</div>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, margin: 0 }}>
                                    Astrologer Reviews is a specialised digital platform built around discovering and evaluating astrology related services. The project combines content, structured information and search oriented architecture.
                                </p>
                            </div>

                            {/* Velmora */}
                            <div style={{ padding: '28px', background: 'var(--color-ivory)', borderRadius: '14px', border: '1px solid var(--color-stone)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                    INTERACTIVE GAMING
                                </div>
                                <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '4px' }}>Velmora</h4>
                                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '12px' }}>Roblox game</div>
                                <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, margin: 0 }}>
                                    Velmora is a skill based melee PvP game built around a dark fantasy environment. The project represents another side of Yashveer's technical interests, extending into interactive software and game development.
                                </p>
                            </div>
                        </div>

                        <Link href="/explore" className="btn btn-outline">
                            Explore Projects
                        </Link>
                    </div>
                </div>

                {/* Section 5: Yashveer Singh and DRS Deals */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
                            PLATFORM ARCHITECTURE
                        </div>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '8px' }}>
                            Yashveer Singh and DRS Deals
                        </h2>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '24px', fontWeight: 400 }}>
                            Digital engineering behind the DRS Deals platform
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '32px' }}>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                Yashveer Singh is responsible for the digital engineering and growth work delivered for <strong style={{ color: 'var(--color-charcoal)' }}>DRS Deals</strong> through Yashveer Labs.
                            </p>
                            <p>
                                The project goes beyond a conventional hospitality website.
                            </p>
                            <p>
                                DRS Deals operates around resorts, hotels, water parks, farmhouses, dining, wellness and other experiences. Its digital presence therefore needs to support discovery, trust, content, search visibility and customer acquisition.
                            </p>
                            <p>
                                Yashveer Labs approached the project as a connected digital system.
                            </p>
                            <p>
                                The work includes website engineering, search optimisation, answer engine optimisation, geographic optimisation, content infrastructure, social distribution, advertising systems and local search optimisation.
                            </p>
                            <p>
                                The purpose is to create a digital platform capable of supporting the business as it grows.
                            </p>
                        </div>

                        <blockquote style={{ padding: '24px 32px', background: 'var(--color-ivory)', borderLeft: '4px solid var(--color-champagne-gold)', borderRadius: '0 12px 12px 0', margin: '0 0 32px 0' }}>
                            <p style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', fontStyle: 'italic', margin: 0 }}>
                                "Built by Yashveer Singh. Delivered through Yashveer Labs."
                            </p>
                        </blockquote>

                        <Link href="/yashveer-labs" className="btn btn-primary">
                            Explore the DRS Deals transformation
                        </Link>
                    </div>
                </div>

                {/* Section 6: Technology and areas of expertise */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '32px' }}>
                            Technology and areas of expertise
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Software Engineering</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Full stack web development, application architecture, frontend, backend APIs, databases and deployment.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Frontend Development</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>React, Next.js, TypeScript, modern JavaScript, responsive interfaces and component based architecture.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Backend and Data</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Firebase, databases, APIs, authentication, role based access systems and application logic.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Artificial Intelligence</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>AI integrations, LLM applications, intelligent workflows, natural language interfaces and AI assisted output.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Product Development</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Turning business requirements into functional software that can be tested, deployed and improved.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Automation</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Connecting systems and reducing repetitive operational work through software driven workflows.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Search &amp; Digital Systems</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Technical SEO, content architecture, structured information, local discovery and digital systems.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 7: Projects, experiments and engineering work */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '24px' }}>
                            Projects, experiments and engineering work
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '32px' }}>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                Yashveer Labs also functions as an engineering laboratory.
                            </p>
                            <p>
                                Alongside client and commercial projects, Yashveer experiments with developer tools, AI infrastructure, local AI systems, speech technology and other technical ideas.
                            </p>
                            <p>
                                This includes work around areas such as local speech to text, AI agent tooling, LLM routing, AI powered development workflows and privacy focused software.
                            </p>
                            <p>
                                These projects are important because they reflect how Yashveer learns and develops ideas outside the constraints of a conventional client project.
                            </p>
                            <p>
                                Some become experiments. Some become reusable software. Some become production products.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                The underlying principle remains the same: understand the problem, build the system, test the result and improve it.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 8: What Yashveer builds */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '24px' }}>
                            What Yashveer builds
                        </h2>
                        <p style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '28px' }}>
                            Yashveer works on projects where software needs to do more than present information. Examples include:
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Web applications</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Custom applications built around specific workflows and business requirements.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>SaaS products</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Software products designed for multiple users, organisations or customers.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>CRMs</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Systems for managing leads, customers, communication and operational information.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Dashboards</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Interfaces that turn business data into something people can actually use.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Internal tools</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Custom software designed around the way a particular organisation works.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>AI applications</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Products that use modern AI models as part of a practical workflow.</p>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--color-ivory)', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                                <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', marginBottom: '8px' }}>Automation systems</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0 }}>Connected workflows that reduce repetitive manual operations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 9: The philosophy behind Yashveer Labs */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '8px' }}>
                            The philosophy behind Yashveer Labs
                        </h2>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '24px', fontWeight: 400 }}>
                            Build fast. Think deeply. Ship properly.
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            <p>
                                Yashveer believes software development should combine speed with engineering judgement.
                            </p>
                            <p>
                                Modern AI tools have changed how quickly software can be explored and implemented. That does not remove the need for architecture, testing, security, maintainability or product thinking.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                It makes those things more important.
                            </p>
                            <p>
                                The objective is therefore not to produce the most code. It is to produce useful software.
                            </p>
                            <p>
                                A successful project should solve the problem it was built to solve, be understandable enough to maintain, and provide a foundation for whatever needs to happen next.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 10: Beyond Yashveer Labs */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '24px' }}>
                            Beyond Yashveer Labs
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-charcoal-light)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            <p>
                                Yashveer's work is not limited to one technology, one product category or one industry.
                            </p>
                            <p>
                                His interests include software engineering, artificial intelligence, machine learning, computer vision, natural language processing, robotics, databases, developer tooling and digital products.
                            </p>
                            <p>
                                That range allows him to approach projects from multiple technical perspectives.
                            </p>
                            <p>
                                A business application can require product thinking. An AI application can require database and backend engineering. A website can require search architecture. An automation system can require API design and workflow engineering.
                            </p>
                            <p style={{ fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                The technology changes. The engineering mindset remains.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 11: Connect with Yashveer Singh & Profiles */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '8px' }}>
                            Connect with Yashveer Singh
                        </h2>
                        <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal-light)', marginBottom: '24px', fontWeight: 400 }}>
                            Follow the work
                        </h3>
                        <p style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
                            Yashveer shares software projects, engineering experiments, digital products and ideas through his professional and public profiles.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
                            <a href="https://github.com/yashveer-singh-speaks/drs-deals" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                GitHub Profile
                            </a>
                            <Link href="/yashveer-labs" className="btn btn-outline">
                                Yashveer Labs Studio
                            </Link>
                            <Link href="/explore" className="btn btn-outline">
                                Portfolio Projects
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 12: Yashveer Singh at a glance (Visible Identity Card) */}
                <div className="bg-white shadow-soft" style={{ borderRadius: '16px', padding: '48px', border: '1px solid var(--color-stone)', marginBottom: '48px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
                            ENTITY IDENTITY SUMMARY
                        </div>
                        <h2 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '28px' }}>
                            Yashveer Singh at a glance
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', gap: '16px', flexWrap: 'wrap' }}>
                                <strong style={{ minWidth: '160px', color: 'var(--color-charcoal)' }}>Name:</strong>
                                <span style={{ color: 'var(--color-charcoal-light)' }}>Yashveer Singh</span>
                            </div>
                            <div style={{ display: 'flex', padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', gap: '16px', flexWrap: 'wrap' }}>
                                <strong style={{ minWidth: '160px', color: 'var(--color-charcoal)' }}>Role:</strong>
                                <span style={{ color: 'var(--color-charcoal-light)' }}>Software Engineer and Founder</span>
                            </div>
                            <div style={{ display: 'flex', padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', gap: '16px', flexWrap: 'wrap' }}>
                                <strong style={{ minWidth: '160px', color: 'var(--color-charcoal)' }}>Company:</strong>
                                <span style={{ color: 'var(--color-charcoal-light)' }}>Yashveer Labs</span>
                            </div>
                            <div style={{ display: 'flex', padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', gap: '16px', flexWrap: 'wrap' }}>
                                <strong style={{ minWidth: '160px', color: 'var(--color-charcoal)' }}>Focus:</strong>
                                <span style={{ color: 'var(--color-charcoal-light)' }}>Software Engineering, Web Applications, Digital Products, AI, Automation and Business Systems</span>
                            </div>
                            <div style={{ display: 'flex', padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', gap: '16px', flexWrap: 'wrap' }}>
                                <strong style={{ minWidth: '160px', color: 'var(--color-charcoal)' }}>Core technologies:</strong>
                                <span style={{ color: 'var(--color-charcoal-light)' }}>React, Next.js, TypeScript, Firebase and modern AI development tools</span>
                            </div>
                            <div style={{ display: 'flex', padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', gap: '16px', flexWrap: 'wrap' }}>
                                <strong style={{ minWidth: '160px', color: 'var(--color-charcoal)' }}>Selected work:</strong>
                                <span style={{ color: 'var(--color-charcoal-light)' }}>Nexli, Dwarka Bricks, Expert Tutorials, Astrologer Reviews and Velmora</span>
                            </div>
                            <div style={{ display: 'flex', padding: '16px 20px', background: 'var(--color-ivory)', borderRadius: '10px', border: '1px solid var(--color-stone)', gap: '16px', flexWrap: 'wrap' }}>
                                <strong style={{ minWidth: '160px', color: 'var(--color-charcoal)' }}>DRS Deals:</strong>
                                <span style={{ color: 'var(--color-charcoal-light)' }}>Digital Engineering and Growth Partner through Yashveer Labs</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 13: About this profile & Final CTA */}
                <div className="bg-charcoal text-white" style={{ borderRadius: '16px', padding: '56px', textAlign: 'center' }}>
                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-serif)', marginBottom: '20px', color: 'var(--color-warm-white)' }}>
                            About this profile
                        </h2>
                        <p style={{ color: 'var(--color-stone)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '20px' }}>
                            This page is the official Yashveer Singh profile published by DRS Deals to identify the person responsible for the digital engineering work delivered for the DRS Deals platform through Yashveer Labs.
                        </p>
                        <p style={{ color: 'var(--color-stone)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '32px' }}>
                            It provides background on Yashveer Singh, his engineering approach, Yashveer Labs, selected projects and his role in the DRS Deals digital transformation.
                        </p>

                        <div style={{ padding: '16px 24px', background: 'rgba(255,255,255,0.06)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '36px', fontSize: '0.9rem', color: 'var(--color-champagne-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Profile maintained by DRS Deals.
                        </div>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Link href="/yashveer-labs" className="btn btn-primary">
                                Explore Yashveer Labs
                            </Link>
                            <Link href="/explore" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                                Explore DRS Deals
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
