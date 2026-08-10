import React from 'react';

export default function OfferSkeletonGrid({ count = 6, title = "Curated Offers & Memberships Loading" }: { count?: number; title?: string }) {
    return (
        <div className="section-padding bg-ivory">
            <div className="container">
                <div className="section-header" style={{ marginBottom: '32px' }}>
                    <div>
                        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>{title}</h2>
                        <p className="text-body-small text-charcoal-light">Exclusive deals, verified vouchers &amp; venue memberships will appear here shortly.</p>
                    </div>
                </div>

                <div className="deal-grid">
                    {Array.from({ length: count }).map((_, idx) => (
                        <div key={idx} className="deal-card skeleton-card shadow-soft" style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-stone)' }}>
                            <div className="skeleton-img-wrapper" style={{ height: '220px', background: 'linear-gradient(90deg, #f0ede8 25%, #e6e2db 50%, #f0ede8 75%)', backgroundSize: '200% 100%', animation: 'skeleton-pulse 1.8s infinite' }}></div>
                            <div className="deal-content" style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                    <div style={{ width: '30%', height: '14px', background: '#f0ede8', borderRadius: '4px' }}></div>
                                    <div style={{ width: '20%', height: '14px', background: '#f0ede8', borderRadius: '4px' }}></div>
                                </div>
                                <div style={{ width: '85%', height: '22px', background: '#e8e4dc', borderRadius: '4px', marginBottom: '12px' }}></div>
                                <div style={{ width: '50%', height: '16px', background: '#f0ede8', borderRadius: '4px', marginBottom: '24px' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ width: '40%', height: '24px', background: '#e8e4dc', borderRadius: '4px' }}></div>
                                    <div style={{ width: '35%', height: '36px', background: 'var(--color-champagne-gold)', opacity: 0.25, borderRadius: '6px' }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center" style={{ marginTop: '48px', padding: '24px', background: 'rgba(188, 144, 68, 0.05)', borderRadius: '12px', border: '1px dashed var(--color-champagne-gold)' }}>
                    <p className="text-body-large" style={{ color: 'var(--color-charcoal)', fontWeight: 500, margin: 0 }}>
                        ✦ Additional curated offers and membership drops are currently being verified with venue partners.
                    </p>
                </div>
            </div>
        </div>
    );
}
