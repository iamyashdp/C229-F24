/* 
File: App.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/


import "./App.css";
import React, { useEffect, useState } from "react";
import Router from './components/Router';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

export default function App() {
  // Retrieve and set the current theme from localStorage or default to light
  const currentTheme = localStorage.getItem("currentTheme");

  // Update localStorage whenever the theme changes
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <>
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Router />
    </div>
    
    </>
  );
}
