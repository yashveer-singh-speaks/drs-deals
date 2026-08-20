import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Fallback message strictly required by business policy
const STRICT_FALLBACK_MESSAGE = 'Sorry, please connect to +91 98111 20892 to get the answer to that question.';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { message, conversationHistory } = body;

        if (!message || typeof message !== 'string' || !message.trim()) {
            return NextResponse.json(
                { success: false, error: 'Please provide a message.' },
                { status: 400 }
            );
        }

        const userQuery = message.trim();
        const apiKey = process.env.NVIDIA_API_KEY || process.env.CHATBOT_API_KEY;

        // Read context.md
        let contextKnowledge = '';
        try {
            const contextPath = path.join(process.cwd(), 'context.md');
            if (fs.existsSync(contextPath)) {
                contextKnowledge = fs.readFileSync(contextPath, 'utf-8');
            }
        } catch (err) {
            console.error('[DRS Deals Chatbot] Could not load context.md', err);
        }

        const systemPrompt = `You are "DRS Concierge", the official digital concierge for DRS Deals (www.drsdeals.in).

CRITICAL INSTRUCTIONS:
1. Your sole and exclusive source of truth is the APPROVED DRS DEALS KNOWLEDGE BASE below.
2. Answer questions accurately, concisely, and with a polite, luxury concierge tone.
3. NEVER hallucinate, guess, or invent prices, unlisted properties, discount percentages, availability, or business policies.
4. STRICT FALLBACK RULE: If the user asks something that is NOT explicitly answered or contained in the approved knowledge base below, you MUST respond EXACTLY with this sentence and NOTHING ELSE:
"${STRICT_FALLBACK_MESSAGE}"

APPROVED DRS DEALS KNOWLEDGE BASE:
${contextKnowledge}
`;

        // If NVIDIA API Key is provided
        if (apiKey && apiKey.startsWith('nvapi-') && apiKey.length > 20) {
            try {
                const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                        model: 'nvidia/nemotron-3-nano-30b-a3b',
                        messages: [
                            { role: 'system', content: systemPrompt },
                            ...(Array.isArray(conversationHistory) ? conversationHistory.slice(-6) : []),
                            { role: 'user', content: userQuery }
                        ],
                        temperature: 0.2,
                        max_tokens: 350,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    const reply = data.choices?.[0]?.message?.content?.trim();
                    if (reply) {
                        return NextResponse.json({ success: true, reply });
                    }
                } else {
                    const errorText = await response.text();
                    console.warn('[DRS Deals Chatbot] NVIDIA API status:', response.status, errorText);
                }
            } catch (apiErr) {
                console.error('[DRS Deals Chatbot] NVIDIA API fetch error:', apiErr);
            }
        }

        // Domain-Aware Concierge Fallback Engine (Strictly grounded in verified context)
        const q = userQuery.toLowerCase();
        let reply = '';

        if (q.includes('phone') || q.includes('call') || q.includes('contact') || q.includes('number') || q.includes('hotline')) {
            reply = 'You can speak directly with our DRS Deals concierge team at +91 98111 20892 or +91 98113 60808. You can also reach us on WhatsApp at +91 98111 20892.';
        } else if (q.includes('sonipat') || q.includes('murthal') || q.includes('wyndham')) {
            reply = 'Wyndham Garden Sonipat Murthal 5-Star Hotel Membership includes 2 complimentary room nights, 10 dinner buffets, 6 swimming pool entries, tea/coffee with cookies, mocktails/beers, and 1 kg celebration cake (valid for 1 year). For bookings and exclusive rates, please connect with our concierge at +91 98111 20892.';
        } else if (q.includes('sk premium') || q.includes('ghaziabad') || q.includes('mohan nagar')) {
            reply = 'Hotel SK Premium Ghaziabad Membership is priced at ₹5,000 for 1 year (worth ₹40,000+). It includes 1 free Executive/Deluxe room stay with breakfast, ₹5,250 in F&B vouchers, 4 breakfast buffets, 1 couple dinner buffet, pool entries, and BOGO dining certificates. Please call +91 98111 20892 to reserve.';
        } else if (q.includes('kasauli') || q.includes('oren')) {
            reply = 'Oren Kasauli Membership Card is ₹10,000 (valid 1 year) and includes 2 complimentary night stays in scenic Kasauli hills, 10 dinner buffets, refreshments, pool access, and cake. Call +91 98111 20892 to enquire.';
        } else if (q.includes('manali') || q.includes('atma yog')) {
            reply = 'Atma Yog Luxury Manor Manali is priced at ₹8,999 (1-year validity) and offers 3 complimentary room nights in luxury mountain suites with daily breakfast, dining discounts, and bonfire evenings. Call +91 98111 20892 for reservations.';
        } else if (q.includes('white flower') || q.includes('mussoorie') || q.includes('corbett')) {
            reply = 'The White Flower Resorts membership is ₹7,999 and gives dual-destination access across Mussoorie & Jim Corbett with 2 complimentary night stays and dining privileges. Call +91 98111 20892 for details.';
        } else if (q.includes('rangmanch') || q.includes('gurgaon farm') || q.includes('sultanpur')) {
            reply = 'Rangmanch Farms Gurgaon offers a full-day adventure outing (₹1,499/adult, ₹799/child) with 80+ activities (zipline, swimming pool, tractor rides) and unlimited multi-meal buffet. Call +91 98111 20892 to book.';
        } else if (q.includes('how it works') || q.includes('how to book') || q.includes('how do i buy') || q.includes('payment')) {
            reply = 'DRS Deals operates as a personalized concierge desk: 1) Explore our curated hotel memberships. 2) Call +91 98111 20892 or WhatsApp us. 3) Our concierge verifies dates and confirms your membership directly with property management. No online checkout required.';
        } else if (q.includes('partner') || q.includes('hotel partner') || q.includes('list property')) {
            reply = '5-star hotels, luxury resorts, water parks, and fine dining venues can partner with DRS Deals with zero upfront listing fees. Email partnerships@drsdeals.in or submit your property on /partners.';
        } else if (q.includes('heritage') || q.includes('years') || q.includes('since') || q.includes('about')) {
            reply = 'Since 2003, DRS Deals has a 23-Year Legacy curating India’s finest hospitality experiences across 50+ cities, serving over 2M+ happy customers with ₹1B+ savings delivered.';
        } else {
            // Strict Fallback Message for any out-of-context or unverified query
            reply = STRICT_FALLBACK_MESSAGE;
        }

        return NextResponse.json({
            success: true,
            reply,
        });
    } catch (err) {
        console.error('[DRS Deals Chatbot Server Error]', err);
        return NextResponse.json(
            { success: true, reply: STRICT_FALLBACK_MESSAGE },
            { status: 200 }
        );
    }
}
