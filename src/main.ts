import "./style.css";
import { setupGeoLocation } from "./features/geolocation";
import { setupMap } from "./features/map";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Route tracker</h1>
    <div id="map"></div>
    <div class="card">
      <button id="start" type="button">start tracking</button>
      <button id="stop" type="button">stop tracking</button>
    </div>
    <div id="speed"></div>
  </div>
`;

setupGeoLocation(
  document.querySelector<HTMLButtonElement>("#start")!,
  document.querySelector<HTMLButtonElement>("#stop")!
);
setTimeout(() => setupMap(), 1000);
