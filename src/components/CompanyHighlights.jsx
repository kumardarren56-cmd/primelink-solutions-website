import {
  FaBriefcase,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaSlidersH,
} from "react-icons/fa";

export default function CompanyHighlights() {
  const highlights = [
    {
      icon: <FaLayerGroup />,
      value: "5",
      label: "Core Service Divisions",
      text: "Cleaning, solar, delivery, property care and business services.",
    },
    {
      icon: <FaMapMarkerAlt />,
      value: "Fiji",
      label: "Proudly Locally Owned",
      text: "Built to support businesses, properties and communities across Fiji.",
    },
    {
      icon: <FaSlidersH />,
      value: "Flexible",
      label: "Tailored Service Options",
      text: "Packages can be shaped around the client’s needs, schedule and budget.",
    },
    {
      icon: <FaBriefcase />,
      value: "Growing",
      label: "Professional Portfolio",
      text: "Our capabilities and completed work will continue expanding with every project.",
    },
  ];

  return (
    <section className="section company-highlights-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">PrimeLink at a Glance</p>

        <h2>A growing Fijian company built around practical solutions</h2>

        <p>
          PrimeLink brings multiple service divisions together through one
          professional brand, one point of contact and one client-focused
          approach.
        </p>
      </div>

      <div className="company-highlights-grid">
        {highlights.map((highlight, index) => (
          <article
            className="company-highlight-card"
            key={highlight.label}
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            <div className="company-highlight-icon">{highlight.icon}</div>

            <strong>{highlight.value}</strong>

            <h3>{highlight.label}</h3>

            <p>{highlight.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}