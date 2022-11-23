import React from 'react';
import HeaderHomepage from '../Header/';
import Buttons from '../Buttons/';
import BackgroundImage from '../../../src/images/background.jpg';
import Box from '@mui/system/Box';

const Homepage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(' + BackgroundImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <HeaderHomepage />
      <Buttons />
    </Box>
  );
};

export default Homepage;
