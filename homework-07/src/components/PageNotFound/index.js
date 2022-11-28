import React from 'react';
import NavbarNoAccount from '../NavbarNoAccount';
import Navbar from '../Navbar';
import Buttons from '../HomepageNoAccount/Buttons';
import Typography from '@mui/material/Typography';

const PageNotFound = () => {
  const user = localStorage.getItem('token');

  return (
    <>
      {user && <Navbar />}
      {user && (
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
          }}
        >
          Page not found!
        </Typography>
      )}
      {!user && <NavbarNoAccount />}
      {!user && (
        <>
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
            }}
          >
            Access denied!
            <Buttons />
          </Typography>
        </>
      )}
    </>
  );
};

export default PageNotFound;
