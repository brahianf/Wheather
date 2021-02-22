import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/Home.scss';
import { getWheater, getWheaterForecast, getWheaterLocation} from '../redux/actions/dataActions';


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