import React, { useState, useEffect } from "react";
import { Link as SLink } from 'react-scroll';
import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo (3).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/auth";
import "../App.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register" || location.pathname.includes("/BookingHotel")) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [location]);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <nav className={`${nav ? "nav active" : "nav"} ${hideNav ? "hide-nav" : ""}`}>
      <SLink to="main" className='logo' smooth={true} duration={2000}>
        <img src={logo} alt='' />
      </SLink>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'></label>
      <span className='nav-icon'></span>
      <ul className='menu'>
        <li><SLink to='main' smooth={true} duration={1000}>Home</SLink></li>
        <li><SLink to='features' smooth={true} duration={1000}>Villes</SLink></li>
        <li><SLink to='#' smooth={true} duration={1000}>Offer</SLink></li>
        <li><SLink to='about' smooth={true} duration={1000}>About</SLink></li>
        <li><SLink to='contact' smooth={true} duration={1000}>Contact</SLink></li>
      </ul>
      <Link to={"/"} className="navbar-brand"></Link>
      <div className="navbar-nav mr-auto">
        {currentUser && (
          <>
            {currentUser.roles.includes("ROLE_MODERATOR") && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">Moderator Board</Link>
              </li>
            )}
            {currentUser.roles.includes("ROLE_ADMIN") && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">Admin Board</Link>
              </li>
            )}
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">User</Link>
            </li>
          </>
        )}
      </div>
      {currentUser ? (
        <div className="navbar-nav ml-auto">
          <li>
            <Link to={"/profile"} className="nav-link">{currentUser.username}</Link>
          </li>
          <li>
            <a href="/login" className="nav-link" onClick={logOut}>LogOut</a>
          </li>
        </div>
      ) : (
        <div className='menu'>
          <li>
            <Link to={"/login"} className="nav-link">
              <FontAwesomeIcon icon={faUser} style={{ fontSize: '25px', color: 'red' }} />
            </Link>
          </li>
          <li>
            <Link to={"/register"} className="nav-link">
              <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: '24px', color: 'red' }} />
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
