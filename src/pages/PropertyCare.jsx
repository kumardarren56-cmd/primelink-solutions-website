import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaHome,
  FaLeaf,
  FaPaintRoller,
  FaShieldAlt,
  FaTools,
  FaTree,
  FaWhatsapp,
  FaWrench,
} from "react-icons/fa";
import { Link } from "react-router";

export default function PropertyCare() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to discuss property care services.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const services = [
    {
      icon: <FaTools />,
      title: "General Maintenance",
      text: "Practical maintenance support for common property issues and routine upkeep.",
    },
    {
      icon: <FaTree />,
      title: "Landscaping and Grounds Care",
      text: "Support for lawns, gardens, outdoor areas and the overall presentation of a property.",
    },
    {
      icon: <FaWrench />,
      title: "Minor Repairs",
      text: "Coordination and support for suitable minor repair work around homes and business properties.",
    },
    {
      icon: <FaPaintRoller />,
      title: "Property Presentation",
      text: "Services that help prepare properties for tenants, customers, inspections or special occasions.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Preventive Maintenance",
      text: "Scheduled checks and upkeep designed to identify small issues before they become larger problems.",
    },
    {
      icon: <FaHome />,
      title: "Residential and Commercial Care",
      text: "Flexible property support for homes, offices, rental properties and commercial sites.",
    },
  ];

  const benefits = [
    "Flexible maintenance arrangements",
    "Residential and commercial support",
    "Clear service coordination",
    "Routine and one-off options",
    "Improved property presentation",
    "Combined PrimeLink service packages",
  ];

  const process = [
    {
      number: "01",
      icon: <FaClipboardCheck />,
      title: "Understand the Property",
      text: "We discuss the property type, current condition, priority areas and desired outcome.",
    },
    {
      number: "02",
      icon: <FaTools />,
      title: "Review the Work",
      text: "Where appropriate, the property or requested work is assessed before recommendations are made.",
    },
    {
      number: "03",
      icon: <FaCheckCircle />,
      title: "Confirm the Plan",
      text: "PrimeLink outlines the proposed scope, timing and next steps before work begins.",
    },
    {
      number: "04",
      icon: <FaHome />,
      title: "Complete and Maintain",
      text: "The agreed work is completed, with ongoing support available where required.",
    },
  ];

  return (
    <div className="property-care-page">
      <section className="property-care-hero">
        <div className="property-care-hero-overlay" />

        <div className="property-care-hero-content">
          <p className="eyebrow">PrimeLink Property Care</p>

          <h1>Practical care for safer, cleaner and better-presented properties</h1>

          <p>
            PrimeLink Solutions provides flexible maintenance, landscaping,
            minor repair and grounds-care support for residential and commercial
            properties across approved service areas.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Request Property Support
              <FaArrowRight />
            </Link>

            <a
              className="btn btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Discuss on WhatsApp
            </a>
          </div>

          <div className="property-care-hero-trust">
            <span>
              <FaCheckCircle />
              Flexible support
            </span>

            <span>
              <FaCheckCircle />
              Residential and commercial
            </span>

            <span>
              <FaCheckCircle />
              Tailored maintenance plans
            </span>
          </div>
        </div>
      </section>

      <section className="section property-care-intro">
        <div className="property-care-intro-grid">
          <div data-aos="fade-right">
            <p className="section-label">Property Support That Fits</p>

            <h2>Helping owners maintain functional and presentable spaces</h2>

            <p>
              Property care often involves many small tasks that require regular
              attention. PrimeLink brings suitable maintenance and presentation
              support together through one dependable point of contact.
            </p>

            <p>
              Services may be arranged as one-off projects, scheduled visits or
              combined packages alongside cleaning and other PrimeLink services.
            </p>

            <div className="property-care-highlights">
              <div>
                <FaLeaf />

                <span>
                  <strong>Better presentation</strong>
                  Maintain cleaner and more attractive indoor and outdoor areas.
                </span>
              </div>

              <div>
                <FaShieldAlt />

                <span>
                  <strong>Preventive support</strong>
                  Address routine upkeep before issues become more disruptive.
                </span>
              </div>
            </div>
          </div>

          <div className="property-care-intro-image" data-aos="fade-left">
            <div className="property-care-image-stat">
              <strong>Property Care</strong>
              <span>Maintenance and grounds support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section property-care-services-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Property Services</p>

          <h2>Flexible support for routine upkeep and special requirements</h2>

          <p>
            PrimeLink can provide individual services or prepare a tailored
            property-care arrangement based on the site and priorities.
          </p>
        </div>

        <div className="property-care-services-grid">
          {services.map((service, index) => (
            <article
              className="property-care-service-card"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <span className="property-care-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="property-care-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section property-care-benefits-section">
        <div className="property-care-benefits-grid">
          <div className="property-care-benefits-image" data-aos="fade-right" />

          <div data-aos="fade-left">
            <p className="section-label">Why Choose PrimeLink Property Care?</p>

            <h2>One dependable partner for practical property needs</h2>

            <p>
              PrimeLink helps property owners simplify maintenance,
              presentation and routine support through one organised service
              relationship.
            </p>

            <div className="property-care-benefits-list">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <FaCheckCircle />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section property-care-process-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Process</p>

          <h2>A clear approach to maintaining your property</h2>

          <p>
            Every enquiry begins with understanding the property and the work
            required before a service plan is confirmed.
          </p>
        </div>

        <div className="property-care-process-grid">
          {process.map((step, index) => (
            <article
              className="property-care-process-card"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="property-care-process-top">
                <span>{step.number}</span>
                <div>{step.icon}</div>
              </div>

              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section property-care-assurance-section">
        <div className="property-care-assurance-content" data-aos="zoom-in">
          <div>
            <p className="section-label">Combined Property Support</p>

            <h2>Maintenance, cleaning and grounds care through one company</h2>

            <p>
              PrimeLink can combine suitable property-care services with
              cleaning and other support, giving clients fewer providers to
              coordinate.
            </p>
          </div>

          <FaHome />
        </div>
      </section>

      <section className="section property-care-cta">
        <div data-aos="zoom-in">
          <p className="section-label">Request Property Care</p>

          <h2>Tell us what your property needs</h2>

          <p>
            Share the property type, location, priority work and preferred
            timing. PrimeLink will review the request and recommend the next
            step.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Start a Property Enquiry
              <FaArrowRight />
            </Link>

            <a
              className="btn btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp PrimeLink
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}