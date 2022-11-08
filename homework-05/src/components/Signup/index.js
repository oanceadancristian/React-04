import React from 'react';
import Header from '../Header';
import SignupForm from '../SignupForm';
import './Signup.css';

const Signup = () => {
  return (
    <div className="sign-up-page">
      <Header />
      <SignupForm />
    </div>
  );
};

export default Signup;
