import React, { useState } from 'react';
import axios from 'axios';

function HotelSearch() {
    const [stars, setStars] = useState('');
    const [hotels, setHotels] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/hotels/stars/${stars}`);
            setHotels(response.data);
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    };

    return (
        <div id='searchH'>
            <input type="number" placeholder="Stars" value={stars} onChange={(e) => setStars(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {hotels.map((hotel) => (
                    <li key={hotel.id}>{hotel.name} - {hotel.stars} stars</li>
                ))}
            </ul>
        </div>
    );
}

export default HotelSearch;