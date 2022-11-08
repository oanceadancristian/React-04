import React from 'react';
import Header from '../Header';
import SigninForm from '../SigninForm';
import './Signin.css';

const Signin = () => {
  return (
    <div className="sign-in-page ">
      <Header />
      <SigninForm />
    </div>
  );
};

export default Signin;
