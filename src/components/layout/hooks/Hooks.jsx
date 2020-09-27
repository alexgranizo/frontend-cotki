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
      <TwoItem />
      <Item img={Coca} alt='aromatel' href='/' />
      <Item img={Solar} alt='aromatel' href='/' />
      <Item img={One} alt='aromatel' href='/' />
      <OneItem />

    </div>
  );
};
export default Categories;
