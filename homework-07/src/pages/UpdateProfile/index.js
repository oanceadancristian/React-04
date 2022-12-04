import React from 'react';
import Navbar from '../../components/Navbar';
import UpdateProfileForm from '../UpdateProfile/UpdateProfileForm';
import Box from '@mui/system/Box';

const UpdateProfile = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Navbar />
      <UpdateProfileForm />
    </Box>
  );
};

export default UpdateProfile;
