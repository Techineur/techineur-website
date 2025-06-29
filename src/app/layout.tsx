'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Page from '../components/Page';
import Loading from 'views/Loading';
import ErrorBoundary from '../components/ErrorBoundary';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Set loading to false immediately - no artificial delay
    setLoading(false);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <title>Techineur - Transform Your Business with Cutting-Edge Technology</title>
        <meta name="description" content="Techineur delivers innovative technology solutions including cloud infrastructure, AI/ML integration, custom software development, and digital transformation services. Transform your business with our expert team." />
        <meta name="keywords" content="technology solutions, cloud infrastructure, AI ML, software development, digital transformation, Next.js, Python, Azure, TypeScript" />
        <meta name="author" content="Techineur" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techineur.com/" />
        <meta property="og:title" content="Techineur - Transform Your Business with Cutting-Edge Technology" />
        <meta property="og:description" content="Innovative technology solutions for digital transformation. Expert cloud infrastructure, AI/ML integration, and custom software development services." />
        <meta property="og:image" content="https://techineur.com/assets/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://techineur.com/" />
        <meta property="twitter:title" content="Techineur - Transform Your Business with Cutting-Edge Technology" />
        <meta property="twitter:description" content="Innovative technology solutions for digital transformation. Expert cloud infrastructure, AI/ML integration, and custom software development services." />
        <meta property="twitter:image" content="https://techineur.com/assets/og-image.jpg" />
        
        <link rel="canonical" href="https://techineur.com/" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ErrorBoundary>
          {loading ? <Loading /> : <Page>{children}</Page>}
        </ErrorBoundary>
      </body>
    </html>
  );
}
