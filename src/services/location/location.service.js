import { locations } from "./location.mock";
import camelize from "camelize";

export const locationRequest = (searchLocation = "san francisco") => {
  return new Promise((resolve, reject) => {
    const location = locations[searchLocation];
    if (!location) {
      reject("not Found");
    }
    resolve(location);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
