import React from 'react';
import Box from '@mui/material/Box';
import NavbarNoAccount from '../NavbarNoAccount';
import Typography from '@mui/material/Typography';
import Buttons from '../HomepageNoAccount/Buttons';

const AccessForbidden = () => {
  return (
    <Box>
      <NavbarNoAccount />
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '50px',
          color: 'black',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Access forbidden!
      </Typography>
      <Buttons />
    </Box>
  );
};

export default AccessForbidden;
