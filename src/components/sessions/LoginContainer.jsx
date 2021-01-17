import React from 'react';
import { Link } from 'react-router-dom';
import FormLogin from './FormLogin';
import '../../assets/styles/sessions/LoginContainer.css';
import BlackLogo from '../svgs/BlackLogo';

const LoginContainer = () => {
  return (
    <div className='login-dad'>
      <div className='logo-return-home'>
        <Link to='/' rel='canonical'>
          <BlackLogo width='110px' />
        </Link>
      </div>
      <div className='a-divisor' />
      <div className='login-container'>
        <h1>Inicia Sesión</h1>
        <FormLogin />
        <div>
          <div>Tambien puedes inciar secion con </div>
          <div>
            <a href='/'>
              twitter
            </a>
            <a href='/'>
              hioa
            </a>
            <a href='/'>
              ebook />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-login' />
    </div>
  );
};
export default LoginContainer;
