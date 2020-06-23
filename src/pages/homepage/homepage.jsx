import React from 'react';
import Directory from '../../components/directory/directory';
import './homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <Directory />
    </div>
  );
};

export default Homepage;
