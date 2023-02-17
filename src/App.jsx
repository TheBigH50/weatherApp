import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import "./index.css";
import getWeather from "./helperFunctions/getWeather.js";
import MenuModal from "./components/menuModal";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState(["Minneapolis", "MN"]);

  /* useEffect(() => {
        setWeatherData(getWeather(location));
  },[]); */
console.log(isShowing)

  return (
    <div className="flex flex-col -z-10">
      <button type="button" onClick={() => setIsShowing((!isShowing))} className="flex fixed z-0">MENU</button>
      <p className="flex fixed z-0">here is some text</p>
      <Transition
      show={isShowing}
      enter="transition ease-in-out duration-[2000ms] transform"
      enterFrom="-translate-x-full "
      enterTo="translate-x-0 "
      leave="transition ease-in-out duration-[2000ms] transform"
      leaveFrom="translate-x-0 "
      leaveTo="-translate-x-full "
      className="flex z-0"
      >
    
      <MenuModal location={location} setLocation={setLocation} isShowing={isShowing} setIsShowing={setIsShowing} />
    
    </Transition>
    </div>
  );
}

export default App;
