import React, { useState } from 'react';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';

function ResponsiveNavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const params = useParams();
  const { pageId, episodeId, locationId } = params;

  const location = useLocation();
  const { pathname, search } = location;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: '#202329' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/homepage"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: pathname === '/homepage' ? '#7300e6' : '',
            }}
          >
            <CameraRollIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            Rick and Morty
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: anchorElNav ? '#8c1aff' : 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link
                component={RouterLink}
                to="/characters"
                sx={{
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  color: 'black',
                  '&:hover': { color: '#8c1aff' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Characters</Typography>
                </MenuItem>
              </Link>
              <Link
                component={RouterLink}
                to="/episodes"
                sx={{
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  color: 'black',
                  '&:hover': { color: '#8c1aff' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Episodes</Typography>
                </MenuItem>
              </Link>
              <Link
                component={RouterLink}
                to="/locations"
                sx={{
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  color: 'black',
                  '&:hover': { color: '#8c1aff' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Locations</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/homepage"
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              fontWeight: 700,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              flexGrow: 1,
              color: pathname === '/homepage' ? '#7300e6' : '',
            }}
          >
            <CameraRollIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            Rick and Morty
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: 3,
            }}
          >
            <Link
              component={RouterLink}
              to={`/characters/pages/${
                pageId === undefined ? 1 : pageId
              }${search}`}
              sx={{ textDecoration: 'none' }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  display: 'block',
                  my: 2,
                  fontSize: '17px',
                  color: pathname.startsWith('/characters')
                    ? '#7300e6'
                    : 'white',
                  '&:hover': { color: '#8c1aff', backgroundColor: '#202329' },
                }}
              >
                Characters
              </Button>
            </Link>
            <Link
              component={RouterLink}
              to={`/episodes/${episodeId === undefined ? 1 : episodeId}`}
              sx={{ textDecoration: 'none' }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  display: 'block',
                  my: 2,
                  fontSize: '17px',
                  color: pathname.startsWith('/characters')
                    ? '#7300e6'
                    : 'white',

                  '&:hover': { color: '#8c1aff', backgroundColor: '#202329' },
                }}
              >
                Episodes
              </Button>
            </Link>
            <Link
              component={RouterLink}
              to={`/locations/${locationId === undefined ? 1 : locationId}`}
              sx={{ textDecoration: 'none' }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  display: 'block',
                  my: 2,
                  fontSize: '17px',
                  color: pathname.startsWith('/characters')
                    ? '#7300e6'
                    : 'white',

                  '&:hover': { color: '#8c1aff', backgroundColor: '#202329' },
                }}
              >
                Locations
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ backgroundColor: '#202329' }}>
                  <AccountBoxIcon
                    fontSize="large"
                    sx={{ color: anchorElUser ? '#8c1aff' : 'white' }}
                  />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  component={RouterLink}
                  onClick={handleLogout}
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                    '&:hover': { color: '#8c1aff' },
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <LogoutIcon />
                    <Typography
                      textAlign="center"
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Sign out
                    </Typography>
                  </Stack>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveNavBar;
