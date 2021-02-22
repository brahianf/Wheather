import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = (props) => {

  return (
    <header className='header fadeInDown'>
      <Link className='header__brand' to='/'>
        <p>🌥   Weather  </p>
      </Link>
      <input placeholder='Buscar Ciudad'></input>
      <div className='header__button'>
        <p>User</p>
      </div>
    </header>
  );
};

export default Header;
