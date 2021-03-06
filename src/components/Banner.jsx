import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Banner.scss';
import clouds from '../assets/img/clouds.jpg';
import clear from '../assets/img/clear.jpg'
import snow from '../assets/img/snow.jpg';
import rain from '../assets/img/rain.jpg';
import drizzle from '../assets/img/drizzle.jpg'
import thunderstorm from '../assets/img/thunderstorm.jpg'
import map from '../assets/img/Map_pin_icon.svg'

const Banner = (props) => {

  const { data } = props;

  const backgroundImage = [
    { main: 'Clouds', image : clouds},
    { main: 'Clear', image : clear},
    { main: 'Snow', image : snow},
    { main: 'Rain', image : rain},
    { main: 'Drizzle', image : drizzle},
    { main: 'Thunderstorm', image : thunderstorm},
  ]

  const main= data.weather[0].main;
  const result = backgroundImage.find( back => back.main === main );

  return (
    <div className='banner fadeInDown' style={{backgroundImage: `url(${result.image})`}}>
      <div className='banner__detail'>
        <img src={map} alt='map'/>
        <p>{data.name}, &nbsp; {data.sys.country} <br/>{data.weather[0].description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ dataReducer }) => dataReducer;

export default connect(mapStateToProps)(Banner);