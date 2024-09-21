/* 
File: App.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import "./App.css";
import React, { useEffect, useState } from "react";
import Router from './components/Router';
import Navbar from "./components/Navbar";

export default function App() {
  // Retrieve the current theme from localStorage, default to 'light'
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Router />
    </div>
  );
}
