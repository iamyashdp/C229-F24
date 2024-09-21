/* 
File: Home.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Intro Section */}
      <section className="intro">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I’m Yash Patel, a Software Engineering Technology student and freelance web developer.
          I specialize in crafting high-quality, custom web solutions tailored to your needs.
        </p>
        <Link to="/about" className="cta-button">Learn More About Me</Link>
      </section>

      {/* Services Section */}
      <section className="services-overview">
        <h2>Why Choose Me?</h2>
        <div className="services-details">
          <div className="service-item">
            <h3>Personalized Consultations</h3>
            <p>
              I offer personalized consultations to understand your specific requirements. 
              We can meet via video call to discuss your project in detail and ensure that we are on the same page.
            </p>
          </div>
          <div className="service-item">
            <h3>Guaranteed Satisfaction</h3>
            <p>
              Your satisfaction is my priority. If you are not happy with the initial prototype, 
              I offer a no-questions-asked refund. I’m committed to delivering work that exceeds your expectations.
            </p>
          </div>
          <div className="service-item">
            <h3>Tailored Solutions</h3>
            <p>
              Every project is unique, and I provide tailored solutions to meet your specific needs, 
              ensuring that you get a product that aligns perfectly with your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <div className="cta-links">
          <Link to="/service" className="cta-button">Explore My Services</Link>
          <Link to="/projects" className="cta-button">View My Projects</Link>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
