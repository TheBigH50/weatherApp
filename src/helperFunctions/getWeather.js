/* This function is two nested fetches, the first takes in the search location array to get geoCords, the second uses those cords to build and return a promise containing the data. */

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

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=826c0b8bd9ecf523fabd78daf3fabeaf&units=imperial`
    );

    const weatherData = await weatherResponse.json();
    return weatherData;
  } catch (e) {
    console.error(e);
  }
}
