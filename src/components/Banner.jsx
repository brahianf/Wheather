import React from 'react';
import '../assets/styles/components/Banner.scss';
import bannerImage from '../assets/img/banner-sky3.jpg';
import map from '../assets/img/Map_pin_icon.svg'

const Banner = (props) => {
  const { city, country, description} = props;
  if(city==undefined || country==undefined || description==undefined){
    return(
      <div>
        <h3>... loading </h3>
      </div>
    );
  }else {
    return (
      <div className='banner fadeInDown' style={{backgroundImage: `url(${bannerImage})`}}>
        <div className='banner__detail'>
          <img src={map} alt='map'/>
          <p>{city}, &nbsp; {country} <br/>{description}</p>
        </div>
      </div>
    );
  }
};

export default Banner;
