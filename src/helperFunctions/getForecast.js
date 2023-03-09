const search = import.meta.env.VITE_SEARCH;

export default async function getForecast(wD) {
  try {
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?appid=${search}&lat=${wD.lat}&lon=${wD.lon}&units=imperial`
    );

    const forecastData = await forecastResponse.json();
    return forecastData;
  } catch (e) {
    console.error(e);
  }
}
