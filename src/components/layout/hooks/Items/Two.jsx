import React from 'react';
import One from '../../../../assets/static/images/layout/rufless.jpg';
import TwoImage from '../../../../assets/static/images/layout/coca-horizontal.png';
import Three from '../../../../assets/static/images/layout/cine.jpg';
import '../../../../assets/styles/layout/hooks/items/Two.css';

const Two = () => {
  return (
    <div className='menu-categories-container-two'>
      <div className='menu-categories-two-item-one'>
        <a href='/' className='menu-categories-two-item-one-animation-one'>
          <img src={TwoImage} alt='Imagen de prueba 1' />
        </a>
        <a href='/' className='menu-categories-two-item-one-animation-two'>
          <img src={One} alt='Imagen de prueba 1' />
        </a>
      </div>
      <div className='menu-categories-two-item-two'>
        <a href='/'>
          <img src={TwoImage} alt='Imagen de prueba 4' />
        </a>
      </div>
      <div className='menu-categories-two-item-three'>
        <a href='/'>
          <img src={Three} alt='Imagen de prueba 3' />
        </a>
      </div>
    </div>
  );
};
export default Two;
