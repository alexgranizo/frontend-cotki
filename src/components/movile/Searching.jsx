import React from 'react';
import Search from '../menu/search/Search';
import '../../assets/styles/movile/Searching.css';

const Searching = () => {
  return (
    <div className='main-home-movile-container'>
      <div className='main-home-movile-title'>
        <h1>
          Tus compras sin salir de casa
        </h1>
      </div>
      <div className='main-home-movile-form'>
        <Search />
      </div>

    </div>
  );
};
export default Searching;
