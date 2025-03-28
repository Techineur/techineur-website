// components/PageTransitionLoader.tsx
"use client";
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Loader = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(false); // Reset loading state on route change
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Using window events as fallback
    window.addEventListener('routeChangeStart', handleStart);
    window.addEventListener('routeChangeComplete', handleComplete);
    window.addEventListener('routeChangeError', handleComplete);

    return () => {
      window.removeEventListener('routeChangeStart', handleStart);
      window.removeEventListener('routeChangeComplete', handleComplete);
      window.removeEventListener('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.background.default,
            zIndex: theme.zIndex.modal + 1,
          }}
        >
          {/* Keep your existing animation content */}
          <Box textAlign="center">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                },
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <CircularProgress 
                size={80} 
                thickness={4}
                sx={{ 
                  color: theme.palette.primary.main,
                  mb: 2
                }} 
              />
            </motion.div>
            <Typography 
              variant="h6" 
              component="div"
              sx={{
                color: theme.palette.text.primary,
                mt: 2,
                fontWeight: 500
              }}
            >
              Loading...
            </Typography>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{
                height: 4,
                backgroundColor: theme.palette.primary.light,
                margin: '20px auto',
                borderRadius: 2
              }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;