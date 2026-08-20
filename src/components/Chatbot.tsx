'use client';

import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '@/config/site';

interface ChatMessage {
    sender: 'user' | 'assistant';
    text: string;
    time: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            sender: 'assistant',
            text: `Welcome to DRS Deals. I am your digital concierge. Ask me about our curated 5-star hotel memberships, resort packages, fine dining, or property partnerships.`,
            time: 'Just now',
        },
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            inputRef.current?.focus();
        }
    }, [isOpen, messages]);

    const handleSendMessage = async (textToSend?: string) => {
        const query = (textToSend || inputMessage).trim();
        if (!query || isLoading) return;

        const userMsg: ChatMessage = {
            sender: 'user',
            text: query,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputMessage('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: query,
                    conversationHistory: messages.map((m) => ({
                        role: m.sender === 'user' ? 'user' : 'assistant',
                        content: m.text,
                    })),
                }),
            });

            const data = await res.json();
            const replyText = data.reply || `Sorry, please connect to ${siteConfig.contacts.hotline1} to get the answer to that question.`;

            const assistantMsg: ChatMessage = {
                sender: 'assistant',
                text: replyText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };

            setMessages((prev) => [...prev, assistantMsg]);
        } catch (err) {
            console.error('[DRS Concierge Error]', err);
            setMessages((prev) => [
                ...prev,
                {
                    sender: 'assistant',
                    text: `Sorry, please connect to ${siteConfig.contacts.hotline1} to get the answer to that question.`,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const quickChips = [
        'Wyndham Sonipat Deal',
        'SK Premium Ghaziabad',
        'How does booking work?',
        'What is your heritage?',
    ];

    return (
        <aside aria-label="DRS Deals Concierge Assistant" style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 995 }}>
            {/* Small Square Toggle Button with Comfortably Rounded Corners on Bottom-Left */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open DRS Deals Chatbot"
                    aria-expanded={isOpen}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        height: '44px',
                        padding: '0 16px',
                        borderRadius: '12px',
                        background: '#080705',
                        color: 'var(--color-champagne-gold)',
                        border: '1px solid rgba(188, 144, 68, 0.4)',
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        lineHeight: 1,
                    }}
                >
                    <span>Chat ✨</span>
                </button>
            )}

            {/* Chat Modal on Bottom-Left */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        left: '24px',
                        width: '360px',
                        maxWidth: 'calc(100vw - 32px)',
                        height: '520px',
                        maxHeight: 'calc(100vh - 100px)',
                        background: '#fff',
                        borderRadius: '16px',
                        border: '1px solid var(--color-stone)',
                        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        zIndex: 1000,
                        animation: 'fadeIn 0.2s ease-out',
                    }}
                >
                    {/* Header */}
                    <div style={{ background: '#080705', color: '#fff', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(188, 144, 68, 0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(188, 144, 68, 0.2)', color: 'var(--color-champagne-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                ✦
                            </div>
                            <div>
                                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>DRS Concierge</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-stone)' }}>Verified Hospitality Knowledge</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Concierge Chat"
                            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem', padding: '4px' }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div style={{ flex: 1, padding: '16px', overflowY: 'auto', background: 'var(--color-ivory)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                    background: msg.sender === 'user' ? '#080705' : '#fff',
                                    color: msg.sender === 'user' ? '#fff' : 'var(--color-charcoal)',
                                    padding: '12px 16px',
                                    borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                                    border: msg.sender === 'user' ? 'none' : '1px solid var(--color-stone)',
                                    fontSize: '0.88rem',
                                    lineHeight: 1.5,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                }}
                            >
                                <p style={{ margin: 0 }}>{msg.text}</p>
                                <div style={{ fontSize: '0.7rem', color: msg.sender === 'user' ? 'rgba(255,255,255,0.5)' : 'var(--color-charcoal-light)', marginTop: '4px', textAlign: 'right' }}>
                                    {msg.time}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '10px 16px', borderRadius: '16px', border: '1px solid var(--color-stone)', fontSize: '0.85rem', color: 'var(--color-charcoal-light)' }}>
                                ✦ DRS Concierge is searching verified records...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Suggestion Chips */}
                    <div style={{ padding: '8px 12px', background: '#fff', borderTop: '1px solid var(--color-stone)', display: 'flex', gap: '6px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                        {quickChips.map((chip, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSendMessage(chip)}
                                style={{
                                    background: 'var(--color-ivory)',
                                    border: '1px solid var(--color-stone)',
                                    borderRadius: '14px',
                                    padding: '4px 10px',
                                    fontSize: '0.75rem',
                                    color: 'var(--color-charcoal)',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                }}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    {/* Input Bar */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSendMessage();
                        }}
                        style={{ padding: '12px 16px', background: '#fff', display: 'flex', gap: '8px', borderTop: '1px solid var(--color-stone)' }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Ask about memberships, hotel stays, or booking..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            disabled={isLoading}
                            aria-label="Concierge question"
                            style={{
                                flex: 1,
                                padding: '10px 14px',
                                borderRadius: '8px',
                                border: '1px solid var(--color-stone)',
                                fontSize: '0.9rem',
                                outline: 'none',
                                background: 'var(--color-ivory)',
                            }}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !inputMessage.trim()}
                            aria-label="Send message to Concierge"
                            style={{
                                background: 'var(--color-champagne-gold)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '10px 14px',
                                cursor: 'pointer',
                                fontWeight: 600,
                                opacity: isLoading || !inputMessage.trim() ? 0.6 : 1,
                            }}
                        >
                            ➤
                        </button>
                    </form>
                </div>
            )}
        </aside>
    );
}
