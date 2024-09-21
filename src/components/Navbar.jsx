/* 
File: Navbar.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/


import React, { useState } from "react";
import "./Navbar.css";
import logo_dark from "../assets/logo-dark.png";
import logo_light from "../assets/logo-dark.png";
import toggle_dark from "../assets/day.png";
import toggle_light from "../assets/night.png";
import hamburger from "../assets/hamburger.png";
import Router from "./Router";
import { Link } from 'react-router-dom';

const Navbar = ({theme, setTheme}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Function to toggle between light and dark themes
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  
  return (
    <div className="navbar">
      <div className="logo-container">
        <a href="/">
      <img src={theme == 'light' ? logo_light : logo_dark} alt="Logo" className="logo" />
      </a>
      </div>
      
      <div className="menu-toggle">
        <img src={hamburger} alt="Menu Toggle" className="hamburger" onClick={() => toggleMenu()} />
      </div>
      
      <ul className={menuOpen ? "menu-open" : "" }>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/service">Services</a></li>
        <li><a href="/contact">Contact Me</a></li>
        <li>
          <img onClick={ () => {toggle_mode() }} src={ theme == 'light' ? toggle_light : toggle_dark } alt="Toggle Button" className="toggle-button" />
        </li>
      </ul>

        
    </div>
  );
};

export default Navbar;
