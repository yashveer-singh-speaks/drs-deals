'use client';

import React from 'react';
import WhatsAppConcierge from '@/components/WhatsAppConcierge';
import ScrollToTop from '@/components/ScrollToTop';

export default function BottomRightActions() {
    return (
        <aside
            aria-label="Quick Actions"
            className="bottom-right-floating-container"
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                zIndex: 990,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
            }}
        >
            {/* Smaller Go To Top sits clearly above WhatsApp with a visible gap */}
            <ScrollToTop />
            {/* WhatsApp Circular Button */}
            <WhatsAppConcierge />
        </aside>
    );
}
