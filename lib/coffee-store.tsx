const getUrlForCoffeeStores = (
  query: string,
  longlat: string,
  limit: number
) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${longlat}&limit=${limit}`;
};

export const fetchStores = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.COFFEE_STORE_API_KEY!,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores("coffee", "43.651229838005%2C-79.38636906500032", 12),
    options
  );
  const data = await response.json();
  return data.results;
};
