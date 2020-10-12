import React from 'react';
import '../../assets/styles/info/Info.css';
import Cart from '../svgs/Cart';
import Login from '../svgs/Login';
import Search from '../svgs/Search';
import Delivery from '../svgs/Delivery';
import Truck from '../svgs/Truck';
import Pay from '../svgs/Pay';
import Watch from '../svgs/Watch';

const Info = () => {
  return (
    <div className='infohome-container'>
      <div className='infohome-info'>
        <h2>
          ¿Cómo funciona Cotki?
        </h2>
        <span>
          <a href='/'>Saber más</a>
        </span>
      </div>
      <div className='infohome-items'>
        <div className='item-one'>
          <Login height='80%' bodyColor='#34b4a5' />
          <h3>Crea tu cuenta</h3>
        </div>
        <div className='item-two'>
          <Search height='80%' lupaColor='#1f1d1d' boxColor1='#34b4a5' boxColor2='#ffffff' />
          <h3>Busca los productos que necesites</h3>
        </div>
        <div className='item-three'>
          <Cart height='80%' color1='#1f1d1d' color2='#1f1d1d' color3='#34b4a5' />
          <h3>Agregalos al carrito</h3>
        </div>
        <div className='item-four'>
          <Watch height='80%' color2='#1f1d1d' color1='#34b4a5' />
          <h3>Confirma tu pedido</h3>
        </div>
        <div className='item-five'>
          <Truck height='80%' color1='#1f1d1d' color2='#34b4a5' color3='#f09800' />
          <h3>Tu pedido está en camino</h3>
        </div>
        <div className='item-six'>
          <Pay height='80%' color1='#f09800' color2='#1f1d1d' />
          <h3>Paga en cuanto llegue</h3>
        </div>
        <div className='item-seven'>
          <Delivery height='80%' color1='#34b4a5' color2='#1f1d1d' />
          <h3>Recibes tus compras</h3>
        </div>
      </div>
    </div>

  );
};
export default Info;
