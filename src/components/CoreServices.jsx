import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaHome,
  FaSolarPanel,
  FaTruck,
} from "react-icons/fa";
import { Link } from "react-router";

export default function CoreServices() {
  const services = [
    {
      icon: <FaBuilding />,
      title: "Cleaning Services",
      description:
        "Professional commercial, office, residential and specialised cleaning tailored to each property.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=88",
      link: "/services#cleaning",
      featured: true,
    },
    {
      icon: <FaSolarPanel />,
      title: "Solar Solutions",
      description:
        "Practical solar supply, coordination, maintenance and energy consultation for homes and businesses.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=88",
      link: "/services#solar",
    },
    {
      icon: <FaTruck />,
      title: "Delivery Services",
      description:
        "Flexible local delivery, document transport and business logistics support across service areas.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=88",
      link: "/services#delivery",
    },
    {
      icon: <FaHome />,
      title: "Property Care",
      description:
        "Maintenance, landscaping, repairs and grounds care that help properties remain safe and presentable.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=88",
      link: "/services#property-care",
    },
    {
      icon: <FaBriefcase />,
      title: "Business Services",
      description:
        "Websites, automation, branding, graphic design and digital systems that support business growth.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=88",
      link: "/services#business-services",
    },
  ];

  return (
    <section className="section core-services-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">Our Core Services</p>

        <h2>Five divisions working under one trusted brand</h2>

        <p>
          PrimeLink Solutions combines essential property, operational and
          digital services so clients can work with one dependable company.
        </p>
      </div>

      <div className="core-services-grid">
        {services.map((service, index) => (
          <article
            className={`core-service-card ${
              service.featured ? "core-service-featured" : ""
            }`}
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            <div
              className="core-service-image"
              style={{ backgroundImage: `url("${service.image}")` }}
            >
              <div className="core-service-overlay" />

              <div className="core-service-top">
                <div className="core-service-icon">{service.icon}</div>

                <span className="core-service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="core-service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link className="core-service-link" to={service.link}>
                Explore Service
                <FaArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="core-services-footer" data-aos="fade-up">
        <p>
          Need support from more than one division? We can prepare a tailored
          combined service package.
        </p>

        <Link className="btn btn-primary" to="/contact">
          Request a Custom Package
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}