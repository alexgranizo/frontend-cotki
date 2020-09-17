import React from "react";
import Menu from "./Menu";

class Account extends React.Component {
  state = {
    active: false,
  };
  handleMouseOver = () => {
    this.setState({
      active: true,
    });
  };
  handleMouseLeave = () => {
    this.setState({
      active: false,
    });
    console.log("sI ESTAQ FUFNCJKXKS");
  };
  render() {
    return (
      <div className="account" id="account">
        <Menu className="clase" onMouseLeave={this.handleMouseLeave} />

        <div className="account-profile" onMouseEnter={this.handleMouseOver}>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-person-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          <span>Hola, Brayan</span>
        </div>
      </div>
    );
  }
}
export default Account;
