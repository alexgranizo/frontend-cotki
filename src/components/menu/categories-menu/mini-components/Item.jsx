import React from 'react';
import '../../../../assets/styles/menu/menu-categories/Item.css';

const Item = (props) => {
  const { children, title } = props;
  return (
    <div className='menu-categories-item-container'>
      <span>{title}</span>
      {children}
    </div>
  );
};
export default Item;
