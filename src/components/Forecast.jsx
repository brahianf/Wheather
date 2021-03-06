import React from 'react';
import '../assets/styles/components/Forecast.scss';

const Forecast = (props) => {
  const { data, index } = props;
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  if(data===undefined || data.length===0){
    return (
      <div className='Forecast'>
        <p> loading ...</p>
      </div>
    )
  }

  if(index === 6 || index === 14 || index === 22){
    const codeIcon= data.weather[0].icon;
    const urlIcon=`http://openweathermap.org/img/wn/${codeIcon}@2x.png`;
    const number = new Date(data.dt_txt).getDay();
    const day = days[number]; 
    return (
      <div className='Forecast'>
        <img src={urlIcon}/>
        <div className='Forecast__day'>
          <p><b>{day} 📅</b></p>
          <p>{data.weather[0].main}</p>
        </div>
        <div className='Forecast__temp'>
          {
            <p>{Math.trunc(data.main.temp_max)}°</p>
          }
          <p>&nbsp;/&nbsp;</p>
          {
            <p>{Math.trunc(data.main.temp_min)}°</p>
          }
        </div>
      </div>
    );
  }
  return null;
};

export default Forecast;