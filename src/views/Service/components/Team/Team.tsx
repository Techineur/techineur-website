import React, { JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    name: 'Alex Chen',
    title: 'Chief Technology Officer',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
  },
  {
    name: 'Sarah Johnson',
    title: 'Lead Cloud Architect',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  },
  {
    name: 'Michael Rodriguez',
    title: 'AI/ML Engineering Director',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
  },
  {
    name: 'Emily Watson',
    title: 'Senior Full-Stack Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
  },
  {
    name: 'David Kumar',
    title: 'DevOps & Security Lead',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
  },
  {
    name: 'Lisa Thompson',
    title: 'Mobile Development Expert',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
  },
];

const Reviews = (): JSX.Element => {
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
          color={'secondary'}
          align={'center'}
        >
          Team
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Meet Our Expert Team
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Our certified technology professionals bring years of expertise in cutting-edge solutions and digital transformation.
        </Typography>
        <Box marginTop={2} display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={20}
                height={20}
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          >
            Contact us
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid size={{ xs: 12,  sm:6, md:4 }} key={i}>
            <Box sx={{ paddingBottom: 2 }}>
              <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                <ListItemAvatar sx={{ marginRight: 3 }}>
                  <Avatar
                    src={item.avatar}
                    variant={'rounded'}
                    sx={{ width: 100, height: 100, borderRadius: 2 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  sx={{ margin: 0 }}
                  primary={item.name}
                  secondary={item.title}
                />
              </ListItem>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
