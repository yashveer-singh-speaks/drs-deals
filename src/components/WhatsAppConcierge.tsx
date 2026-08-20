'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

export default function WhatsAppConcierge() {
    const whatsappUrl = siteConfig.getWhatsAppUrl();

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with DRS Deals Concierge on WhatsApp at +91 98111 20892"
            className="whatsapp-concierge-btn"
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#080705',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: '30px',
                border: '1px solid rgba(188, 144, 68, 0.4)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                whiteSpace: 'nowrap',
            }}
        >
            {/* Crisp WhatsApp SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.5 3.5C18.2 1.2 15.2 0 12 0C5.4 0 0 5.4 0 12C0 14.1 0.6 16.2 1.6 18L0.1 23.5L5.7 22C7.5 23 9.7 23.5 12 23.5C18.6 23.5 24 18.1 24 11.5C24 8.3 22.8 5.3 20.5 3.5ZM12 21.5C10 21.5 8.1 21 6.5 20.1L6.1 19.9L2.8 20.8L3.7 17.6L3.5 17.2C2.5 15.6 2 13.8 2 12C2 6.5 6.5 2 12 2C14.7 2 17.2 3.1 19.1 5C21 6.9 22 9.4 22 12C22 17.5 17.5 21.5 12 21.5ZM17.4 14.5C17.1 14.3 15.7 13.6 15.4 13.5C15.1 13.4 14.9 13.4 14.7 13.7C14.5 14 13.9 14.7 13.7 14.9C13.5 15.1 13.3 15.1 13 14.9C12.7 14.8 11.6 14.4 10.3 13.2C9.3 12.3 8.6 11.2 8.4 10.9C8.2 10.6 8.4 10.5 8.5 10.3C8.6 10.2 8.8 10 8.9 9.8C9 9.6 9.1 9.5 9.1 9.3C9.2 9.1 9.1 9 9 8.8C8.9 8.6 8.3 7.2 8.1 6.6C7.9 6 7.7 6.1 7.5 6.1C7.3 6.1 7.1 6.1 6.9 6.1C6.7 6.1 6.3 6.2 6 6.5C5.7 6.8 4.9 7.6 4.9 9.1C4.9 10.6 6 12.1 6.2 12.3C6.4 12.5 8.4 15.5 11.4 16.8C12.1 17.1 12.7 17.3 13.1 17.4C13.8 17.6 14.5 17.6 15 17.5C15.6 17.4 16.9 16.7 17.2 15.9C17.5 15.1 17.5 14.4 17.4 14.5Z"
                    fill="#25D366"
                />
            </svg>
            <span>WhatsApp Concierge</span>
        </a>
    );
}
