import React from 'react';
import Youtube from '../svgs/Youtube';
import Instagram from '../svgs/Instagram';
import Facebook from '../svgs/Facebook';
import Whatsapp from '../svgs/Whatsapp';
import logo from '../../assets/static/images/cotki__tipo1.svg';
import '../../assets/styles/footer/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-logo-cotki'>
            <img src={logo} alt='logo cotki' />
          </div>
          <div className='footer-description'>
            Somos una empresa lider en la distribucion de productos de consumo
            masivo, llegando a donde nadie mas quizo llegar.
          </div>
          <hr />
          <div className='footer-container-network'>
            <h4>Nuestras redes sociales</h4>
            <div className='footer-network'>
              <div className='network-item'>
                <Facebook height='30px' />
              </div>
              <div className='network-item'>
                <Whatsapp height='30px' />
              </div>
              <div className='network-item'>
                <Youtube height='30px' />
              </div>
              <div className='network-item'>
                <Instagram height='33px' />
              </div>
            </div>
          </div>
        </div>
        <div className='footer-info'>
          <h4>Conecta con nosotros en:</h4>
          <div>
            <span>hOLA COMO TE LLAMS</span>
          </div>
        </div>
        <div className='footer-others'>asd asd</div>
        <div className='footer-legal'>asdasd</div>

        <div className='footer-links'>
          <hr width='100%' className='footer-lines' />
          <a href='/'>Política de uso</a>
          <a href='/'>Aviso legal</a>
          <a href='/'>Política de privacidad</a>
          <a href='/'>Política de reembolso</a>
          <a href='/'>Política de envíos</a>
          <a href='/'>Política de geolocalización</a>
          <a href='/'>Base legal</a>
          <a href='/'>Aviso</a>
        </div>
      </div>
    );
  }
}
export default Footer;
