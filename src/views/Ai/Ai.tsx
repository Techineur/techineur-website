import React, { JSX } from 'react';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  //   Contact,
  //   Gallery,
  Hero,
  //   Partners,
  Ourcapabilities,
  Casestudy,
  //   WhoWeAre,
  //   Partners,
  //   Story,
  //   Team,
  //   WhoWeAre,
  //   Application,
} from './Components';

const About = (): JSX.Element => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Ourcapabilities />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Casestudy />
      </Container>
      {/* <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
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

export default About;
