// BookingHotel.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookingHotel.css';
import ComponentMap from './ComponentMap'; // Importez votre composante de carte

const BookingHotel = () => {
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null); // Pour stocker la position sélectionnée
  const [error, setError] = useState(null); // Pour gérer les erreurs
  const { ville } = useParams();

  useEffect(() => {
    const fetchData = () => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            const responseData = JSON.parse(this.responseText);
            setLocations(responseData);
            setError(null); // Réinitialiser l'erreur si la requête réussit
            if (responseData.length > 0) {
              setSelectedLocation({ latitude: responseData[0].latitude, longitude: responseData[0].longitude });
            }
          } else {
            setError('Aucun résultat trouvé.'); // Définir l'erreur si la requête échoue
            setLocations([]); // Réinitialiser les résultats
          }
        }
      });
      xhr.open('GET', `https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=${ville} ${searchQuery} maroc &languagecode=fr-fr`);
      xhr.setRequestHeader('X-RapidAPI-Key', 'd40b7bda54msh466186402de16cbp1a621bjsncb23cedddca2');
      xhr.setRequestHeader('X-RapidAPI-Host', 'apidojo-booking-v1.p.rapidapi.com');
      xhr.withCredentials = false;
      xhr.send();
    };
    fetchData();
  }, [ville, searchQuery]);

  const [zoom, setZoom] = useState(14); // State pour contrôler le zoom

  const handleShowOnMap = (latitude, longitude) => {
    setSelectedLocation({ latitude, longitude, zoom: 14 }); // Stockez la position sélectionnée avec le niveau de zoom
    setZoom(16); // Mettez à jour le niveau de zoom
  };
  
  const handleSearch = () => {
    setLocations([]);
    setSearchQuery(document.getElementById('searchInput').value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="booking-container">
      <div className="center">
        <h2>Welcome to {ville}</h2>
      </div>
      <hr />
      <div className="search-container center">
        <input type="text" id="searchInput" className="search-input" placeholder="Rechercher un lieu..." onKeyPress={handleKeyPress} />
        <button className="search-button" onClick={handleSearch}>Rechercher</button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          {error ? (
            <p>{error}</p>
          ) : (
            locations.map((location, index) => (
              <div className="location-card" key={index}>
                <img src={location.image_url} alt={location.name} />
                <div className="location-details">
                  <h3>{location.label}</h3>
                  <p>Ville : {location.city_name}</p>
                  <p>Pays : {location.country}</p>
                  <p>Région : {location.region}</p>
                  <p>Nombre d'hôtels : {location.nr_hotels}</p>
                  <button onClick={() => handleShowOnMap(location.latitude, location.longitude)}>Afficher sur la carte</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div style={{ flex: 1 }} className="map-container">
          {/* Composante de carte ici */}
          {selectedLocation && <ComponentMap latitude={selectedLocation.latitude} longitude={selectedLocation.longitude} />}
        </div>
      </div>
    </div>
  );
};

export default BookingHotel;
