import {END_LOADING, ERROR, SET_DEFAULT_LOCATION_WEATHER, START_LOADING} from "../actions/actionTypes/weatherAT";

const initialState = {
   loading: false,
   error: '',
   current_weather: {main : {},},
};

export const weatherReducer = (state = initialState, action) => {
   switch (action.type) {
      case START_LOADING: {
         return {
            ...state,
            loading: true,
         }
      }
      case END_LOADING: {
         return {
            ...state,
            loading: false,
         }
      }
      case SET_DEFAULT_LOCATION_WEATHER: {
         return {
            ...state,
            current_weather: action.payload,
         }
      }
      case ERROR: {
         return {
            ...state,
            error: action.payload
         }
      }
      default: {
         return state;
      }
   }
}
