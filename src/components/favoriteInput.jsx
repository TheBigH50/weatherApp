import { useState } from "react";

export default function FavoriteInput({ favorite, setFavorite }) {
  let [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    setFavorite(text);
    console.log(favorite);
  }

  if (favorite === "") {
    return (
      <div className="flex self-center z-20 text-yellow-300">
        <form onClick={onSubmit} >
          <label htmlFor="favInput">
            Enter Favorite City:
            <input
              type={"text"}
              value={text}
              onChange={(e) => setText(e.target.value)}
              name={"favInput"}
            ></input>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex self-center z-20 text-yellow-300">
        <h6>{`Favorite: ${favorite}`}</h6>
      </div>
    );
  }
}
