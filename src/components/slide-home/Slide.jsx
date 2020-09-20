import React from 'react';
import { Slide } from 'react-slideshow-image';
import Cuad from '../../assets/static/images/slide/cuad.jpg';
import Sandia from '../../assets/static/images/slide/sandia.jpg';
import Meat from '../../assets/static/images/slide/fresca.jpg';
import '../../assets/styles/slide/Slide.css';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
  const images = [Cuad, Sandia, Meat];

  //   const fadeProperties = {
  //     duration: 4000,
  //     pauseOnHover: true,
  //     transitionDuration: 300,
  //   };

  return (
    <div className='slide'>
      <div className='slide-container'>
        <Slide duration={4000} pauseOnHover={true} transitionDuration={300}>
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
