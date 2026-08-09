import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
    title: 'DRS Deals | Premium Experiences & Discount Vouchers',
    description: 'Discover and book premium leisure, dining, and wellness experiences across India with exclusive discount vouchers.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
