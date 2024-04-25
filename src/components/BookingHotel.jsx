import React, { useState, useEffect } from 'react';
import './BookingHotel.css'; // Importez votre fichier CSS pour styliser les éléments

const BookingHotel = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          const responseData = JSON.parse(this.responseText);
          setLocations(responseData);
        }
      });

      xhr.open('GET', 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=casablanca&languagecode=fr-fr');
      xhr.setRequestHeader('X-RapidAPI-Key', 'd40b7bda54msh466186402de16cbp1a621bjsncb23cedddca2');
      xhr.setRequestHeader('X-RapidAPI-Host', 'apidojo-booking-v1.p.rapidapi.com');

      // Désactiver le mode "credentials"
      xhr.withCredentials = false;

      xhr.send();
    };

    fetchData();
  }, []);

  const handleReservation = (url) => {
    // Redirigez l'utilisateur vers l'URL pour effectuer une réservation
    window.location.href = url;
  };

  return (
    <div className="booking-container">
      <h2>Locations</h2>
      {locations.map((location, index) => (
        <div className="location-card" key={index}>
          <img src={location.image} alt={location.name} />
          <div className="location-details">
            <h3>{location.name}</h3>
            <p>{location.description}</p>
            <p>Adresse: {location.address}</p>
            <p>Pays: {location.country}</p>
            <p>Code postal: {location.postalCode}</p>
            {/* Ajoutez d'autres attributs que vous souhaitez afficher */}
            <button onClick={() => handleReservation(location.bookingUrl)}>Réserver</button>
            {/* Utilisez la propriété bookingUrl ou siteUrl de l'objet location pour rediriger l'utilisateur */}
            {/* <button onClick={() => handleReservation(location.siteUrl)}>Visiter le site</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHotel;
