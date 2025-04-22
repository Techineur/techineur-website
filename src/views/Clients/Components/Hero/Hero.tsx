import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';

const Hero = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      position={'relative'}
      sx={{
        backgroundImage:
          'url("https://www.shutterstock.com/image-photo/closeup-business-items-people-meeting-600nw-178403168.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: -13, // This aligns with the navbar like your Contact page
        paddingTop: 13, // Compensates for the negative margin
        '&:after': {
          position: 'absolute',
          content: '" "',
          width: '100%',
          height: '100%',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
          background: '#161c2d',
          opacity: 0.6,
        },
      }}
    >
      <Container
        zIndex={3}
        position={'relative'}
        minHeight={{ xs: 300, sm: 400, md: 600 }}
        maxHeight={600}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box width={1} textAlign={'center'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: theme.palette.common.white,
              }}
            >
              OUR CLIENTS
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: theme.palette.common.white,
                maxWidth: 800,
                margin: '0 auto',
                lineHeight: 1.6,
                fontSize: '1.2rem',
                fontStyle: 'italic',
              }}
            >
              Trusted partnerships that deliver exceptional results. Discover
              why leading businesses choose us to transform their vision into
              reality.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
