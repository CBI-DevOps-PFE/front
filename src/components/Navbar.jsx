import React , {useState}from 'react';
import logo  from '../images/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
const [nav,setnav]= useState(false);
const changeBachground = ()=>{
    if (window.scrollY >= 50){
        setnav(true);}
        else{
            setnav(false)
        }}
        
window.addEventListener('scroll',changeBachground);
  return (
    <nav className={ nav ? "nav active" : "nav"}>
    <Link  to="main" className='logo' smooth={true} duration={2000}>
        <img src={logo} alt=''></img>
    </Link>
    <input className='menu-btn' type='checkbox' id='menu-btn' />
    <label className='menu-icon' for='menu-btn'></label>
    <span className='nav-icon'></span>
    
    <ul className='menu'>
        <li><Link to='main' smooth={true} duration={1000}>Home</Link></li>
        <li><Link to='features' smooth={true} duration={1000}>Villes</Link></li>
        <li><Link to='#' smooth={true} duration={1000}>Offer</Link></li>
        <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
        <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar;