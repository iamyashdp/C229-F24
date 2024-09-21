/* 
File: Projects.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import React from 'react';
import './Projects.css';
import realtor_screenshot from "../assets/realtor-website-screenshot.png";
import android_screenshot from "../assets/android-app-screenshot.png";
import product_screenshot from "../assets/product-website-screenshot.png";

// Projects page component
const Projects = () => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="project-tiles">
          <div className="project-tile">
            <img src={realtor_screenshot} alt="Realtor Website" />
            <h3>Realtor Website</h3>
            <p>Role: Front-end Developer<br/>Outcome: Developed a responsive realtor website using HTML, CSS, and JavaScript, featuring a modern design and easy navigation. The website is fully functional and has been deployed to a production environment.</p>
          </div>
          <div className="project-tile">
            <img src={android_screenshot} alt="Android App" />
            <h3>Android App</h3>
            <p>Role: Mobile App Developer<br/>Outcome: Designed and developed a native Android Calculator app using Java and Android Studio, featuring a user-friendly interface and core functionality. The app has been published on the Google Play Store.</p>
          </div>
          <div className="project-tile">
            <img src={product_screenshot} alt="Basic Product Website" />
            <h3>Basic Calculator Website</h3>
            <p>Role: Full-stack Developer<br/>Outcome: Built a simple product spec website using HTML, CSS, and JavaScript, featuring detailed specs, comparision and purchase location with map integration. The website is fully functional and has been created for assignment purpose</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
