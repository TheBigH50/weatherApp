import getForecast from "./getForecast.js";

export default function consumeForecast(wD, setForecastData, setForcasted) {
  getForecast(wD)
    .then((data) => {
      const tempObj = {
        dataCount: data.cnt,
      };

      setForecastData(tempObj);
      setForecasted(true);
    })
    .catch((e) => console.error(e));
}
