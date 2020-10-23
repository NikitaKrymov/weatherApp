export interface Geolocation {
    longitude: number,
    latitude: number
}

export interface GeolocationError {
    code: number,
    message: string
}

export interface WeatherDataError {
    code: number,
    message: string
}

export interface AppReducer {
    geolocation: {
        longitude: number,
        latitude: number
    },
    weatherData: {
        data: any,
        status: number
    }
}

export interface ErrorsReducer {
    geolocationError: string | null,
    weatherDataError: string | null
}