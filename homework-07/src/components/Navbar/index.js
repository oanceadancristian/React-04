import React, { useState } from 'react';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

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
        <Toolbar sx={{ height: '50px' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/homepage"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              fontSize: '20px',
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: '.25rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: pathname === '/homepage' ? '#7300e6' : 'white',
            }}
          >
            <CameraRollIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                fontSize: '25px',
              }}
            />
            Rick and Morty
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              mr: 4,
              justifyContent: 'flex-end',
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
                  fontSize: '20px',
                  fontFamily: 'monospace',
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
                  fontSize: '20px',
                  fontFamily: 'monospace',
                  color: pathname.startsWith('/episodes') ? '#7300e6' : 'white',

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
                  fontSize: '20px',
                  fontFamily: 'monospace',
                  color: pathname.startsWith('/locations')
                    ? '#7300e6'
                    : 'white',

                  '&:hover': { color: '#8c1aff', backgroundColor: '#202329' },
                }}
              >
                Locations
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                fontSize: '20px',
                fontFamily: 'monospace',
                letterSpacing: '.1rem',
                textTransform: 'uppercase',
                color: anchorElUser ? '#8c1aff' : 'white',
              }}
            >
              <Avatar sx={{ backgroundColor: '#202329' }}>
                <AccountBoxIcon
                  sx={{
                    color: anchorElUser ? '#8c1aff' : 'white',
                    mr: 1,
                    fontSize: '30px',
                  }}
                />
              </Avatar>
              Account
            </IconButton>
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
                      sx={{
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                      }}
                    >
                      Sign out
                    </Typography>
                  </Stack>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: anchorElNav ? '#8c1aff' : 'white' }}
            >
              <MenuIcon sx={{ fontSize: '30px' }} />
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
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: 'monospace' }}
                  >
                    Characters
                  </Typography>
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
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: 'monospace' }}
                  >
                    Episodes
                  </Typography>
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
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: 'monospace' }}
                  >
                    Locations
                  </Typography>
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
              fontSize: '20px',
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: '.25rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              flexGrow: 1,
              color: '#7300e6',
            }}
          >
            <CameraRollIcon
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1,
                fontSize: '25px',
              }}
            />
            Rick and Morty
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
              }}
            >
              <Avatar sx={{ backgroundColor: '#202329' }}>
                <AccountBoxIcon
                  sx={{
                    color: anchorElUser ? '#8c1aff' : 'white',
                    fontSize: '30px',
                  }}
                />
              </Avatar>
            </IconButton>
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
                      sx={{
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                      }}
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
