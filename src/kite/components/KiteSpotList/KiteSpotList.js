import { useState } from "react";
import { useGetKiteSpots } from "@/kite/hooks";
import KiteSpotListView from "./KiteSpotListView";

export default function KiteSpotList() {
  const [searchSpot, setSearchSpot] = useState("");
  const { spots, isLoading, isError } = useGetKiteSpots(searchSpot);

  const handleSpotSearchOnChange = (searchValue) => {
    setSearchSpot(searchValue);
  };

  return (
    <KiteSpotListView
      {...{ spots, isLoading, isError, searchSpot, handleSpotSearchOnChange }}
    />
  );
}
