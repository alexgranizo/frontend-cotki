import React from 'react';
import FormLogin from './FormLogin';
import '../../assets/styles/sessions/MainForm.css';

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
          <span>   </span>
          <a href='/'>Crea una cuenta</a>
        </div>
      </div>
      <div>
        <div>Tambien puedes inciar sesion con </div>
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
  );
};
export default MainForm;
