import { Transition } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import "./index.css";
import getWeather from "./helperFunctions/getWeather.js";
import MenuModal from "./components/menuModal";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  let [cityPlaceholder, setCityPlaceholder] = useState("");
  let [statePlaceholder, setStatePlaceholder] = useState("");
  let [favorite, setFavorite] = useState("");
  let [recent, setRecent] = useState(["\u263C", "\u263C", "\u263C"]);
  const [location, setLocation] = useState([]);
  const isInitialMount = useRef(true);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    if (renderCount.current > 2) {
      setWeatherData(getWeather(location));
    }
  }, [location]);

  return (
    <div className="flex flex-col -z-10">
      <button
        type="button"
        onClick={() => setIsShowing(!isShowing)}
        className="flex z-0"
      >
        MENU
      </button>
      <p className="flex z-0">here is some text</p>
      <div className="absolute top-0 left-0">
        <Transition
          show={isShowing}
          enter="transition ease-in-out duration-[2000ms] transform"
          enterFrom="-translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition ease-in-out duration-[2000ms] transform"
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
