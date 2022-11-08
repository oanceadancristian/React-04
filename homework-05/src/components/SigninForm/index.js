import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './SigninForm.css';

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
      <h1>Sign In</h1>
      <div className="account-creation">
        <div className="align-icon">
          <PersonIcon fontSize="large" />
          Sign into your account
        </div>
      </div>
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
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          color="social"
          variant="contained"
          sx={{ textTransform: 'capitalize', mt: 1 }}
        >
          Login
        </Button>
      </ThemeProvider>
      <p className="account-owner">
        Don't have an account?
        <Link
          component={RouteLink}
          to="/signup"
          color="#3c8cad"
          sx={{ textTransform: 'capitalize', textDecoration: 'none', ml: 1 }}
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
