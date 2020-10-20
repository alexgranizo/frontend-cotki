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
        <button type='button' className='create-button-account'>Crear mi cuenta</button>
      </div>
      <ul>
        <Option href='/' aName='Mi cuenta' />
        <Option href='/' aName='Mis favoritos' />
        <Option href='/' aName='Juega y gana' />
        <Option href='/' aName='Mis compras' />
        <Option href='/' aName='Centro de mensajes' />
      </ul>
    </div>
  );
}
export default Menu;
