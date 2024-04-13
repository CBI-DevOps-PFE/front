import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/rabat.jpg';
import fimage2 from '../images/Agadir.jpg';
import fimage3 from '../images/la-mosquee-hassan-ii-au-coucher-du-soleil-a-casablanca-maroc.jpg';
import fimage4 from '../images/offer.png';
import fimage5 from '../images/Tanger.jpg';
import fimage6 from '../images/Fes.jpg';
import villeimage from '../images/banner.png'
function Feature() {
 
  return (
    <div id='features' >
     
        <h1 >VILLES DU MONDIALE</h1>
        <div class="feature-container">
  <div class="feature-box">
    <Featurebox image={fimage1} title="Rabat" description="Rabat est l'une des principales villes du Maroc, servant de capitale."/>
  </div>
  <div class="feature-box">
    <Featurebox image={fimage2} title="Agadir" description="Agadir est une ville côtière. Elle est réputée pour son climat doux tout au long de l'année, ses plages de sable fin."/>
  </div>
  <div class="feature-box">
    <Featurebox image={fimage3} title="Casablanca" description="Casablanca est la plus grande ville du Maroc, réputée pour sa mosquée Hassan II et son importance économique."/>
  </div>
</div>
<div class="feature-container">
  <div class="feature-box">
    <Featurebox image={fimage4} title="Marrakech" description="Marrakech est une ville du Maroc, réputée pour sa médina, ses souks animés, ses palais historiques."/>
  </div>
  <div class="feature-box">
    <Featurebox image={fimage5} title="Tanger" description="Tanger, ville côtière du nord du Maroc, est un carrefour culturel entre l'Afrique et l'Europe."/>
  </div>
  <div class="feature-box">
    <Featurebox image={fimage6} title="Fès" description="Fès, ville impériale du Maroc, est renommée pour sa médina médiévale."/>
  </div>
</div>

    </div>
  )
}

export default Feature