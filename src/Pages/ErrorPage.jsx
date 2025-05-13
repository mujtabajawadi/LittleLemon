import React from 'react'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main id='error-page'>
      <h1>Oops! Looks Like You have Lost😞</h1>
      <h2>The Page You are Looking for is not Present</h2>
      <NavLink to="/"><button>Go to Home</button></NavLink>
    </main>
  );
}

export default ErrorPage
