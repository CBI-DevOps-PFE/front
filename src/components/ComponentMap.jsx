// ComponentMap.jsx
import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin'; // Import de l'icône de localisation

const ComponentMap = ({ latitude, longitude }) => {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 14
    };
  
    return (
      <div style={{ height: '2000px', width: '1000px' }}> {/* Ajustez la hauteur et la largeur ici */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          {/* Ajoutez l'icône de localisation à la position */}
          <LocationPin
            lat={latitude}
            lng={longitude}
            text="Votre emplacement"
          />
        </GoogleMapReact>
      </div>
    );
  };
  

export default ComponentMap;
