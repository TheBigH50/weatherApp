/* This component take user input to set parent's (MenuModal) state of "favorite" and conditionally renders input/display of favorite based on the state */

export default function FavoriteInput({ favorite }) {
  if (favorite === "") {
    return (
      <div className="flex flex-col justify-center self-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12 h-20">
        <h6 className="flex self-center text-lg">Select A Favorite</h6>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center self-center z-30 bg-gray-900 text-yellow-300 border-yellow-300 border p-4 rounded-lg w-10/12 h-20">
        <h6 className="flex self-center text-lg">
          Favorite:&nbsp;<em className="font-semibold">{`${favorite[0]}`}</em>
        </h6>
      </div>
    );
  }
}
