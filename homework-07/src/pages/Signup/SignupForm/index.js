import React, { useEffect, useRef, useState } from 'react';
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
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const SignupForm = () => {
  const firstNameRef = useRef();

  useEffect(() => {
    firstNameRef.current?.focus();
  }, [firstNameRef]);

  const setFirstNameRef = (element) => {
    firstNameRef.current = element;
  };

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
        const url = 'http://192.168.0.164:8080/api/signup';
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
        } else if (!error.response) {
          setError('Network error! Please try again later!');
        }
      }
    } else {
      setError('Passwords do not match!');
    }
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

  const [firstNameIconColor, setFirstNameIconColor] = useState('gray');

  const handleFirstNameFocus = () => {
    setFirstNameIconColor('#7eb431');
  };

  const [lastNameIconColor, setLastNameIconColor] = useState('gray');

  const handleLastNameFocus = () => {
    setLastNameIconColor('#7eb431');
  };

  const [emailIconColor, setEmailIconColor] = useState('gray');

  const handleEmailFocus = () => {
    setEmailIconColor('#7eb431');
  };

  const [passwordIconColor, setPasswordIconColor] = useState('gray');

  const handlePasswordFocus = () => {
    setPasswordIconColor('#7eb431');
  };

  const [confirmPasswordIconColor, setConfirmPasswordIconColor] =
    useState('gray');

  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordIconColor('#7eb431');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: '60px', textAlign: 'center' }}
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
          Create your account
        </Typography>
        <TextField
          required
          error={firstNameError}
          name="firstName"
          onChange={handleChange}
          onBlur={handleFirstNameBlur}
          onFocus={handleFirstNameFocus}
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
            width: '100%',
            mt: 3,
            '& label.Mui-focused': {
              color: firstNameError ? '#c24839' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: firstNameError ? '#c24839' : '#7eb431',
              },
            },
          }}
        />
        <TextField
          required
          error={lastNameError}
          name="lastName"
          onChange={handleChange}
          onBlur={handleLastNameBlur}
          onFocus={handleLastNameFocus}
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
            width: '100%',
            mt: 3,
            '& label.Mui-focused': {
              color: lastNameError ? '#c24839' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: lastNameError ? '#c24839' : '#7eb431',
              },
            },
          }}
        />
        <TextField
          required
          error={emailError}
          name="email"
          onChange={handleChange}
          onBlur={handleEmailBlur}
          onFocus={handleEmailFocus}
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
        <TextField
          required
          error={confirmPasswordError}
          name="confirmPassword"
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
          onFocus={handleConfirmPasswordFocus}
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
            width: '100%',
            mt: 3,
            '& label.Mui-focused': {
              color: confirmPasswordError ? '#c24839' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: confirmPasswordError ? '#c24839' : '#7eb431',
              },
            },
          }}
        />
        {error && (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              gap: '3px',
              mt: 2,
              p: 2,
              textAlign: 'center',
              borderRadius: '5px',
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
          Sign up
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
          Already have an account?
          <Link
            component={RouteLink}
            to="/signin"
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
            Sign in
          </Link>
        </Stack>
      </FormControl>
    </form>
  );
};

export default SignupForm;
