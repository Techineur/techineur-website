import React, { JSX } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography component={'span'} variant="h3" sx={{ fontWeight: 700 }}>
          Transform your business with{' '}
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'primary'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            cutting-edge technology
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color={'text.secondary'}>
        We deliver innovative technology solutions that drive digital transformation, 
        streamline operations, and accelerate your business growth through expert 
        consulting, custom development, and strategic implementation.
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={'flex-start'}
        marginTop={4}
      >
        {[
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        ].map((item, i) => (
          <Box maxWidth={70} marginTop={2} marginRight={4} key={i}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="Technology partner logo"
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0.8)'
                    : 'none',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid container alignItems={'center'} size={{ xs: 12, md: 6 }}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <LeftSide />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
            perspective: 1500,
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
              transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
              maxWidth: '96%',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              >
                <LaptopSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'8.4%'}
                left={'12%'}
                width={'76%'}
                height={'83%'}
                border={`1px solid ${theme.palette.alternate.dark}`}
                zIndex={3}
              >
                <Box
                  component={'img'}
                  loading="lazy"
                  src="https://assets.maccarianagency.com/screenshots/tech-dashboard.png"
                  alt="Technology Dashboard Preview"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'cover',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
