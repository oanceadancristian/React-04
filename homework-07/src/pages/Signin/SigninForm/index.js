import React, { useEffect, useRef, useState } from 'react';
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
import Stack from '@mui/system/Stack';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const SigninForm = () => {
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current?.focus();
  }, [emailRef]);

  const setEmailRef = (element) => {
    emailRef.current = element;
  };

  const [data, setData] = useState({ email: '', password: '' });

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost/api/signin';
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

  const [emailIconColor, setEmailIconColor] = useState('gray');

  const handleEmailFocus = () => {
    setEmailIconColor('#7eb431');
  };

  const [passwordIconColor, setPasswordIconColor] = useState('gray');

  const handlePasswordFocus = () => {
    setPasswordIconColor('#7eb431');
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

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: '125px', textAlign: 'center' }}
    >
      <FormControl>
        <Typography
          sx={{
            mt: 3,
            fontSize: '25px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#7eb431',
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
          onFocus={handleEmailFocus}
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
            width: '100%',
            mt: 3,
            '& label.Mui-focused': {
              color: emailError ? '#c24839' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: emailError ? '#c24839' : '#7eb431',
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
          onFocus={handlePasswordFocus}
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
            width: '100%',
            mt: 3,
            '& label.Mui-focused': {
              color: passwordError ? '#c24839' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: passwordError ? '#c24839' : '#7eb431',
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
                    color: '#7eb431',
                  },
                }}
              />
            }
            label="Remember me"
          />
        </FormGroup>
        {error && (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              gap: 0.5,
              mt: 2,
              p: 2,
              textAlign: 'center',
              borderRadius: 1,
              color: 'white',
              backgroundColor: '#c24839',
            }}
          >
            <ErrorIcon sx={{ color: 'white' }} />
            {error}
          </Stack>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            px: 3,
            py: 2,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: 1,
            backgroundColor: '#7eb431',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#97ce4c',
            },
          }}
        >
          Sign In
        </Button>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{
            flexWrap: 'wrap',
            mt: 3,
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Don't have an account?
          <Link
            component={RouteLink}
            to="/signup"
            sx={{
              ml: 2,
              textDecoration: 'none',
              textTransform: 'capitalize',
              color: '#7eb431',
              '&:hover': {
                textDecoration: 'underline',
                color: '#97ce4c',
              },
            }}
          >
            Sign up
          </Link>
        </Stack>
      </FormControl>
    </form>
  );
};

export default SigninForm;
