import React from 'react';
import './Signin.css';
import Header from '../Header/Header';
import SigninForm from '../SigninForm/SigninForm';

const Signin = () => {
  return (
    <div className="sign-in-page ">
      <Header />
      <SigninForm />
    </div>
  );
};

export default Signin;
