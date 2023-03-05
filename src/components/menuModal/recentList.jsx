import { storeFavorite } from "../../helperFunctions/localStorageFunctions.js";
import consumeWeather from "../../helperFunctions/consumeWeather.js";
/* This component uses search input city and state text to set rolling list of the 3 most recently searched cities */

export default function RecentList({
  recent,
  favorite,
  setFavorite,
  setWeatherData,
  setLoaded,
  isShowing,
  setIsShowing,
}) {
  let keyNumber = 34;

  function setAndStore(city) {
    setFavorite(Array(...city));
    storeFavorite(city);
  }

  function searchRecent(city) {
    consumeWeather(city, setWeatherData, setLoaded);
    setIsShowing(!isShowing);
  }

  if (favorite === "" || favorite.length === 0) {
    return (
      <div className="flex flex-col self-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12">
        <h6 className="flex self-center mb-3">Recent Cities</h6>
        <ul className="flex flex-col self-center w-full">
          {recent.map((city) => {
            if (city === "\u263C") {
              return (
                <li
                  key={`${keyNumber++}${recent}`}
                  className="text-center m-1 border-dotted border-b w-full border-yellow-300"
                >
                  {"\u00BB" + " " + " " + `${city[0]}` + " " + " " + "\u00AB"}
                </li>
              );
            } else {
              return (
                <li
                  key={`${keyNumber++}${recent}`}
                  className="text-center m-1 border-dotted border-b w-full border-yellow-300"
                >
                  {"\u00BB" + " " + " " + `${city[0]}` + " " + " " + "\u00AB"}
                  <button
                    type="button"
                    onClick={() => setAndStore(city)}
                    className="ml-5 fixed"
                  >
                    {"\u2730"}
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col self-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12">
        <h6 className="flex self-center mb-3">Recent Cities</h6>
        <ul className="flex flex-col self-center w-full">
          {recent.map((city) => {
            if (city === "\u263C") {
              return (
                <li
                  key={`${keyNumber++}${recent}`}
                  className="text-center m-1 border-dotted border-b w-full border-yellow-300"
                >
                  {"\u00BB" + " " + " " + `${city[0]}` + " " + " " + "\u00AB"}
                </li>
              );
            } else {
              return (
                <li
                  key={`${keyNumber++}${recent}`}
                  className="text-center m-1 border-dotted border-b w-full border-yellow-300"
                >
                  {"\u00BB" + " " + " "}
                  <button
                    type="button"
                    onClick={() => searchRecent(city)}
                    className=""
                  >{`${city[0]}`}</button>
                  {" " + " " + "\u00AB"}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
