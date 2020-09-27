import React from 'react';
import '../../../assets/styles/menu/menu-categories/MenuCategories.css';
import Item from './mini-components/Item';
import NavBar from './mini-components/NavBar';
import Baby from '../../svgs/Baby';

const topMenuCategories = (props) => {
  const { style } = props;
  //'top-menu-categories-container'
  return (
    <div className={style}>
      <NavBar />
      <Item title='Bebés y pañalería'>
        <Baby color='#333' height='30px' />
      </Item>

    </div>
  );
};
export default topMenuCategories;
