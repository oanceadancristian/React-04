import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SignupForm.css';

const SignupForm = () => {
  const theme = createTheme({
    palette: {
      social: {
        main: '#3c8cad',
        contrastText: '#fff',
      },
    },
  });

  return (
    <form>
      <h1>Sign Up</h1>
      <div className="account-creation">
        <div className="align-icon">
          <PersonIcon fontSize="large" />
          Create your account
        </div>
      </div>
      <TextField
        id="outlined-basic name"
        label="Name"
        variant="outlined"
        type="text"
        size="small"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="outlined-basic email-address"
        label="Email Address"
        variant="outlined"
        type="email"
        size="small"
        fullWidth
        margin="normal"
        required
      />
      <p className="help-text">
        This site uses Gravatar so if you want a profile image, use a Gravatar
        email
      </p>
      <TextField
        id="outlined-basic password"
        label="Password"
        variant="outlined"
        type="password"
        size="small"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="outlined-basic confirm-password"
        label="Confirm Password"
        variant="outlined"
        type="password"
        size="small"
        fullWidth
        margin="normal"
        required
      />
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          color="social"
          variant="contained"
          sx={{ textTransform: 'capitalize', mt: 1 }}
        >
          Register
        </Button>
      </ThemeProvider>
      <p className="account-owner">
        Already have an account?
        <Link
          component={RouteLink}
          to="/signin"
          color="#3c8cad"
          sx={{ textTransform: 'capitalize', textDecoration: 'none', ml: 1 }}
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
