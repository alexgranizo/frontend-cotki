import React from 'react';
import Hooks from './hooks/Hooks';
import '../../assets/styles/layout/Layout.css';

const Layout = () => {
  return (
    <div className='layout-home-container'>
      <div className='layout-home-hooks'>
        <Hooks />
      </div>
    </div>
  );
};
export default Layout;
