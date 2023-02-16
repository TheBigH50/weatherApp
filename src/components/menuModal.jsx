import { useState, useEffect } from "react";
import FavoriteInput from "./favoriteInput.jsx";
import RecentList from "./recentList.jsx";
import SearchInput from "./searchInput.jsx";
import CloseOrReset from "./closeOrReset.jsx";

export default function MenuModal({ location, setLocation }) {
  
  let [favorite, setFavorite] = useState("");
  let [recent, setRecent] = useState([
  "\u263C",
    "\u263C",
    "\u263C",
  ]);

  /* Remove this variable later, used for building components with recent */
  //let recentCities = ["Minneapolis", "Saint Joseph", "Paynesville"];

  /* useEffect(() => {
    setRecent([...recentCities]);
  }, []); */

  return (
    <div className="flex fixed flex-col justify-evenly bg-gray-900 bg-opacity-90 min-h-screen z-10 w-screen h-screen touch-none">
      <h2 className="flex self-center justify-center items-center z-20 bg-gray-900 text-yellow-300 border border-yellow-300 rounded-lg p-4 text-2xl tracking-wide font-bold w-10/12 h-20">
        Menu
      </h2>
      <FavoriteInput favorite={favorite} setFavorite={setFavorite} />
      <RecentList recent={recent} />
      <SearchInput setLocation={setLocation} recent={recent} setRecent={setRecent} />
      <CloseOrReset setFavorite={setFavorite} />
    </div>
  );
}
