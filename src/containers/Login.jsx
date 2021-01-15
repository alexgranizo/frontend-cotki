import React from 'react';
import LoginContainer from '../components/sessions/LoginContainer';
import BlackLogo from '../components/svgs/BlackLogo';
import '../assets/styles/global/index.css';

const Login = () => {
  return (
    <div>
      <a href='/'>
        <BlackLogo width='100px' />
      </a>
      <LoginContainer />
    </div>
  );
};
export default Login;
