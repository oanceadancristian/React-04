import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './NavbarNoAccount.css';

const NavbarNoAccount = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#202329',
          }}
        >
          <Box sx={{ ml: 6 }}>
            <Typography variant="h6" component="div">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active-no-account' : 'inactive-no-account'
                }
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={3}
                  sx={{
                    textTransform: 'uppercase',
                  }}
                >
                  <CameraRollIcon fontSize="medium" sx={{ mr: 0.5 }} />
                  The rick and morty api
                </Stack>
              </NavLink>
            </Typography>
          </Box>
          <Stack direction="row" spacing={3} sx={{ mr: 6 }}>
            <Typography variant="h6" component="div">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? 'active-no-account' : 'inactive-no-account'
                }
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={3}
                  sx={{
                    textTransform: 'uppercase',
                  }}
                >
                  <LoginOutlinedIcon fontSize="medium" sx={{ mr: 0.5 }} />
                  Sign in
                </Stack>
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? 'active-no-account' : 'inactive-no-account'
                }
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={3}
                  sx={{
                    textTransform: 'uppercase',
                  }}
                >
                  <PersonAddIcon fontSize="medium" sx={{ mr: 0.5 }} />
                  Sign up
                </Stack>
              </NavLink>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarNoAccount;
