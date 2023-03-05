export default function TempsSection({ loaded, weatherData }) {
  if (!loaded) {
    return <div className="flex min-h-full"></div>;
  } else {
    return (
      <div className="flex flex-col min-h-fit mt-1 items-center">
        <div className="flex flex-col w-11/12 mt-2.5 mb-2.5 justify-evenly h-20 rounded-lg bg-gray-900 bg-opacity-10">
          <p className="text-sm font-extrabold self-center">
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
      </div>
    );
  }
}
