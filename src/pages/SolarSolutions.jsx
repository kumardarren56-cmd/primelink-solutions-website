import {
  FaArrowRight,
  FaBatteryFull,
  FaBuilding,
  FaCheckCircle,
  FaHome,
  FaLeaf,
  FaLightbulb,
  FaSearch,
  FaSolarPanel,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";

export default function SolarSolutions() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to discuss a solar solution.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const services = [
    {
      icon: <FaHome />,
      title: "Residential Solar",
      text: "Practical solar options designed around household energy requirements and available budget.",
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Solar",
      text: "Solar solutions for offices, retail properties, facilities and other commercial environments.",
    },
    {
      icon: <FaBatteryFull />,
      title: "Battery Storage",
      text: "Energy storage options that support greater reliability and improved use of generated solar power.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance Support",
      text: "Inspection, cleaning coordination and maintenance support to help systems perform effectively.",
    },
    {
      icon: <FaLightbulb />,
      title: "Energy Consultation",
      text: "Initial guidance based on property type, electricity use, project goals and expected investment.",
    },
    {
      icon: <FaSolarPanel />,
      title: "Supply Coordination",
      text: "Support with sourcing suitable solar products and coordinating the next steps of the project.",
    },
  ];

  const benefits = [
    "Reduced dependence on grid electricity",
    "Potential long-term energy savings",
    "Solutions tailored to the property",
    "Residential and commercial options",
    "Maintenance and consultation support",
    "Cleaner and more sustainable energy",
  ];

  const process = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Understand Your Needs",
      text: "We discuss the property, current electricity use, project objectives and preferred budget.",
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Recommend a Solution",
      text: "PrimeLink prepares a practical recommendation based on the information available.",
    },
    {
      number: "03",
      icon: <FaSolarPanel />,
      title: "Coordinate Supply",
      text: "Suitable products and project requirements are confirmed before implementation begins.",
    },
    {
      number: "04",
      icon: <FaTools />,
      title: "Ongoing Support",
      text: "Maintenance guidance and future assistance can be arranged according to client requirements.",
    },
  ];

  return (
    <div className="solar-service-page">
      <section className="solar-service-hero">
        <div className="solar-service-hero-overlay" />

        <div className="solar-service-hero-content">
          <p className="eyebrow">PrimeLink Solar Solutions</p>

          <h1>Smarter energy solutions for homes and businesses</h1>

          <p>
            PrimeLink Solutions provides practical solar consultation, product
            coordination and maintenance support designed around properties,
            energy requirements and project budgets across Fiji.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Request a Solar Quote
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

          <div className="solar-hero-trust">
            <span>
              <FaCheckCircle />
              Tailored recommendations
            </span>

            <span>
              <FaCheckCircle />
              Residential and commercial
            </span>

            <span>
              <FaCheckCircle />
              Local project support
            </span>
          </div>
        </div>
      </section>

      <section className="section solar-intro-section">
        <div className="solar-intro-grid">
          <div data-aos="fade-right">
            <p className="section-label">Clean Energy, Practical Planning</p>

            <h2>Solar support built around real property needs</h2>

            <p>
              Choosing a solar solution should begin with understanding the
              property, electricity usage, available space, desired outcome and
              investment level.
            </p>

            <p>
              PrimeLink helps clients consider these factors before moving
              forward with product supply, installation coordination or
              maintenance support.
            </p>

            <div className="solar-intro-highlights">
              <div>
                <FaLeaf />

                <span>
                  <strong>Sustainable energy</strong>
                  Support a cleaner and more efficient approach to power use.
                </span>
              </div>

              <div>
                <FaLightbulb />

                <span>
                  <strong>Practical consultation</strong>
                  Recommendations shaped around the client’s actual needs.
                </span>
              </div>
            </div>
          </div>

          <div className="solar-intro-image" data-aos="fade-left">
            <div className="solar-image-stat">
              <strong>Solar</strong>
              <span>Energy solutions for Fiji</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section solar-services-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Solar Services</p>

          <h2>Support throughout the solar project journey</h2>

          <p>
            PrimeLink provides flexible options for clients exploring solar
            energy, upgrading an existing system or seeking ongoing support.
          </p>
        </div>

        <div className="solar-services-grid">
          {services.map((service, index) => (
            <article
              className="solar-service-card"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <span className="solar-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="solar-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solar-benefits-section">
        <div className="solar-benefits-grid">
          <div className="solar-benefits-image" data-aos="fade-right" />

          <div data-aos="fade-left">
            <p className="section-label">Why Consider Solar?</p>

            <h2>A long-term approach to energy management</h2>

            <p>
              A suitable solar solution may help property owners improve energy
              resilience, manage electricity costs and reduce reliance on
              conventional power sources.
            </p>

            <div className="solar-benefits-list">
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

      <section className="section solar-process-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Process</p>

          <h2>A clear path from enquiry to solar support</h2>

          <p>
            Every project begins with understanding the client’s requirements
            before recommending the appropriate next step.
          </p>
        </div>

        <div className="solar-process-grid">
          {process.map((step, index) => (
            <article
              className="solar-process-card"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="solar-process-top">
                <span>{step.number}</span>

                <div>{step.icon}</div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solar-assurance-section">
        <div className="solar-assurance-content" data-aos="zoom-in">
          <div>
            <p className="section-label">PrimeLink Solar Support</p>

            <h2>One partner for consultation, coordination and maintenance</h2>

            <p>
              PrimeLink brings practical support together so clients can move
              through the solar project process with clearer communication and
              fewer separate providers.
            </p>
          </div>

          <FaSolarPanel />
        </div>
      </section>

      <section className="section solar-service-cta">
        <div data-aos="zoom-in">
          <p className="section-label">Start Your Solar Enquiry</p>

          <h2>Tell us about your property and energy requirements</h2>

          <p>
            Share your location, property type, current energy concerns and
            preferred budget. PrimeLink will review the information and
            recommend an appropriate next step.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Request a Solar Quote
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