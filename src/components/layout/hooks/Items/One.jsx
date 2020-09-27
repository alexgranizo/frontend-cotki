import React from 'react';
import '../../../../assets/styles/layout/hooks/items/One.css';
import One from '../../../../assets/static/images/layout/oferta-supermercado-min-1024x789.jpg';
import Two from '../../../../assets/static/images/layout/coca-2.jpg';
import Three from '../../../../assets/static/images/layout/solar.jpg';

const OneItem = () => {
  return (
    <div className='menu-categories-container-one'>
      <div className='menu-categories-item-one'>
        <a href='/'>
          <img src={One} alt='Imagen de prueba 1' />
        </a>
      </div>
      <div className='menu-categories-item-two'>
        <a href='/'>
          <img src={Two} alt='Imagen de prueba 4' />
        </a>
      </div>
      <div className='menu-categories-item-three'>
        <a href='/'>
          <img src={Three} alt='Imagen de prueba 3' />
        </a>
      </div>
      <div className='menu-categories-item-four'>
        <a href='/'>
          <img src={Three} alt='Imagen de prueba 3' />
        </a>
      </div>
    </div>
  );
};
export default OneItem;
