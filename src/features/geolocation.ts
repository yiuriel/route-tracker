import { calculateSpeed } from "./speed";

export function setupGeoLocation(
  startButton: HTMLButtonElement,
  stopButton: HTMLButtonElement
) {
  startButton.addEventListener("click", startTrackingUserLocation);
  stopButton.addEventListener("click", stopTrackingUserLocation);
}

const geoLocations: {
  latitude: number;
  longitude: number;
  timestamp: number;
}[] = [];

let watchId: number;

export function startTrackingUserLocation() {
  watchId = navigator.geolocation.watchPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const timestamp = Date.now();
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

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
        console.log(`Speed: ${speed} m/s`);

        document.querySelector("#speed")!.innerHTML = `Speed: ${speed.toFixed(
          2
        )} m/s`; // Round to 2 decimal places`;
      }

      document.querySelector(
        "#lat-long"
      )!.innerHTML = `lat: ${latitude}, long: ${longitude}`;
    },
    (error) => {
      console.error("Error getting user location:", error);
    },
    {
      enableHighAccuracy: true, // Uses GPS for higher accuracy
      timeout: 2500, // Wait up to 5 seconds for a position
      maximumAge: 0, // Do not accept cached positions
    }
  );
}

export function stopTrackingUserLocation() {
  navigator.geolocation.clearWatch(watchId);

  geoLocations.forEach((location) => {
    console.log(
      `Latitude: ${location.latitude}, Longitude: ${location.longitude}`
    );
  });

  document.querySelector("#lat-long")!.innerHTML = "";
}
