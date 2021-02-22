import React from 'react';
import '../assets/styles/components/Visit.scss';
import map from '../assets/img/Map_pin_icon.svg'

const Visit = (props) => {
  const { city, img} = props;
  return (
    <div className="visit" style={{backgroundImage: `url(${img})`}}>
      <img src={map} alt='map'/>
      <p>{city}</p>
    </div>
  );
};

export default Visit;