import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Weather.scss';

const Weather = (props) => {
  const { data, loading } = props;

  if(loading || data===undefined){
    return (
      <div className='weather'>
        <p> ... ... ... </p>
      </div>
    );
  } 
  const codeIcon = data.weather[0].icon;
  const urlIcon =`http://openweathermap.org/img/wn/${codeIcon}@2x.png`;
  return (
    <div className='weather'>
      <div className='weather__wh'>
        <img src={urlIcon}/>
        <p>{data.weather[0].main}</p>
      </div>
      <div className='weather__temp'>
        <p>🌡️ {Math.trunc(data.main.temp)}&nbsp;°C</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ dataReducer }) => dataReducer;

export default connect(mapStateToProps)(Weather);