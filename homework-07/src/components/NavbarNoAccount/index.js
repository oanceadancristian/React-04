import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
          <Box sx={{ marginLeft: '50px' }}>
            <Typography variant="h6" component="div">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'active-no-account' : 'inactive-no-account'
                }
              >
                The Rick and Morty API
              </NavLink>
            </Typography>
          </Box>
          <Box sx={{ marginRight: '50px', display: 'flex', gap: '20px' }}>
            <Typography variant="h6" component="div">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? 'active-no-account' : 'inactive-no-account'
                }
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    textTransform: 'uppercase',
                  }}
                >
                  <LoginOutlinedIcon
                    fontSize="medium"
                    sx={{ marginRight: '3px' }}
                  />
                  Sign in
                </Box>
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? 'active-no-account' : 'inactive-no-account'
                }
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    textTransform: 'uppercase',
                  }}
                >
                  <PersonAddIcon
                    fontSize="medium"
                    sx={{ marginRight: '3px' }}
                  />
                  Sign up
                </Box>
              </NavLink>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarNoAccount;
