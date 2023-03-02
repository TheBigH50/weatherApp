import TempsSection from "./tempsSection.jsx";
import WindsSection from "./windsSection.jsx";
import CloudsSection from "./cloudsSection.jsx";

export default function WeatherDisplay({ loaded, weatherData }) {
  if (!loaded) {
    return <div className="flex min-h-full">yo</div>;
  } else {
    return (
      <div>
        <TempsSection loaded={loaded} weatherData={weatherData} />
        <WindsSection loaded={loaded} weatherData={weatherData} />
        <CloudsSection loaded={loaded} weatherData={weatherData} />
      </div>
    );
  }
}
