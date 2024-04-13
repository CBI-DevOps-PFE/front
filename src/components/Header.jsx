import React from 'react'

function Header() {
  return (
    <div id='main'>
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
  )
}

export default Header