import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const SignupForm = () => {
  return (
    <FormControl
      sx={{
        width: '33%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginTop: '25px',
          color: '#7300e6',
          fontWeight: 'bold',
          fontSize: '40px',
          textAlign: 'center',
        }}
      >
        Sign in
      </Typography>
      <Typography
        sx={{
          marginTop: '25px',
          fontSize: '20px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <PersonIcon fontSize="large" />
        Sign into your account
      </Typography>
      <TextField
        type="email"
        label="Email Address"
        variant="outlined"
        size="small"
        id="outlined-basic-email-address"
        required
        sx={{
          marginTop: '15px',
          width: '100%',
          '& label.Mui-focused': {
            color: '#7300e6',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#7300e6',
            },
          },
        }}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        size="small"
        id="outlined-basic-password"
        required
        sx={{
          marginTop: '15px',
          width: '100%',
          '& label.Mui-focused': {
            color: '#7300e6',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#7300e6',
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          marginTop: '15px',
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
      <Typography
        sx={{ marginTop: '25px', fontSize: '20px', fontWeight: 'bold' }}
      >
        Don't have an account?
        <Link
          component={RouteLink}
          to="/signup"
          sx={{
            textTransform: 'capitalize',
            textDecoration: 'none',
            marginLeft: '10px',
            color: '#7300e6',
            '&:hover': {
              color: '#8c1aff',
            },
          }}
        >
          Sign up
        </Link>
      </Typography>
    </FormControl>
  );
};

export default SignupForm;
