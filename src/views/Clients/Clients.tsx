import React, { JSX } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, Partners } from './Components';

const Clients = (): JSX.Element => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Partners />
        </Container>
      </Box>
      {/* <Container>
        <Features />
      </Container>  */}
      {/* <Container>
        <Process />
      </Container>
      <Container>
        <Work />
      </Container>
      <Divider />
      <Container>
        <Reviews />
      </Container>
      <Divider />
      <Container>
        <Team />
      </Container> */}
    </Main>
  );
};

export default Clients;
