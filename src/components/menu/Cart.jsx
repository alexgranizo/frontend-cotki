import React from 'react';
import CartImage from '../../assets/static/images/shop-cart.svg';
import '../../assets/styles/menu/Cart.css';

const Cart = () => {
  return (
    <div className='top-menu-cart'>
      <img
        src={CartImage}
        className='top-menu-cart-image'
        alt='Carrito de compras Cotki'
      />
      <div className='top-counter-cart'>
        <span>$ 100.37</span>
      </div>
    </div>
  );
};
export default Cart;
