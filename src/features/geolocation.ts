import L from "leaflet";
import { map } from "./map";
import {
  calculateSpeed,
  checkSpeedElementExistsAndCreate,
  clearSpeedElement,
} from "./speed";
import { GeoLocations } from "../types";

export function setupGeoLocation(
  startButton: HTMLButtonElement,
  stopButton: HTMLButtonElement
) {
  startButton.addEventListener("click", startTrackingUserLocation);
  stopButton.addEventListener("click", stopTrackingUserLocation);
}

let geoLocations: GeoLocations = [];

let watchId: number;

export function startTrackingUserLocation() {
  watchId = navigator.geolocation.watchPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const timestamp = Date.now();

      geoLocations.push({ latitude, longitude, timestamp });

      if (geoLocations.length > 1) {
        const lastLocation = geoLocations[geoLocations.length - 1];
        const secondLastLocation = geoLocations[geoLocations.length - 2];
        const timeTaken = lastLocation.timestamp - secondLastLocation.timestamp;
        const speed = calculateSpeed(
          secondLastLocation.latitude,
          secondLastLocation.longitude,
          lastLocation.latitude,
          lastLocation.longitude,
          timeTaken / 1000
        );

        const speedInKmh = Number(speed) * 3.6;

        checkSpeedElementExistsAndCreate(document.querySelector("#controls")!);

        document.querySelector(
          "#speed"
        )!.innerHTML = `Speed: ${speedInKmh.toFixed(2)} km/h`; // Round to 2 decimal places`;
      }

      if (geoLocations.length === 1) {
        map?.setView([latitude, longitude], 15);
      }

      L.polyline(
        geoLocations.map((location) => [location.latitude, location.longitude]),
        { color: "red" }
      ).addTo(map!);
    },
    (error) => {
      console.error("Error getting user location:", error);
    },
    {
      enableHighAccuracy: true, // Uses GPS for higher accuracy
      timeout: 2500, // Wait up to 2.5 seconds for a position
      maximumAge: 0, // Do not accept cached positions
    }
  );
}

export function stopTrackingUserLocation() {
  navigator.geolocation.clearWatch(watchId);

  clearSpeedElement();

  geoLocations = [];
}
