import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../../assets/styles/product-slide/Slide.css';

const ProductSlide = (props) => {
  const { images, title } = props;

  const fadeProperties = {
    transitionDuration: 400,
    autoplay: false,
  };

  return (
    <div className='container-product-slide'>
      <div className='slide-container-product-slide'>
        <h4>{title}</h4>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slide {...fadeProperties}>
          <div className='each-fade-product-slide'>
            <div>
              <img src={images[0]} alt=' ' />
            </div>
            <div>
              <img src={images[1]} alt='' />
            </div>
            <div>
              <img src={images[2]} alt='' />
            </div>
            <div>
              <img src={images[3]} alt='' />
            </div>
            <div>
              <img src={images[4]} alt='' />
            </div>
          </div>
          <div className='each-fade-product-slide'>
            <div>
              <img src={images[5]} alt='' />
            </div>
            <div>
              <img src={images[6]} alt='' />
            </div>
            <div>
              <img src={images[7]} alt='' />
            </div>
            <div>
              <img src={images[8]} alt='' />
            </div>
            <div>
              <img src={images[0]} alt='' />
            </div>
          </div>
          <div className='each-fade-product-slide'>
            <div>
              <img src={images[1]} alt='' />
            </div>

            <div>
              <img src={images[2]} alt='' />
            </div>
            <div>
              <img src={images[3]} alt='' />
            </div>
            <div>
              <img src={images[4]} alt='' />
            </div>
            <div>
              <img src={images[0]} alt='' />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ProductSlide;
