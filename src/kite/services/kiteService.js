import { MilitaryTechSharp, SpokeTwoTone } from "@mui/icons-material";
import axios from "axios";

export const findAllSpots = async (searchValue, filters) => {
  const { data: spots } = await axios.get(
    "https://628b7680667aea3a3e2fc700.mockapi.io/spot"
  );

  if (!searchValue && !filters?.country && !filters?.probability) {
    return spots;
  }

  const pattern = new RegExp(`${searchValue}+`, "i");
  const countryPattern = filters?.country
    ? new RegExp(`${filters.country}+`, "i")
    : null;
  const probabilityPattern = filters?.probability
    ? new RegExp(`${filters.probability}+`, "i")
    : null;

  return spots.filter((spot) => {
    const matchSearch = !searchValue
      ? false
      : pattern.test(spot.name) ||
        pattern.test(spot.country) ||
        pattern.test(spot.lat) ||
        pattern.test(spot.long) ||
        pattern.test(spot.month) ||
        pattern.test(`${spot.probability}`);
    const matchCountry = !filters?.country
      ? false
      : countryPattern.test(spot.country);
    const matchProbability = !filters?.probability
      ? false
      : probabilityPattern.test(spot.probability);

    return matchSearch || matchCountry || matchProbability;
  });
};
