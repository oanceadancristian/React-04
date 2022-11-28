import React from 'react';
import Navbar from '../Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageNotFound = () => {
  return (
    <Box>
      <Navbar />
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '50px',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: 'black',
        }}
      >
        Page not found!
      </Typography>
    </Box>
  );
};

export default PageNotFound;
