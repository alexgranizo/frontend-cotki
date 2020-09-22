import React from 'react';
import '../../../assets/styles/layout/categories/Item.css';

const Item = (props) => {
  const { href, children, ancla } = props;
  return (
    <div className='layout-item-categorie-container'>
      <a href={href}>
        <div className='square'>{children}</div>
        <span>{ancla}</span>
      </a>
    </div>
  );
};
export default Item;
