import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { businessName, email, phone, category } = body;

        if (!businessName || typeof businessName !== 'string' || businessName.trim().length < 2) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid property or business name.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid official business email.' },
                { status: 400 }
            );
        }

        if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid direct contact phone number.' },
                { status: 400 }
            );
        }

        const validCategories = ['resort', 'dining', 'park', 'spa', 'other'];
        const sanitizedCategory = validCategories.includes(category) ? category : 'resort';

        const sanitizedData = {
            businessName: businessName.trim().slice(0, 150),
            email: email.trim().toLowerCase().slice(0, 160),
            phone: phone.trim().slice(0, 25),
            category: sanitizedCategory,
            timestamp: new Date().toISOString(),
            applicationId: `DRS-PTR-${Date.now().toString(36).toUpperCase()}`,
        };

        console.log('[DRS Deals Partner Application]', sanitizedData);

        return NextResponse.json(
            {
                success: true,
                message: 'Partner onboarding application received. Our venue acquisition director will review your venue details within 24 hours.',
                applicationId: sanitizedData.applicationId,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error('[DRS Deals Partner Error]', err);
        return NextResponse.json(
            { success: false, error: 'Internal server error while processing your application. Please try again or contact partnerships@drsdeals.in directly.' },
            { status: 500 }
        );
    }
}
