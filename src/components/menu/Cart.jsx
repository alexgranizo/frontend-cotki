import React from "react";
import CartImage from "../../assets/static/images/shop-cart.svg";
const Cart = () => {
  return (
    <div className="cart">
      <img
        src={CartImage}
        height="45px"
        width="45px"
        alt="Carrito de compras Cotki"
      />
    </div>
  );
};
export default Cart;
