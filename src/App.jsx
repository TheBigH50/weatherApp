import { useState, useEffect } from "react";
import "./index.css";
import getWeather from "./helperFunctions/getWeather.js";
import MenuModal from "./components/menuModal";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState(["Minneapolis", "MN"]);

  /* useEffect(() => {
        setWeatherData(getWeather(location));
  },[]); */


  return (
    <div className="flex -z-10">
      <p>here is some text</p>
    <div className="flex flex-col fixed z-0">
      <MenuModal location={location} setLocation={setLocation} />
    </div>
    </div>
  );
}

export default App;
