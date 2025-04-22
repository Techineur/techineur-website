import React from 'react';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, Features } from './Components';

const Services = (): JSX.Element => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Features />
      </Container>
      {/* <Container paddingTop={'0 !important'}>
        <AiSalesforce />
      </Container>
       <Container maxWidth={800} paddingY={'0 !important'}>
        <SalesStaffing />
      </Container> */}
      {/* <Container>
        <Team />
      </Container>
       <Box bgcolor={'alternate.main'}>
        <Container>
          <Partners />
        </Container>
      </Box> */}
      {/* <Contact />
      <Container>
        <Gallery />
      </Container>
      <Container maxWidth={800} paddingTop={'0 !important'}>
        <Application />
      </Container>   */}
    </Main>
  );
};

export default Services;
