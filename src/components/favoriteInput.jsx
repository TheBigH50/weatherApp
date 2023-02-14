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
      <div className="flex flex-col self-center z-20 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12 ">
        <form onClick={onSubmit} className="flex self-center" >
          <label htmlFor="favInput" className="">
            Favorite:
            <input
              type={"text"}
              value={text}
              onChange={(e) => setText(e.target.value)}
              name={"favInput"}
              placeholder="City Name"
              className="bg-gray-900 border-b focus:outline-none ml-2 mr-2 text-center text-yellow-300 placeholder-yellow-300 placeholder-opacity-70"
            ></input>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col self-center z-20 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12">
        <h6 className="flex self-center">{`Favorite: ${favorite}`}</h6>
      </div>
    );
  }
}
