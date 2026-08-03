import {
  FaBullseye,
  FaCheckCircle,
  FaHandshake,
  FaLightbulb,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/brand/primelink-logo.png";

export default function About() {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Integrity",
      text: "We aim to communicate honestly, set clear expectations and treat every client relationship with respect.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Professionalism",
      text: "We approach every service with care, organisation and attention to the client’s requirements.",
    },
    {
      icon: <FaUsers />,
      title: "Client Focus",
      text: "Our recommendations begin with understanding the client’s actual challenge, priorities and desired outcome.",
    },
    {
      icon: <FaLightbulb />,
      title: "Practical Innovation",
      text: "We use modern tools and flexible thinking to create solutions that are useful, realistic and ready to grow.",
    },
  ];

  return (
    <div className="about-page">
      <section className="page-hero about-page-hero">
        <div className="page-hero-content" data-aos="fade-up">
          <img
            src={logo}
            alt="PrimeLink Solutions"
            className="about-page-logo"
          />

          <p className="eyebrow">About PrimeLink Solutions</p>

          <h1>A Fijian company built to solve practical problems</h1>

          <p>
            PrimeLink Solutions brings cleaning, solar, delivery, property care
            and business services together under one professional and dependable
            brand.
          </p>

          <Link className="btn btn-primary" to="/contact">
            Work With PrimeLink
          </Link>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="about-story-grid">
          <div data-aos="fade-right">
            <p className="section-label">Our Story</p>

            <h2>One Company. Every Solution.</h2>

            <p>
              PrimeLink Solutions was created with a clear vision: make it
              easier for businesses, property owners and communities to access
              dependable services through one trusted company.
            </p>

            <p>
              Instead of operating within only one category, PrimeLink is being
              developed as a modern multi-service company capable of supporting
              clients across physical operations, property needs and digital
              growth.
            </p>

            <p>
              Our journey is still growing, and every project is an opportunity
              to strengthen our standards, capabilities and long-term client
              relationships.
            </p>
          </div>

          <div className="about-company-summary" data-aos="fade-left">
            <div>
              <strong>5</strong>
              <span>Core service divisions</span>
            </div>

            <div>
              <strong>Fiji</strong>
              <span>Proudly locally owned</span>
            </div>

            <div>
              <strong>Flexible</strong>
              <span>Custom service packages</span>
            </div>

            <div>
              <strong>Growing</strong>
              <span>Capabilities and portfolio</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-vision-section">
        <div className="mission-vision-grid">
          <article data-aos="fade-up">
            <FaBullseye />

            <p className="section-label">Our Mission</p>

            <h2>Deliver practical and professional solutions</h2>

            <p>
              Our mission is to provide reliable services that help clients
              maintain their properties, improve their operations and strengthen
              their businesses through clear communication and dependable
              support.
            </p>
          </article>

          <article data-aos="fade-up" data-aos-delay="120">
            <FaLightbulb />

            <p className="section-label">Our Vision</p>

            <h2>Become one of Fiji’s trusted multi-service companies</h2>

            <p>
              Our vision is to build PrimeLink Solutions into a respected
              company known for professional standards, flexible service options
              and long-term client relationships across Fiji.
            </p>
          </article>
        </div>
      </section>

      <section className="section company-values-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Values</p>

          <h2>The standards guiding PrimeLink Solutions</h2>

          <p>
            These values shape how we communicate, make decisions and support
            every client.
          </p>
        </div>

        <div className="company-values-grid">
          {values.map((value, index) => (
            <article
              className="company-value-card"
              key={value.title}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
              <div className="company-value-icon">{value.icon}</div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section leadership-section">
        <div className="leadership-grid">
          <div className="leadership-profile" data-aos="fade-right">
            <div className="leadership-initials">DK</div>

            <div>
              <p className="section-label">Leadership</p>

              <h2>Daren Kumar</h2>

              <strong>Founder & Managing Director</strong>
            </div>
          </div>

          <div className="leadership-message" data-aos="fade-left">
            <h2>Building PrimeLink for long-term value</h2>

            <p>
              PrimeLink Solutions is being developed with a long-term focus on
              professionalism, dependable service and meaningful business
              relationships.
            </p>

            <p>
              Our goal is not simply to complete transactions. We aim to become
              a trusted service partner that clients can return to as their
              needs evolve.
            </p>

            <span>
              <FaMapMarkerAlt />
              Suva, Fiji Islands
            </span>
          </div>
        </div>
      </section>

      <section className="section about-cta-section">
        <div data-aos="fade-up">
          <p className="section-label">Start a Conversation</p>

          <h2>Let PrimeLink help with your next requirement</h2>

          <p>
            Contact us to discuss cleaning, solar, delivery, property care,
            websites, automation or other business support.
          </p>

          <Link className="btn btn-primary" to="/contact">
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}