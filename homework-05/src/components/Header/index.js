import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo';
import Nav from '../Nav';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const getHeaderClass = () => {
    let classes;
    classes = location.pathname === '/' ? 'opacity' : 'no-opacity';
    return classes;
  };

  return (
    <>
      <header className={getHeaderClass()}>
        <Logo />
        <Nav />
      </header>
    </>
  );
};

export default Header;
