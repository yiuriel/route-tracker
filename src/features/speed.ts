export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371e3; // Earth's radius in meters
  const rad = Math.PI / 180; // Factor to convert degrees to radians

  const dLat = (lat2 - lat1) * rad;
  const dLon = (lon2 - lon1) * rad;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * rad) *
      Math.cos(lat2 * rad) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in meters
}

export function calculateSpeed(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  timeTaken: number
): number {
  const distance = calculateDistance(lat1, lon1, lat2, lon2); // in meters
  const speed = distance / timeTaken; // Speed in meters per second
  return speed;
}

// Example usage:
// const lat1 = 51.5074; // Point A latitude
// const lon1 = -0.1278; // Point A longitude
// const lat2 = 51.5154; // Point B latitude
// const lon2 = -0.1419; // Point B longitude
// const timeTaken = 60; // Time in seconds

// const speed = calculateSpeed(lat1, lon1, lat2, lon2, timeTaken);
// console.log(`Speed: ${speed} m/s`);
