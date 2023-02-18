/* This function is two nested fetches, the first takes in the search location array to get geoCords, the second uses those cords to build and return a weatherData object. */

export default async function getWeather(locationPairArr) {
  const city = locationPairArr[0];
  const state = locationPairArr[1];
  try {
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=826c0b8bd9ecf523fabd78daf3fabeaf`
    );
    const geoData = await geoResponse.json();
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    const cityName = geoData[0].name;
    const stateName = geoData[0].state;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=826c0b8bd9ecf523fabd78daf3fabeaf&units=imperial`
    );

    const weatherData = await weatherResponse.json();
    const actualTemp = weatherData.main.temp;
    const feelsLikeTemp = weatherData.main.feels_like;
    const highTemp = weatherData.main.temp_max;
    const lowTemp = weatherData.main.temp_min;
    const humidity = weatherData.main.humidity;
    const weatherIconCode = weatherData.weather[0].icon;
    const weatherIcon = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;
    const currentWeather = weatherData.weather[0].description;
    const cloudCover = weatherData.clouds.all;
    const hourRainTotal =
      weatherData.rain === undefined ? 0 : weatherData.rain["1h"];
    const windDirection = weatherData.wind.deg;
    const windSpeed = weatherData.wind.speed;
    const gustSpeed = weatherData.wind.gust;

    const weatherObj = {
      city: cityName,
      state: stateName,
      lat: lat,
      lon: lon,
      actualTemp: actualTemp,
      feelsLikeTemp: feelsLikeTemp,
      highTemp: highTemp,
      lowTemp: lowTemp,
      humidity: humidity,
      currentWeather: currentWeather,
      weatherIcon: weatherIcon,
      windDirection: windDirection,
      windSpeed: windSpeed,
      gustSpeed: gustSpeed,
      cloudCover: cloudCover,
      hourRainTotal: hourRainTotal,
    };

    return weatherObj;
  } catch (e) {
    console.error(e);
  }
}

//getWeather("Minneapolis", "MN");
