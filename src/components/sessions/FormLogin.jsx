import React from 'react';
import '../../assets/styles/sessions/FormLogin.css';

const FormLogin = () => {
  return (
    <form className='form-login'>
      <label htmlFor='name'>
        Correo Electrónico
        <input
          type='email'
          id='name'
          name='name'
          placeholder='P.ejemplo: (juancarlos@gmail.com)'
        />
      </label>
      <label>
        Contraseña
        <input
          type='password'
          maxLength='10'
          placeholder='Escribe una contrseña segura'
        />
      </label>
      <input
        className='submit'
        type='submit'
        placeholder='Iniciar seción'
      />
      <span>
        Al Iniciar secion aceptas los
        {' '}
        <a href='/'>Terminos de uso</a>
        {' '}
        y la
        <a href='/'> Política de privacidad</a>
        {' '}
        de COTKI
      </span>
    </form>
  );
};
export default FormLogin;
