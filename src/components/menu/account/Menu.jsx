import React from "react";
import Option from "./Option";
function Menu(props) {
  return (
    <div
      className={props.className}
      id="unfold__menu"
      onMouseLeave={props.onMouseLeave}
    >
      <div className={props.up}></div>
      <ul>
        <Option href="/" aName="Mi cuenta" />
        <Option href="/" aName="Mis favoritos" />
        <Option href="/" aName="Juega y gana" />
        <Option href="/" aName="Mis compras" />
        <Option href="/" aName="Centro de mensajes" />
      </ul>
    </div>
  );
}
export default Menu;
