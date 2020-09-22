import React from 'react';
import Logo from '../svgs/Logo';
import '../../assets/styles/menu/Brand.css';
import MenuCategories from '../svgs/MenuCategories';

const Brand = (props) => {
  const { handleClick, style } = props;

  return (
    <div className='brand-container'>
      <div href='/' className={style} tabIndex={0} role='button' onClick={handleClick}>
        <MenuCategories color='white' />
      </div>
      <a href='/' className='brand-logo'>
        <Logo height='50px' className='brand-logo-svg' />
      </a>
    </div>
  );
};
export default Brand;
