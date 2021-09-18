import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not Found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  for (let result of results) {
    result.photos = result.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    result.isClosedTemporarily =
      result.business_status === "CLOSED_TEMPORARILY";
    result.isOpenNow = result.opening_hours && result.opening_hours.open_now;
  }

  //   const mappedResults = results.map((restaurant) => {
  //     return {
  //       ...restaurant,
  //       isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
  //       isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
  //     };
  //   });

  return camelize(results);
};
