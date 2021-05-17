const { config } = require('../../config/index');
import { fetchData } from '../../utils/fetchData.js'

const URL_API = config.URL_API;
const API_KEY = config.weatherAppId;

export const getWheater = (nameCity) => async (dispatch) => {
  try {
    // const data = await fetchData(`${URL_API}weather?q=${nameCity}&units=metric&appid=${API_KEY}`);
    const response = await fetch(`${URL_API}weather?q=${nameCity}&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    dispatch({
      type: 'DATA',
      payload: data,
    });
  } catch (error) {
    console.error('getWheater -> err', error);
  }
};

export const getWheaterForecast = (nameCity) => async (dispatch) => {
  try {
    // const data = await fetchData(`${URL_API}forecast?q=${nameCity}&units=metric&cnt=24&appid=${API_KEY}`);
    const response = await fetch(`${URL_API}forecast?q=${nameCity}&units=metric&cnt=24&appid=${API_KEY}`);
    const data = await response.json();
    dispatch({
      type: 'DATA_FORECAST',
      payload: data,
    });
  } catch (error) {
    console.error('getWheaterForecast -> err', error);
  }
};

export const getWheaterLocation = (nameCity) => async (dispatch) => {
  try {
    // const data = await fetchData(`${URL_API}weather?q=${nameCity}&units=metric&appid=${API_KEY}`);
    const response = await fetch(`${URL_API}weather?q=${nameCity}&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    dispatch({
      type: 'DATA_LOCATION',
      payload: data,
    });
  } catch (error) {
    console.error('getWheaterLocation -> err', error);
  }
};
