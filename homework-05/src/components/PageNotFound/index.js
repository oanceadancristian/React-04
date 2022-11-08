import React from 'react';
import Header from '../Header';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <Header />
      <h1 className="title-not-found">Ooops... Page not found!</h1>
    </div>
  );
};

export default PageNotFound;
