import React, { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Polygon,
  Rectangle,
  Popup,
  Circle,
  CircleMarker,
} from "react-leaflet";
import { NeighborhoodContext } from "../context/neighborhood.context";

const MyPolygon = () => {
  const neighborhoods = useContext(NeighborhoodContext);
  console.log("Neighbor", neighborhoods);

  const center = [51.505, -0.09];

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };
  return (
    <div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
        <Popup>Popup in CircleMarker</Popup>
        <Polyline pathOptions={limeOptions} positions={polyline} />
        <Polyline pathOptions={limeOptions} positions={multiPolyline} /> */}
        {/* <Polygon pathOptions={purpleOptions} positions={polygon} /> */}
        {/* <Polygon
          pathOptions={purpleOptions}
          positions={m.geometry.coordinates[0][0][1]}
        /> */}
        {neighborhoods.map((m) => {
          return (
            <CircleMarker
              center={[
                m.geometry.coordinates[0][0][1],
                m.geometry.coordinates[0][0][0],
              ]}
              pathOptions={redOptions}
              radius={20}
            ></CircleMarker>
          );
        })}
        {/* <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
      </MapContainer>
      ,
    </div>
  );
};

export default MyPolygon;
