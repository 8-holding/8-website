import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';

// Body / UI typeface — neutral, highly legible.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

// Display serif — institutional, authoritative headlines.
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.8-holding.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Eight — Strategic Holding & Operating Company',
    template: '%s · Eight',
  },
  description:
    'Eight is a Miami-based holding company that acquires, builds, and operates exceptional businesses for the long term — disciplined capital, hands-on stewardship, durable value.',
  keywords: [
    'Eight',
    '8-holding',
    'holding company',
    'operating company',
    'strategic advisory',
    'private investment',
    'long-term capital',
    'Miami',
  ],
  authors: [{ name: 'Eight' }],
  creator: 'Eight',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Eight',
    title: 'Eight — Strategic Holding & Operating Company',
    description:
      'A Miami-based holding company that acquires, builds, and operates exceptional businesses for the long term.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eight — Strategic Holding & Operating Company',
    description:
      'A Miami-based holding company that acquires, builds, and operates exceptional businesses for the long term.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a1f3c',
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD structured data for richer search results.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Eight',
  url: siteUrl,
  email: 'info@8-holding.com',
  description:
    'Eight is a holding company that acquires, builds, and operates exceptional businesses for the long term.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
