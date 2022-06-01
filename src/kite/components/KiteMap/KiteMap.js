import { useState } from "react";
import { useGetKiteSpots } from "../../hooks/kiteHooks";
import KiteMapView from "./KiteMapView";

export default function KiteMap() {
  const [filters, setFilters] = useState({});
  const { spots } = useGetKiteSpots(null, filters);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return <KiteMapView spots={spots} handleFilter={handleFilter} />;
}
