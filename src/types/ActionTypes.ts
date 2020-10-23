import { Geolocation, GeolocationError, WeatherDataError } from './Interfaces';

export const GEOLOCATION_REQUESTED = 'GEOLOCATION_REQUESTED';
export const GEOLOCATION_SUCCESS = 'GEOLOCATION_SUCCESS';
export const GEOLOCATION_FAILED = 'GEOLOCATION_FAILED';


export const FETCH_WEATHER_DATA_REQUESTED = 'FETCH_WEATHER_DATA_REQUESTED';
export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_FAILED = 'FETCH_WEATHER_DATA_FAILED';

export interface FetchWeatherDataRequest {
    type: typeof FETCH_WEATHER_DATA_REQUESTED
}

export interface FetchWeatherDataSuccess {
    type: typeof FETCH_WEATHER_DATA_SUCCESS,
    payload: any
}

export interface FetchWeatherDataFailed {
    type: typeof FETCH_WEATHER_DATA_FAILED,
    payload: WeatherDataError
}

export interface GeolocationRequest {
    type: typeof GEOLOCATION_REQUESTED,
    payload: any
}

export interface GeolocationSuccess {
    type: typeof GEOLOCATION_SUCCESS,
    payload: Geolocation
}

export interface GeolocationFailed {
    type: typeof GEOLOCATION_FAILED,
    payload: GeolocationError
}

export type AppActions = GeolocationSuccess | GeolocationRequest | GeolocationFailed | FetchWeatherDataFailed | FetchWeatherDataRequest | FetchWeatherDataSuccess;