import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/Home.scss';
import { getWheater, getWheaterForecast, getWheaterLocation} from '../redux/actions/dataActions';

import Banner from '../components/Banner';

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