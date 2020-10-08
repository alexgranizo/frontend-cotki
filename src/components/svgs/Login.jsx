import React from 'react';

const Login = (props) => {
  const { height, bodyColor } = props;
  return (
    <svg height={height} viewBox='0 0 24 24' width={height} fill={bodyColor} xmlns='http://www.w3.org/2000/svg'>
      <circle cx='6' cy='3' r='3' />
      <path d='M7.75 7h-3.5A3.254 3.254 0 001 10.25v4c0 1.255.849 2.304 2 2.633V22.5a1.5 1.5 0 003 0 1.5 1.5 0 003 0v-5.617a2.745 2.745 0 002-2.633v-4A3.254 3.254 0 007.75 7zM21.761 5.45l-3.5-3.25a.75.75 0 00-.51-.199c-.496 0-.751.422-.751.749V5h-4a1 1 0 100 2h4v2.25a.75.75 0 001.261.55l3.5-3.25a.754.754 0 000-1.1z' />
    </svg>
  );
};
export default Login;
