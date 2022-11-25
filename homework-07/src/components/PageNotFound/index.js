import React from 'react';
import NavbarNoAccount from '../NavbarNoAccount';
import Navbar from '../Navbar';
import Typography from '@mui/material/Typography';

const PageNotFound = () => {
  return (
    <>
      <NavbarNoAccount />
      <Navbar />
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          fontSize: '50px',
        }}
      >
        Ooops... Page not found!
      </Typography>
    </>
  );
};

export default PageNotFound;
