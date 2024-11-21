import "./style.css";
import { setupGeoLocation } from "./features/geolocation";
import { setupMap } from "./features/map";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="map"></div>
  <div id="controls">
    <div class="tracking-controls">
      <button id="start" type="button">start tracking</button>
      <button id="stop" type="button">stop tracking</button>
    </div>
  </div>
`;

setupGeoLocation(
  document.querySelector<HTMLButtonElement>("#start")!,
  document.querySelector<HTMLButtonElement>("#stop")!
);
setTimeout(() => setupMap(), 1000);
