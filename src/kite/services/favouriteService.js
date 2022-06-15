import axios from "axios";

export const findAllFavourites = async () => {
  const { data: favourites } = await axios.get(
    "https://628b7680667aea3a3e2fc700.mockapi.io/favourites"
  );

  return favourites;
};

export const addToFavourites = async (id) => {
  return axios.post("https://628b7680667aea3a3e2fc700.mockapi.io/favourites", {
    spot: id,
  });
};

export const removeFromFavourites = async (id) => {
  return axios.delete(
    `https://628b7680667aea3a3e2fc700.mockapi.io/favourites/${id}`
  );
};
