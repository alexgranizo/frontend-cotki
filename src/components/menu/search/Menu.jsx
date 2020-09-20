import React from 'react';
import Select from './Select';
import Caret from '../../../assets/static/images/caret.svg';
import '../../../assets/styles/menu/search/Menu.css';

class Menu extends React.Component {
  state = {
    pasillo: 'Busca por pasillo',
  };

  // handleClick = (e) => {
  //   this.setState({
  //     pasillo: e.target.value,
  //   });
  // };

  handleChange = (e) => {
    this.setState({
      pasillo: e.target.value,
    });
  }

  render() {
    const { pasillo } = this.state;
    return (
      <div className='container-search-menu'>
        <div className='search-menu-navbar' role='button' tabIndex={0}>
          <div className='search-menu'>
            <span>{pasillo}</span>
            <img src={Caret} alt='icono de menu' />
          </div>
          <Select onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
export default Menu;
