import React, { useState, useEffect } from 'react';

const ApiHotel = () => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch('/api/google-flights-booking-options');
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
        setError('An error occurred while fetching JSON data');
      } finally {
        setLoading(false);
      }
    };

    fetchJsonData();
  }, []);

  return (
    <div>
      <h2>Google Flights Booking Options</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      )}
    </div>
  );
};

export default ApiHotel;
