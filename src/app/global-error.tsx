'use client';

import React, { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('[DRS Deals Global Error]', error);
    }, [error]);

    return (
        <html lang="en">
            <body style={{ margin: 0, padding: 0, fontFamily: 'serif', background: '#F9F8F6', color: '#080705', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
                <div style={{ maxWidth: '560px', padding: '40px 24px' }}>
                    <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#BC9044', marginBottom: '16px', fontWeight: 600 }}>
                        SYSTEM NOTICE
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: 400 }}>
                        DRS Deals Platform Interruption
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6, marginBottom: '32px' }}>
                        A critical application error occurred. We apologize for the inconvenience. Please refresh or contact concierge support.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <button
                            onClick={() => reset()}
                            style={{
                                background: '#BC9044',
                                color: '#fff',
                                border: 'none',
                                padding: '14px 28px',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                fontWeight: 600,
                            }}
                        >
                            Reload Experience
                        </button>
                        <a
                            href="/"
                            style={{
                                background: '#080705',
                                color: '#fff',
                                textDecoration: 'none',
                                padding: '14px 28px',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                            }}
                        >
                            Return to Homepage
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
