import {
  FaBuilding,
  FaGraduationCap,
  FaHome,
  FaIndustry,
  FaStore,
  FaWarehouse,
} from "react-icons/fa";

export default function ClientLogos() {
  const organisations = [
    {
      icon: <FaBuilding />,
      name: "Corporate Offices",
    },
    {
      icon: <FaStore />,
      name: "Retail Businesses",
    },
    {
      icon: <FaGraduationCap />,
      name: "Schools & Training Centres",
    },
    {
      icon: <FaWarehouse />,
      name: "Warehouses",
    },
    {
      icon: <FaIndustry />,
      name: "Commercial Facilities",
    },
    {
      icon: <FaHome />,
      name: "Property Owners",
    },
  ];

  return (
    <section className="section client-logos-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">Built for Fiji Businesses</p>

        <h2>Professional support for organisations of every size</h2>

        <p>
          PrimeLink Solutions is prepared to support workplaces, commercial
          properties, institutions and property owners through tailored service
          arrangements.
        </p>
      </div>

      <div className="client-logos-grid">
        {organisations.map((organisation, index) => (
          <article
            className="client-logo-card"
            key={organisation.name}
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <div className="client-logo-icon">{organisation.icon}</div>

            <span>{organisation.name}</span>
          </article>
        ))}
      </div>

      <p className="client-logos-note" data-aos="fade-up">
        Verified client logos and partnerships will be added with permission as
        the PrimeLink portfolio grows.
      </p>
    </section>
  );
}