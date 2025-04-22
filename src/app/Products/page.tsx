'use client'; // This is a client component 👈🏽

import React, { JSX } from 'react';
import Products from 'views/Products';

const product = (): JSX.Element => {
  return <Products />;
};

export default product;
