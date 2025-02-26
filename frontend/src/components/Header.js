// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      {/* Logo & Title */}
      <div className="header__logo">
        <img
          src="/images/4am.webp"
          alt="4AM Logo"
          className="header__logo-image"
        />
        {/* Make title clickable - links back to homepage */}
        <h1 className="header__title">
          <Link to="/" className="header__title-link">
            4AM Enterprises
          </Link>
        </h1>
      </div>

      {/* Calculators Dropdown */}
      <div className="header__calculator dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="calculatorDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Calculators
        </button>
        <ul className="dropdown-menu" aria-labelledby="calculatorDropdown">
          <li>
            <Link className="dropdown-item" to="/gpa-calculator">
              GPA Calculator
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
