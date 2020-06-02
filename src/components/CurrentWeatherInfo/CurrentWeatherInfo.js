import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

function CurrentWeatherInfo({weatherInfo}) {
    const {name, main: {temp}, dt} = weatherInfo;

    return (
        <div>
            <p>{name}</p>
            <p>{temp}</p>
            <button>Fav.</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        weatherInfo: state.weatherReducer.current_weather,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherInfo);