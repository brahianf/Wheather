import React from 'react';
import '../assets/styles/components/Location.scss';

const Location = (props) => {
  const { data } = props;
  const codeIcon= data.weather[0].icon;
  const urlIcon=`http://openweathermap.org/img/wn/${codeIcon}@2x.png`;
  return (
    <div className="location">
      <div className='location__detail'>
        <div>
          <img src={urlIcon}/>
        </div>
        <div>
          <p><b>{Math.trunc(data.main.temp)} °</b></p>
          <p><b>{data.name}, &nbsp;{data.sys.country}</b></p>
        </div>
      </div>
      <div className='location__wind'>
        {/* <p>{wheater.main}</p> */}
        <p>💦Humidity &nbsp; {data.main.humidity}%</p>
        <p>💨{data.wind.speed}&nbsp;Km/h</p>
      </div>
    </div>
  );
};

export default Location;
