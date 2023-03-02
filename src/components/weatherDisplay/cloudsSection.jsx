import { useEffect } from "react";

export default function CloudsSection({ loaded, weatherData }) {
  let customStyle = {
    width: weatherData.cloudCover + "%",
  };

  let transitionList = ["transition-all", "ease-in-out", "duration-[2500ms]"];

  useEffect(() => {
    if (loaded) {
      let cloudBar = document.getElementById("cloudBar");

      cloudBar.classList.remove(...transitionList);
      cloudBar.classList.remove("w-full");
      cloudBar.classList.add("w-0");
      setTimeout(() => {
        cloudBar.classList.add(...transitionList);
        cloudBar.classList.remove("w-0");
        cloudBar.classList.add("w-full");
      }, "100");
    }
  }, [weatherData]);

  if (!loaded) {
    return <div className="flex min-h-full">yo</div>;
  } else {
    return (
      <div className="flex flex-col min-h-fit mt-1 items-center">
        <div className="flex flex-col w-11/12 mt-2.5 mb-2.5 justify-evenly h-28 rounded-lg bg-gray-900 bg-opacity-10">
          <div className="flex relative w-5/6 h-1/3 mb-0.5 rounded-lg self-center bg-gray-500">
            <div
              className="flex m-1 absolute h-[80%] rounded-lg bg-transparent self-center"
              style={customStyle}
            >
              <div
                id="cloudBar"
                className="flex relative bg-gray-200 rounded-lg h-full w-0"
              ></div>
            </div>
          </div>
          <div className="flex self-center"><h3 className="text-lg italic">Cloud Cover <span className="text-lg font-semibold not-italic">{`${weatherData.cloudCover}%`}</span></h3></div>
        </div>
      </div>
    );
  }
}
