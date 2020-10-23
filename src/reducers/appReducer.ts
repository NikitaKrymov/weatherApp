import { AppActions, FETCH_WEATHER_DATA_SUCCESS, GEOLOCATION_SUCCESS } from "../types/ActionTypes";
import { AppReducer } from "../types/Interfaces";

const INITIAL_STATE: AppReducer = {
    geolocation: {
        longitude: 0,
        latitude: 0
    },
    weatherData: {
        data: {},
        status: 0
    }
}

export default (state = INITIAL_STATE, action: AppActions) => {
    switch(action.type){
        case FETCH_WEATHER_DATA_SUCCESS:
            return {...state, weatherData: { data: action.payload, status: 200 }};
        case GEOLOCATION_SUCCESS:
            return {...state, geolocation: { longitude: action.payload.longitude, latitude: action.payload.latitude }};
        default: 
            return state;
    }

}