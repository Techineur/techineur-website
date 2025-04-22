import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ backgroundColor: theme.palette.background.paper, py: 8 }}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        {/* Our Mission Section */}
        <Grid
          item
          container
          alignItems={'flex-start'} // Align items to the top
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={600} width={1}>
            <Typography
              variant={'h4'}
              gutterBottom
              sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 3 }}
            >
              Our Mission
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
              We aim to work with clients from all kinds of companies and
              through the gained experience, we look to continuously strive to
              improve the ways in which we solve the queries and challenges that
              our clients face.
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: '1.1rem',
              }}
            >
              Our mission is to create a long-term partnership with our
              customers. Transparency, robust project management, and seamless
              communication are the foundations of our services.
            </Typography>
          </Box>
        </Grid>

        {/* Our Vision Section */}
        <Grid
          item
          container
          alignItems={'flex-start'} // Align items to the top
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={600} width={1}>
            <Typography
              variant={'h4'}
              gutterBottom
              sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 3 }}
            >
              Our Vision
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
              At Techineur Solutions, we have a highly skilled and professional
              team of dedicated professionals to take care of your projects.
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: '1.1rem',
              }}
            >
              We strive to provide world-class services to our partners to
              ensure the continuity, growth, and profitability of our partners.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
