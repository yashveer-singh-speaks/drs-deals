import React from 'react';

export default function Loading() {
    return (
        <main className="section-padding bg-ivory" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '160px' }}>
            <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', marginBottom: '24px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: '3px solid var(--color-stone)',
                        borderTopColor: 'var(--color-champagne-gold)',
                        animation: 'spin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
                        margin: '0 auto',
                    }}></div>
                </div>
                <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '8px', color: 'var(--color-champagne-gold)' }}>
                    DRS DEALS PRIVILEGED ACCESS
                </div>
                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', fontWeight: 400 }}>
                    Preparing Curated Experience...
                </h2>
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes spin {
                            to { transform: rotate(360deg); }
                        }
                    `
                }} />
            </div>
        </main>
    );
}
