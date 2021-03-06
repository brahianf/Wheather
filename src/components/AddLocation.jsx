import React from 'react';
import '../assets/styles/components/AddLocation.scss';
import map from '../assets/img/Map_pin_icon.svg'

const AddLocation = (props) => {
  return (
    <div className="AddLocation">
      <div className='AddLocation__image'>
        <img src={map} alt='map'/>
        {/* <img></img> */}
      </div>
      <div className='AddLocation__button'>
        <button>Add Locations</button>
      </div>
    </div>
  );
};

export default AddLocation;
