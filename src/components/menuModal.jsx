import { useState, useEffect } from "react";
import FavoriteInput from "./favoriteInput.jsx";
import RecentList from "./recentList.jsx";
import SearchInput from "./searchInput.jsx";

export default function MenuModal({ location, setLocation }) {
  let [favorite, setFavorite] = useState("");
  let [recent, setRecent] = useState(["Search A City", "Search A City", "Search A City"]);

  /* Remove this variable later, used for building components with recent */
  //let recentCities = ["Minneapolis", "Saint Joseph", "Paynesville"];

  /* useEffect(() => {
    setRecent([...recentCities]);
  }, []); */

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen z-10 fixed w-screen h-screen touch-none">
      <FavoriteInput favorite={favorite} setFavorite={setFavorite} />
      <RecentList recent={recent} />
      <SearchInput setLocation={setLocation} setRecent={setRecent} />
    </div>
  );
}
