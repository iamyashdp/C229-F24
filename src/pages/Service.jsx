/* 
File: Service.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import './Service.css';
import React from 'react';
import java_logo from "../assets/java-logo.png";
import android_logo from "../assets/android-logo.png";
import website_logo from "../assets/website-logo.jfif";
import consultation_logo from "../assets/consultation-logo.jfif";
import development_logo from "../assets/development-logo.jfif";
import maintenance_logo from "../assets/maintenance-logo.jfif";

// Service page component
const Services = () => {
  return (
    <div className="services-page">
      <h1>Services</h1>
      <section className="services-section">
        <h2>Software Development</h2>
        <div className="service-tiles">
          <div className="service-tile">
            <img src={java_logo} alt="Java Development" />
            <h3>Java Development</h3>
            <p>Developing robust and scalable Java applications using the latest technologies and frameworks.</p>
          </div>
          <div className="service-tile">
            <img src={android_logo} alt="Android App Development" />
            <h3>Android App Development</h3>
            <p>Designing and developing high-quality Android apps that meet your business needs.</p>
          </div>
          <div className="service-tile">
            <img src={website_logo} alt="Website Development" />
            <h3>Website Development</h3>
            <p>Offering custom website development services using the latest web technologies and frameworks.</p>
          </div>
        </div>
      </section>
      <section className="services-section">
        <h2>Freelance Services</h2>
        <div className="service-tiles">
          <div className="service-tile">
            <img src={consultation_logo} alt="Project Consultation" />
            <h3>Project Consultation</h3>
            <p>Providing expert consultation services to help you plan and execute your projects successfully.</p>
          </div>
          <div className="service-tile">
            <img src={development_logo} alt="Development Services" />
            <h3>Development Services</h3>
            <p>Offering development services on an hourly or project basis, depending on your needs.</p>
          </div>
          <div className="service-tile">
            <img src={maintenance_logo} alt="Maintenance and Support" />
            <h3>Maintenance and Support</h3>
            <p>Helping you maintain and support your existing applications, ensuring they remain up-to-date and running smoothly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
