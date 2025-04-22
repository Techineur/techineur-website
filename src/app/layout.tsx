'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Page from '../components/Page';
import Loading from 'views/Loading'; // Import Loading correctly

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
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulate loading delay
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{loading ? <Loading /> : <Page>{children}</Page>}</body>
    </html>
  );
}
