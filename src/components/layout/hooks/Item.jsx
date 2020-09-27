import React from 'react';
import '../../../assets/styles/layout/hooks/Item.css';

const Item = (props) => {
  const { href, img, alt } = props;
  return (
    <div className='layout-item-hooks-container'>
      <a href={href}>
        <img src={img} alt={alt} />
      </a>
    </div>
  );
};
export default Item;
