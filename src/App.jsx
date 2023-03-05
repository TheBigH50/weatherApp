import { Transition } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import {
  getFavorite,
  getRecent,
} from "./helperFunctions/localStorageFunctions.js";
import consumeWeather from "./helperFunctions/consumeWeather.js";
import MenuModal from "./components/menuModal/menuModal.jsx";
import HeaderDisplay from "./components/headerDisplay/headerDisplay.jsx";
import WeatherDisplay from "./components/weatherDisplay/weatherDisplay.jsx";
import "./index.css";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [cityPlaceholder, setCityPlaceholder] = useState("City");
  const [statePlaceholder, setStatePlaceholder] = useState("State");
  const [favorite, setFavorite] = useState([]);
  const [recent, setRecent] = useState(["\u263C", "\u263C", "\u263C"]);
  const [location, setLocation] = useState(["Minneapolis", "MN"]);
  const [loaded, setLoaded] = useState(false);

  const renderCount = useRef(0);
  //const loaded = useRef(false);

  useEffect(() => {
    let clean = true;
    console.log("I ran");
    renderCount.current = renderCount.current + 1;
    if (renderCount.current > 0 && clean) {
      consumeWeather(location, setWeatherData, setLoaded);
    }
    return () => {
      console.log("I cleaned");
      clean = !clean;
    };
  }, [location]);

  useEffect(() => {
    if (renderCount.current > 0) {
      getFavorite(setFavorite).then((favorite) => {
        consumeWeather(favorite, setWeatherData, setLoaded);
        //loaded.current = true;
      });
      getRecent(setRecent);
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 h-screen w-screen -z-10 bg-gradient-to-br from-teal-800 via-blue-500 to-teal-200">
      <div className="flex flex-col">
        <HeaderDisplay
          weatherData={weatherData}
          isShowing={isShowing}
          setIsShowing={setIsShowing}
          favorite={favorite}
          loaded={loaded}
        />
        <WeatherDisplay
          loaded={loaded}
          weatherData={weatherData}
          isShowing={isShowing}
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
              renderCount={renderCount}
              setLoaded={setLoaded}
              setWeatherData={setWeatherData}
            />
          </Transition>
        </div>
        <h6 className="flex self-center">Built by Harrison Fangmeier 2023</h6>
      </div>
      
    </div>
  );
}

export default App;
