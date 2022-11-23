import React from 'react';
import Header from '../Header';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';

const PageNotFound = () => {
  return (
    <Box>
      <Header />
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
    </Box>
  );
};

export default PageNotFound;
