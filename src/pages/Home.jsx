import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/Home.scss';
import { getWheater, getWheaterForecast, getWheaterLocation} from '../redux/actions/dataActions';

import Banner from '../components/Banner';
import Weather from '../components/Weather';
import Forecast from '../components/Forecast';

const Home = (props) => {
  const { data, dataForecast, dataLocation, loading, error} = props;

  const getData = async (nameCity) => {
    await props.getWheater(nameCity);
    await props.getWheaterForecast(nameCity);
  };

  const getDataLocation = async (nameCity) => {
    await props.getWheaterLocation(nameCity);
  };


  useEffect(() => {
    getData('bogota');
    getDataLocation('paris');
    getDataLocation('lyon');
  }, [data.lenght]);
  
  if(loading || data==undefined){
    return (
      <div className='home'>
      <div className='home__container'>
        <h3>...loading...</h3>
      </div>
    </div>
    );
  }else{
    return (
      <div className='home'>
        <div className='home__container'>
        {data.lenght!=0 && 
             <Banner 
             city={data.name}
             country={data.sys.country}
             description={data.weather[0].description}
           />
        }
        {data.lenght!=0 && 
          <Weather 
            temp={data.main.temp} 
            wheater={data.weather[0]}
          />
        }

        <section className='home__container--section'>
          <div className='home__container--forecast'>
              <p className='home__container--forecast-title'><b>3 Days</b> Forecast</p>
              <Forecast 
                date={dataForecast.list}
              />
              <Forecast 
                date={dataForecast.list}
              />
              <Forecast 
                date={dataForecast.list}
              />
          </div>
        </section>

        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ dataReducer }) => dataReducer;
const mapDispatchToProps = {
  getWheater,
  getWheaterForecast,
  getWheaterLocation
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);