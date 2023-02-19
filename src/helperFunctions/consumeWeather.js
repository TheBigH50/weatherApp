import getWeather from "./getWeather.js";

/* This function gets passed a state and a setState, which it uses to consume a fetch promise, and setState to an object of fetched data. */

export default function consumeWeather(location, setWeatherData) {
  getWeather(location).then((data) => {
    const tempObj = {
      city: data.name,
      state: location[1],
      lat: data.coord.lat,
      lon: data.coord.lon,
      actualTemp: data.main.temp,
      feelsLikeTemp: data.main.feels_like,
      highTemp: data.main.temp_max,
      lowTemp: data.main.temp_min,
      humidity: data.main.humidity,
      currentWeather: data.weather[0].description,
      weatherIconCode: data.weather[0].icon,
      windDirection: data.wind.deg,
      windSpeed: data.wind.speed,
      gustSpeed: data.wind.gust,
      cloudCover: data.clouds.all,
      hourRainTotal: data.rain === undefined ? 0 : data.rain["1h"],

      buildWeatherIconURL(weatherIconCode) {
        const url = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;
        return url;
      },
    };

    setWeatherData(tempObj);
  });
}
