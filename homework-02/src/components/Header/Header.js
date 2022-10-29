import React from 'react';
import './Header.css';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Link from '@mui/material/Link';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link
            href="#"
            color="#ffffff"
            sx={{ textDecoration: 'none' }}
            id="link"
          >
            SociaL in
          </Link>
        </div>
        <div className="links">
          <div className="posts-link">
            <Link
              href="#"
              color="#ffffff"
              sx={{ textDecoration: 'none' }}
              id="link"
            >
              <div className="align-icon">
                <BorderColorOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                Posts
              </div>
            </Link>
          </div>
          <div className="log-in-link">
            <Link
              href="#"
              color="#ffffff"
              sx={{ textDecoration: 'none' }}
              id="link"
            >
              <div className="align-icon">
                <LoginOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                Log in
              </div>
            </Link>
          </div>
          <div className="sign-up-link">
            <Link
              href="#"
              color="#ffffff"
              sx={{ textDecoration: 'none' }}
              id="link"
            >
              <div className="align-icon">
                <AccountBoxOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                Sign up
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
