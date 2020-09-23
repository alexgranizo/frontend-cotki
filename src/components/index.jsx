import React, { useState } from 'react';

import Menu from './menu/Menu';
import '../assets/styles/global/index.css';
import SubMenu from './submenu/SubMenu';
import Slider from './slide-home/Slide';
import Searching from './movile/Searching';
import Layout from './layout/Layout';
import TopMenuCategories from './menu/categories-menu/MenuCategories';
import Layer from './menu/categories-menu/Layer';

const Index = () => {
  const [menu, setMenu] = useState({
    state: null,
  });

  function handleClick() {
    if (menu.state === true) {
      document.body.style.overflow = 'auto';
      // enableScroll();
      setMenu({
        state: false,
      });

    } else {
      // disableScroll();
      document.body.style.overflow = 'hidden';
      setMenu({
        state: true,
      });

    }
  }

  let style;
  let layer;
  if (menu.state === true) {
    style = 'top-menu-categories-container ';
    layer = 'layer-container-gray';

  } else if (menu.state === false) {

    style = ' top-menu-categories-container top-menu-will-go';
    layer = 'hla';
  } else {
    style = 'top-menu-initial-state';
  }

  return (
    <div className='container-app'>
      <Menu handleClick={handleClick} />
      <TopMenuCategories style={style} />

      <Layer handleClick={handleClick} style={layer} />
      <SubMenu />
      <div>
        <Slider />
        <Searching />
      </div>
      <div>
        <Layout />
      </div>
    </div>
  );
};
export default Index;
