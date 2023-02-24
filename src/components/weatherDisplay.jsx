export default function WeatherDisplay({ loaded, weatherData }) {
  if (!loaded) {
    return <div className="flex min-h-full">yo</div>;
  } else {
    return (
      <div className="flex flex-col min-h-fit mt-1 items-center">
        <div className="flex flex-col w-11/12 mt-1 mb-1 justify-evenly h-20 rounded-lg bg-gray-900 bg-opacity-10">
          <p className="text-sm self-center">
            {<span className="text-2xl">{`${weatherData.highTemp}`}</span>}
            {`\u2191`}
            {<span className="text-2xl">{` / `}</span>}
            {<span className="text-2xl">{`${weatherData.lowTemp}`}</span>}
            {`\u2193`}
          </p>
          <p className="self-center">
            {<span className="italic">{`Feels Like `}</span>}
            {`${weatherData.feelsLikeTemp}`}{" "}
          </p>
        </div>
        <div className="flex flex-col w-11/12 justify-evenly mt-1 mb-1 h-32 rounded-lg bg-gray-900 bg-opacity-10">
          <div className="flex relative m-2 justify-center">
            <img
              className="flex fixed place-self-center animate-[smallPing_3.5s_linear_infinite]"
              src="src\assets\compassIcon.png"
              alt="Compass"
              height={50}
              width={50}
            />
            <img
              className="flex fixed place-self-center animate-[compass_7s_ease-in-out_infinite]"
              src="src\assets\compassIcon.png"
              alt="Compass"
              height={50}
              width={50}
            />
            <p className="flex fixed place-self-center mb-1 text-2xl font-semibold">{weatherData.windDirection}</p>
          </div>
          <p className="flex">
            {weatherData.windSpeed}
            {weatherData.gustSpeed}
          </p>
        </div>
      </div>
    );
  }
}
