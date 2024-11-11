export function setupGeoLocation(
  startButton: HTMLButtonElement,
  stopButton: HTMLButtonElement
) {
  startButton.addEventListener("click", startTrackingUserLocation);
  stopButton.addEventListener("click", stopTrackingUserLocation);
}

const geoLocations: { latitude: number; longitude: number }[] = [];

let watchId: number;

export function startTrackingUserLocation() {
  watchId = navigator.geolocation.watchPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      geoLocations.push({ latitude, longitude });

      document.querySelector(
        "#lat-long"
      )!.innerHTML += `<br>lat: ${latitude}, long: ${longitude}`;
    },
    (error) => {
      console.error("Error getting user location:", error);
    },
    {
      enableHighAccuracy: true, // Uses GPS for higher accuracy
      timeout: 5000, // Wait up to 5 seconds for a position
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