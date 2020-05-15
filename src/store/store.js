import {applyMiddleware, createStore} from "redux";
import Thunk from 'redux-thunk';
import rootReducer from '../reducers';

const loggerMiddleware = (store) => (next) => (action) => {

   next(action);
}

export const store = createStore(rootReducer, applyMiddleware(Thunk));
