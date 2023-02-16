import { useState, useEffect } from "react";
import FavoriteInput from "./favoriteInput.jsx";
import RecentList from "./recentList.jsx";
import SearchInput from "./searchInput.jsx";
import CloseOrReset from "./closeOrReset.jsx";

export default function MenuModal({ location, setLocation }) {
  let [favorite, setFavorite] = useState("");
  let [recent, setRecent] = useState([
    "Search A City",
    "Search A City",
    "Search A City",
  ]);

  /* Remove this variable later, used for building components with recent */
  //let recentCities = ["Minneapolis", "Saint Joseph", "Paynesville"];

  /* useEffect(() => {
    setRecent([...recentCities]);
  }, []); */

  return (
    <div className="flex flex-col justify-evenly bg-gray-900 min-h-screen z-10 w-screen h-screen touch-none">
      <h2 className="flex self-center justify-center z-20 text-yellow-300 p-4 text-2xl tracking-wide font-bold w-10/12">
        Menu
      </h2>
      <FavoriteInput favorite={favorite} setFavorite={setFavorite} />
      <RecentList recent={recent} />
      <SearchInput setLocation={setLocation} setRecent={setRecent} />
      <CloseOrReset setFavorite={setFavorite} />
    </div>
  );
}
