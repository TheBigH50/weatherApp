import { useEffect, useState } from "react";
import getWeather from "../helperFunctions/getWeather.js";

/* This component uses two text inputs, city & state(limit 2 chars) to fire weather fetch with an array of the two values.  Placeholders also update to last search.*/

export default function SearchInput({
  setLocation,
  recent,
  setRecent,
  cityPlaceholder,
  setCityPlaceholder,
  statePlaceholder,
  setStatePlaceholder,
}) {
  let [cityText, setCityText] = useState("");
  let [stateText, setStateText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    setRecent(Array(cityText, ...recent).slice(0, 3));
    setLocation(Array(cityText, stateText));
    setCityPlaceholder(cityText);
    setStatePlaceholder(stateText);
    setCityText("");
    setStateText("");
  }

  return (
    <div className="flex flex-col self-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12">
      <form onSubmit={onSubmit} className="flex flex-col self-center">
        <label
          htmlFor="searchInput"
          className="flex text-lg self-center w-10/12"
        >
          City:
          <input
            type={"text"}
            value={cityText}
            onChange={(e) => setCityText(e.target.value)}
            name={"searchInput1"}
            placeholder={cityPlaceholder}
            className="flex bg-gray-900 border-b border-yellow-300 focus:outline-none ml-2 mr-2 text-center text-yellow-300 placeholder-yellow-300 placeholder-opacity-70 text-base w-full"
            required
          ></input>
        </label>
        <label
          htmlFor="searchInput"
          className="flex text-lg self-center w-10/12"
        >
          State:
          <input
            type={"text"}
            value={stateText}
            onChange={(e) => setStateText(e.target.value)}
            name={"searchInput2"}
            placeholder={statePlaceholder}
            className="flex bg-gray-900 border-b border-yellow-300 focus:outline-none ml-2 mr-2 text-center text-yellow-300 placeholder-yellow-300 placeholder-opacity-70 text-base w-full"
            required
            maxLength={"2"}
          ></input>
        </label>
        <button type="submit" className="flex text-lg mt-3 self-center">
          Get Weather
        </button>
      </form>
    </div>
  );
}
