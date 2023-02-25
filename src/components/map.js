import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Map({ location, zoomLevel }) {
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
}

function LocationPin({ text }) {
  return (
    <div>
      <FaMapMarkerAlt />
      <p>{text}</p>
    </div>
  );
}