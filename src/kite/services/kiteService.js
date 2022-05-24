import { SpokeTwoTone } from "@mui/icons-material";
import axios from "axios";

export const findAllSpots = async (searchValue) => {
  const { data: spots } = await axios.get(
    "https://628b7680667aea3a3e2fc700.mockapi.io/spot"
  );

  if (!searchValue) {
    return spots;
  }

  const pattern = new RegExp(`${searchValue}+`, "i");

  return spots.filter((spot) => {
    return (
      pattern.test(spot.name) ||
      pattern.test(spot.country) ||
      pattern.test(spot.lat) ||
      pattern.test(spot.long) ||
      pattern.test(spot.month) ||
      pattern.test(`${spot.probability}`)
    );
  });
};
