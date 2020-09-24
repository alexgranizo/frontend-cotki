import React, { useState } from 'react';
import ArrowRight from '../svgs/ArrowRight';
import '../../assets/styles/slide/Arrows.css';

const NextArrow = () => {
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
    className = 'next-arrow';
    color = 'white';
  } else {
    className = 'next-arrow hover-arrow-next';
    color = '#ff3e11';
  }
  return (
    <button type='button' className={className} onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <ArrowRight color={color} height='25px' />
    </button>
  );
};
export default NextArrow;
