import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppTab from "./Uteletis/WhatsAppTab";
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Glass from './components/Materials/Glass';
import Quartz from './components/Materials/Quartz';
import Marble from './components/Materials/Marble';
import Header from './Uteletis/Header';
import Footer from './Uteletis/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <WhatsAppTab />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/glass" element={<Glass />} />
          <Route path="/quartz" element={<Quartz />} />
          <Route path="/marble" element={<Marble />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
