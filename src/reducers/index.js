import {combineReducers} from "redux";
import {weatherReducer} from "./weatherReducer";

const reducers = combineReducers( {
   weatherReducer,
});

export default reducers;
