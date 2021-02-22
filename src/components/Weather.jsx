import React from 'react';
import '../assets/styles/components/Weather.scss';

const Weather = (props) => {
  const { temp, wheater} = props;
  const codeIcon= wheater.icon;
  const urlIcon=`http://openweathermap.org/img/wn/${codeIcon}@2x.png`;
  return (
    <div className='weather'>
      <div className='weather__wh'>
        <img src={urlIcon}/>
        <p>{wheater.main}</p>
      </div>
      <div className='weather__temp'>
        <p>{Math.trunc(temp)}°C</p>
      </div>
    </div>
  );
};

export default Weather;
