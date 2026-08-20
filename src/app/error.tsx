'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('[DRS Deals Application Error]', error);
    }, [error]);

    return (
        <main className="section-padding bg-ivory" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '160px', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
                <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px', color: '#c0392b' }}>
                    UNEXPECTED ENCOUNTER
                </div>
                <h1 className="hero-title" style={{ fontSize: '2.75rem', marginBottom: '20px' }}>
                    An Interruption in Service
                </h1>
                <p className="text-body-large text-charcoal-light" style={{ marginBottom: '32px', lineHeight: 1.6 }}>
                    We encountered an unexpected issue while rendering this experience. You may attempt to refresh the view or return to our curated index.
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
                    <button
                        onClick={() => reset()}
                        className="btn btn-primary"
                        style={{ padding: '14px 28px' }}
                    >
                        Try Again
                    </button>
                    <Link href="/" className="btn btn-outline" style={{ padding: '14px 28px' }}>
                        Return Home
                    </Link>
                    <Link href="/contact" className="btn btn-outline" style={{ padding: '14px 28px' }}>
                        Concierge Desk
                    </Link>
                </div>

                {error.digest && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-light)', opacity: 0.7 }}>
                        Incident Reference ID: {error.digest}
                    </div>
                )}
            </div>
        </main>
    );
}
