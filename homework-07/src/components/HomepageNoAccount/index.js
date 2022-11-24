import React from 'react';
import NavbarNoAccount from '../NavbarNoAccount/';
import Buttons from './Buttons';
import HomepageNoAccountImage from '../../../src/images/homepage-no-account-icon.png';
import Box from '@mui/system/Box';
import './HomepageNoAccount.css';

const HomepageNoAccount = () => {
  return (
    <Box>
      <NavbarNoAccount />
      <img
        src={HomepageNoAccountImage}
        alt="Rick And Morty"
        className="homepage-no-account-image"
      />
      <Buttons />
    </Box>
  );
};

export default HomepageNoAccount;
