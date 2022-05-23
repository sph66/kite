import axios from "axios";

export const findAllSpots = async () => {
  const { data: spots } = await axios.get(
    "https://628b7680667aea3a3e2fc700.mockapi.io/spot"
  );

  return spots;
};
