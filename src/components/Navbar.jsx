/* 
File: Navbar.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/


import React from "react";
import "./Navbar.css";
import logo_dark from "../assets/logo-dark.png";
import logo_light from "../assets/logo-dark.png";
import toggle_dark from "../assets/day.png";
import toggle_light from "../assets/night.png";
import Router from "./Router";
import { Link } from 'react-router-dom';

const Navbar = ({theme, setTheme}) => {

  // Function to toggle between light and dark themes
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  
  return (
    <div className="navbar">
      <img src={theme == 'light' ? logo_light : logo_dark} alt="Logo" className="logo" />

      <ul>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Projects
        </li>
        <li>
          Services
        </li>
        <li>
          Contact
        </li>
      </ul>

        <img onClick={ () => {toggle_mode() }} src={ theme == 'light' ? toggle_light : toggle_dark } alt="Toggle Button" className="toggle-button" />
    </div>
  );
};

export default Navbar;
