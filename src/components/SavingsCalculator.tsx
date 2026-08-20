'use client';

import React, { useState } from 'react';

export default function SavingsCalculator() {
    const [amount, setAmount] = useState(10000);
    const savings = Math.round(amount * 0.35);
    const dealPrice = Math.round(amount * 0.65);

    return (
        <section className="section-padding bg-ivory">
            <div className="container">
                <div className="calculator-wrapper rounded-lg shadow-soft" style={{ background: '#fff', border: '1px solid var(--color-stone)', padding: '40px', borderRadius: '16px' }}>
                    <div className="calc-content" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
                        <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '12px' }}>VALUE ESTIMATOR</div>
                        <h2 className="section-title" style={{ marginBottom: '16px' }}>See Your Privileged Savings</h2>
                        <p className="text-body-large text-charcoal-light" style={{ marginBottom: '32px' }}>
                            Adjust the slider to see how much you save on average across luxury resort stays, fine dining vouchers, and wellness memberships.
                        </p>
                        
                        <div className="calc-slider-wrapper" style={{ marginBottom: '32px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
                                <label htmlFor="priceSlider" className="text-eyebrow" style={{ color: 'var(--color-charcoal)' }}>Experience Rack Rate Value</label>
                                <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 700 }}>₹{amount.toLocaleString('en-IN')}</span>
                            </div>
                            <input
                                type="range"
                                id="priceSlider"
                                min="2000"
                                max="50000"
                                step="500"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                aria-label="Experience Rack Rate Value Slider"
                                className="calc-slider"
                                style={{ width: '100%', accentColor: 'var(--color-champagne-gold)', cursor: 'pointer' }}
                            />
                        </div>
                        
                        <div className="calc-results" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', background: 'var(--color-ivory)', padding: '24px', borderRadius: '12px', border: '1px solid var(--color-stone)' }}>
                            <div className="calc-result-item">
                                <span className="calc-label" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-charcoal-light)', textTransform: 'uppercase', marginBottom: '4px' }}>Standard Rate</span>
                                <span className="calc-value original" id="calcOriginal" style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-charcoal-light)', textDecoration: 'line-through' }}>₹{amount.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="calc-result-item highlight" style={{ borderLeft: '1px solid var(--color-stone)', borderRight: '1px solid var(--color-stone)' }}>
                                <span className="calc-label text-gold" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-champagne-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>DRS Deals Rate</span>
                                <span className="calc-value deal text-gold" id="calcDeal" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-champagne-gold)', fontFamily: 'var(--font-serif)' }}>₹{dealPrice.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="calc-result-item">
                                <span className="calc-label" style={{ display: 'block', fontSize: '0.8rem', color: '#27ae60', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>Your Net Savings</span>
                                <span className="calc-value save" id="calcSave" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#27ae60' }}>₹{savings.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
