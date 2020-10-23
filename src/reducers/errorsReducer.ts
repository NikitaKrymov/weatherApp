import { AppActions, FETCH_WEATHER_DATA_FAILED, GEOLOCATION_FAILED } from "../types/ActionTypes";
import { ErrorsReducer } from "../types/Interfaces";

const INITIAL_STATE: ErrorsReducer = {
    geolocationError: null,
    weatherDataError: null
}

export default (state = INITIAL_STATE, action: AppActions) => {
    switch(action.type){
        case GEOLOCATION_FAILED:
            return {...state, geolocationError: action.payload.message };
        case FETCH_WEATHER_DATA_FAILED:
            return {...state, weatherDataError: action.payload.message };
        default:
            return state;
    }
}