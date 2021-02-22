import React from 'react';
import '../assets/styles/components/Forecast.scss';

const Forecast = (props) => {
  const { date } = props;

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  if(date==undefined){
    return (
      <div className='Forecast'>
        <h3>Cargando información</h3>
      </div>
    );
  } else {
    const codeIcon= date[0].weather[0].icon;
    const urlIcon=`http://openweathermap.org/img/wn/${codeIcon}@2x.png`;
    const number = new Date(date[0].dt_txt).getDay();
    const day = days[number]; 
    return (
      <div className='Forecast'>
        <img src={urlIcon}/>
        <div className='Forecast__day'>
          <p><b>{day}</b></p>
          <p>{date[0].weather[0].main}</p>
        </div>
        <div className='Forecast__temp'>
          {
            <p>{Math.trunc(date[0].main.temp_max)}°</p>
          }
          <p>&nbsp;/&nbsp;</p>
          {
            <p>{Math.trunc(date[0].main.temp_min)}°</p>
          }
        </div>
      </div>
    );
  }
};

export default Forecast;
