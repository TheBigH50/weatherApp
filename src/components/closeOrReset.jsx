import { useState } from "react";

/* This component can either close the MenuModal, or reset the favorite city, displaying the input box for favorite again. Component conditionally renders whole menu, collapsed by default.*/

export default function CloseOrReset({ setFavorite, isShowing, setIsShowing }) {
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setVisible(!visible);
  }

  function resetFavorite() {
    setFavorite("");
  }

  function closeMenu() {
    setIsShowing(!isShowing);
  }

  if (!visible) {
    return (
      <div className="flex self-center w-10/12 h-1/5">
        <div className="flex justify-center items-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border rounded-lg w-full h-1/4">
          <button
            type="click"
            onClick={openMenu}
            className="flex items-center pb-1 h-4 text-lg"
          >{`\u2263`}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex self-center w-10/12 h-1/5">
      <div className="flex justify-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border rounded-lg w-full h-full">
        <div className="flex flex-col">
          <button
            type="button"
            onClick={openMenu}
            className="flex items-center self-center pb-4 h-1/3 text-lg"
          >{`\u2263`}</button>
          <button
            type="button"
            onClick={resetFavorite}
            className="flex self-center h-1/3 text-lg"
          >
            Reset Favorite
          </button>
          <button
            type="button"
            onClick={closeMenu}
            className="flex self-center h-1/3 text-lg"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
}
