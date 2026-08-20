'use client';

import React from 'react';
import WhatsAppConcierge from '@/components/WhatsAppConcierge';
import ScrollToTop from '@/components/ScrollToTop';

export default function BottomRightActions() {
    return (
        <div
            className="bottom-right-floating-container"
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                zIndex: 990,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
            }}
        >
            <WhatsAppConcierge />
            <ScrollToTop />
        </div>
    );
}
