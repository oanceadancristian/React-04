import React from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
              marginLeft: '50px',
            }}
          >
            <Typography variant="h6" component="div">
              <NavLink
                to="/homepage"
                className={({ isActive }) =>
                  isActive ? 'navbar-active' : 'navbar-inactive'
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
                  <HomeIcon fontSize="medium" sx={{ marginRight: '3px' }} />
                  Home
                </Box>
              </NavLink>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '25px',
              flexWrap: 'wrap',
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
          </Box>
          <Box sx={{ marginRight: '50px' }}>
            <Typography variant="h6" component="div">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'sign-out-active' : 'sign-out-inactive'
                }
              >
                <Box
                  onClick={handleLogout}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    textTransform: 'uppercase',
                  }}
                >
                  <LogoutIcon fontSize="medium" sx={{ marginRight: '3px' }} />
                  Sign out
                </Box>
              </NavLink>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
