import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";

import Navbar from "./Navbar";
import Header from "./Header";
import Feature from "./Villes";
import About from "./About";
import Contact from "./Contact";
import HotelSearch from "./HotelSearch";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import MapContainer from "./MapContainer";
import ApiHotel from "./ApiHotel";
import SimpleChatbot from "./MyChatBot";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div >
      
      <Header/>
      <Feature/>
      <About/>
      <Contact/>
      <MapContainer/>
      {/* <ApiHotel/> */}
      <SimpleChatbot/>
      
    </div>
  );
};

export default Home;


