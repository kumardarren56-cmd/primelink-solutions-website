import {
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../assets/brand/primelink-logo.png";

export default function Footer() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to discuss your services.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <NavLink className="footer-brand" to="/">
            <img
              src={logo}
              alt="PrimeLink Solutions"
              className="footer-logo"
            />
          </NavLink>

          <p>
            A proudly Fijian multi-service company providing cleaning, solar,
            delivery, property care and business solutions.
          </p>

          <strong className="footer-tagline">
            One Company. Every Solution.
          </strong>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>

          <NavLink to="/services">Cleaning Services</NavLink>
          <NavLink to="/services">Solar Solutions</NavLink>
          <NavLink to="/services">Delivery Services</NavLink>
          <NavLink to="/services">Property Care</NavLink>
          <NavLink to="/services">Business Services</NavLink>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a href="tel:+6798654795">
            <FaPhoneAlt />
            +679 865 4795
          </a>

          <a href="mailto:primelinksolutions740@gmail.com">
            <FaEnvelope />
            primelinksolutions740@gmail.com
          </a>

          <span>
            <FaMapMarkerAlt />
            Suva, Fiji Islands
          </span>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

          <span className="footer-social">
            <FaFacebookF />
            Facebook coming soon
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PrimeLink Solutions. All rights reserved.</p>

        <p>Daren Kumar — Founder & Managing Director</p>
      </div>
    </footer>
  );
}