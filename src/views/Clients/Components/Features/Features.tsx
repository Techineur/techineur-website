/** eslint-disable quotes */
import React, { JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Pebs Pennar',
    subtitle:
      'PEBS Pennar (Pre-Engineered Building Systems) is a subsidiary of Pennar Industries Limited, a leading engineering company in India. With decades of industry experience, PEBS Pennar specializes in the design, manufacture, supply, and installation of pre-engineered steel buildings and structural steel solutions',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'Bombay Dyeing',
    subtitle:
      // eslint-disable-next-line quotes
      "Bombay Dyeing & Manufacturing Co. Ltd., established in 1879, is one of India's most renowned and trusted textile companies with a legacy spanning over 140 years. As a flagship company of the Wadia Group, Bombay Dyeing has evolved from its origins in textile manufacturing to become a diversified conglomerate with interests in textiles, retail, real estate, and polyester.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    title: 'AppsGuru',
    subtitle:
      'AppsGuru is a leading technology solutions provider specializing in innovative software development, mobile applications, and digital transformation services. With a focus on cutting-edge technology and user-centric design, AppsGuru helps businesses across various industries leverage digital solutions to streamline operations, enhance customer experiences, and drive growth.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: 'BodhTree',
    subtitle:
      'BodhTree is an innovative technology solutions provider specializing in enterprise software, cloud solutions, and digital transformation services. With a strong focus on delivering business value through cutting-edge technology implementation, BodhTree helps organizations across various sectors modernize their IT infrastructure, optimize operations, and accelerate growth in the digital landscape.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Samaya Spa',
    subtitle:
      // eslint-disable-next-line quotes
      "Samaya World SPA is an innovative technology solutions provider specializing in Single Page Applications (SPA) and modern web development. With expertise in creating responsive, dynamic, and high-performance web applications, Samaya World SPA helps organizations deliver exceptional digital experiences that engage users and drive business growth in today's fast-paced digital environment.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: 'NTPC',
    subtitle:
      // eslint-disable-next-line quotes
      "NTPC Limited (formerly National Thermal Power Corporation) is India's largest power generation company and a central Public Sector Undertaking (PSU) under the Ministry of Power, Government of India. Established in 1975, NTPC has evolved from a thermal power generation company to an integrated power company with a diversified portfolio spanning thermal, hydro, nuclear, and renewable energy sources. With its commitment to providing reliable and affordable electricity, NTPC plays a crucial role in India's economic growth and development.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const Features = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary.main'}
          align={'center'}
        >
          WHAT WE DO?
        </Typography>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Trusted by Industry Leaders
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Building lasting partnerships with organizations that shape the future
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Box
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'flex-start'}
                >
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
