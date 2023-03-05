/* This component take user input to set parent's (MenuModal) state of "favorite" and conditionally renders input/display of favorite based on the state */

import consumeWeather from "../../helperFunctions/consumeWeather";

export default function FavoriteInput({
  favorite,
  setWeatherData,
  setLoaded,
  isShowing,
  setIsShowing,
}) {
  function searchFavorite() {
    consumeWeather(favorite, setWeatherData, setLoaded);
    setIsShowing(!isShowing);
  }

  if (favorite === "" || favorite === undefined) {
    return (
      <div className="flex flex-col justify-center self-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12 h-20">
        <h6 className="flex self-center text-lg">Select A Favorite</h6>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center self-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12 h-20">
        <h6 className="flex self-center text-lg">
          Favorite:&nbsp;
          <button
            type="button"
            onClick={() => searchFavorite()}
            className="font-semibold italic"
          >{`${favorite[0]}`}</button>
        </h6>
      </div>
    );
  }
}
