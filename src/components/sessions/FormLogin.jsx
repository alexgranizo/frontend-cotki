import React from 'react';
import '../../assets/styles/sessions/FormLogin.css';

const FormLogin = () => {
  return (
    <form className='form-login'>
      <label htmlFor='name'>
        Correo Electrónico
      </label>
      <input
        type='email'
        id='name'
        name='name'
      />
      <label htmlFor='password' className='password-input-name'>
        Contraseña
        <a href='/' className='reset-password'>¿Olvidaste la contraseña?</a>
      </label>
      <input
        type='password'
        id='password'
        maxLength='20'
      />
      <input
        className='submit'
        type='submit'
        placeholder='Iniciar seción'
      />
      <span>
        Al Iniciar sesion aceptas nuestros
        <a href='/'> Terminos y condiciones </a>
      </span>
    </form>
  );
};
export default FormLogin;
