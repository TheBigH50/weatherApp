import { Transition } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import "./index.css";
import getWeather from "./helperFunctions/getWeather.js";
import MenuModal from "./components/menuModal";
import HeaderDisplay from "./components/headerDisplay";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  let [cityPlaceholder, setCityPlaceholder] = useState("Minneapolis");
  let [statePlaceholder, setStatePlaceholder] = useState("MN");
  let [favorite, setFavorite] = useState("");
  let [recent, setRecent] = useState(["\u263C", "\u263C", "\u263C"]);
  const [location, setLocation] = useState([]);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    if (renderCount.current > 2) {
      getWeather(location).then((data) => {
        const tempObj = {
          city: data.name,
          state: location[1],
          lat: data.coord.lat,
          lon: data.coord.lon,
          actualTemp: data.main.temp,
          feelsLikeTemp: data.main.feels_like,
          highTemp: data.main.temp_max,
          lowTemp: data.main.temp_min,
          humidity: data.main.humidity,
          currentWeather: data.weather[0].description,
          weatherIconCode: data.weather[0].icon,
          windDirection: data.wind.deg,
          windSpeed: data.wind.speed,
          gustSpeed: data.wind.gust,
          cloudCover: data.clouds.all,
          hourRainTotal: data.rain === undefined ? 0 : data.rain["1h"],

          buildWeatherIconURL(weatherIconCode) {
            const url = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;
            return url;
          },
        };

        setWeatherData(tempObj);
      });
    }
  }, [location]);
  console.log("Main App", weatherData);
  return (
    <div className="flex flex-col -z-10 min-h-screen min">
      <HeaderDisplay
        weatherData={weatherData}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />

      <div className="absolute top-0 left-0">
        <Transition
          show={isShowing}
          enter="transition ease-in-out duration-[1000ms] transform"
          enterFrom="-translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition ease-in-out duration-[1000ms] transform"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="-translate-x-full opacity-0"
          className="delay-10"
        >
          <MenuModal
            setLocation={setLocation}
            isShowing={isShowing}
            setIsShowing={setIsShowing}
            cityPlaceholder={cityPlaceholder}
            setCityPlaceholder={setCityPlaceholder}
            statePlaceholder={statePlaceholder}
            setStatePlaceholder={setStatePlaceholder}
            favorite={favorite}
            setFavorite={setFavorite}
            recent={recent}
            setRecent={setRecent}
          />
        </Transition>
      </div>
    </div>
  );
}

export default App;
