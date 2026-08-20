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
                gap: '0px',
            }}
        >
            {/* Go To Top is positioned slightly above and overlapping WhatsApp */}
            <div style={{ marginBottom: '-10px', zIndex: 2, pointerEvents: 'auto' }}>
                <ScrollToTop />
            </div>
            {/* WhatsApp Circular Button */}
            <div style={{ zIndex: 1, pointerEvents: 'auto' }}>
                <WhatsAppConcierge />
            </div>
        </aside>
    );
}
