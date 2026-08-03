import { FaArrowRight, FaGlobe, FaPaintBrush, FaBuilding } from "react-icons/fa";
import { Link } from "react-router";

export default function PortfolioShowcase() {
  const projects = [
    {
      icon: <FaGlobe />,
      title: "PrimeLink Solutions Website",
      description:
        "A modern responsive website designed to showcase PrimeLink Solutions and its five service divisions.",
      status: "Completed",
    },
    {
      icon: <FaPaintBrush />,
      title: "Brand Identity",
      description:
        "Professional logo, business branding, flyers and digital marketing materials.",
      status: "In Progress",
    },
    {
      icon: <FaBuilding />,
      title: "Future Client Projects",
      description:
        "This section will showcase completed client websites, branding projects and business solutions.",
      status: "Coming Soon",
    },
  ];

  return (
    <section
      className="section portfolio-showcase"
      data-aos="fade-up"
    >
      <div className="section-heading">
        <p className="section-label">Portfolio</p>

        <h2>Building solutions that businesses can trust</h2>

        <p>
          Every completed project strengthens the PrimeLink portfolio. This
          page will continue to grow as we deliver quality work for clients
          across Fiji.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article
            className="portfolio-card"
            key={project.title}
            data-aos="zoom-in-up"
          >
            <div className="portfolio-icon">
              {project.icon}
            </div>

            <span className="portfolio-status">
              {project.status}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>
          </article>
        ))}
      </div>

      <div
        className="portfolio-button-wrap"
        data-aos="fade-up"
      >
        <Link className="btn btn-primary" to="/portfolio">
          View Full Portfolio
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}