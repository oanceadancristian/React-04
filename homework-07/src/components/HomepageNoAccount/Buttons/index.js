import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import Box from '@mui/system/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Buttons = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        margin: '0px',
        position: 'absolute',
        top: '75%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
      }}
    >
      <Link
        component={RouteLink}
        to="/signin"
        sx={{
          color: '#fff',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '125px',
            textTransform: 'capitalize',
            backgroundColor: '#7300e6',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#8c1aff',
            },
          }}
        >
          Sign In
        </Button>
      </Link>
      <Link
        component={RouteLink}
        to="/signup"
        sx={{
          color: '#fff',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '125px',
            textTransform: 'capitalize',
            backgroundColor: '#7300e6',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#8c1aff',
            },
          }}
        >
          Sign Up
        </Button>
      </Link>
    </Box>
  );
};

export default Buttons;
