import React, { useState, useEffect, useRef } from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ErrorIcon from '@mui/icons-material/Error';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const SignupForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmPassword === data.password) {
      try {
        const url = 'http://localhost:8080/api/signup';
        const { data: res } = await axios.post(url, data);
        navigate('/signin');
        console.log(res.message);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    } else {
      setError('Passwords do not match!');
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setError('');

    if (input.name === 'firstName') {
      setFirstNameError(false);
    } else if (input.name === 'lastName') {
      setLastNameError(false);
    } else if (input.name === 'email') {
      setEmailError(false);
    } else if (input.name === 'password') {
      setPasswordError(false);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.name === 'confirmPassword') {
      setConfirmPasswordError(false);
    }
  };

  const handleFirstNameBlur = (e) => {
    if (!e.target.value.trim()) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
      setFirstNameIconColor('gray');
    }
  };

  const handleLastNameBlur = (e) => {
    if (!e.target.value.trim()) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
      setLastNameIconColor('gray');
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

  const handleConfirmPasswordBlur = (e) => {
    if (!e.target.value) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordIconColor('gray');
    }
  };

  const firstNameRef = useRef();

  useEffect(() => {
    firstNameRef.current?.focus();
  }, [firstNameRef]);

  const setFirstNameRef = (element) => {
    firstNameRef.current = element;
  };

  const [firstNameError, setFirstNameError] = useState(false);
  useEffect(() => {
    if (error.startsWith('"First Name"')) {
      setFirstNameError(true);
    }
  }, [error]);

  const [lastNameError, setLastNameError] = useState(false);
  useEffect(() => {
    if (error.startsWith('"Last Name"')) {
      setLastNameError(true);
    }
  }, [error]);

  const [emailError, setEmailError] = useState(false);
  useEffect(() => {
    if (
      error.startsWith('"Email"') ||
      error === 'An account with this email already exists!'
    ) {
      setEmailError(true);
    }
  }, [error]);

  const [passwordError, setPasswordError] = useState(false);
  useEffect(() => {
    if (error.startsWith('"Password"') || error === 'Passwords do not match!') {
      setPasswordError(true);
    }
  }, [error]);

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  useEffect(() => {
    if (error === 'Passwords do not match!') {
      setConfirmPasswordError(true);
    }
  }, [error]);

  const [firstNameIconColor, setFirstNameIconColor] = useState('gray');
  const [lastNameIconColor, setLastNameIconColor] = useState('gray');
  const [emailIconColor, setEmailIconColor] = useState('gray');
  const [passwordIconColor, setPasswordIconColor] = useState('gray');
  const [confirmPasswordIconColor, setConfirmPasswordIconColor] =
    useState('gray');

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
          Create your account
        </Typography>
        <TextField
          error={firstNameError}
          name="firstName"
          onChange={handleChange}
          onBlur={handleFirstNameBlur}
          onFocus={() => setFirstNameIconColor('#7300e6')}
          value={data.firstName}
          inputRef={setFirstNameRef}
          type="text"
          label="First Name"
          variant="outlined"
          size="small"
          id="outlined-basic-first-name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon
                  sx={{
                    color: firstNameError ? '#c24839' : firstNameIconColor,
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {firstNameError ? <ErrorIcon sx={{ color: '#c24839' }} /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            marginTop: '25px',
            width: '100%',
            '& label.Mui-focused': {
              color: firstNameError ? '#c24839' : '#7300e6',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: firstNameError ? '#c24839' : '#7300e6',
              },
            },
          }}
        />
        <TextField
          error={lastNameError}
          name="lastName"
          onChange={handleChange}
          onBlur={handleLastNameBlur}
          onFocus={() => setLastNameIconColor('#7300e6')}
          value={data.lastName}
          type="text"
          label="Last Name"
          variant="outlined"
          size="small"
          id="outlined-basic-last-name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon
                  sx={{ color: lastNameError ? '#c24839' : lastNameIconColor }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {lastNameError ? <ErrorIcon sx={{ color: '#c24839' }} /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            marginTop: '25px',
            width: '100%',
            '& label.Mui-focused': {
              color: lastNameError ? '#c24839' : '#7300e6',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: lastNameError ? '#c24839' : '#7300e6',
              },
            },
          }}
        />
        <TextField
          error={emailError}
          name="email"
          onChange={handleChange}
          onBlur={handleEmailBlur}
          onFocus={() => setEmailIconColor('#7300e6')}
          value={data.email}
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
        <TextField
          error={confirmPasswordError}
          name="confirmPassword"
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
          onFocus={() => setConfirmPasswordIconColor('#7300e6')}
          value={confirmPassword}
          type="password"
          label="Confirm Password"
          variant="outlined"
          size="small"
          id="outlined-basic-confirm-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon
                  sx={{
                    color: confirmPasswordError
                      ? '#c24839'
                      : confirmPasswordIconColor,
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {confirmPasswordError ? (
                  <ErrorIcon sx={{ color: '#c24839' }} />
                ) : (
                  ''
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            marginTop: '25px',
            width: '100%',
            '& label.Mui-focused': {
              color: confirmPasswordError ? '#c24839' : '#7300e6',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: confirmPasswordError ? '#c24839' : '#7300e6',
              },
            },
          }}
        />
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
          Sign up
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
    </form>
  );
};

export default SignupForm;
