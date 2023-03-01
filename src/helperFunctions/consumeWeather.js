import getWeather from "./getWeather.js";
import determineWind from "./determineWind.js";

/* This function gets passed a state and a setState, which it uses to consume a fetch promise, and setState to an object of fetched data. */

export default function consumeWeather(location, setWeatherData, setLoaded) {
  getWeather(location).then((data) => {
    const tempObj = {
      city: data.name,
        state: location[1],
        lat: data.coord.lat,
        lon: data.coord.lon,
        actualTemp: Math.round(data.main.temp),
        feelsLikeTemp: Math.round(data.main.feels_like),
        highTemp: Math.round(data.main.temp_max),
        lowTemp: Math.round(data.main.temp_min),
        humidity: data.main.humidity,
        currentWeather: data.weather[0].description,
        weatherIconCode: [data.weather[0].icon],
        windDirection: determineWind(data.wind.deg),
        windSpeed: Math.round(data.wind.speed * 10) / 10,
        gustSpeed: Math.round((data.wind.gust ?? 0) * 10) /10,
        cloudCover: data.clouds.all,
        hourRainTotal: data.rain?.["1h"] ?? 0,      
    };

      setWeatherData(tempObj);
      setLoaded(true);      
    })
    .catch((e) => console.error(e)); 
}
