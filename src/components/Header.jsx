import React, { useState } from 'react';
import video1 from '../video2.mp4'
function Header() {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div id='main' className='bg-video'>
      {videoError ? (
        <div className="fallback-message">
          Sorry, there was an error loading the video.
        </div>
      ) : (
        <video autoPlay muted loop className='bg-video' onError={handleVideoError}>
          <source src={video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
      <div className='name'>
        <h2>WELCOME</h2>
        <h1>TO <span>MOROCCO</span> </h1>
        <p className='details'>
          Explorez le Maroc, l'une des destinations passionnantes pour la Coupe du Monde FIFA 2030 ! Découvrez ses villes vibrantes, ses paysages variés et son riche mélange de cultures tout en vivant l'excitation du plus grand événement sportif mondial. Préparez-vous à être enchanté par l'hospitalité marocaine et à créer des souvenirs inoubliables pendant cet événement historique.
        </p>
        {/* <div className='header-btns'>
          <a href='searchH' className='header-btn'>JOIN US</a>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
