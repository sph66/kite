import { useGetKiteSpots } from "@/kite/hooks";
import KiteSpotListView from "./KiteSpotListView";

export default function KiteSpotList() {
  const { spots, isLoading, isError } = useGetKiteSpots();

  return <KiteSpotListView {...{ spots, isLoading, isError }} />;
}
