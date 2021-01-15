import React from 'react';
import '../../../assets/styles/menu/menu-categories/MenuCategories.css';
import Item from './mini-components/Item';
import NavBar from './mini-components/NavBar';
import Close from '../../svgs/Close';

const topMenuCategories = (props) => {
  const { style, closeMenu, name, children } = props;
  //'top-menu-categories-container'
  return (
    <div className={style}>
      <NavBar />
      <div className='categorie-item-title'>
        <div>Contenido exclusivo</div>
        {children}
      </div>
      {/* eslint-disable-next-line jsx-a11y/role-has-required-aria-props */}
      <div className='clase-cerrada-menu' role='switch' tabIndex={0} onClick={closeMenu}>
        <Close />
      </div>
    </div>
  );
};
export default topMenuCategories;
