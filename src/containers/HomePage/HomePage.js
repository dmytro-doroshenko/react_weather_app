import React, {useEffect, useState} from 'react';
import {bindActionCreators} from "redux";
import {getCurrentWeatherByCityName, getWeatherByCoords} from "../../actions/actionCreators/weatherAC";
import {connect} from "react-redux";
import CurrentWeatherInfo from "../../components/CurrentWeatherInfo/CurrentWeatherInfo";
import FavouriteLocations from "../../components/FavouriteLocations/FavouriteLocations";

function HomePage(props) {

   const {getWeatherByCityName, getWeatherByCoords} = props;
   const [searchCity, setSearchCity] = useState('');

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
         <CurrentWeatherInfo />
         <FavouriteLocations />
         <div>

         </div>

      </div>
   );
}



const mapStateToProps = (state) => {
   return {

   }
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
      getWeatherByCityName: getCurrentWeatherByCityName,
      getWeatherByCoords: getWeatherByCoords,
   }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
