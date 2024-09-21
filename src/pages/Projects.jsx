/* 
File: Projects.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import React, { useState } from 'react'
import './Projects.css'


const Projects = () => {
  return (
    <div className="projects-page dark">
      <h1>Projects</h1>
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="project-tiles">
          <div className="project-tile">
            <img src="realtor-website-screenshot.png" alt="Realtor Website" />
            <h3>Realtor Website</h3>
            <p>Role: Front-end Developer<br/>Outcome: Developed a responsive realtor website using HTML, CSS, and JavaScript, featuring a modern design and easy navigation. The website is fully functional and has been deployed to a production environment.</p>
          </div>
          <div className="project-tile">
            <img src="android-app-screenshot.png" alt="Android App" />
            <h3>Android App</h3>
            <p>Role: Mobile App Developer<br/>Outcome: Designed and developed a native Android app using Java and Android Studio, featuring a user-friendly interface and core functionality. The app has been published on the Google Play Store.</p>
          </div>
          <div className="project-tile">
            <img src="calculator-website-screenshot.png" alt="Basic Calculator Website" />
            <h3>Basic Calculator Website</h3>
            <p>Role: Full-stack Developer<br/>Outcome: Built a simple calculator website using HTML, CSS, and JavaScript, featuring basic arithmetic operations. The website is fully functional and has been deployed to a production environment.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;