import React from 'react';
import '../../../../assets/styles/menu/menu-categories/Item.css';

const Item = (props) => {
  // Lo he logrado perras
  const { name } = props;
  return (
    <div className='menu-categories-item-container'>
      <span>{name}</span>
    </div>
  );
};
export default Item;
