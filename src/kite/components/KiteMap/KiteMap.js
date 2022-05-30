import { useGetKiteSpots } from "../../hooks/kiteHooks";
import KiteMapView from "./KiteMapView";

export default function KiteMap() {
  const { spots } = useGetKiteSpots();

  return <KiteMapView spots={spots} />;
}
