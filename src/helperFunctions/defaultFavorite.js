async function storeFavorite(favorite) {
    window.localStorage.removeItem("favorite");
    let jsonObj = JSON.stringify(favorite);
    localStorage.setItem("favorite", jsonObj);
  }

  async function getFavorite(setFavorite) {
    try {
      let jsonObj = window.localStorage.getItem("favorite");
      let parsed = JSON.parse(jsonObj);
      console.log("Set My Favorite To: ", parsed);
      setFavorite(Array(...parsed));
      return parsed;
    } catch (error) {
      console.log("Please add a favorite!", error);
    }
  }

  export { storeFavorite, getFavorite };