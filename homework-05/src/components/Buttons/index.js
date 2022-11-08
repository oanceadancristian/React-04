import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Buttons.css';

const Buttons = () => {
  const theme = createTheme({
    palette: {
      social: {
        main: '#3c8cad',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>
      <div className="buttons">
        <ThemeProvider theme={theme}>
          <RouteLink to="/signup">
            <Button
              className="sign-up-btn"
              color="social"
              variant="contained"
              sx={{ textTransform: 'capitalize', mt: 1 }}
            >
              Sign Up
            </Button>
          </RouteLink>
          <RouteLink to="/signin">
            <Button
              className="log-in-btn"
              color="social"
              variant="contained"
              sx={{ textTransform: 'capitalize', mt: 1 }}
            >
              Login
            </Button>
          </RouteLink>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Buttons;
