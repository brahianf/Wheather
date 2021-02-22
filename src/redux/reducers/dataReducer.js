const INITIAL_STATE = {
  error: null,
  loading: true,
  data: [],
  dataForecast: [],
  dataLocation: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      }
      case 'DATA_FORECAST':
        return {
          ...state,
          dataForecast: action.payload,
          loading: false,
          error: null,
        }
      case 'DATA_LOCATION':
        return {
          ...state,
          dataLocation: [action.payload, ...state.dataLocation],
          loading: false,
          error: null,
        }
    default:
      return state;
  }
};