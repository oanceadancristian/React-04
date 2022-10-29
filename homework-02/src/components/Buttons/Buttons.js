import React from 'react';
import './Buttons.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
          <Button
            className="sign-up-btn"
            color="social"
            variant="contained"
            sx={{ textTransform: 'capitalize', mt: 1 }}
          >
            Sign Up
          </Button>
          <Button
            className="log-in-btn"
            color="social"
            variant="contained"
            sx={{ textTransform: 'capitalize', mt: 1 }}
          >
            Login
          </Button>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Buttons;
