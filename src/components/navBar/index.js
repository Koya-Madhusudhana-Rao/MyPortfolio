import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.css";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Me",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/portfolio",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    
    // Toggle the class on body to change background color when navbar is active
    if (!toggleIcon) {
      document.body.classList.add('navbar-active');
    } else {
      document.body.classList.remove('navbar-active');
    }
  };

  const handleItemClick = () => {
    setToggleIcon(false);
    document.body.classList.remove('navbar-active'); // Remove the background color change when a menu item is clicked
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
          <ul
            className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}
          >
            {data.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                <Link
                  className="navbar__container__menu__item__links"
                  to={item.to}
                  onClick={handleItemClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
