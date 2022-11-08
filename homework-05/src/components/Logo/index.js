import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link component={RouteLink} to="/" color="#ffffff" id="link">
        SociaL in
      </Link>
    </div>
  );
};

export default Logo;
