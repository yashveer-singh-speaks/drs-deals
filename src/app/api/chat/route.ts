import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { siteConfig } from '@/config/site';

// Fallback message strictly required by business policy
const STRICT_FALLBACK_MESSAGE = `Sorry, please connect to ${siteConfig.contacts.hotline1} to get the answer to that question.`;

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

        // Read DRS_DEALS_MASTER_CONTEXT.md or context.md
        let contextKnowledge = '';
        try {
            const masterPath = path.join(process.cwd(), 'DRS_DEALS_MASTER_CONTEXT.md');
            const contextPath = path.join(process.cwd(), 'context.md');
            if (fs.existsSync(masterPath)) {
                contextKnowledge = fs.readFileSync(masterPath, 'utf-8');
            } else if (fs.existsSync(contextPath)) {
                contextKnowledge = fs.readFileSync(contextPath, 'utf-8');
            }
        } catch (err) {
            console.error('[DRS Deals Chatbot] Could not load context markdown', err);
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
            reply = `You can speak directly with our DRS Deals concierge team at ${siteConfig.contacts.hotlines.map(h => h.display).join(' / ')}. You can also reach us on WhatsApp at ${siteConfig.contacts.whatsappDisplay} or email ${siteConfig.contacts.email}.`;
        } else if (q.includes('sonipat') || q.includes('murthal') || q.includes('wyndham')) {
            reply = `Wyndham Garden Sonipat Murthal 5-Star Hotel Membership is priced at ₹10,000 (valid 1 year) and includes 2 night stays with breakfast (2 adults + kids up to 6 yrs), 10 dinner vouchers, 6 swimming pool entries, tea/coffee with cookies, mocktails/beers, and BOGO vouchers. Please connect with our concierge at ${siteConfig.contacts.hotline1}.`;
        } else if (q.includes('sk premium') || q.includes('ghaziabad') || q.includes('mohan nagar')) {
            reply = `Hotel SK Premium Ghaziabad Membership is priced at ₹5,000 for 1 year (worth ₹40,000+). It includes 1 room stay with breakfast (2 adults + 2 kids <=5 yrs), 4 breakfast buffets, 1 couple dinner buffet, 4 desserts, mocktails, pool entries, and BOGO dining certificates. Please call ${siteConfig.contacts.hotline1} to reserve.`;
        } else if (q.includes('kasauli') || q.includes('oren')) {
            reply = `Oren Kasauli Membership Card is ₹10,000 (valid 1 year) and includes 2 night stays with breakfast (2 adults + 2 kids up to 10 yrs), ₹10,000 food and beverage cash vouchers, free pool access, 2 spa treatment vouchers, and tea/coffee. Call ${siteConfig.contacts.hotline1} to enquire.`;
        } else if (q.includes('manali') || q.includes('atma yog')) {
            reply = `Atma Yog Luxury Manor Manali is priced at ₹9,000 (1-year validity) and offers 3 night stays with breakfast (2 adults + kids up to 6 yrs), 8 buffet lunch or dinner vouchers, and 10 tea/coffee servings. Call ${siteConfig.contacts.hotline1} for reservations.`;
        } else if (q.includes('white flower') || q.includes('mussoorie') || q.includes('corbett')) {
            reply = `The White Flower Resorts membership is ₹7,999 and gives dual-destination access across Mussoorie & Jim Corbett with room night stays, 10 buffet vouchers, and leisure access. Call ${siteConfig.contacts.hotline1} for details.`;
        } else if (q.includes('rangmanch') || q.includes('gurgaon farm') || q.includes('sultanpur')) {
            reply = `Rangmanch Farms Gurgaon offers a full-day adventure outing with 80+ activities (zipline, swimming pool, sky cycling) and unlimited meals. Contact DRS Deals at ${siteConfig.contacts.hotline1} for exclusive member offers.`;
        } else if (q.includes('mera gaon') || q.includes('mera desh')) {
            reply = `Mera Gaon Mera Desh Murthal offers an authentic rural village experience with unlimited meals, 60+ cultural activities, and full water park access. Contact DRS Deals at ${siteConfig.contacts.hotline1} for special member passes.`;
        } else if (q.includes('madhavgarh') || q.includes('tikli')) {
            reply = `Madhavgarh Farms Gurgaon Day Outing offers authentic rural village food and 50+ activities for the morning slot (9 AM to 5 PM). Advance booking required via ${siteConfig.contacts.hotline1}.`;
        } else if (q.includes('mojoland')) {
            reply = `Mojoland Multi Theme Park Murthal Combo Pass is priced at ₹700 for ANY TWO PARKS (Water, Adventure, Amusement, or Snow Park). Call ${siteConfig.contacts.hotline1} to book.`;
        } else if (q.includes('how it works') || q.includes('how to book') || q.includes('how do i buy') || q.includes('payment')) {
            reply = `DRS Deals operates as a personalized concierge desk: 1) Explore our curated hotel memberships. 2) Call ${siteConfig.contacts.hotline1} or WhatsApp ${siteConfig.contacts.whatsappDisplay}. 3) Our concierge verifies dates and coordinates your membership directly with property management.`;
        } else if (q.includes('partner') || q.includes('hotel partner') || q.includes('list property')) {
            reply = `5-star hotels, luxury resorts, water parks, and fine dining venues can partner with DRS Deals with zero upfront cost. Email ${siteConfig.contacts.email} or submit your property on /partners.`;
        } else if (q.includes('heritage') || q.includes('years') || q.includes('since') || q.includes('about')) {
            reply = `Since 2003, DRS Deals has a 23-Year Legacy curating India’s finest hospitality experiences across Delhi NCR and More, serving over 2M+ happy customers with ₹1B+ savings delivered.`;
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
