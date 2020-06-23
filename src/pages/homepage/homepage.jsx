import React from 'react';
import Directory from '../../components/directory/directory';
import { HomepageContainer } from './homepage.styles';

const Homepage = () => {
  return (
    <HomepageContainer>
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
