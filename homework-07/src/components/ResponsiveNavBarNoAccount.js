import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
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
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import Avatar from '@mui/material/Avatar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function ResponsiveNavBarNoAccount() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const location = useLocation();
  const { pathname } = location;

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
              flexGrow: 1,
              fontSize: '22px',
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: '.25rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: pathname === '/' ? '#7300e6' : '',
            }}
          >
            <CameraRollIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            Rick and Morty
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                fontSize: '22px',
                fontFamily: 'monospace',
                letterSpacing: '.25rem',
                textTransform: 'uppercase',
                color: anchorElUser ? '#8c1aff' : 'white',
              }}
            >
              <Avatar sx={{ backgroundColor: '#202329' }}>
                <AccountBoxIcon
                  fontSize="large"
                  sx={{ color: anchorElUser ? '#8c1aff' : 'white', mr: 1 }}
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
                  to="/signin"
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                    '&:hover': { color: '#8c1aff' },
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <LoginOutlinedIcon />
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                      }}
                    >
                      Sign in
                    </Typography>
                  </Stack>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  component={RouterLink}
                  to="/signup"
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                    '&:hover': { color: '#8c1aff' },
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <PersonAddIcon />
                    <Typography
                      textAlign="center"
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Sign up
                    </Typography>
                  </Stack>
                </Link>
              </MenuItem>
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
              fontSize: '22px',
              fontWeight: 700,
              fontFamily: 'monospace',
              letterSpacing: '.25rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              flexGrow: 1,
              color: pathname === '/' ? '#7300e6' : '',
            }}
          >
            <CameraRollIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
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
                  fontSize="large"
                  sx={{ color: anchorElUser ? '#8c1aff' : 'white', mr: 1 }}
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
                  to="/signin"
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                    '&:hover': { color: '#8c1aff' },
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <LoginOutlinedIcon />
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                      }}
                    >
                      Sign in
                    </Typography>
                  </Stack>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  component={RouterLink}
                  to="/signup"
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                    '&:hover': { color: '#8c1aff' },
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <PersonAddIcon />
                    <Typography
                      textAlign="center"
                      sx={{ textTransform: 'uppercase' }}
                    >
                      Sign up
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
export default ResponsiveNavBarNoAccount;