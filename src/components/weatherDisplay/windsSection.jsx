export default function WindsSection({ loaded, weatherData }) {
  if (!loaded) {
    return <div className="flex min-h-full"></div>;
  } else {
    return (
      <div className="flex flex-col min-h-fit mt-1 items-center">
      <div className="flex flex-col w-11/12 justify-around mt-2.5 mb-2.5 h-28 rounded-lg bg-gray-900 bg-opacity-10">
        <div className="flex relative mt-7 justify-center">
          <img
            className="flex fixed place-self-center animate-[smallPing_3.5s_ease-out_infinite]"
            src="/assets/compassIcon.png"
            alt="Compass"
            height={50}
            width={50}
          />
          <img
            className="flex fixed place-self-center animate-[compass_7s_ease-in-out_infinite]"
            src="/assets/compassIcon.png"
            alt="Compass"
            height={50}
            width={50}
          />
          <p className="flex fixed place-self-center mb-.5 text-2xl font-semibold">
            {`${weatherData.windDirection}`}
          </p>
        </div>
        <div className="flex justify-evenly items-end">
          <p className="italic align-bottom">
            {<span>Wind-Speed&nbsp;</span>}
            {
              <span className="text-lg font-semibold not-italic">
                {`${weatherData.windSpeed}`}
              </span>
            }
            &nbsp;mph
          </p>
          <p className="italic align-bottom">
            Gusts up to&nbsp;
            {
              <span className="text-lg font-semibold not-italic ">
                {`${weatherData.gustSpeed}`}&nbsp;
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
