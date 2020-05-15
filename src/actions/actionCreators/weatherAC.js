import {END_LOADING, ERROR, SET_DEFAULT_LOCATION_WEATHER, START_LOADING} from "../actionTypes/weatherAT";
import {api_key, api_key_alt, default_url} from "../../constants/constants";


export const setDefaultLocationWeatherAC = (weather) => ({type: SET_DEFAULT_LOCATION_WEATHER, payload: weather});
export const startLoadingAC = () => ({type: START_LOADING});
export const endLoadingAC = () => ({type: END_LOADING});
export const getErrorAC = (error) => ({type: ERROR, payload: error})

export const getCurrentWeatherByCityName = (cityName) => (dispatch) => {

   const url = `${default_url}?q=${cityName}&appid=${api_key_alt}&units=metric`;

   fetch(url)
      .then( response => {
         if (response.ok) {
            return response.json()
         } else{
            throw Error(response.statusText)
         }  })
      .then( result => dispatch(setDefaultLocationWeatherAC(result)) )
      .catch(error => {
         console.log(error)
         dispatch(getErrorAC(error))
      })
}

export const getWeatherByCoords = (latitude = 51.51, longitude = -0.13) => (dispatch) => {

   const url = `${default_url}?lat=${latitude}&lon=${longitude}&appid=${api_key_alt}&units=metric`;

   fetch(url)
      .then( response => response.json() )
      .then( result => dispatch(setDefaultLocationWeatherAC(result)) )
}

