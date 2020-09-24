import React from 'react';
import { Slide } from 'react-slideshow-image';
import Cuad from '../../assets/static/images/slide/cuad.jpg';
import Sandia from '../../assets/static/images/slide/sandia.jpg';
import Meat from '../../assets/static/images/slide/fresca.jpg';
import '../../assets/styles/slide/Slide.css';
import 'react-slideshow-image/dist/styles.css';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const Slider = () => {
  const images = [Cuad, Sandia, Meat];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    pauseOnHover: true,
    prevArrow: <div style={{ width: '30px', marginRight: '-30px' }}><PrevArrow /></div>,
    nextArrow: <div style={{ width: '30px', marginLeft: '-100px' }}><NextArrow /></div>,
  };

  return (
    <div className='slide'>

      <div className='slide-container'>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slide {...properties}>
          <div className='each-fade'>
            <img src={images[0]} alt='Imagenq2' />
          </div>
          <div className='each-fade'>
            <img src={images[1]} alt='Imagenq2' />
          </div>
          <div className='each-fade'>
            <img src={images[2]} alt='Imagenq2' />
          </div>
        </Slide>
      </div>

    </div>
  );
};

export default Slider;
