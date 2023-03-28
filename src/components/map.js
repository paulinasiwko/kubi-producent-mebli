import React from 'react';
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import './components.css';

const position = [54.12222, 19.30422];

export default function Map() {
  return (
    <MapContainer className='map'
                  center={position}
                  zoom={15}
                  scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>
  );
}
