export default function WeatherIcon({ weatherData, loaded }) {
  if (loaded.current === true) {
    return (
      <div className="flex w-1/2 items-center justify-center h-full">
        {weatherData.weatherIconCode.map((code) => (
          <img
            key={code}
            src={`src/assets/weatherIcons/${code}@2x.png`}
            alt="Current weather icon"
            className="flex mb-10 animate-[wiggleANDpulse_1.5s_ease-in-out_infinite] h-3/5"
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
