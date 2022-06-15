import { MapContainer, TileLayer } from "react-leaflet";

import { FavoriteButton, RemoveFavoriteButton } from "./kiteMapStyle";
import Filter from "./Filter";
import KiteMarker from "../KiteMarker";

export default function KiteMapView({
  spots,
  handleFilter,
  handleAdd,
  handleRemove,
}) {
  const centerPosition = [45.85147792173941, 7.230746835985369];

  const markers = spots.map((spot) => (
    <KiteMarker spot={spot}>
      {spot?.favourite ? (
        <RemoveFavoriteButton onClick={() => handleRemove(spot.favourite.id)}>
          Remove from Favorites
        </RemoveFavoriteButton>
      ) : (
        <FavoriteButton onClick={() => handleAdd(spot.id)}>
          Add to Favorites
        </FavoriteButton>
      )}
    </KiteMarker>
  ));

  return (
    <MapContainer
      style={{
        height: "700px",
        width: "100%",
        position: "relative",
      }}
      center={centerPosition}
      zoom={5}
      scrollWheelZoom={false}
    >
      <Filter handleFilter={handleFilter} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />
      {markers}
    </MapContainer>
  );
}
