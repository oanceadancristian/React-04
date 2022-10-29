import React from 'react';
import './Homepage.css';
import HeaderHomepage from '../Header/HeaderHomepage';
import Buttons from '../Buttons/Buttons';

const Homepage = () => {
  return (
    <div className="homepage">
      <HeaderHomepage />
      <Buttons />
    </div>
  );
};

export default Homepage;
