import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
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
          textTransform: 'uppercase',
        }}
      >
        Sign up
      </Typography>
      <Typography
        sx={{
          marginTop: '25px',
          fontSize: '20px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        Create your account
      </Typography>
      <TextField
        type="text"
        label="Name"
        variant="outlined"
        size="small"
        id="outlined-basic-name"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          marginTop: '25px',
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
        type="email"
        label="Email Address"
        variant="outlined"
        size="small"
        id="outlined-basic-email-address"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          marginTop: '25px',
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VpnKeyIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          marginTop: '25px',
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
        label="Confirm Password"
        variant="outlined"
        size="small"
        id="outlined-basic-confirm-password"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VpnKeyIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          marginTop: '25px',
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
          marginTop: '25px',
          textTransform: 'uppercase',
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
        Register
      </Button>
      <Typography
        sx={{
          marginTop: '25px',
          fontSize: '20px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Already have an account?
        <Link
          component={RouteLink}
          to="/signin"
          sx={{
            textTransform: 'capitalize',
            textDecoration: 'none',
            marginLeft: '10px',
            color: '#7300e6',
            '&:hover': {
              color: '#8c1aff',
              textDecoration: 'underline',
            },
          }}
        >
          Sign in
        </Link>
      </Typography>
    </FormControl>
  );
};

export default SignupForm;
