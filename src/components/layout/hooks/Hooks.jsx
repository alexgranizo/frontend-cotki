import React from 'react';
import One from '../../../assets/static/images/products/aromatel-verde.jpg';
import Item from './Item';
import '../../../assets/styles/layout/hooks/Hooks.css';
import OneItem from './Items/One';
import Solar from '../../../assets/static/images/layout/solar.jpg';
import Coca from '../../../assets/static/images/layout/publicidad-antigua-cocacola-pepsi-9.jpg';
import TwoItem from './Items/Two';

const Categories = () => {

  return (
    <div className='layout-categories-container'>
      <OneItem />

      <div className='middle-layout-categories'>
        <div className='middle-layout-title'>
          <h2>
            Producto estrella de hoy
          </h2>
        </div>
        <div className='middle-layout-items'>
          <Item img={Coca} alt='aromatel' href='/' />

        </div>
      </div>
      <TwoItem />

    </div>
  );
};
export default Categories;
