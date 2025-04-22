/* eslint-disable react/no-unescaped-entities */
import React, { JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Story = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ backgroundColor: theme.palette.background.paper, py: 8 }}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid container alignItems={'center'} size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography
              variant={'h4'}
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                mb: 4,
              }}
            >
              Our Story
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: '1.1rem',
                mb: 2,
              }}
            >
              At Techineur Solutions, we operate as a one-stop platform designed
              to meet and exceed all your digital needs under a single,
              comprehensive brand. We are deeply committed to not just
              fulfilling, but surpassing your specific requirements by closely
              collaborating with you to bring your unique vision to life.
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: '1.1rem',
                mb: 2,
              }}
            >
              With a focus on various domains of expertise, our wide-ranging
              services span from Web Development, Mobile Applications, and Web
              Services to Digital Marketing. In today's interconnected
              landscape, we understand the importance of seamless
              interconnectivity, and we are consistently adapting and improving
              to better serve this critical aspect of modern business.
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: '1.1rem',
              }}
            >
              Whatever your digital needs may be, our dedicated team pledges to
              work alongside you to accomplish your goals in a timely and
              effective manner. We firmly believe that delivering on our
              promises is not just a commitment but a testament to the values
              that drive our business forward every day.
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, md: 6 }}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
