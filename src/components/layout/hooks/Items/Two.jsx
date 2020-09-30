import React from 'react';
import One from '../../../../assets/static/images/layout/rufless.jpg';
import TwoImage from '../../../../assets/static/images/layout/coca-horizontal.png';
import Three from '../../../../assets/static/images/layout/cine.jpg';
import '../../../../assets/styles/layout/hooks/items/Two.css';

class Two extends React.Component {
  constructor() {
    super();
    this.state = {
      boolean: false,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.boolean === true) {
        this.setState({
          boolean: false,
        });
        // eslint-disable-next-line react/destructuring-assignment
        console.log(this.state.boolean);
      } else {
        this.setState({
          boolean: true,
        });
        // eslint-disable-next-line react/destructuring-assignment
        console.log(this.state.boolean);
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
  //estilos
    let aniOne;
    let aniTwo;

    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.boolean === true) {
      aniOne = 'animation-event-one';
    } else {
      aniTwo = 'animation-event-two';
    }

    const classNameOne = `menu-categories-two-item-one-animation-one ${aniOne}`;
    const classNameTwo = `menu-categories-two-item-one-animation-two ${aniTwo}`;
    return (
      <div className='menu-categories-container-two'>
        <div className='menu-categories-two-title'>
          <h2>Promociones</h2>
        </div>
        <div className='menu-categories-two-items'>
          <div className='menu-categories-two-item-one'>
            <a href='https://platzi.com' className={classNameOne}>
              <img src={TwoImage} alt='Imagen de prueba 1' />
            </a>
            <a href='/' className={classNameTwo}>
              <img src={One} alt='Imagen de prueba 1' />
            </a>
          </div>
          <div className='menu-categories-two-item-two'>
            <a href='/'>
              <img src={TwoImage} alt='Imagen de prueba 4' />
            </a>
          </div>
          <div className='menu-categories-two-item-three'>
            <a href='/'>
              <img src={Three} alt='Imagen de prueba 3' />
            </a>
          </div>
        </div>
      </div>
    );
  }
};
export default Two;
