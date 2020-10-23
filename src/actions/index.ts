import { GEOLOCATION_REQUESTED, GEOLOCATION_SUCCESS, GEOLOCATION_FAILED, FETCH_WEATHER_DATA_FAILED, FETCH_WEATHER_DATA_REQUESTED, FETCH_WEATHER_DATA_SUCCESS } from '../types/ActionTypes';


export const requestGeolocation = (geolocationResult: any) => ({
    type: GEOLOCATION_REQUESTED,
    payload: geolocationResult
});

export const geolocationSuccess = (latitude: number, longitude: number) => ({
    type: GEOLOCATION_SUCCESS,
    payload: { latitude, longitude}
});

export const geolocationFailed = (error: Error) => ({
    type: GEOLOCATION_FAILED,
    payload: error
});

export const fetchWeatherDataRequest = () => ({
    type: FETCH_WEATHER_DATA_REQUESTED
})

export const fetchWeatherDataSuccess = (weatherData: any) => ({
    type: FETCH_WEATHER_DATA_SUCCESS,
    payload: weatherData
});

export const fetchWeatherDataFailed = (error: any) => ({
    type: FETCH_WEATHER_DATA_FAILED,
    payload: error
})
