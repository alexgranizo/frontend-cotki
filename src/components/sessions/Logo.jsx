import React from 'react';
import { Link } from 'react-router-dom';
import BlackLogo from '../svgs/BlackLogo';
import '../../assets/styles/sessions/Logo.css';

const Logo = () => {
  return (
    <>
      <div className='logo-return-home'>
        <Link to='/' rel='canonical'>
          <BlackLogo width='110px' />
        </Link>
      </div>
    </>
  );
};
export default Logo;
