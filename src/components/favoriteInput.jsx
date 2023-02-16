import { useState } from "react";

/* This component take user input to set parent's (MenuModal) state of "favorite" and conditionally renders input/display of favorite based on the state */

export default function FavoriteInput({ favorite, setFavorite }) {
  let [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    setFavorite(text);
    console.log(favorite);
  }

  if (favorite === "") {
    return (
      <div className="flex flex-col self-center z-20 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12">
        <form onSubmit={onSubmit} className="flex self-center justify-center">
          <label htmlFor="favInput" className="flex text-lg w-10/12">
            Favorite:
            <input
              type={"text"}
              value={text}
              onChange={(e) => setText(e.target.value)}
              name={"favInput"}
              placeholder="City Name"
              className="flex bg-gray-900 border-b border-yellow-300 focus:outline-none ml-2 mr-2 text-center text-yellow-300 placeholder-yellow-300 placeholder-opacity-70 text-base w-full"
            ></input>
          </label>
          <button type="submit" className="flex text-lg">Add</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col self-center z-20 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12">
        <h6 className="flex self-center text-lg">Favorite:<em className="font-semibold">{` \u0000 ${favorite}`}</em></h6>
      </div>
    );
  }
}
