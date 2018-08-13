import axios from 'axios'

const API_KEY = '00ea796fb5fb81a62167b1e246992ca6'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city}`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
