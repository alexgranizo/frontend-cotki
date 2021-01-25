import React from 'react';
import FormLogin from './FormLogin';
import Facebook from '../svgs/LoginFacebook';

import '../../assets/styles/sessions/MainForm.css';
import LoginGoogle from '../svgs/LoginGoogle';

const MainForm = () => {
  return (
    <div className='main-form'>
      <div className='main-title-session'>
        <h1>Inicia Sesión</h1>
      </div>
      <div className='form-login-container'>
        <FormLogin />
      </div>
      <div className='button-for-register-container'>
        <div className='button-for-register'>
          ¿Nuevo en cotki?
          <a href='/'>Crea una cuenta</a>
        </div>
      </div>
      <div className='login-rrss'>
        <div className='title-login-rrss'>Inicio rápido con</div>
        <div className='logo-login-rrss'>
          <a href='/'>
            <LoginGoogle height='35px' />
          </a>
          <a href='/'>
            <Facebook height='35px' />
          </a>
        </div>
      </div>
    </div>
  );
};
export default MainForm;
