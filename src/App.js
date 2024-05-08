import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link as SLink } from 'react-scroll';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo  from './images/logo (3).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import BookingHotel from "./components/BookingHotel";
import { logout } from "./slices/auth";
import user from "./images/user.png"
import EventBus from "./common/EventBus";

import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const App = () => {
  const [nav,setnav]= useState(false);
const changeBachground = ()=>{
    if (window.scrollY >= 50){
        setnav(true);}
        else{
            setnav(false)
        }}
        window.addEventListener('scroll',changeBachground);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router>
      <div>
      <nav className={ nav ? "nav active" : "nav"}>
      <SLink  to="main" className='logo' smooth={true} duration={2000}>
        <img src={logo} alt=''></img>
    </SLink>
    <input className='menu-btn' type='checkbox' id='menu-btn' />
    <label className='menu-icon' for='menu-btn'></label>
    <span className='nav-icon'></span>
    
    <ul className='menu'>
        <li><SLink to='main'  smooth={true} duration={1000}>Home</SLink></li>
        <li><SLink to='features' smooth={true} duration={1000}>Villes</SLink></li>
       <li><SLink to='#' smooth={true} duration={1000}>Offer</SLink></li>
        <li><SLink to='about' smooth={true} duration={1000}>About</SLink></li>
        <li><SLink to='contact' smooth={true} duration={1000}>Contact</SLink></li>
    </ul>
          <Link to={"/"} className="navbar-brand">
            
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link to={"/home"} className="nav-link">
                Home
              </Link> */}
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li >
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li >
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
< div className='menu'>
              <li >
                <Link to={"/login"} className="nav-link">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: '25px', color: 'red' }} />
    {/* Login */}
                </Link>
              </li>

              <li >
                <Link to={"/register"} className="nav-link">
                <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: '24px', color: 'red' }} />
    {/* Signup */}
                </Link>
              </li>
              </div>   
          )}
        </nav>

        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/BookingHotel" element={<BookingHotel />} />
            <Route path="/BookingHotel/:ville" element={<BookingHotel />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
