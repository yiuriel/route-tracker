import "./style.css";
import { setupGeoLocation } from "./features/geolocation";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Route tracker</h1>
    <div class="card">
      <button id="start" type="button">start tracking</button>
      <button id="stop" type="button">stop tracking</button>
    </div>
    <div id="lat-long"></div>
  </div>
`;

setupGeoLocation(
  document.querySelector<HTMLButtonElement>("#start")!,
  document.querySelector<HTMLButtonElement>("#stop")!
);
