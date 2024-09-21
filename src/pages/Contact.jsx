/* 
File: Contact.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

// Contact page component
const Contact = () => {
  const navigate = useNavigate(); 

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Please fill your details and a brief message about your inquiry. I will try to get back to you as soon as possible.</label>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />

        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default Contact;
