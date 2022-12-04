import React, { useEffect, useRef, useState } from 'react';
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

const EditProfileForm = () => {
  const firstNameRef = useRef();

  useEffect(() => {
    firstNameRef.current?.focus();
  }, [firstNameRef]);

  const setFirstNameRef = (element) => {
    firstNameRef.current = element;
  };

  const [data, setData] = useState({
    firstName: localStorage.getItem('userFirstName'),
    lastName: localStorage.getItem('userLastName'),
    email: localStorage.getItem('userEmail'),
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const [updateMessage, setUpdateMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (confirmPassword === data.password) {
      try {
        const url = 'http://localhost:8080/api/edit_profile';
        const { data: res } = await axios.patch(url, data);
        localStorage.setItem('userFirstName', res.userFirstName);
        localStorage.setItem('userLastName', res.userLastName);
        localStorage.setItem('userEmail', res.userEmail);

        setData({ ...data, password: '' });
        setConfirmPassword('');

        setUpdateMessage(res.message);
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

  const handleDelete = async () => {
    try {
      const url = 'http://localhost:8080/api/delete_profile';
      const { data: res } = await axios.delete(url, { data });
      localStorage.removeItem('userToken');
      localStorage.removeItem('userFirstName');
      localStorage.removeItem('userLastName');
      localStorage.removeItem('userEmail');
      window.location = '/signup';
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
      onSubmit={handleUpdate}
      style={{ marginTop: '75px', textAlign: 'center' }}
    >
      <FormControl>
        <Typography
          sx={{
            mt: 2.5,
            fontSize: {
              xs: '17px',
              sm: '17px',
              md: '20px',
              lg: '23px',
              xl: '23px',
            },
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#7eb431',
          }}
        >
          Edit your profile
        </Typography>
        <Typography sx={{ mt: 1, fontWeight: 'bold', color: '#7eb431' }}>
          {updateMessage}
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
                    color: firstNameError ? '#d32f2f' : firstNameIconColor,
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {firstNameError ? <ErrorIcon sx={{ color: '#d32f2f' }} /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            mt: 2.5,
            '& label.Mui-focused': {
              color: firstNameError ? '#d32f2f' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: firstNameError ? '#d32f2f' : '#7eb431',
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
                  sx={{ color: lastNameError ? '#d32f2f' : lastNameIconColor }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {lastNameError ? <ErrorIcon sx={{ color: '#d32f2f' }} /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            mt: 2.5,
            '& label.Mui-focused': {
              color: lastNameError ? '#d32f2f' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: lastNameError ? '#d32f2f' : '#7eb431',
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
                  sx={{ color: emailError ? '#d32f2f' : emailIconColor }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {emailError ? <ErrorIcon sx={{ color: '#d32f2f' }} /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            mt: 2.5,
            '& label.Mui-focused': {
              color: emailError ? '#d32f2f' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: emailError ? '#d32f2f' : '#7eb431',
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
                  sx={{ color: passwordError ? '#d32f2f' : passwordIconColor }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {passwordError ? <ErrorIcon sx={{ color: '#d32f2f' }} /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            mt: 2.5,
            '& label.Mui-focused': {
              color: passwordError ? '#d32f2f' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: passwordError ? '#d32f2f' : '#7eb431',
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
                      ? '#d32f2f'
                      : confirmPasswordIconColor,
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {confirmPasswordError ? (
                  <ErrorIcon sx={{ color: '#d32f2f' }} />
                ) : (
                  ''
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            mt: 2.5,
            '& label.Mui-focused': {
              color: confirmPasswordError ? '#d32f2f' : '#7eb431',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: confirmPasswordError ? '#d32f2f' : '#7eb431',
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
              gap: 0.5,
              mt: 1.5,
              p: 1.5,
              textAlign: 'center',
              borderRadius: '5px',
              color: 'white',
              backgroundColor: '#d32f2f',
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
            mt: 1.5,
            px: 3,
            py: 1.5,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: 1,
            backgroundColor: '#1976d2',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#0059B2',
            },
          }}
        >
          Update profile
        </Button>
        <Button
          onClick={handleDelete}
          variant="contained"
          sx={{
            mt: 1.5,
            px: 3,
            py: 1.5,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: 1,
            backgroundColor: '#d32f2f',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#c62828',
            },
          }}
        >
          Delete profile
        </Button>
      </FormControl>
    </form>
  );
};

export default EditProfileForm;
