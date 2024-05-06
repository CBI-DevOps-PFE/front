import React, { useEffect } from 'react';

const MapComponent = () => {
    useEffect(() => {
        loadMapScript();
    }, []);

    const loadMapScript = () => {
        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCn5ZsFTeI6peDEtzJB00BYLyxkGvECO7k&callback=initMap`;
            script.async = true;
            script.defer = true;
            script.onload = () => initMap();
            document.head.appendChild(script);
        } else {
            initMap();
        }
    };

    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    };

    return (
        <div>
            <div id="map" style={{ height: '400px', width: '100%', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}></div>
        </div>
    );
};

export default MapComponent;
