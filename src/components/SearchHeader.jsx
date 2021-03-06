import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getWheater, getWheaterForecast } from '../redux/actions/dataActions';
import searchIcon from '../assets/img/search-icon.svg';

const Search = (props) => {

  const [search, setSearch] = useState({
    seeker: ''
  });

  const keyName = search.seeker;

  const handleClick = async () => {
    await props.getWheater(keyName);
    await props.getWheaterForecast(keyName);
  };

  return (
    <form
      className='header__search'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >

      <input
        className='header__search--input'
        type='search'
        onChange={(e) => {
          setSearch({
            ...search,
            [e.target.name]: e.target.value,
          });
        }}
        name='seeker'
        id=''
        placeholder='Search City'
        value={search.seeker}
      />

      <button
        className='header__search--button'
        type='submit'
        onClick={handleClick}
      >
        <img src={searchIcon} alt='Search Event' />
      </button>
    </form>
  );
};

const mapStateToProps = ({ dataReducer }) => dataReducer;

const mapDispatchToProps = {
  getWheater,
  getWheaterForecast  
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
