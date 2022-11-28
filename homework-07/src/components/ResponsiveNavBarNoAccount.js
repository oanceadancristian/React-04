import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Stack } from '@mui/material';

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
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.2rem',
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/homepage"
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.1rem',
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
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ backgroundColor: '#202329' }}>
                  <AccountBoxIcon
                    fontSize="large"
                    sx={{ color: anchorElUser ? '#8c1aff' : '' }}
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
                      sx={{ textTransform: 'uppercase' }}
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
