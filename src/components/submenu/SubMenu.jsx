import React from 'react';
import Location from '../svgs/Location';
import '../../assets/styles/submenu/SubMenu.css';

const SubMenu = () => {
  return (
    <div className='top-submenu-container'>
      <div className='top-submenu-address'>
        <div>
          <Location height='18px' />
        </div>
        <p className='top-submenu-city'>Riobamba</p>
      </div>
    </div>
  );
};
export default SubMenu;
