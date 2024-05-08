import React from 'react';
import { Link } from 'react-router-dom';

function Featurebox({ ville, image, description, title, isLoggedIn }) {
  const handleCityClick = () => {
    if (!isLoggedIn) {
      const confirmLogin = window.confirm('Please log in to book. Would you like to log in now?');
      if (confirmLogin) {
        // Redirect to login page
        window.location.href = '/login'; // Replace '/login' with your actual login page URL
      }
    }
  };

  return (
    <Link to={isLoggedIn ? `/BookingHotel/${ville}` : '#'}>
      <div className='a-box' onClick={handleCityClick}>
        <div className='a-b-img'>
          <img src={image} alt='' />
        </div>
        <div className='a-b-text'>
          <p>{description}</p>
          <h2>{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Featurebox;
