'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const Loading = () => {
  const router = useRouter();
  const theme = useTheme();
  const [progress, setProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState('Initializing...');

  const loadingSteps = [
    'Initializing...',
    'Loading Components...',
    'Connecting Services...',
    'Almost Ready...'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 3000);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 60);

    // Loading steps
    const stepTimers = [
      setTimeout(() => setLoadingStep(loadingSteps[1]), 800),
      setTimeout(() => setLoadingStep(loadingSteps[2]), 1600),
      setTimeout(() => setLoadingStep(loadingSteps[3]), 2400),
    ];

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
      stepTimers.forEach(clearTimeout);
    };
  }, [router]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.background.paper} 50%, ${theme.palette.secondary.dark} 100%)`,
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, ${theme.palette.primary.main}20 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, ${theme.palette.secondary.main}20 0%, transparent 50%)`,
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.5 },
            '50%': { opacity: 0.8 },
          },
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        {/* Logo/Brand */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
        >
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: `0 0 30px ${theme.palette.primary.main}40`,
              }}
            >
              Techineur
            </Typography>
          </Box>
        </motion.div>

        {/* Animated Tech Circles */}
        <Box sx={{ position: 'relative', width: 120, height: 120, mx: 'auto', mb: 4 }}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                inset: i * 15,
                border: `2px solid ${theme.palette.primary.main}`,
                borderTop: `2px solid ${theme.palette.secondary.main}`,
                borderRadius: '50%',
                opacity: 0.7 - i * 0.2,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
          
          {/* Center Tech Icon */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill={theme.palette.primary.main}
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M12 7L7 9.5v5l5 2.5 5-2.5v-5L12 7z" fill={theme.palette.secondary.main}/>
              </svg>
            </motion.div>
          </Box>
        </Box>

        {/* Loading Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={loadingStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 500,
                mb: 2,
              }}
            >
              {loadingStep}
            </Typography>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <Box sx={{ width: 300, mb: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: theme.palette.grey[300],
              '& .MuiLinearProgress-bar': {
                borderRadius: 3,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              },
            }}
          />
        </Box>

        {/* Progress Percentage */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 500,
          }}
        >
          {Math.round(progress)}%
        </Typography>

        {/* Tech Keywords Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: 400,
            }}
          >
            {['Next.js', 'Python', 'Azure', 'TypeScript'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    px: 2,
                    py: 0.5,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.primary.main}30`,
                    borderRadius: 20,
                    color: theme.palette.text.secondary,
                    fontSize: '0.75rem',
                  }}
                >
                  {tech}
                </Typography>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            opacity: 0.6,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          initial={{
            left: `${Math.random() * 100}%`,
            top: '100%',
          }}
        />
      ))}
    </Box>
  );
};

export default Loading;