import getWeather from "./getWeather.js";
import determineWind from "./determineWind.js";

/* This function gets passed a state and a setState, which it uses to consume a fetch promise, and setState to an object of fetched data. */

export default function consumeWeather(location, setWeatherData, setLoaded) {
  getWeather(location)
    .then((data) => {
      const tempObj = {
        city: data.name,
        state: location[1],
        lat: data.coord.lat,
        lon: data.coord.lon,
        actualTemp: Math.round(data.main.temp),
        feelsLikeTemp: Math.round(data.main.feels_like),
        highTemp: Math.round(data.main.temp_max),
        lowTemp: Math.round(data.main.temp_min),
        pressure: Math.round(data.main.pressure * 0.02953 * 100) / 100,
        humidity: data.main.humidity,
        dewPoint: Math.round(
          ((data.main.temp - 32) * (5 / 9) - (100 - data.main.humidity) / 5) *
            (9 / 5) +
            32
        ),
        currentWeather: data.weather[0].description,
        weatherIconCode: [data.weather[0].icon],
        windDirection: determineWind(data.wind.deg),
        windSpeed: Math.round(data.wind.speed * 10) / 10,
        gustSpeed: Math.round((data.wind.gust ?? 0) * 10) / 10,
        cloudCover: data.clouds.all,
        hourRainTotal:
          Math.round((data.rain?.["1h"] ?? 0) * 0.0393701 * 100) / 100,
        hourSnowTotal:
          Math.round((data.snow?.["1h"] ?? 0) * 0.0393701 * 100) / 100,
      };

      setWeatherData(tempObj);
      setLoaded(true);
    })
    .catch((e) => console.error(e));
}
