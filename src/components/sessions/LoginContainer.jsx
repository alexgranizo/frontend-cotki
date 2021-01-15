import React from 'react';
import FormLogin from './FormLogin';
import '../../assets/styles/sessions/LoginContainer.css';

const LoginContainer = () => {
  return (
    <div className='login-dad'>
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
    </div>
  );
};
export default LoginContainer;
