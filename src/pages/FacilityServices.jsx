import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaHome,
  FaSolarPanel,
  FaTruck,
} from "react-icons/fa";
import { Link } from "react-router";

export default function FacilityServices() {
  const services = [
    {
      icon: <FaBuilding />,
      title: "Cleaning Services",
      description:
        "Professional cleaning support for workplaces, homes and commercial properties.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
      items: [
        "Commercial Cleaning",
        "Office Cleaning",
        "Residential Cleaning",
        "Deep Cleaning",
        "Window Cleaning",
        "Move-in and Move-out Cleaning",
      ],
      benefits: [
        "Flexible service schedules",
        "Tailored cleaning plans",
        "Professional presentation",
      ],
    },
    {
      icon: <FaSolarPanel />,
      title: "Solar Solutions",
      description:
        "Practical solar support for homes, businesses and communities across Fiji.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85",
      items: [
        "Solar Product Supply",
        "Installation Coordination",
        "System Maintenance",
        "Energy Consultation",
        "Community Solar Support",
      ],
      benefits: [
        "Solutions based on client needs",
        "Support for homes and businesses",
        "Future-ready energy options",
      ],
    },
    {
      icon: <FaTruck />,
      title: "Delivery Services",
      description:
        "Flexible delivery and logistics support for individuals and businesses.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
      items: [
        "Local Deliveries",
        "Business Logistics",
        "Scheduled Delivery Runs",
        "Document and Parcel Delivery",
        "Custom Delivery Support",
      ],
      benefits: [
        "Simple communication",
        "Scheduled service options",
        "Business-focused support",
      ],
    },
    {
      icon: <FaHome />,
      title: "Property Care",
      description:
        "Reliable property support designed to keep homes and commercial sites safe and presentable.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
      items: [
        "Property Maintenance",
        "Landscaping",
        "General Repairs",
        "Preventive Maintenance",
        "Grounds Care",
      ],
      benefits: [
        "Support for routine upkeep",
        "Flexible maintenance plans",
        "Cleaner, safer properties",
      ],
    },
    {
      icon: <FaBriefcase />,
      title: "Business Services",
      description:
        "Modern digital and business support that helps companies operate and grow professionally.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
      items: [
        "Website Development",
        "AI and Business Automation",
        "Graphic Design",
        "Branding Materials",
        "Digital Forms and Quotation Systems",
        "Ongoing Technical Support",
      ],
      benefits: [
        "Professional digital presence",
        "Practical business systems",
        "Ongoing improvement support",
      ],
    },
  ];

  return (
    <div className="services-page">
      <section className="page-hero services-page-hero">
        <div className="page-hero-content" data-aos="fade-up">
          <p className="eyebrow">One Company. Every Solution.</p>

          <h1>Professional services designed around your needs</h1>

          <p>
            PrimeLink Solutions brings five core service divisions together
            under one trusted brand, giving clients practical support for
            property, operations and business growth.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Request a Free Quote
              <FaArrowRight />
            </Link>

            <a className="btn btn-whatsapp" href="tel:+6798654795">
              Call +679 865 4795
            </a>
          </div>
        </div>
      </section>

      <section className="section services-introduction-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Service Divisions</p>

          <h2>Five specialist areas under one professional company</h2>

          <p>
            Select one service or combine several into a tailored PrimeLink
            package based on your location, schedule and requirements.
          </p>
        </div>
      </section>

      <section className="services-list-section">
        {services.map((service, index) => (
          <article
            className={`service-feature-row ${
              index % 2 !== 0 ? "service-feature-reverse" : ""
            }`}
            key={service.title}
          >
            <div
              className="service-feature-image"
              style={{ backgroundImage: `url(${service.image})` }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="service-feature-overlay" />

              <div className="service-feature-icon">{service.icon}</div>
            </div>

            <div
              className="service-feature-content"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <p className="section-label">PrimeLink Division</p>

              <h2>{service.title}</h2>

              <p className="service-feature-description">
                {service.description}
              </p>

              <div className="service-detail-columns">
                <div>
                  <h3>Services available</h3>

                  <ul className="service-item-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <FaCheckCircle />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Why clients choose it</h3>

                  <ul className="service-benefit-list">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>
                        <FaCheckCircle />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link className="text-link" to="/contact">
                Discuss this service
                <FaArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section combined-services-section">
        <div className="combined-services-wrap" data-aos="fade-up">
          <div>
            <p className="section-label">Combined Solutions</p>

            <h2>Need support from more than one PrimeLink division?</h2>

            <p>
              We can prepare a combined service package for businesses,
              property owners and organisations that need multiple forms of
              support through one company.
            </p>
          </div>

          <div className="combined-services-points">
            <span>
              <FaCheckCircle />
              One point of contact
            </span>

            <span>
              <FaCheckCircle />
              Clear service planning
            </span>

            <span>
              <FaCheckCircle />
              Flexible package options
            </span>

            <span>
              <FaCheckCircle />
              Tailored quotation
            </span>
          </div>

          <Link className="btn btn-primary" to="/contact">
            Build My Service Package
          </Link>
        </div>
      </section>

      <section className="section service-cta-section">
        <div data-aos="fade-up">
          <p className="section-label">Start Today</p>

          <h2>Tell us what PrimeLink can help you solve</h2>

          <p>
            Share your requirements and we will recommend the most appropriate
            service division or combined solution.
          </p>

          <Link className="btn btn-primary" to="/contact">
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}