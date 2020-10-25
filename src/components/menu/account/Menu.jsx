import React from 'react';
import Option from './Option';

function Menu(props) {
  const { className, onMouseLeave, up } = props;
  return (
    <div
      className={className}
      id='unfold__menu'
      onMouseLeave={onMouseLeave}
    >
      <div className={up} />
      <div className='buttons-menu-account'>
        <button type='button' className='login-button-account'>Iniciar sesión</button>
        <div className='create-link-account'>
          O si eres nuevo
          {' '}
          <a href='/'>Registrate</a>
        </div>
      </div>
      <ul>
        <Option href='/' aName='Mi cuenta' className='optionOne optionMenu' />
        <Option href='/' aName='Mis favoritos' className='optionTwo optionMenu' />
        <Option href='/' aName='Juega y gana' className='optionThree optionMenu' />
        <Option href='/' aName='Mis compras' className='optionFour optionMenu' />
        <Option href='/' aName='Centro de mensajes' className='optionFive optionMenu' />
      </ul>
    </div>
  );
}
export default Menu;
