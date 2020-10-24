import React from "react";
import Brand from "./Brand";
import Search from "./search/Search";
import Cart from "./Cart";
import Account from "./account/Account";
import "../../assets/styles/menu/Menu.css";
// import TopMenuCategories from './categories-menu/MenuCategories';
// import Layer from './categories-menu/Layer';

function Menu(props) {
  const { handleClick } = props;
  // const [menu, setMenu] = useState({
  //   state: false,
  // });
  // function handleClick() {
  //   if (menu.state === true) {
  //     setMenu({
  //       state: false,
  //     });
  //   } else {
  //     setMenu({
  //       state: true,
  //     });
  //   }
  // }
  // let menuCategories;
  // if (menu.state) {
  //   menuCategories = (
  //     <>
  //       <TopMenuCategories />
  //       <Layer handleClick={handleClick} />
  //     </>
  //   );
  // }

  return (
    <nav className='top-navbar'>
      <Brand handleClick={handleClick} />
      {/* {menuCategories} */}
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
