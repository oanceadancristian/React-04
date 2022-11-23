import React from 'react';
import Header from '../Header/';
import SigninForm from '../SigninForm/';
import Box from '@mui/system/Box';

const Signin = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Header />
      <SigninForm />
    </Box>
  );
};

export default Signin;
