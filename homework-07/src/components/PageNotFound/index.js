import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
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
          color: 'black',
          fontSize: '50px',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Page not found!
      </Typography>
    </Box>
  );
};

export default PageNotFound;
