import React from 'react';
import Logo from '../svgs/Logo';
import '../../assets/styles/menu/Brand.css';
import MenuCategories from '../svgs/MenuCategories';

const Brand = (props) => {
  const { handleClick } = props;

  return (
    <div className='brand-container'>
      <button id='button-brand-menu' type='button' href='/' className='brand-menu-dropdown' tabIndex={0} onClick={handleClick}>
        <MenuCategories color='white' />
      </button>
      <a href='/' className='brand-logo'>
        <Logo height='50px' className='brand-logo-svg' />
      </a>
    </div>
  );
};
export default Brand;
