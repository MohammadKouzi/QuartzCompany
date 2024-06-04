import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3>Company Description</h3>
            <p>We are a team of developers passionate <br/>
            about creating
            useful and innovative web applications.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3>Website Sections</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/glass">Glass</Link></li>
              <li><Link to="/quartz">Quartz</Link></li>
              <li><Link to="/marble">Marble</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h3>Contact Us</h3>
            <p>Email: example@example.com <br/>
             Phone: +1234567890</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>© 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
