import React from 'react';
import Header from '../Header/';
import SignupForm from '../SignupForm/';
import Box from '@mui/system/Box';

const Signup = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Header />
      <SignupForm />
    </Box>
  );
};

export default Signup;
