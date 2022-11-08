import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import './Nav.css';

const Nav = () => {
  return (
    <div className="links">
      <div className="posts-link">
        <Link component={RouteLink} to="/posts" color="#ffffff" id="link">
          <div className="align-icon">
            <BorderColorOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            Posts
          </div>
        </Link>
      </div>
      <div className="log-in-link">
        <Link component={RouteLink} to="/signin" color="#ffffff" id="link">
          <div className="align-icon">
            <LoginOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            Log in
          </div>
        </Link>
      </div>
      <div className="sign-up-link">
        <Link component={RouteLink} to="/signup" color="#ffffff" id="link">
          <div className="align-icon">
            <AccountBoxOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            Sign up
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
