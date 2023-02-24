export default function WeatherDisplay({ loaded, weatherData }) {
  if (!loaded) {
    return <div className="flex min-h-full">yo</div>;
  } else {
    return (
      <div className="flex flex-col min-h-fit mt-1 items-center">
        <div className="flex flex-col w-11/12 mt-2.5 mb-2.5 justify-evenly h-20 rounded-lg bg-gray-900 bg-opacity-10">
          <p className="text-sm self-center">
            {`\u2191`}
            {
              <span className="text-2xl font-semibold">{`${weatherData.highTemp}\u02DA`}</span>
            }

            {<span className="text-2xl font-semibold">{` / `}</span>}
            {`\u2193`}
            {
              <span className="text-2xl font-semibold">{`${weatherData.lowTemp}\u02DA`}</span>
            }
          </p>
          <p className="self-center align-bottom text-lg font-semibold">
            {
              <span className="italic text-base font-normal">{`Feels Like `}</span>
            }
            {`${weatherData.feelsLikeTemp}\u02DA`}{" "}
          </p>
        </div>
        <div className="flex flex-col w-11/12 justify-around mt-2.5 mb-2.5 h-28 rounded-lg bg-gray-900 bg-opacity-10">
          <div className="flex relative mt-[1.375rem] justify-center">
            <img
              className="flex fixed place-self-center animate-[smallPing_3.5s_ease-out_infinite]"
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
            <p className="flex fixed place-self-center mb-.5 text-2xl font-semibold">
              {weatherData.windDirection}
            </p>
          </div>
          <div className="flex justify-around items-end">
            <p className="italic align-bottom">
              {<span>Wind-Speed&nbsp;</span>}
              {
                <span className="text-lg font-semibold not-italic">
                  {weatherData.windSpeed}
                </span>
              }
              &nbsp;mph
            </p>
            <p className="italic align-bottom">
              Gusts up to&nbsp;
              {
                <span className="text-lg font-semibold not-italic leading-normal">
                  {weatherData.gustSpeed}&nbsp;
                </span>
              }
              mph
            </p>
          </div>
        </div>
      </div>
    );
  }
}
