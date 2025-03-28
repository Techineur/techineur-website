import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mock = [
  'https://www.chittorgarh.net/images/ipo/pennar_engineered_building_systems_logo.png',
  'https://techineur.com/assets/img/logo/bodhtree.png',
  'https://d2un9pqbzgw43g.cloudfront.net/main/unnamed-300x151.png',
  'https://samayaaworldspa.com/wp-content/uploads/2024/03/Samayaa-World-Spa.png',
  'https://www.medicardphils.com/wp-content/uploads/2023/03/MediCard-Logo-Coloredv2.png',
  'https://techineur.com/assets/img/logo/appsguru.png',
  'https://techineur.com/assets/img/logo/samspa.png',
  'https://www.vidyardi.com/assets/images/logo-light13.png',
  'https://techineur.com/assets/img/logo/5.png'
];

const Partners = (): JSX.Element => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), { 
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        overflow: 'hidden',
        py: 8,
        background: `linear-gradient(90deg, 
          ${theme.palette.background.paper} 0%, 
          ${theme.palette.primary.light} 50%, 
          ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at center, 
            ${theme.palette.primary.main}20 0%, 
            transparent 70%)`,
          zIndex: 0,
        }}
      />
      
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          color: theme.palette.getContrastText(theme.palette.primary.light),
          marginBottom: 4,
          textTransform: 'uppercase',
          letterSpacing: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        Our Trusted Partners
      </Typography>
      
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '100%',
          px: 2,
        }}
      >
        <Slider {...sliderOpts}>
          {mock.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex !important',
                justifyContent: 'center',
                alignItems: 'center',
                height: 120,
                padding: 2,
              }}
            >
              <Box
                component="img"
                src={item}
                alt={`partner-logo-${i}`}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '80%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: theme.palette.mode === 'dark' 
                    ? 'brightness(0) invert(0.9)' 
                    : 'none',
                  opacity: 0.9,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                    transform: 'scale(1.1)',
                    filter: 'none',
                  },
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Partners;