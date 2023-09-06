import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // You can use any icons you prefer
import "./Navbar.css"; // Create a separate CSS file for styling
import logo from "./images/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="container">
        <div>
          <img className="logo" src={logo} alt="Nishant" />
        </div>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="signin-button">
            <button>Sign In</button>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
