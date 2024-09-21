/* 
File: Service.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import './Service.css'
import React from 'react';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Services</h1>
      <section className="services-section">
        <h2>Software Development</h2>
        <div className="service-tiles">
          <div className="service-tile">
            <img src="java-logo.png" alt="Java Development" />
            <h3>Java Development</h3>
            <p>Developing robust and scalable Java applications using the latest technologies and frameworks.</p>
          </div>
          <div className="service-tile">
            <img src="android-logo.png" alt="Android App Development" />
            <h3>Android App Development</h3>
            <p>Designing and developing high-quality Android apps that meet your business needs.</p>
          </div>
          <div className="service-tile">
            <img src="website-logo.png" alt="Website Development" />
            <h3>Website Development</h3>
            <p>Offering custom website development services using the latest web technologies and frameworks.</p>
          </div>
        </div>
      </section>
      <section className="services-section">
        <h2>Freelance Services</h2>
        <div className="service-tiles">
          <div className="service-tile">
            <img src="consultation-logo.png" alt="Project Consultation" />
            <h3>Project Consultation</h3>
            <p>Providing expert consultation services to help you plan and execute your projects successfully.</p>
          </div>
          <div className="service-tile">
            <img src="development-logo.png" alt="Development Services" />
            <h3>Development Services</h3>
            <p>Offering development services on an hourly or project basis, depending on your needs.</p>
          </div>
          <div className="service-tile">
            <img src="maintenance-logo.png" alt="Maintenance and Support" />
            <h3>Maintenance and Support</h3>
            <p>Helping you maintain and support your existing applications, ensuring they remain up-to-date and running smoothly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;