import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A reusable dropdown component built with Bootstrap 5.
 * @param {string} label - The text shown on the dropdown button.
 * @param {Array<{ label: string, path: string }>} items - Array of menu items.
 * @returns {JSX.Element}
 */
function DropdownMenu({ label, items }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {items.map((item, index) => (
          <li key={index}>
            <Link className="dropdown-item" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
