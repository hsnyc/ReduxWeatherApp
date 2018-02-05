import axios from 'axios';

const API_KEY = '4078a69384eb9bcb3e4585c986b1c2b6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATER = 'FETCH_WEATHER'; 

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATER,
        payload: request
    }

}