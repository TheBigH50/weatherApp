async function getWeather(city, state) {
  try {
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=826c0b8bd9ecf523fabd78daf3fabeaf`
    );
    const geoData = await geoResponse.json();
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=826c0b8bd9ecf523fabd78daf3fabeaf`
    );
    const weatherData = await weatherResponse.json();
    const feelsLike = weatherData.main.feels_like;
    const currentWeather = weatherData.weather[0].description;
    console.log(`${city}, ${state} -- ${currentWeather}, ${feelsLike}`);
  } catch (e) {
    console.error(e);
  }
}

//getWeather("Minneapolis", "MN");

export { getWeather };