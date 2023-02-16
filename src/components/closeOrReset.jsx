import { useState } from "react";

export default function CloseOrReset({ setFavorite }) {
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setVisible(!visible);
  }

  function resetFavorite() {
    setFavorite("");
  }

  if (!visible) {
    return (
      <div className="flex self-center w-10/12 h-1/5">
        <div className="flex justify-center items-center z-20 bg-gray-900 text-yellow-300 border-yellow-300 border rounded-lg w-full h-1/4">
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
      <div className="flex justify-center z-20 bg-gray-900 text-yellow-300 border-yellow-300 border rounded-lg w-full h-full">
        <div className="flex flex-col">
          <button
            type="click"
            onClick={openMenu}
            className="flex items-center self-center pb-4 h-1/3 text-lg"
          >{`\u2263`}</button>
          <button
            type="click"
            onClick={resetFavorite}
            className="flex self-center h-1/3 text-lg"
          >
            Reset Favorite
          </button>
          <button type="submit" className="flex self-center h-1/3 text-lg">
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
}
