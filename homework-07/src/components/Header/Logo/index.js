import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import Box from '@mui/system/Box';
import Link from '@mui/material/Link';

const Logo = () => {
  return (
    <Box sx={{ margin: '0px 50px', fontSize: '25px', fontWeight: 'bold' }}>
      <Link
        component={RouteLink}
        to="/"
        sx={{
          color: '#fff',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
        }}
      >
        Rick And Morty API
      </Link>
    </Box>
  );
};

export default Logo;
