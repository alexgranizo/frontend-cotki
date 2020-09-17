import React from "react";
import Option from "./OptionSearch";
import "../../../assets/styles/menu/search/Select.css";

const Select = () => {
  return (
    <select name="Pasillo" className="options-select">
      <Option value="Todo" pasillo="Todo" />
      <Option value="Mascotas" pasillo="Mascotas" />
      <Option value="Panadería" pasillo="Panadería" />
      <Option value="Lacteos" pasillo="Lacteos" />
      <Option value="Limpieza" pasillo="Limpieza" />
      <Option value="Tecnología" pasillo="Tecnología" />
      <Option value="Útiles escolares" pasillo="Útiles escolares" />
      <Option value="Aseo personal" pasillo="Aseo personal" />
      <Option value="Bebidas" pasillo="Bebidas" />
      <Option value="Mariscos" pasillo="Mariscos" />
      <Option value="Helados" pasillo="Helados" />
      <Option value="Galletas" pasillo="Galletas" />
      <Option value="Enlatados" pasillo="Enlatados" />
      <Option value="Hogar" pasillo="Hogar" />
      <Option value="Ferretería" pasillo="Ferretería" />
      <Option value="Decoración" pasillo="Decoración" />
      <Option value="Verduras" pasillo="Verduras" />
      <Option value="Frutas" pasillo="Frutas" />
      <Option value="Licores" pasillo="Licores" />
    </select>
  );
};
export default Select;
