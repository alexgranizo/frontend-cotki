import React from 'react';
import '../../../assets/styles/menu/menu-categories/MenuCategories.css';

const Layer = (props) => {
  const { handleClick, style } = props;
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div className={style} role='button' tabIndex={0} onClick={handleClick} />
  );
};
export default Layer;
