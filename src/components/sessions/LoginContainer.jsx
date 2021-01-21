import React from 'react';
import '../../assets/styles/sessions/LoginContainer.css';
import Logo from './Logo';
import MainForm from './MainForm';

const LoginContainer = () => {
  return (
    <div className='login-dad'>
      <Logo />
      <div className='login-container'>
        <MainForm />
      </div>
      <div className='footer-login' />
    </div>
  );
};
export default LoginContainer;
