import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store/store";

import './App.css';
import HomePage from "./containers/HomePage/HomePage";


function App() {
  return (
     <Provider store={store}>
        <div className="App">
           <HomePage />
        </div>
     </Provider>

  );
}

export default App;
