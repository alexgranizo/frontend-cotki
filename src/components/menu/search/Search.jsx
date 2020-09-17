import React from "react";
import Menu from "./Menu";
import Button from "./Button";
import "../../../assets/styles/menu/search/Search.css";
const Search = () => {
  return (
    <form className="search-form">
      <Menu />
      <input
        type="text"
        name="busqueda"
        placeholder="Buscar..."
        className="search-form-input"
      />
      <Button />
    </form>
  );
};
export default Search;
