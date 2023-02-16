import { useState } from "react";
import "./index.css";
import getWeather from "./helperFunctions/getWeather.js";
import MenuModal from "./components/MenuModal/menuModal";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState([]);

  return (
    <div className="App flex flex-col z-0">
      <MenuModal location={location} setLocation={setLocation} />
    </div>
  );
}

export default App;
