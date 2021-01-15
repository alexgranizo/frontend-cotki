import React from 'react';
import Youtube from '../svgs/Youtube';
import Instagram from '../svgs/Instagram';
import Facebook from '../svgs/Facebook';
import Whatsapp from '../svgs/Whatsapp';
import logo from '../../assets/static/images/cotki__tipo1.svg';
import '../../assets/styles/footer/Footer.css';
import Links from './Links';

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
        <Links className='footer-info' title='Conócenos' name1='Vende tus productos' link1='/' name2='Afiliate' link2='/' name3='Trabaja con nosotros' link3='/' name4='Agenda una cita' link4='/' />
        <Links className='footer-others' title='Gana dinero con nosotros' name1='¿Cómo ser socio?' link1='/' name2='Developers' link2='/' name3='Vacantes' link3='/' name4='Referidos' link4='/' />

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
