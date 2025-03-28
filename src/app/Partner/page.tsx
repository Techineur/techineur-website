'use client'; // This is a client component 👈🏽

import React from 'react';
import About from 'views/About';
import Service from 'views/About';
import { Partners } from 'views/About/Components';

const AboutUs = (): JSX.Element => {
  return <Partners/>;
};

export default AboutUs;
