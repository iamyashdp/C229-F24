/* 
File: Router.jsx
Student Name: Yash Patel
StudentID: 301089593
Date: 2024/09/13
*/

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Projects from '../pages/Projects';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;