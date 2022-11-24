import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';

const Navbar = () => {
  const params = useParams();
  const { episodeId, locationId } = params;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            backgroundColor: 'black',
          }}
        >
          <Typography variant="h6" component="div">
            <NavLink
              to="/homepage"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Home
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div">
            <NavLink
              to="/characters"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Characters
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div">
            <NavLink
              to={`/episodes/${episodeId === undefined ? 1 : episodeId}`}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Episodes
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div">
            <NavLink
              to={`/locations/${locationId === undefined ? 1 : locationId}`}
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Locations
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
