import { takeLatest, select, put, call } from 'redux-saga/effects';
import { fetchWeatherDataFailed, fetchWeatherDataRequest, fetchWeatherDataSuccess, geolocationFailed, geolocationSuccess } from '../actions';
import { weatherApi } from '../api/weatherApi';
import { FetchWeatherDataRequest, FETCH_WEATHER_DATA_REQUESTED, GeolocationRequest, GEOLOCATION_REQUESTED } from '../types/ActionTypes';

function* getGeolocationRequested(geolocationResult: GeolocationRequest) {
    if (geolocationResult.payload.coords) {
        yield put(geolocationSuccess(geolocationResult.payload.coords.latitude, geolocationResult.payload.coords.longitude));
        yield put(fetchWeatherDataRequest());
    } else {
        yield put(geolocationFailed(geolocationResult.payload.message));
        yield put(fetchWeatherDataRequest());
    }
}

function* fetchWeatherData(action: FetchWeatherDataRequest){
    const state = yield select();
    if (state.app.geolocation.latitude !== 0 && state.app.geolocation.longitude !== 0) {
        const latitude = state.app.geolocation.latitude;
        const longitude = state.app.geolocation.longitude;
        try {
            const weatherData = yield call(() => weatherApi(latitude, longitude));
            if (weatherData.status === 200) {
                yield put(fetchWeatherDataSuccess(weatherData.data));
            }
        } catch (error) {
            yield put(fetchWeatherDataFailed(error))
        }
    } else {
        yield put(fetchWeatherDataFailed('Unable to fetch weather data'))
    }
}

export default function* rootSaga () {
    yield takeLatest(GEOLOCATION_REQUESTED, getGeolocationRequested);
    yield takeLatest(FETCH_WEATHER_DATA_REQUESTED, fetchWeatherData);
}