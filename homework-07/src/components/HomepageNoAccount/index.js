import React from 'react';
import NavbarNoAccount from '../NavbarNoAccount/';
import Buttons from './Buttons';
import HomepageImage from '../../../src/images/homepage.png';
import Box from '@mui/system/Box';
import './HomepageNoAccount.css';

const HomepageNoAccount = () => {
  return (
    <Box>
      <NavbarNoAccount />
      <img src={HomepageImage} alt="Rick And Morty" />
      <Buttons />
    </Box>
  );
};

export default HomepageNoAccount;
