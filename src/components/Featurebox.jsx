import React from 'react';
import { NavLink } from 'react-router-dom';


function Featurebox(props) {
  return (
    
     
    <div className='a-box' >
        <div class='a-b-img'>
            <img src={props.image} alt=''/>

        </div>
        <div className='a-b-text'>
        <p>{props.description}</p>
      <h2>
        {props.title}
      </h2>
      
      </div>
    </div>
   
  )
}

export default Featurebox;