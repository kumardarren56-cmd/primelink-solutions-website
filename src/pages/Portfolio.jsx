import {
  FaArrowRight,
  FaBriefcase,
  FaGlobe,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router";

export default function Portfolio() {
  const projects = [
    {
      icon: <FaGlobe />,
      category: "Website Development",
      title: "PrimeLink Solutions Website",
      description:
        "A responsive multi-page React website created to present PrimeLink Solutions, its five service divisions and contact options professionally.",
      status: "Featured Project",
    },
    {
      icon: <FaPaintBrush />,
      category: "Brand Identity",
      title: "PrimeLink Corporate Branding",
      description:
        "A consistent blue-and-green visual identity applied across the company logo, website, business materials and digital presence.",
      status: "In Progress",
    },
    {
      icon: <FaBriefcase />,
      category: "Business Services",
      title: "Digital Business Systems",
      description:
        "Quotation forms, enquiry workflows, WhatsApp contact links and practical online systems designed to support business growth.",
      status: "Developing",
    },
  ];

  return (
    <div className="portfolio-page">
      <section className="page-hero portfolio-page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">Our Work</p>

          <h1>Solutions designed to build trust and support growth</h1>

          <p>
            The PrimeLink portfolio is growing through professional websites,
            branding, business systems and future client projects across Fiji.
          </p>

          <Link className="btn btn-primary" to="/contact">
            Discuss Your Project
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="section portfolio-projects-section">
        <div className="section-heading">
          <p className="section-label">Featured Work</p>

          <h2>Projects that demonstrate our capabilities</h2>

          <p>
            We present our current work honestly and will continue expanding
            this portfolio as PrimeLink completes new client projects.
          </p>
        </div>

        <div className="full-portfolio-grid">
          {projects.map((project) => (
            <article className="full-portfolio-card" key={project.title}>
              <div className="full-portfolio-icon">{project.icon}</div>

              <span className="portfolio-category">{project.category}</span>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <strong>{project.status}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio-growth-section">
        <div className="portfolio-growth-grid">
          <div>
            <p className="section-label">Growing Portfolio</p>

            <h2>Every completed project becomes proof of our standard</h2>

            <p>
              Future website projects, cleaning contracts, solar support,
              delivery work, property care and branding projects will be added
              here as they are completed.
            </p>

            <Link className="text-link" to="/contact">
              Start a project with PrimeLink
              <FaArrowRight />
            </Link>
          </div>

          <div className="portfolio-stat-grid">
            <div>
              <strong>5</strong>
              <span>Service divisions</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Featured website project</span>
            </div>

            <div>
              <strong>Growing</strong>
              <span>Business portfolio</span>
            </div>

            <div>
              <strong>Fiji</strong>
              <span>Local company focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section portfolio-cta">
        <FaRocket />

        <h2>Have a project PrimeLink can help with?</h2>

        <p>
          Tell us what you need and we will prepare a practical recommendation
          and quotation.
        </p>

        <Link className="btn btn-primary" to="/contact">
          Request a Consultation
        </Link>
      </section>
    </div>
  );
}