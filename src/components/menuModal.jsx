import FavoriteInput from "./favoriteDisplay.jsx";
import RecentList from "./recentList.jsx";
import SearchInput from "./searchInput.jsx";
import CloseOrReset from "./closeOrReset.jsx";

/* This is the main MenuModal component, serves as the host for all menu components and blocks scrolling behind it when active.*/

export default function MenuModal({
  setLocation,
  isShowing,
  setIsShowing,
  cityPlaceholder,
  setCityPlaceholder,
  statePlaceholder,
  setStatePlaceholder,
  favorite,
  setFavorite,
  recent,
  setRecent,
  renderCount,
}) {
  return (
    <div className="flex flex-col justify-evenly bg-gray-900 bg-opacity-90 z-20 w-screen h-screen touch-none">
      <h2 className="flex self-center justify-center items-center z-20 bg-gray-900 text-yellow-300 border border-yellow-300 rounded-lg p-4 text-2xl tracking-wide font-bold w-10/12 h-20">
        Menu
      </h2>
      <FavoriteInput favorite={favorite} setFavorite={setFavorite} />
      <RecentList
        recent={recent}
        favorite={favorite}
        setFavorite={setFavorite}
      />
      <SearchInput
        setLocation={setLocation}
        recent={recent}
        setRecent={setRecent}
        cityPlaceholder={cityPlaceholder}
        setCityPlaceholder={setCityPlaceholder}
        statePlaceholder={statePlaceholder}
        setStatePlaceholder={setStatePlaceholder}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        renderCount={renderCount}
      />
      <CloseOrReset
        setFavorite={setFavorite}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />
    </div>
  );
}
