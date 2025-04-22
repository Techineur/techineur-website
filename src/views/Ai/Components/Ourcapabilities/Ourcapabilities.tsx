import React, { JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Ourcapabilities = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const capabilities = [
    'We Craft Intelligent Interactions with Advanced NLP: Build chatbots, virtual assistants, and intelligent systems that have real conversations, understanding and responding to natural human language.',
    'We Unleash the Power of AI with Machine Learning Expertise: Leverage cutting-edge AI models to analyze your data, automate tasks, and make intelligent predictions that drive results.',
    'We Build Custom AI Solutions for You: Design and implement AI-powered solutions that are tailored to your specific business challenges and goals, ensuring a perfect fit.',
    'We Integrate Seamlessly with Your Systems: Effortlessly integrate our AI solutions with your existing infrastructure for a cohesive and efficient workflow.',
    'We Prioritize Data Security and Privacy: Maintain the highest standards of data security and privacy throughout the AI development and deployment process, giving you peace of mind.',
  ];

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
              Our Capabilities
            </Typography>
            <List dense={false}>
              {capabilities.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{ alignItems: 'flex-start', py: 1.5 }}
                >
                  <ListItemIcon sx={{ minWidth: 32, mt: '3px' }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <Typography
                    component={'p'}
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      fontSize: '1rem',
                    }}
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, md: 6 }}
          sx={{
            position: 'relative',
            minHeight: { xs: 300, md: 'auto' },
          }}
        >
          <Box
            component="img"
            src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/6793b19172e8fe2cef539a9d_ai_tools.webp"
            alt="AI Tools"
            sx={{
              width: '100%',
              maxWidth: 500,
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
              border: `1px solid ${theme.palette.divider}`,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: theme.palette.primary.light,
              opacity: 0.2,
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: theme.palette.secondary.light,
              opacity: 0.2,
              zIndex: -1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ourcapabilities;
