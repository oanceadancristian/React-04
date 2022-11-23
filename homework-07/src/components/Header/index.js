import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Box from '@mui/system/Box';

const Header = () => {
  return (
    <Box
      sx={{
        height: '75px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Logo />
      <Nav />
    </Box>
  );
};

export default Header;
