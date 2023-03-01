/* This function is two nested fetches, the first takes in the search location array to get geoCords, the second uses those cords to build and return a promise containing the data. */

export default async function getWeather(locationPairArr) {
  const city = locationPairArr[0];
  const state = locationPairArr[1];

console.log("Fetch Ran for: ", city);

  try {
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=c7148af000a9eeed1a60fdf5e1c953a6`
    );
    const geoData = await geoResponse.json();
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c7148af000a9eeed1a60fdf5e1c953a6&units=imperial`
    );

    const weatherData = await weatherResponse.json();
    return weatherData;
  } catch (e) {
    console.error(e);
  }
}
