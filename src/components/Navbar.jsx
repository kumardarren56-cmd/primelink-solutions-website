import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../assets/brand/primelink-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="main-navbar">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <img
            src={logo}
            alt="PrimeLink Solutions"
            className="navbar-logo"
          />
        </NavLink>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`main-nav-links ${menuOpen ? "menu-open" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <NavLink className="navbar-quote-button" to="/contact">
          Get a Quote
        </NavLink>
      </nav>
    </header>
  );
}