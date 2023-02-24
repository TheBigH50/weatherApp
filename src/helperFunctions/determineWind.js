export default function determineWind(wD) {
  let tempDir = "";

  if (wD.windDirection >= 22.5 && wD.windDirection < 67.5) {
    tempDir = "NE";
  } else if (wD.windDirection >= 67.5 && wD.windDirection < 112.5) {
    tempDir = "E";
  } else if (wD.windDirection >= 112.5 && wD.windDirection < 157.5) {
    tempDir = "SE";
  } else if (wD.windDirection >= 157.5 && wD.windDirection < 202.5) {
    tempDir = "S";
  } else if (wD.windDirection >= 202.5 && wD.windDirection < 247.5) {
    tempDir = "SW";
  } else if (wD.windDirection >= 247.5 && wD.windDirection < 292.5) {
    tempDir = "W";
  } else if (wD.windDirection >= 292.5 && wD.windDirection < 337.5) {
    tempDir = "NW";
  } else {
    tempDir = "N";
  }
  return tempDir;
}
