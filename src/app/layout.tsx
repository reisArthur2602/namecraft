import { Providers } from '@/providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Syne } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
});
const syne = Syne({
    variable: '--font-heading',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: 'Namecraft — Name Generator for SaaS, Stores & Startups',
        template: '%s · Namecraft',
    },
    description:
        'Generate unique, memorable names for your SaaS, store, or startup in seconds. Powered by AI.',
    keywords: [
        'name generator',
        'startup name',
        'saas name',
        'brand name',
        'business name generator',
        'namecraft',
    ],
    authors: [{ name: 'Namecraft' }],
    creator: 'Namecraft',
    metadataBase: new URL('https://namecraft.app'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://namecraft.app',
        siteName: 'Namecraft',
        title: 'Namecraft — Name Generator for SaaS, Stores & Startups',
        description:
            'Generate unique, memorable names for your SaaS, store, or startup in seconds.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Namecraft — Name Generator for SaaS, Stores & Startups',
        description:
            'Generate unique, memorable names for your SaaS, store, or startup in seconds.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Providers>
            <html
                lang="en"
                className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} dark`}
            >
                <body>{children}</body>
            </html>
        </Providers>
    );
};

export default RootLayout;
