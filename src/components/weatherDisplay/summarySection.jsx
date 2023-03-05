export default function SummarySection({ loaded, weatherData }) {
  if (!loaded) {
    return <div className="flex min-h-full">yo</div>;
  } else if (loaded && weatherData.hourRainTotal > 0) {
    return (
      <div className="flex flex-col min-h-fit mt-1 items-center">
        <div className="flex flex-col w-11/12 mt-2.5 mb-2.5 justify-evenly h-36 rounded-lg bg-gray-900 bg-opacity-10">
          <p className="self-center text-center w-[80%] text-lg italic">{`The current weather outlook is `}<span className="text-lg font-semibold">{`${weatherData.currentWeather}`}</span>{`, with an `}<span className="text-lg font-semibold">{`hour rain total`}</span>{` of ${weatherData.hourRainTotal} in.  The current `}<span className="text-lg font-semibold">{`humidity`}</span>{` level is ${weatherData.humidity} percent.  The current `}<span className="text-lg font-semibold">{`barometric pressure`}</span>{` reading is ${weatherData.pressure} in.`}</p>
        </div>
      </div>
    );
  } else if (loaded && weatherData.hourSnowTotal > 0) {
    return (
      <div className="flex flex-col min-h-fit mt-1 items-center">
        <div className="flex flex-col w-11/12 mt-2.5 mb-2.5 justify-evenly h-36 rounded-lg bg-gray-900 bg-opacity-10">
          <p className="self-center text-center w-[80%] text-lg italic">{`The current weather outlook is `}<span className="text-lg font-semibold">{`${weatherData.currentWeather}`}</span>{`, with an `}<span className="text-lg font-semibold">{`hour snow total`}</span>{` of ${weatherData.hourSnowTotal} in.  The current `}<span className="text-lg font-semibold">{`humidity`}</span>{` level is ${weatherData.humidity} percent.  The current `}<span className="text-lg font-semibold">{`barometric pressure`}</span>{` reading is ${weatherData.pressure} in.`}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col min-h-fit mt-1 items-center">
        <div className="flex flex-col w-11/12 mt-2.5 mb-2.5 justify-evenly h-36 rounded-lg bg-gray-900 bg-opacity-10">
          <p className="self-center text-center w-[80%] text-lg italic">{`The current weather outlook is `}<span className="text-lg font-semibold">{`${weatherData.currentWeather}`}</span>{`, with a `}<span className="text-lg font-semibold">{`humidity`}</span>{` level of ${weatherData.humidity} percent.  The current `}<span className="text-lg font-semibold">{`barometric pressure`}</span>{` reading is ${weatherData.pressure} in.`}</p>
        </div>
      </div>
    );
  }
}
