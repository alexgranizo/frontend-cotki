import React, { useState } from 'react';
import ArrowLeft from '../svgs/ArrowLeft';
import '../../assets/styles/slide/Arrows.css';

const PrevArrow = () => {
  const [style, setStyle] = useState(true);
  let className;
  let color;
  function handleLeave() {

    setStyle(true);
  }
  function handleHover() {
    setStyle(false);

  }
  if (style) {
    className = 'prev-arrow';
    color = 'white';
  } else {
    className = 'prev-arrow hover-arrow';
    color = '#ff3e11';
  }
  return (
    <button type='button' className={className} onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <ArrowLeft color={color} height='25px' />
    </button>
  );
};
export default PrevArrow;
