import { LocalMallSharp } from "@mui/icons-material";
import { useState } from "react";
import {
  useAddToFavourites,
  useRemoveFromFavourites,
  useGetKiteSpots,
} from "../../hooks/kiteHooks";
import KiteMapView from "./KiteMapView";

export default function KiteMap() {
  const [filters, setFilters] = useState({});
  const { spots } = useGetKiteSpots(null, filters);
  const addToFavourites = useAddToFavourites();
  const removeFromFavourites = useRemoveFromFavourites();

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const handleAdd = (id) => {
    addToFavourites(id);
  };
  const handleRemove = (id) => {
    removeFromFavourites(id);
  };

  return (
    <KiteMapView
      spots={spots}
      handleFilter={handleFilter}
      handleAdd={handleAdd}
      handleRemove={handleRemove}
    />
  );
}
