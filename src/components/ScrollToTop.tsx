'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="scroll-to-top-btn"
            style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#080705',
                color: 'var(--color-champagne-gold)',
                border: '1px solid rgba(188, 144, 68, 0.5)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                lineHeight: 1,
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
        >
            ↑
        </button>
    );
}
