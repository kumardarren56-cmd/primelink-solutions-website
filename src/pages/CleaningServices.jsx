import "../App.css";
import {
  FaArrowRight,
  FaBroom,
  FaBuilding,
  FaCheckCircle,
  FaClinicMedical,
  FaHome,
  FaIndustry,
  FaSchool,
  FaShieldAlt,
  FaSprayCan,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";

const cleaningServices = [
  {
    icon: <FaBuilding />,
    title: "Commercial Cleaning",
    description:
      "Reliable cleaning solutions for offices, corporate buildings, retail spaces and commercial facilities.",
  },
  {
    icon: <FaBroom />,
    title: "Office Cleaning",
    description:
      "Scheduled cleaning for workstations, meeting rooms, kitchens, washrooms and shared office areas.",
  },
  {
    icon: <FaHome />,
    title: "Residential Cleaning",
    description:
      "Professional cleaning support for homes, apartments, rental properties and move-in or move-out requirements.",
  },
  {
    icon: <FaSprayCan />,
    title: "Deep Cleaning",
    description:
      "Detailed cleaning for high-use areas, neglected spaces, special events and one-time restoration projects.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Sanitising Services",
    description:
      "Focused sanitising of high-touch surfaces, shared spaces, washrooms and frequently used facilities.",
  },
  {
    icon: <FaIndustry />,
    title: "Industrial Cleaning",
    description:
      "Practical cleaning support for warehouses, workshops, storage facilities and operational environments.",
  },
];

const industries = [
  {
    icon: <FaBuilding />,
    title: "Corporate Offices",
    text: "Clean and professional workplaces for staff, visitors and clients.",
  },
  {
    icon: <FaStore />,
    title: "Retail Businesses",
    text: "Presentable stores and customer-facing spaces maintained to a high standard.",
  },
  {
    icon: <FaSchool />,
    title: "Schools",
    text: "Hygienic learning environments for students, teachers and support staff.",
  },
  {
    icon: <FaClinicMedical />,
    title: "Medical Facilities",
    text: "Careful cleaning support for clinics, treatment spaces and reception areas.",
  },
  {
    icon: <FaIndustry />,
    title: "Warehouses",
    text: "Structured cleaning for storage, logistics and operational facilities.",
  },
  {
    icon: <FaHome />,
    title: "Residential Properties",
    text: "Flexible cleaning solutions for homes, apartments and rental properties.",
  },
];

const standards = [
  "Clear scope of work before service begins",
  "Flexible one-time and recurring service options",
  "Professional communication throughout the job",
  "Cleaning programmes tailored to the property",
  "Final review of the agreed work",
  "Free initial consultation and quotation",
];

export default function CleaningServices() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to request a quotation for cleaning services.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="cleaning-page">
      <section className="cleaning-hero">
        <div className="cleaning-hero-overlay" />

        <div className="cleaning-hero-content">
          <p className="eyebrow">PrimeLink Cleaning Services</p>

          <h1>Professional cleaning for healthier, better-presented spaces</h1>

          <p className="cleaning-hero-description">
            PrimeLink Solutions provides flexible commercial, office,
            residential and specialised cleaning services designed around each
            client&apos;s property, schedule and requirements.
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
              Chat on WhatsApp
            </a>
          </div>

          <div className="cleaning-hero-trust">
            <span>
              <FaCheckCircle />
              Tailored cleaning plans
            </span>

            <span>
              <FaCheckCircle />
              One-time and scheduled services
            </span>

            <span>
              <FaCheckCircle />
              Free initial quotation
            </span>
          </div>
        </div>
      </section>

      <section className="section cleaning-intro-section">
        <div className="cleaning-intro-grid">
          <div className="cleaning-intro-content" data-aos="fade-right">
            <p className="section-label">Professional Cleaning Support</p>

            <h2>Cleaning solutions built around your property</h2>

            <p>
              Every workplace, facility and home has different cleaning
              requirements. PrimeLink begins by understanding the property,
              service frequency, access conditions and expected standard.
            </p>

            <p>
              From routine office cleaning to deep-cleaning projects, we prepare
              a practical service plan that reflects the client&apos;s actual
              needs.
            </p>

            <div className="cleaning-intro-points">
              <div>
                <FaCheckCircle />
                <span>Flexible service scheduling</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Clear scope and quotation</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Professional client communication</span>
              </div>
            </div>
          </div>

          <div className="cleaning-intro-image" data-aos="fade-left">
            <div className="cleaning-image-badge">
              <strong>PrimeLink</strong>
              <span>Cleaning Services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section cleaning-services-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Cleaning Services</p>

          <h2>Complete cleaning support for different environments</h2>

          <p>
            Select a service or combine several options into a tailored
            cleaning programme.
          </p>
        </div>

        <div className="cleaning-services-grid">
          {cleaningServices.map((service, index) => (
            <article
              className="cleaning-service-card"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <div className="cleaning-service-icon">{service.icon}</div>

              <span className="cleaning-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to="/contact">
                Request This Service
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section cleaning-industries-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Industries We Support</p>

          <h2>Cleaning solutions for workplaces, facilities and homes</h2>

          <p>
            PrimeLink reviews each environment individually before confirming
            the final scope and service programme.
          </p>
        </div>

        <div className="cleaning-industries-grid">
          {industries.map((industry, index) => (
            <article
              className="cleaning-industry-card"
              key={industry.title}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <div className="cleaning-industry-icon">{industry.icon}</div>

              <h3>{industry.title}</h3>

              <p>{industry.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cleaning-standards-section">
        <div className="cleaning-standards-grid">
          <div className="cleaning-standards-image" data-aos="fade-right" />

          <div className="cleaning-standards-content" data-aos="fade-left">
            <p className="section-label">Our Service Standards</p>

            <h2>A clear and professional cleaning process</h2>

            <p>
              PrimeLink focuses on straightforward communication, realistic
              service commitments and cleaning arrangements based on the
              client&apos;s agreed requirements.
            </p>

            <div className="cleaning-standards-list">
              {standards.map((standard) => (
                <div key={standard}>
                  <FaCheckCircle />
                  <span>{standard}</span>
                </div>
              ))}
            </div>

            <Link className="btn btn-primary" to="/contact">
              Arrange a Site Discussion
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section cleaning-packages-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Flexible Service Packages</p>

          <h2>Choose a starting package and tailor the final scope</h2>

          <p>
            Bronze, Silver, Gold and Platinum options are available as starting
            points. Final pricing depends on property size, condition,
            frequency, location and the agreed work.
          </p>
        </div>

        <div className="cleaning-package-preview">
          <article>
            <span>Bronze</span>
            <h3>Essential Cleaning</h3>
            <p>Suitable for smaller spaces and straightforward cleaning needs.</p>
          </article>

          <article>
            <span>Silver</span>
            <h3>Enhanced Cleaning</h3>
            <p>Additional attention for medium workplaces and shared areas.</p>
          </article>

          <article className="cleaning-package-featured">
            <span>Gold</span>
            <h3>Complete Cleaning</h3>
            <p>Broader cleaning support for larger offices and facilities.</p>
          </article>

          <article>
            <span>Platinum</span>
            <h3>Premium Facility Support</h3>
            <p>Tailored ongoing support for major properties and facilities.</p>
          </article>
        </div>
      </section>

      <section className="section cleaning-final-cta">
        <div data-aos="fade-up">
          <p className="section-label">Request a Cleaning Quote</p>

          <h2>Tell us about your property and cleaning requirements</h2>

          <p>
            PrimeLink will review the location, property size, service
            frequency and required standard before preparing a tailored
            quotation.
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
              WhatsApp PrimeLink
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}