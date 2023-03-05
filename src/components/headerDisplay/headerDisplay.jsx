import WeatherIcon from "./weatherIcon.jsx";
import Clock from "./clock";

export default function HeaderDisplay({
  weatherData,
  isShowing,
  setIsShowing,
  loaded,
}) {
  console.log(weatherData);

  if (!loaded) {
    return (
      <div className="flex min-h-fit h-52">
        <div className="flex flex-col w-1/2">
          <button
            type="button"
            onClick={() => setIsShowing(!isShowing)}
            className="flex mt-3 ml-3"
          >
            <svg viewBox="0 0 10 8" width="40">
              <path
                d="M1 1h8M1 4h 8M1 7h8"
                stroke="#000"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <p className="flex text-5xl self-center mt-5 mb-5 ml-2.5 font-semibold"></p>
          <h3 className="flex text-lg font-semibold ml-5">{`Loading...`}</h3>
          <Clock />
        </div>

        <WeatherIcon weatherData={weatherData} loaded={loaded} />
      </div>
    );
  } else {
    return (
      <div className="flex min-h-fit h-52">
        <div className="flex flex-col w-1/2">
          <button
            type="button"
            onClick={() => setIsShowing(!isShowing)}
            className="flex mt-3 ml-3"
          >
            <svg viewBox="0 0 10 8" width="40">
              <path
                d="M1 1h8M1 4h 8M1 7h8"
                stroke="#000"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <p className="flex text-5xl self-center mt-5 mb-5 ml-2.5 font-semibold">{`${weatherData.actualTemp}\u02DA`}</p>
          <h3 className="flex text-lg font-semibold ml-5">{`${weatherData.city}, ${weatherData.state}`}</h3>
          <Clock />
        </div>

        <WeatherIcon weatherData={weatherData} loaded={loaded} />
      </div>
    );
  }
}
