import React, { useState } from 'react';

import Menu from '../components/menu/Menu';
import '../assets/styles/global/index.css';
import SubMenu from '../components/submenu/SubMenu';
import Slider from '../components/slide-home/Slide';
import Searching from '../components/movile/Searching';
import Layout from '../components/layout/Layout';
import TopMenuCategories from '../components/menu/categories-menu/MenuCategories';
import Layer from '../components/menu/categories-menu/Layer';
import ProductSlide from '../components/product-slide/Slider';
import Info from '../components/info/Info';

//imagenes del slide
import one from '../assets/static/images/products/aromatel.jpg';
import two from '../assets/static/images/products/floral.jpg';
import three from '../assets/static/images/products/40375961-01-BASEIMAGE-Midres.jpg';
import four from '../assets/static/images/products/7861048600743.png';
import five from '../assets/static/images/products/adadwwr.jpg';
import six from '../assets/static/images/products/aromatel-morado.jpg';
import seven from '../assets/static/images/products/asaswe.jpg';
import eight from '../assets/static/images/products/deja1.jpg';
import nine from '../assets/static/images/products/lava.jpg';
import Footer from '../components/footer/Footer';

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
      <TopMenuCategories style={style} closeMenu={handleClick} />

      <Layer handleClick={handleClick} style={layer} />
      <SubMenu />
      <div>
        <Slider />
        <Searching />
      </div>
      <Info />
      <div>
        <Layout />
      </div>
      <div>
        <ProductSlide images={[one, two, three, four, five, six, seven, eight, nine]} title='hola mundo' />
      </div>
      <Footer />
    </div>
  );
};
export default Index;
