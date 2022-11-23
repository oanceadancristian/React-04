import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import Box from '@mui/system/Box';
import Link from '@mui/material/Link';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const Nav = () => {
  return (
    <Box
      sx={{
        margin: '0px 50px',
        display: 'flex',
        gap: '25px',
        fontSize: '15px',
        fontWeight: 'bold',
      }}
    >
      <Box>
        <Link
          component={RouteLink}
          to="/signin"
          sx={{
            color: '#fff',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <LoginOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            Sign in
          </Box>
        </Link>
      </Box>
      <Box>
        <Link
          component={RouteLink}
          to="/signup"
          sx={{
            color: '#fff',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <AccountBoxOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            Sign up
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Nav;
