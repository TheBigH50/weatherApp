import { Transition } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import "./index.css";
import consumeWeather from "./helperFunctions/consumeWeather.js";
import {
  getRecent,
  storeRecent,
} from "./helperFunctions/localStorageFunctions.js";
import { getFavorite } from "./helperFunctions/localStorageFunctions.js";
import MenuModal from "./components/menuModal.jsx";
import HeaderDisplay from "./components/headerDisplay.jsx";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [cityPlaceholder, setCityPlaceholder] = useState("Minneapolis");
  const [statePlaceholder, setStatePlaceholder] = useState("MN");
  const [favorite, setFavorite] = useState([]);
  const [recent, setRecent] = useState(["\u263C", "\u263C", "\u263C"]);
  const [location, setLocation] = useState([]);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    if (renderCount.current > 2) {
      consumeWeather(location, setWeatherData);
    }
  }, [location]);

  useEffect(() => {
    if (renderCount.current > 1) {
      getFavorite(setFavorite).then((favorite) => {
        consumeWeather(favorite, setWeatherData);
      });
      getRecent(setRecent);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <HeaderDisplay
        weatherData={weatherData}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        favorite={favorite}
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
          />
        </Transition>
      </div>
    </div>
  );
}

export default App;
