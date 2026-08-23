import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validation
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid full name (minimum 2 characters).' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid email address.' },
                { status: 400 }
            );
        }

        if (!message || typeof message !== 'string' || message.trim().length < 5) {
            return NextResponse.json(
                { success: false, error: 'Please provide a descriptive message (minimum 5 characters).' },
                { status: 400 }
            );
        }

        // Sanitize
        const sanitizedData = {
            name: name.trim().slice(0, 120),
            email: email.trim().toLowerCase().slice(0, 160),
            phone: phone ? String(phone).trim().slice(0, 20) : null,
            message: message.trim().slice(0, 2000),
            timestamp: new Date().toISOString(),
            referenceId: `DRS-INQ-${Date.now().toString(36).toUpperCase()}`,
        };

        // In a production environment with DB/CRM/Resend configured, dispatch here:
        // await db.inquiries.create({ data: sanitizedData });
        // await resend.emails.send({ to: 'drsdeals.in@gmail.com', ... });
        console.log('[DRS Deals Contact Submission]', sanitizedData);

        return NextResponse.json(
            {
                success: true,
                message: 'Inquiry received successfully. Our concierge desk will contact you shortly.',
                referenceId: sanitizedData.referenceId,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error('[DRS Deals Contact Error]', err);
        return NextResponse.json(
            { success: false, error: 'Internal server error while processing your inquiry. Please try again or call our concierge desk.' },
            { status: 500 }
        );
    }
}
