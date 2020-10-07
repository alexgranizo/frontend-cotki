import React from "react";
import Menu from "./Menu";
import "../../../assets/styles/menu/account/Account.css";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

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
    const { active } = this.state;
    let clase = "top-account-options";
    if (active) {
      clase += " top-account-unfold";
    }
    return (
      <div className='top-menu-account' id='account'>
        <div className='top-account-profile'>
          <div
            className='top-account-icon'
            onMouseEnter={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}>
            <svg
              width='1.4em'
              height='1.4em'
              viewBox='0 0 16 16'
              className='bi bi-person-fill account-person-icon'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
              />
            </svg>
            <Menu className={clase} up='top-menu-up' />
          </div>
        </div>
      </div>
    );
  }
}
export default Account;
