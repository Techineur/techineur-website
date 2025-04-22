import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  //   FeaturedArticles,
  //   FooterNewsletter,
  Hero,
  Contact,
  Form,

  //   LatestStories,
  //   MostViewedArticles,
  //   PopularNews,
  //   SidebarArticles,
  //   SidebarNewsletter,
  //   Tags,
} from './Components';

const ContactUs = (): JSX.Element => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Form />
        </Container>
      </Box>
      <Container>
        <Contact />
      </Container>

      {/* <Container>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <LatestStories />
          </Grid>
          {isMd ? (
            <Grid item xs={12} md={4}>
              <SidebarArticles />
            </Grid>
          ) : null}
        </Grid> */}
      {/* </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Grid container spacing={isMd ? 4 : 0}>
            <Grid item xs={12} md={8}>
              <MostViewedArticles />
            </Grid>
            <Grid item xs={12} md={4}>
              <SidebarNewsletter />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth={800}>
        <Tags />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <FooterNewsletter />
      </Container> */}
    </Main>
  );
};

export default ContactUs;
