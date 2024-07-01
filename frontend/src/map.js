import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css';

// Fix the default icon issue in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  const position = [51.505, -0.09]; // Coordinates for the center of the map

  // Array of objects containing coordinates and names of avalanche-prone places
  const avalanchePlaces = [
    { name: 'Gulmarg', coordinates: [34.0484, 74.3856] },
    { name: 'Sonmarg', coordinates: [34.3015, 75.2899] },
    { name: 'Khardung La', coordinates: [34.2996, 77.5865] },
    { name: 'Rohtang Pass', coordinates: [32.3891, 77.1527] },
    { name: 'Zoji La', coordinates: [34.3633, 75.5341] },
    { name: 'Auli', coordinates: [30.5337, 79.5712] },
    { name: 'Gangotri Glacier', coordinates: [30.9944, 78.9357] },
    { name: 'Nanda Devi', coordinates: [30.3753, 79.8382] },
    { name: 'Siachen Glacier', coordinates: [35.3909, 77.1097] },
    { name: 'Baralachla Pass', coordinates: [32.9979, 77.3048] }
  ];

  return (
    <div className='map_container'>
      <MapContainer center={position} zoom={5} style={{ height: "100vh", width: "100%"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {avalanchePlaces.map((place, index) => (
          <Marker key={index} position={place.coordinates}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      </div>
  );
};

export default MapComponent;
