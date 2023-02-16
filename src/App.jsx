import { useState } from 'react'
import './index.css'
import getWeather from './helperFunctions/getWeather.js'
import MenuModal from './components/menuModal'

function App() {
  const [WeatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState([]);

  return (
    <div className="App flex flex-col z-0">      
      <MenuModal/>
    </div>
  )
}

export default App;
