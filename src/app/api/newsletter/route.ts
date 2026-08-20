import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
            return NextResponse.json(
                { success: false, error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        const sanitizedEmail = email.trim().toLowerCase().slice(0, 160);

        console.log('[DRS Deals Newsletter Subscription]', {
            email: sanitizedEmail,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json(
            {
                success: true,
                message: `Subscription confirmed for ${sanitizedEmail}. Welcome to the DRS Deals Privileged Circle.`,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error('[DRS Deals Newsletter Error]', err);
        return NextResponse.json(
            { success: false, error: 'Failed to process subscription. Please try again.' },
            { status: 500 }
        );
    }
}
