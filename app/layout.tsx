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
    default: 'Eight — Sales Services for Companies',
    template: '%s · Eight',
  },
  description:
    'Eight provides sales services for companies — building, scaling, and strengthening sales so businesses can grow revenue, win customers, and reach new markets.',
  keywords: [
    'Eight',
    '8-holding',
    'sales services',
    'sales strategy',
    'revenue growth',
    'business development',
    'sales outsourcing',
    'go-to-market',
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
    title: 'Eight — Sales Services for Companies',
    description:
      'Sales services for companies — building, scaling, and strengthening sales so businesses can grow revenue and reach new markets.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eight — Sales Services for Companies',
    description:
      'Sales services for companies — building, scaling, and strengthening sales so businesses can grow revenue and reach new markets.',
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
    'Eight provides sales services for companies — building, scaling, and strengthening sales so businesses can grow revenue and reach new markets.',
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
