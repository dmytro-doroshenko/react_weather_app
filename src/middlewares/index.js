import {SET_DEFAULT_LOCATION_WEATHER} from "../actions/actionTypes/weatherAT";

export const saveWeatherInfoToLocalStorage = (store) => (next) => (action) => {
   console.log('dispatching', action);

   if (action.type === SET_DEFAULT_LOCATION_WEATHER) {
      const {payload} = action;
      const {id} = payload;

      let dataFromStorageString = localStorage.getItem('weatherStorage');
      let dataFromStorage = JSON.parse(dataFromStorageString) || [];
      let dataForStorageString;

      try {
         let dataForStorage = dataFromStorage.filter(item => item.id !== id);
         dataForStorage.push(payload);
         dataForStorageString = JSON.stringify(dataForStorage);
         }
      catch(e) {
         console.log('error happened while saving data to local storage');
      }
      localStorage.setItem('weatherStorage', dataForStorageString);
   }




   return next(action);
}
