import { useEffect } from "react";

export default function WeatherIcon({ weatherData, loaded }) {
  if (loaded.current === true) {
    return (
      <div className="flex w-1/2 items-center justify-center h-full">
        {weatherData.weatherIconCode.map((code) => (
          <img
            key={code}
            src={`src/assets/weatherIcons/${code}@2x.png`}
            alt="Current weather icon"
            className="flex h-fit mb-10"
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex w-1/2 items-center justify-center h-full"></div>
    );
  }
}
