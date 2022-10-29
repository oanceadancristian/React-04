import React from 'react';
import './Signup.css';
import Header from '../Header/Header';
import SignupForm from '../SignupForm/SignupForm';

const Signup = () => {
  return (
    <div className="sign-up-page">
      <Header />
      <SignupForm />
    </div>
  );
};

export default Signup;
