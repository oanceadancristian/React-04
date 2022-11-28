import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import Stack from '@mui/system/Stack';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Buttons = () => {
  return (
    <Stack
      direction="row"
      sx={{
        m: 0,
        gap: 2,
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
          color: 'white',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '125px',
            padding: 2,
            borderRadius: 1,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: '#7300e6',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#8c1aff',
            },
          }}
        >
          Sign in
        </Button>
      </Link>
      <Link
        component={RouteLink}
        to="/signup"
        sx={{
          textDecoration: 'none',
          color: 'white',
          '&:hover': { textDecoration: 'none' },
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '125px',
            padding: 2,
            borderRadius: 1,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: '#7300e6',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#8c1aff',
            },
          }}
        >
          Sign Up
        </Button>
      </Link>
    </Stack>
  );
};

export default Buttons;
