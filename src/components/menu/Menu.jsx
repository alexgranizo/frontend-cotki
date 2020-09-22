import React, { useState } from 'react';
import Brand from './Brand';
import Search from './search/Search';
import Cart from './Cart';
import Account from './account/Account';
import '../../assets/styles/menu/Menu.css';

function Menu() {
  const [menu, setMenu] = useState({
    value: 'menu-dropdown-of brand-menu-dropdown',
    state: false,
  });
  function handleClick() {
    setMenu({
      state: true,
    });
  }
  let style;
  if (menu.state) {
    setMenu({
      value: 'menu-dropdown-on brand-menu-dropdown',
    });
  } else {
    style = menu.value ;
  }
  return (
    <nav className='top-navbar'>
      <Brand handleClick={handleClick} style={style} />
      <div className='menu-search'>
        <Search />
      </div>
      <div className='menu-account'>
        <Account />
      </div>
      <div className='menu-cart'>
        <Cart />
      </div>
    </nav>
  );
}

export default Menu;
