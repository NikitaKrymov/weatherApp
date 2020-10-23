import axios from 'axios';

const WEATHER_API_KEY = 'eafad800aa0c4f8a899183226201110';

export const weatherApi = (lat: number, lon: number) => axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=7`);