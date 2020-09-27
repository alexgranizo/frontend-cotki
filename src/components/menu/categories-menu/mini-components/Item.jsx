import React from 'react';
import '../../../../assets/styles/menu/menu-categories/Item.css';

const Item = (props) => {
  const { children, title } = props;
  return (
    <div className='menu-categories-item-container'>
      {children}
      <span>{title}</span>
    </div>
  );
};
export default Item;
