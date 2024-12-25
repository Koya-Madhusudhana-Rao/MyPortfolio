import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('navbar-active');
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('navbar-active');
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          MSR
        </Link>

        <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          {navigationItems.map((item, index) => (
            <li key={index} className="navbar__item">
              <Link
                to={item.to}
                className="navbar__link"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="navbar__toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;