import React, { useState, useEffect, useRef } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ErrorIcon from '@mui/icons-material/Error';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const SigninForm = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/signin';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.data);
      if (checked) {
        secureLocalStorage.setItem('remember_me', checked);
        secureLocalStorage.setItem('email', data.email);
        secureLocalStorage.setItem('password', data.password);
      } else {
        secureLocalStorage.removeItem('remember_me');
        secureLocalStorage.removeItem('email');
        secureLocalStorage.removeItem('password');
      }
      window.location = '/homepage';
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else if (!error.response) {
        setError('Network error! Please try again later!');
      }
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    secureLocalStorage.removeItem('remember_me');
    secureLocalStorage.removeItem('email');
    secureLocalStorage.removeItem('password');
    setData({ ...data, [input.name]: input.value });
    setError('');

    if (input.name === 'email') {
      setEmailError(false);
    } else if (input.name === 'password') {
      setPasswordError(false);
    }
  };

  const handleEmailBlur = (e) => {
    if (!e.target.value) {
      setEmailError(true);
    } else {
      setEmailError(false);
      setEmailIconColor('gray');
    }
  };

  const handlePasswordBlur = (e) => {
    if (!e.target.value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setPasswordIconColor('gray');
    }
  };

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current?.focus();
  }, [emailRef]);

  const setEmailRef = (element) => {
    emailRef.current = element;
  };

  const [checked, setChecked] = useState(
    secureLocalStorage.getItem('remember_me') === null
      ? false
      : secureLocalStorage.getItem('remember_me')
  );

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (secureLocalStorage.getItem('remember_me')) {
      setData({
        email: secureLocalStorage.getItem('email', data.email),
        password: secureLocalStorage.getItem('password', data.password),
      });
      setChecked(checked);
    }
  }, [checked, data.email, data.password]);

  const [emailError, setEmailError] = useState(false);
  useEffect(() => {
    if (error.startsWith('"Email"') || error === 'Invalid Email or Password!') {
      setEmailError(true);
    }
  }, [error]);

  const [passwordError, setPasswordError] = useState(false);
  useEffect(() => {
    if (
      error.startsWith('"Password"') ||
      error === 'Invalid Email or Password!'
    ) {
      setPasswordError(true);
    }
  }, [error]);

  const [passwordIconColor, setPasswordIconColor] = useState('gray');
  const [emailIconColor, setEmailIconColor] = useState('gray');

  return (
    <form onSubmit={handleSubmit}>
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
          sx={{
            marginTop: '25px',
            color: '#7300e6',
            fontSize: '25px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Sign in to your account
        </Typography>
        <TextField
          required
          error={emailError}
          name="email"
          onChange={handleChange}
          onBlur={handleEmailBlur}
          onFocus={() => setEmailIconColor('#7300e6')}
          value={data.email}
          inputRef={setEmailRef}
          type="email"
          label="Email Address"
          variant="outlined"
          size="small"
          id="outlined-basic-email-address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon
                  sx={{ color: emailError ? '#c24839' : emailIconColor }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {emailError ? <ErrorIcon sx={{ color: '#c24839' }} /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            marginTop: '25px',
            width: '100%',
            '& label.Mui-focused': {
              color: emailError ? '#c24839' : '#7300e6',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: emailError ? '#c24839' : '#7300e6',
              },
            },
          }}
        />
        <TextField
          required
          error={passwordError}
          name="password"
          onChange={handleChange}
          onBlur={handlePasswordBlur}
          onFocus={() => setPasswordIconColor('#7300e6')}
          value={data.password}
          type="password"
          label="Password"
          variant="outlined"
          size="small"
          id="outlined-basic-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon
                  sx={{ color: passwordError ? '#c24839' : passwordIconColor }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {passwordError ? <ErrorIcon sx={{ color: '#c24839' }} /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            marginTop: '25px',
            width: '100%',
            '& label.Mui-focused': {
              color: passwordError ? '#c24839' : '#7300e6',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: passwordError ? '#c24839' : '#7300e6',
              },
            },
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                sx={{
                  '&.Mui-checked': {
                    color: '#7300e6',
                  },
                }}
              />
            }
            label="Remember me"
          />
        </FormGroup>
        {error && (
          <Box
            sx={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#c24839',
              color: 'white',
              textAlign: 'center',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            <ErrorIcon sx={{ color: 'white' }} />
            {error}
          </Box>
        )}
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
          Sign In
        </Button>
        <Typography
          sx={{
            marginTop: '25px',
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
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
                textDecoration: 'underline',
              },
            }}
          >
            Sign up
          </Link>
        </Typography>
      </FormControl>
    </form>
  );
};

export default SigninForm;
