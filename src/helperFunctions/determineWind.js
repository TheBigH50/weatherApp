export default function determineWind(wD) {
  let tempDir = "";

  if (wD >= 22.5 && wD < 67.5) {
    tempDir = "NE";
  } else if (wD >= 67.5 && wD < 112.5) {
    tempDir = "E";
  } else if (wD >= 112.5 && wD < 157.5) {
    tempDir = "SE";
  } else if (wD >= 157.5 && wD < 202.5) {
    tempDir = "S";
  } else if (wD >= 202.5 && wD < 247.5) {
    tempDir = "SW";
  } else if (wD >= 247.5 && wD < 292.5) {
    tempDir = "W";
  } else if (wD >= 292.5 && wD < 337.5) {
    tempDir = "NW";
  } else {
    tempDir = "N";
  }
  return tempDir;
}
