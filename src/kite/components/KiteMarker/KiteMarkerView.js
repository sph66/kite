import { Marker, Popup } from "react-leaflet";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Info from "./Info";
import Subtitle from "./Subtitle";
import Title from "./Title";

export default function KiteMarkerView({ spot, children }) {
  return (
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
            {children}
          </CardContent>
        </Card>
      </Popup>
    </Marker>
  );
}
