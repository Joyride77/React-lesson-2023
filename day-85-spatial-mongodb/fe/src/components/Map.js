import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { RestaurantContext } from "../context/restaurants.context";

const Map = () => {
  const restaurants = useContext(RestaurantContext);
  //   console.log("RES", restaurants);

  const position = restaurants.map((m, index) => {
    return (
      <Marker key={index} position={[m.address.coord[1], m.address.coord[0]]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    );
  });

  // console.log(position);

  return (
    <div>
      <h1>My Map</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position}
      </MapContainer>
    </div>
  );
};

export default Map;
