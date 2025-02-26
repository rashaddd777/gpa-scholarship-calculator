// src/components/Footer.js
import React from 'react';
import '../styles/footer.css'; // or wherever your footer CSS is located

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <p className="footer__text mb-0">
          &copy; {new Date().getFullYear()} 4AM Enterprises. All rights reserved.
        </p>
    
        {/* Contact Information */}
        <p className="footer__text">
          For <strong>model and engineering</strong> related problems, contact: 
          <a href="mailto:rkerimov17619@ada.edu.az" className="footer__link">
            {' '}rkerimov17619@ada.edu.az
          </a>
        </p>
        <p className="footer__text">
          For <strong>content</strong> related problems, contact: 
          <a href="mailto:fsalmanli16970@ada.edu.az" className="footer__link">
            {' '}fsalmanli16970@ada.edu.az
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
