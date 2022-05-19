import { MapContainer, TileLayer } from "react-leaflet";

export default function KiteMapView() {
  const position = [45.85147792173941, 7.230746835985369];
  return (
    <MapContainer
      style={{
        height: "700px",
        width: "100%",
      }}
      center={position}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />
    </MapContainer>
  );
}
