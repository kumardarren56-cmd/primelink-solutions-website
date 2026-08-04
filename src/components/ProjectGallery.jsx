import { useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaHome,
  FaImages,
  FaSolarPanel,
} from "react-icons/fa";
import { Link } from "react-router";

const categories = [
  "All",
  "Cleaning",
  "Solar",
  "Property Care",
  "Business Services",
];

const projects = [
  {
    id: 1,
    category: "Cleaning",
    title: "Commercial Cleaning Showcase",
    description:
      "Professional commercial cleaning solutions for offices, retail spaces and business facilities.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=88",
    icon: <FaBuilding />,
    status: "Portfolio Ready",
  },
  {
    id: 2,
    category: "Cleaning",
    title: "Residential Cleaning Showcase",
    description:
      "Professional residential cleaning services tailored for homes and apartments.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=88",
    icon: <FaHome />,
    status: "Portfolio Ready",
  },
  {
    id: 3,
    category: "Solar",
    title: "Solar Solutions Showcase",
    description:
      "Residential and commercial solar installation, maintenance and consultation.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=88",
    icon: <FaSolarPanel />,
    status: "Portfolio Ready",
  },
  {
    id: 4,
    category: "Property Care",
    title: "Property Care Showcase",
    description:
      "Landscaping, maintenance, repairs and complete property improvement services.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=88",
    icon: <FaHome />,
    status: "Portfolio Ready",
  },
  {
    id: 5,
    category: "Business Services",
    title: "PrimeLink Solutions Website",
    description:
      "A completed responsive website project showcasing PrimeLink Solutions and its digital capabilities.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=88",
    icon: <FaBriefcase />,
    status: "Completed",
  },
  {
    id: 6,
    category: "Business Services",
    title: "Branding and Digital Materials",
    description:
      "Professional branding, websites, automation and digital marketing materials.",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1400&q=88",
    icon: <FaImages />,
    status: "In Progress",
  },
];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section project-gallery-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">Project Gallery</p>

        <h2>A growing portfolio of practical solutions</h2>

        <p>
          Explore a selection of PrimeLink Solutions projects across cleaning,
          solar, property care and business services. Every project reflects
          our commitment to quality workmanship, professionalism and client
          satisfaction.
        </p>
      </div>

      <div className="project-gallery-filters" data-aos="fade-up">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`project-filter-button ${
              activeCategory === category ? "project-filter-active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-gallery-grid">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="project-gallery-card"
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >
            <div
              className="project-gallery-image"
              style={{ backgroundImage: `url("${project.image}")` }}
            >
              <div className="project-gallery-overlay" />

              <div className="project-gallery-top">
                <div className="project-gallery-icon">{project.icon}</div>

                <span
                  className={`project-gallery-status ${
                    project.status === "Completed"
                      ? "project-status-completed"
                      : ""
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="project-gallery-category">
                {project.category}
              </div>
            </div>

            <div className="project-gallery-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <Link className="project-gallery-link" to="/contact">
                Discuss a Similar Project
                <FaArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="project-gallery-note" data-aos="fade-up">
        <div>
          <FaImages />
          <div>
            <h3>Building solutions that businesses can trust</h3>
            <p>
              Every completed project strengthens the PrimeLink portfolio.
              This gallery will continue to grow as we deliver quality work
              across Fiji.
            </p>
          </div>
        </div>

        <Link className="btn btn-primary" to="/contact">
          Start a Project
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}