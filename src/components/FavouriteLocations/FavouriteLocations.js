import React from 'react';
import {connect} from "react-redux";

function FavouriteLocations({locationsToDisplay}) {
    //const {name, main: {temp}, dt} = weatherInfo;
    console.log(locationsToDisplay);
    return (
        <div>
            <p>{locationsToDisplay}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        locationsToDisplay: state.weatherReducer.favouriteList,
    }
};

export default connect(mapStateToProps)(FavouriteLocations);