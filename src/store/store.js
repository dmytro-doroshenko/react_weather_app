import {applyMiddleware, createStore} from "redux";
import Thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {saveWeatherInfoToLocalStorage} from "../middlewares";

export const store = createStore(rootReducer, applyMiddleware(Thunk, saveWeatherInfoToLocalStorage));
