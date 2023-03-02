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
        <div className="flex flex-col w-11/12 mt-2.5 mb-2.5 justify-evenly h-20 rounded-lg bg-gray-900 bg-opacity-10">
          <div className="flex relative w-5/6 h-1/2 rounded-lg bg-transparent self-center">
            <div
              className={`flex absolute h-1/2 rounded-lg bg-transparent self-center`}
              style={customStyle}
            >
              <div
                id="cloudBar"
                className="flex relative bg-white h-full w-0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
