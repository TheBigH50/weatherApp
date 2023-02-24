export default function WeatherDisplay({ loaded, weatherData }) {
  
  if(!loaded) {
    return <div className="flex min-h-full">yo</div>;
  } else {
    return (
        <div className="flex flex-col min-h-fit mt-1 items-center">
            <div className="flex flex-col w-11/12 mt-1 mb-1 justify-evenly h-20 rounded-lg bg-gray-900 bg-opacity-10">
<p className="text-sm self-center">{<span className="text-2xl">{`${weatherData.highTemp}`}</span>}{`\u2191`}{<span className="text-2xl">{` / `}</span>}{<span className="text-2xl">{`${weatherData.lowTemp}`}</span>}{`\u2193`}</p>
<p className="self-center">{<span className="italic">{`Feels Like `}</span>}{`${weatherData.feelsLikeTemp}`} </p>
        </div> 
        <div className="flex flex-col w-11/12 justify-evenly mt-1 mb-1 h-20 rounded-lg bg-gray-900 bg-opacity-10">
          <p>{weatherData.windDirection}{weatherData.windSpeed}{weatherData.gustSpeed}</p>
          </div>       
        </div>
    )
  }
    
}
