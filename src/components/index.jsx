import React from 'react';
import Menu from './menu/Menu';
import '../assets/styles/global/index.css';
import SubMenu from './submenu/SubMenu';
import Slider from './slide-home/Slide';

const Index = () => {
  return (
    <>
      <Menu />
      <SubMenu />
      <Slider />
    </>
  );
};
export default Index;
