const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/google-flights-booking-options', async (req, res) => {
  try {
    const response = await axios.get('https://serpapi.com/search.json?engine=google_flights&departure_id=CDG&arrival_id=LHR&outbound_date=2024-05-03&return_date=2024-05-09&currency=USD&hl=en&booking_token=7ed83e3c9a41c77c33a3526c56e004def70486d2350a4880f7167eb2472ff244');
    const bookingOptions = response.data?.booking_options || [];
    res.json(bookingOptions);
  } catch (error) {
    console.error('Error fetching booking options:', error);
    res.status(500).json({ error: 'An error occurred while fetching booking options' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
