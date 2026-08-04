import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
import servicesInAction from "../assets/projects/primelink-services-in-action.png";

export default function ServicesInAction() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to discuss a service project.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="section services-action-section">
      <div className="section-heading">
        <p className="section-label">Our Services in Action</p>

        <h2>One professional brand across five service divisions</h2>

        <p>
          Explore the range of cleaning, solar, delivery, property care and
          business services PrimeLink Solutions is prepared to provide across
          Fiji.
        </p>
      </div>

      <div className="services-action-card">
        <img
          src={servicesInAction}
          alt="PrimeLink Solutions service overview"
        />

        <div className="services-action-footer">
          <div>
            <span>PrimeLink Solutions</span>
            <h3>Reliable service. Practical solutions.</h3>
          </div>

          <div className="services-action-buttons">
            <Link className="btn btn-primary" to="/contact">
              Request a Free Quote
              <FaArrowRight />
            </Link>

            <a
              className="btn btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}