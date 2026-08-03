import {
  FaArrowRight,
  FaBox,
  FaBuilding,
  FaCheckCircle,
  FaClock,
  FaFileAlt,
  FaMapMarkerAlt,
  FaRoute,
  FaStore,
  FaTruck,
  FaWarehouse,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";

export default function DeliveryServices() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to discuss delivery services.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const services = [
    {
      icon: <FaBox />,
      title: "Local Parcel Delivery",
      text: "Flexible delivery support for parcels, small items and customer orders within approved service areas.",
    },
    {
      icon: <FaFileAlt />,
      title: "Document Delivery",
      text: "Secure and dependable transport of business documents, forms and correspondence.",
    },
    {
      icon: <FaStore />,
      title: "Retail Deliveries",
      text: "Delivery support for shops, online sellers and businesses serving local customers.",
    },
    {
      icon: <FaBuilding />,
      title: "Business Logistics",
      text: "Practical transport coordination for companies requiring regular operational support.",
    },
    {
      icon: <FaRoute />,
      title: "Scheduled Delivery Runs",
      text: "Planned delivery routes arranged around recurring business requirements.",
    },
    {
      icon: <FaWarehouse />,
      title: "Custom Delivery Support",
      text: "Tailored solutions for special projects, bulk movements and unique delivery needs.",
    },
  ];

  const benefits = [
    "Flexible scheduling options",
    "Business and personal deliveries",
    "Clear communication and updates",
    "Custom delivery arrangements",
    "Local service coordination",
    "Combined PrimeLink service packages",
  ];

  const process = [
    {
      number: "01",
      icon: <FaMapMarkerAlt />,
      title: "Share the Details",
      text: "Tell us the collection point, destination, item type, timing and any special instructions.",
    },
    {
      number: "02",
      icon: <FaRoute />,
      title: "Confirm the Plan",
      text: "PrimeLink reviews the request and confirms whether the delivery can be supported.",
    },
    {
      number: "03",
      icon: <FaTruck />,
      title: "Collection and Transport",
      text: "The item is collected and transported according to the agreed arrangement.",
    },
    {
      number: "04",
      icon: <FaCheckCircle />,
      title: "Delivery Completion",
      text: "The delivery is completed and the client receives confirmation where appropriate.",
    },
  ];

  return (
    <div className="delivery-service-page">
      <section className="delivery-service-hero">
        <div className="delivery-service-hero-overlay" />

        <div className="delivery-service-hero-content">
          <p className="eyebrow">PrimeLink Delivery Services</p>

          <h1>Reliable local delivery for businesses and individuals</h1>

          <p>
            PrimeLink Solutions provides flexible parcel, document and
            business delivery support designed around location, timing and
            operational requirements.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Request Delivery Support
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

          <div className="delivery-hero-trust">
            <span>
              <FaCheckCircle />
              Flexible arrangements
            </span>

            <span>
              <FaCheckCircle />
              Business support
            </span>

            <span>
              <FaCheckCircle />
              Local coordination
            </span>
          </div>
        </div>
      </section>

      <section className="section delivery-intro-section">
        <div className="delivery-intro-grid">
          <div data-aos="fade-right">
            <p className="section-label">Delivery That Works Around You</p>

            <h2>Practical logistics support without unnecessary complexity</h2>

            <p>
              Whether you need a one-off parcel delivered or recurring support
              for business operations, PrimeLink begins by understanding the
              collection point, destination, timing and handling requirements.
            </p>

            <p>
              Delivery arrangements are confirmed before service so clients
              understand the scope and next steps.
            </p>

            <div className="delivery-intro-highlights">
              <div>
                <FaClock />

                <span>
                  <strong>Flexible timing</strong>
                  Delivery schedules arranged around client requirements.
                </span>
              </div>

              <div>
                <FaRoute />

                <span>
                  <strong>Clear coordination</strong>
                  Straightforward planning from collection to completion.
                </span>
              </div>
            </div>
          </div>

          <div className="delivery-intro-image" data-aos="fade-left">
            <div className="delivery-image-stat">
              <strong>Local</strong>
              <span>Delivery and logistics support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section delivery-services-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Delivery Services</p>

          <h2>Flexible options for everyday and business needs</h2>

          <p>
            Choose a single delivery service or discuss a tailored arrangement
            for recurring requirements.
          </p>
        </div>

        <div className="delivery-services-grid">
          {services.map((service, index) => (
            <article
              className="delivery-service-card"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <span className="delivery-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="delivery-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section delivery-benefits-section">
        <div className="delivery-benefits-grid">
          <div className="delivery-benefits-image" data-aos="fade-right" />

          <div data-aos="fade-left">
            <p className="section-label">Why PrimeLink Delivery?</p>

            <h2>Dependable support for local movement and logistics</h2>

            <p>
              PrimeLink helps businesses and individuals organise delivery
              requirements through one clear point of contact.
            </p>

            <div className="delivery-benefits-list">
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

      <section className="section delivery-process-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Process</p>

          <h2>A clear route from request to delivery</h2>

          <p>
            Every delivery begins with confirming the details before transport
            is arranged.
          </p>
        </div>

        <div className="delivery-process-grid">
          {process.map((step, index) => (
            <article
              className="delivery-process-card"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="delivery-process-top">
                <span>{step.number}</span>

                <div>{step.icon}</div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section delivery-assurance-section">
        <div className="delivery-assurance-content" data-aos="zoom-in">
          <div>
            <p className="section-label">PrimeLink Logistics Support</p>

            <h2>One dependable contact for delivery requirements</h2>

            <p>
              PrimeLink provides practical coordination for clients who need
              straightforward local delivery support without managing multiple
              providers.
            </p>
          </div>

          <FaTruck />
        </div>
      </section>

      <section className="section delivery-service-cta">
        <div data-aos="zoom-in">
          <p className="section-label">Arrange a Delivery</p>

          <h2>Tell us what needs to be collected and delivered</h2>

          <p>
            Share the item type, collection location, destination, timing and
            any handling requirements. PrimeLink will review the request and
            confirm the next step.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Start a Delivery Enquiry
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