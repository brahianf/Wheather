import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import Search from './SearchHeader';

const Header = (props) => {

  return (
    <header className='header fadeInDown'>
      <Link className='header__brand' to='/'>
        <p>🌥   Weather  </p>
      </Link>
      <Search />
      <div className='header__button'>
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
