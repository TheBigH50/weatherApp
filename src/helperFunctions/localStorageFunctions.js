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

  async function storeRecent(recent) {
    window.localStorage.removeItem("recent");
    let jsonObj = JSON.stringify(recent);
    localStorage.setItem("recent", jsonObj);
  }

  async function getRecent(setRecent) {
    try {
      let jsonObj = window.localStorage.getItem("recent");
      let parsed = JSON.parse(jsonObj);
      console.log("Set My recent To: ", parsed);
      setRecent(Array(...parsed));
      return parsed;
    } catch (error) {
      console.log("Problem with localStorage recent", error);
    }
  }

  export { storeFavorite, getFavorite, storeRecent, getRecent };