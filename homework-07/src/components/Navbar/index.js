import React from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css';

const Navbar = () => {
  const params = useParams();
  const { pageId, episodeId, locationId } = params;

  const location = useLocation();
  const { search } = location;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

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
          <Box
            sx={{
              ml: 6,
            }}
          >
            <Typography variant="h6" component="div">
              <NavLink
                to="/homepage"
                className={({ isActive }) =>
                  isActive ? 'navbar-active' : 'navbar-inactive'
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
                  <HomeIcon fontSize="medium" sx={{ mr: 0.5 }} />
                  Home
                </Stack>
              </NavLink>
            </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              textTransform: 'uppercase',
            }}
          >
            <Typography variant="h6" component="div">
              <NavLink
                to={`/characters/pages/${
                  pageId === undefined ? 1 : pageId
                }${search}`}
                className={({ isActive }) =>
                  isActive ? 'navbar-active' : 'navbar-inactive'
                }
              >
                Characters
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div">
              <NavLink
                to={`/episodes/${episodeId === undefined ? 1 : episodeId}`}
                className={({ isActive }) =>
                  isActive ? 'navbar-active' : 'navbar-inactive'
                }
              >
                Episodes
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div">
              <NavLink
                to={`/locations/${locationId === undefined ? 1 : locationId}`}
                className={({ isActive }) =>
                  isActive ? 'navbar-active' : 'navbar-inactive'
                }
              >
                Locations
              </NavLink>
            </Typography>
          </Stack>
          <Box sx={{ mr: 6 }}>
            <Typography variant="h6" component="div">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'sign-out-active' : 'sign-out-inactive'
                }
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={3}
                  onClick={handleLogout}
                  sx={{
                    textTransform: 'uppercase',
                  }}
                >
                  <LogoutIcon fontSize="medium" sx={{ mr: 0.5 }} />
                  Sign out
                </Stack>
              </NavLink>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
