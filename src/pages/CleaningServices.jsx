import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaClock,
  FaHome,
  FaHospital,
  FaIndustry,
  FaSchool,
  FaShieldAlt,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";

export default function CleaningServices() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to request a quote for cleaning services.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const services = [
    "Commercial and office cleaning",
    "Residential cleaning",
    "Deep cleaning",
    "Move-in and move-out cleaning",
    "Window and glass cleaning",
    "Post-construction cleaning",
    "Washroom sanitation",
    "Scheduled maintenance cleaning",
  ];

  const industries = [
    {
      icon: <FaBuilding />,
      title: "Corporate Offices",
      text: "Reliable cleaning support for professional workplaces and shared office environments.",
    },
    {
      icon: <FaStore />,
      title: "Retail and Showrooms",
      text: "Presentable customer-facing spaces that support a strong business image.",
    },
    {
      icon: <FaSchool />,
      title: "Schools and Training Centres",
      text: "Practical cleaning plans for classrooms, offices and common areas.",
    },
    {
      icon: <FaHospital />,
      title: "Clinics and Care Facilities",
      text: "Careful cleaning support for environments where hygiene is especially important.",
    },
    {
      icon: <FaIndustry />,
      title: "Warehouses and Facilities",
      text: "Cleaning solutions for operational spaces, storage areas and staff facilities.",
    },
    {
      icon: <FaHome />,
      title: "Homes and Properties",
      text: "Flexible residential cleaning for regular maintenance, moving or special occasions.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Initial Consultation",
      text: "We discuss the property, cleaning requirements, preferred schedule and priorities.",
    },
    {
      number: "02",
      title: "Site Assessment",
      text: "Where required, we review the space so the quotation reflects the actual work involved.",
    },
    {
      number: "03",
      title: "Tailored Proposal",
      text: "You receive a clear recommendation covering scope, frequency and proposed pricing.",
    },
    {
      number: "04",
      title: "Service Delivery",
      text: "The agreed cleaning service is completed according to the approved plan and schedule.",
    },
  ];

  return (
    <div className="cleaning-service-page">
      <section className="cleaning-service-hero">
        <div className="cleaning-service-hero-overlay" />

        <div className="cleaning-service-hero-content">
          <p className="eyebrow">PrimeLink Cleaning Services</p>

          <h1>Professional cleaning tailored to your property</h1>

          <p>
            From offices and commercial facilities to homes and specialised
            projects, PrimeLink Solutions provides flexible cleaning support
            designed around your space, schedule and expectations.
          </p>

          <div className="hero-actions">
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
              Discuss on WhatsApp
            </a>
          </div>

          <div className="cleaning-hero-trust">
            <span>
              <FaCheckCircle />
              Flexible schedules
            </span>

            <span>
              <FaCheckCircle />
              Tailored scope
            </span>

            <span>
              <FaCheckCircle />
              Local support
            </span>
          </div>
        </div>
      </section>

      <section className="section cleaning-service-intro">
        <div className="cleaning-service-intro-grid">
          <div data-aos="fade-right">
            <p className="section-label">Cleaning That Fits Your Needs</p>

            <h2>A dependable approach to cleaner, healthier spaces</h2>

            <p>
              Every property is different. PrimeLink begins by understanding
              the space, level of use, preferred timing and desired outcome
              before recommending a cleaning plan.
            </p>

            <p>
              Services may be arranged as one-off projects, scheduled visits or
              ongoing cleaning support for businesses and property owners.
            </p>

            <div className="cleaning-intro-features">
              <div>
                <FaShieldAlt />
                <span>
                  <strong>Professional approach</strong>
                  Clear scope, communication and service expectations.
                </span>
              </div>

              <div>
                <FaClock />
                <span>
                  <strong>Flexible scheduling</strong>
                  Service timing arranged around operational requirements.
                </span>
              </div>
            </div>
          </div>

          <div
            className="cleaning-service-intro-image"
            data-aos="fade-left"
          />
        </div>
      </section>

      <section className="section cleaning-options-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Cleaning Options</p>

          <h2>Practical services for commercial and residential properties</h2>

          <p>
            Select one service or combine several into a tailored cleaning
            package.
          </p>
        </div>

        <div className="cleaning-options-grid">
          {services.map((service, index) => (
            <article
              className="cleaning-option-card"
              key={service}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>

              <FaCheckCircle />

              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section cleaning-industries-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Who We Serve</p>

          <h2>Cleaning support across different property types</h2>

          <p>
            PrimeLink can adapt the cleaning scope to suit workplaces,
            customer-facing spaces, facilities and homes.
          </p>
        </div>

        <div className="cleaning-industries-grid">
          {industries.map((industry, index) => (
            <article
              className="cleaning-industry-card"
              key={industry.title}
              data-aos="zoom-in"
              data-aos-delay={index * 70}
            >
              <div>{industry.icon}</div>

              <h3>{industry.title}</h3>

              <p>{industry.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cleaning-process-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Process</p>

          <h2>A clear path from enquiry to service delivery</h2>

          <p>
            We keep the process straightforward so clients understand what
            happens next.
          </p>
        </div>

        <div className="cleaning-process-grid">
          {process.map((step, index) => (
            <article
              className="cleaning-process-card"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <span>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cleaning-assurance-section">
        <div className="cleaning-assurance-grid">
          <div data-aos="fade-right">
            <p className="section-label">Why PrimeLink Cleaning</p>

            <h2>Service built around clear expectations</h2>

            <p>
              Our goal is to provide a cleaning arrangement that is practical,
              easy to understand and suitable for the client’s property.
            </p>
          </div>

          <div className="cleaning-assurance-list" data-aos="fade-left">
            <div>
              <FaCheckCircle />
              Tailored recommendations
            </div>

            <div>
              <FaCheckCircle />
              Clear communication
            </div>

            <div>
              <FaCheckCircle />
              Flexible service frequency
            </div>

            <div>
              <FaCheckCircle />
              Combined service options
            </div>

            <div>
              <FaCheckCircle />
              Free initial quotation
            </div>
          </div>
        </div>
      </section>

      <section className="section cleaning-service-cta">
        <div data-aos="zoom-in">
          <p className="section-label">Request a Cleaning Quote</p>

          <h2>Tell us about your property and cleaning requirements</h2>

          <p>
            Share the property type, location, preferred schedule and work
            required. PrimeLink will review the enquiry and recommend the next
            step.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Start Your Quote
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