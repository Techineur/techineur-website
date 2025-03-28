// pages/_app.tsx
"use client";
import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useRouter } from 'next/router';
import Loading from 'views/Loading';

// 1. Create Emotion cache inline
const clientSideEmotionCache = createCache({
  key: 'css',
  prepend: true,
});

// 2. Create theme configuration inline
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Default MUI blue
    },
    secondary: {
      main: '#9c27b0', // Default MUI purple
    },
    alternate: {
      main: '',
      dark: ''
    }
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLoading && <Loading/>}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;