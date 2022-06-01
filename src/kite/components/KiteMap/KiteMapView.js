import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Info from "./Info";
import Subtitle from "./Subtitle";
import Title from "./Title";

import { FavoriteButton } from "./kiteMapStyle";
import Filter from "./Filter";

export default function KiteMapView({ spots, handleFilter }) {
  const centerPosition = [45.85147792173941, 7.230746835985369];

  const markers = spots.map((spot) => (
    <Marker position={[parseFloat(spot.lat), parseFloat(spot.long)]}>
      <Popup maxWidth={140}>
        <Card
          variant="outlined"
          sx={{
            borderRadius: 12,
            margin: "0 -25px -14px -21px",
            border: 0,
          }}
        >
          <CardContent>
            <Title>{spot.name}</Title>
            <Subtitle>{spot.country}</Subtitle>
            <br />
            <Subtitle>WIND PROBABILITY</Subtitle>
            <Info>{spot.probability}%</Info>
            <br />
            <Subtitle>LATITUDE</Subtitle>
            <Info>{spot.lat}</Info>
            <br />
            <Subtitle>LONGITUDE</Subtitle>
            <Info>{spot.long}</Info>
            <br />
            <Subtitle>WHEN TO GO</Subtitle>
            <Info>{spot.month}</Info>
            <br />
            <FavoriteButton>Add to Favorites</FavoriteButton>
          </CardContent>
        </Card>
      </Popup>
    </Marker>
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
