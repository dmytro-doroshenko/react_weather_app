import React, {useEffect, useState} from 'react';
import {bindActionCreators} from "redux";
import {getCurrentWeatherByCityName, getWeatherByCoords} from "../../actions/actionCreators/weatherAC";
import {connect} from "react-redux";

function HomePage(props) {

   const {getWeatherByCityName, getWeatherByCoords, weatherInfo} = props;
   const {name, main: {temp}, dt} = weatherInfo;
   const [searchCity, setSearchCity] = useState('');

   const d = new Date(Date.now());
   const ds = new Date(dt * 1000)
   console.log('d', d);
   console.log('ds', ds);
   console.log(weatherInfo);

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         (position) => {
            const latitude = position.coords.latitude.toFixed(3);
            const longitude = position.coords.longitude.toFixed(3);
            getWeatherByCoords(latitude, longitude);
         },
         () => {
            getWeatherByCoords();
         },
      );
   }, []);

   const getWeather = (event) =>  {
      getWeatherByCityName(searchCity);
      event.preventDefault();
   }

   return (
      <div>
         home page
         <form onSubmit={(e) => getWeather(e)}>
            <input value={searchCity} onChange={(e) => setSearchCity(e.target.value)}/>
            <input type='submit' />
         </form>
         <div>
            <p>{name}</p>
            <p>{temp}</p>
         </div>
      </div>
   );
}



const mapStateToProps = (state) => {
   return {
      weatherInfo: state.weatherReducer.current_weather,
   }
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
      getWeatherByCityName: getCurrentWeatherByCityName,
      getWeatherByCoords: getWeatherByCoords,
   }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
