//To create an API for unsplash images
import { createApi } from "unsplash-js";
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

//function that returns url to get coffee stores
const getUrlForCoffeeStores = (
  query: string,
  longlat: string,
  limit: number
) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${longlat}&limit=${limit}`;
};

//function to returns an array of url for unsplash images
const getCoffeeStoresPhoto = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "coffee shop",
    page: 1,
    perPage: 30,
  });

  const unsplashImage = photos.response?.results.map((result) => {
    return result.urls.small;
  });

  return unsplashImage;
};

export const fetchStores = async () => {
  //this calls the function to returns an array of url for unsplash images
  const photos = await getCoffeeStoresPhoto();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.COFFEE_STORE_API_KEY!,
    },
  };

  //this calls the function that returns url to get coffee stores
  const response = await fetch(
    getUrlForCoffeeStores("coffee", "43.651229838005%2C-79.38636906500032", 30),
    options
  );
  const data = await response.json();
  const storesData = data.results.map((result: any, index: number) => {
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address,
      neighborhood: result.location.cross_street,
      imgUrl: photos![index],
    };
  });

  return storesData;
};
