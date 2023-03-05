import TempsSection from "./tempsSection.jsx";
import WindsSection from "./windsSection.jsx";
import CloudsSection from "./cloudsSection.jsx";
import SummarySection from "./summarySection.jsx";

export default function WeatherDisplay({ loaded, weatherData }) {
  if (!loaded) {
    return <div className="flex min-h-full"></div>;
  } else {
    return (
      <div className="flex min-h-full flex-col">
        <TempsSection loaded={loaded} weatherData={weatherData} />
        <CloudsSection loaded={loaded} weatherData={weatherData} />
        <SummarySection loaded={loaded} weatherData={weatherData} />
        <WindsSection loaded={loaded} weatherData={weatherData} />
      </div>
    );
  }
}
