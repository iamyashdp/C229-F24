/* 
File: About.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import React from 'react';
import './About.css';
import profileImage from '../assets/profile-image.jpg'; 
import resume from '../assets/resume.pdf'; 

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <section className="about-section">
        <img src={profileImage} alt="Profile Image" className="profile-image" />
        <h2>Yash Patel</h2>
        <p>
          I'm a passionate software developer with a strong interest in building innovative and scalable solutions.
          With a solid foundation in computer science and a keen eye for detail, I'm always looking for new challenges
          and opportunities to grow as a developer.
        </p>
      </section>
      <section className="about-section">
        <h2>Resume</h2>
        <p>
          Download a PDF version of my resume:
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume (PDF)
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;