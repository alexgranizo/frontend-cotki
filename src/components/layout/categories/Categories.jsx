import React from 'react';
import Baby from '../../svgs/Baby';
import MenuCategories from '../../svgs/MenuCategories';
import Item from './Item';
import '../../../assets/styles/layout/categories/Categories.css';

const Categories = () => {
  return (
    <div className='layout-categories-container'>
      <div className='layout-categories-title-container'>
        <a href='/' className='layout-categories-link'>
          <MenuCategories />
          <span>Pasillos</span>
        </a>
        <a href='/' className='layout-categories-option-more'>
          Ver todo
        </a>
      </div>
      <Item href='/' ancla='Bebes'>
        <Baby color='#333333' height='20px' />
      </Item>
    </div>
  );
};
export default Categories;
