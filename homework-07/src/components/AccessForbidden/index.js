import React from 'react';
import NavbarNoAccount from '../NavbarNoAccount';
import Typography from '@mui/material/Typography';
import Buttons from '../HomepageNoAccount/Buttons';

const AccessForbidden = () => {
  return (
    <>
      <NavbarNoAccount />
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          fontSize: '50px',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Access forbidden!
        <Buttons />
      </Typography>
    </>
  );
};

export default AccessForbidden;
