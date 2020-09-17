import React from "react";
import Select from "./Select";
import Caret from "../../../assets/static/images/caret.svg";
import "../../../assets/styles/menu/search/Menu.css";

class Menu extends React.Component {
  state = {
    pasillo: "Busca por pasillo",
  };
  handleClick = (e) => {
    this.setState({
      pasillo: e.target.value,
    });
  };
  render() {
    return (
      <div className="container-search-menu">
        <div className="search-menu-navbar" onClick={this.handleClick}>
          <div className="search-menu">
            <span>{this.state.pasillo}</span>
            <img src={Caret} />
          </div>
          <Select />
        </div>
      </div>
    );
  }
}
export default Menu;
