import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/Home.scss';
import loaderGif from '../assets/img/loader.gif';
import { getWheater, getWheaterForecast, getWheaterLocation} from '../redux/actions/dataActions';

import Banner from '../components/Banner';
import Weather from '../components/Weather';
import Forecast from '../components/Forecast';
import Visit from '../components/Visit';
import shawarma from '../assets/img/shawarma.jpg';
import musseum from '../assets/img/Art_Science_Museum.jpg';
import Location from '../components/Location';
import AddLocation from '../components/AddLocation';

const Home = (props) => {
  const { data, dataForecast, dataLocation, loading, error} = props;

  const getDataLocation = async (nameCity) => {
    await props.getWheaterLocation(nameCity);
  };

  const getData = async (nameCity) => {
    await props.getWheater(nameCity);
    await props.getWheaterForecast(nameCity);
  };

  useEffect(() => {
    getData('bogota');
    getDataLocation('paris');
    getDataLocation('lyon');
  }, [data.length]);

  if(loading || data===undefined || data.length===0){
    return (
      <div className='home'>
      <div className='home__container'>
        <figure><img src={loaderGif} alt="Loading"/></figure>
      </div>
    </div>
    );
  }

  return (
    <div className='home'>
      <div className='home__container'>
        <Banner />
        <Weather />

        <section className='home__container--section'>
          <div className='home__container--forecast'>
            <p className='home__container--forecast-title'><b>3 Days</b> Forecast</p>
            {dataForecast.length!=0 && 
              dataForecast.list.map((data, index) => (
                <Forecast data={data} index={dataForecast.list.indexOf(data)} key={index}/>
            ))}
          </div>
          
          <div  className='home__container--visit'>
            <p className='home__container--visit-title'><b>Place</b> To Visit</p>
            <div className='home__container--visit-grid'>
              <div className='home__container--visit-item1'>
                <Visit city={"Arab Street singapore"} img={shawarma}/>
              </div>
              <div className='home__container--visit-item2'>
                <Visit city={"Art Science Museeum"} img={shawarma}/>
              </div>
              <div className='home__container--visit-item3'>
                <Visit city={"Fountain of south"} img={musseum}/>
              </div>
            </div>
          </div>

          <div className='home__container--locations'>
            <p  style={{fontSize:'22px', textAlign:'center'}}><b>Locations</b></p>
            {dataLocation.length!=0 && 
              dataLocation.map((data, index) => (
                <Location data={data} key={index} />
            ))}
            <AddLocation/>
          </div>
        </section>

      </div>
    </div>
  );
};

const mapStateToProps = ({ dataReducer }) => dataReducer;
const mapDispatchToProps = {
  getWheater,
  getWheaterForecast,
  getWheaterLocation
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);