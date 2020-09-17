import React from "react";
import "../../../assets/styles/menu/search/Button.css";
const Button = () => {
  return (
    <span className="button-for-searching">
      <div className="button-searching-container">
        <span className="button-searching-text">Buscar</span>
        <input
          type="submit"
          className="button-searching-input"
          value="buscar"
        />
      </div>
    </span>
  );
};
export default Button;
