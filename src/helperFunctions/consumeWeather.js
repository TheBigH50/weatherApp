import getWeather from "./getWeather.js";
import determineWind from "./determineWind.js";

/* This function gets passed a state and a setState, which it uses to consume a fetch promise, and setState to an object of fetched data. */

export default function consumeWeather(location, setWeatherData) {
  // getWeather(location).then((data) => {
    const tempObj = {
      city: "Saint Joseph",
      state: "MN",
      lat: 45.5645,
      lon: -94.3181,
      actualTemp: 7,
      feelsLikeTemp: -3,
      highTemp: 11,
      lowTemp: 7,
      humidity: 86,
      currentWeather: "light snow",
      weatherIconCode: ["10d"],
      windDirection: determineWind(44),
      windSpeed: 6,
      gustSpeed: 20,
      cloudCover: 100,
      hourRainTotal: 0,      
    };

      setWeatherData(tempObj);
    // })
    // .catch((e) => console.error(e));
}
