import React, { useState, useEffect, useRef } from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
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

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setError('');
  };

  const handleFirstNameBlur = (e) => {
    if (!e.target.value) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const handleLastNameBlur = (e) => {
    if (!e.target.value) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };

  const handleEmailBlur = (e) => {
    if (!e.target.value) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordBlur = (e) => {
    if (!e.target.value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const firstNameRef = useRef();

  useEffect(() => {
    firstNameRef.current?.focus();
  }, [firstNameRef]);

  const setFirstNameRef = (element) => {
    firstNameRef.current = element;
  };

  const [firtNameError, setFirstNameError] = useState(false);
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
    if (error.startsWith('"Password"')) {
      setPasswordError(true);
    }
  }, [error]);

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
          error={firtNameError}
          name="firstName"
          onChange={handleChange}
          onBlur={handleFirstNameBlur}
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
          error={lastNameError}
          name="lastName"
          onChange={handleChange}
          onBlur={handleLastNameBlur}
          value={data.lastName}
          type="text"
          label="Last Name"
          variant="outlined"
          size="small"
          id="outlined-basic-last-name"
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
          error={emailError}
          name="email"
          onChange={handleChange}
          onBlur={handleEmailBlur}
          value={data.email}
          type="email"
          label="Email Address"
          variant="outlined"
          size="small"
          id="outlined-basic-email-address"
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
          error={passwordError}
          name="password"
          onChange={handleChange}
          onBlur={handlePasswordBlur}
          value={data.password}
          type="password"
          label="Password"
          variant="outlined"
          size="small"
          id="outlined-basic-password"
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
        {/* <TextField
          type="password"
          label="Confirm Password"
          variant="outlined"
          size="small"
          id="outlined-basic-confirm-password"
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
        /> */}
        {error && (
          <Box
            sx={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#c24839',
              color: 'white',
              textAlign: 'center',
              borderRadius: '5px',
            }}
          >
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
