import {
  FaBuilding,
  FaHospital,
  FaSchool,
  FaStore,
  FaWarehouse,
  FaHome,
} from "react-icons/fa";

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: <FaBuilding />,
      title: "Corporate Offices",
      text: "Professional workplaces requiring reliable ongoing support.",
    },
    {
      icon: <FaStore />,
      title: "Retail Stores",
      text: "Cleaning and maintenance that keeps stores welcoming.",
    },
    {
      icon: <FaSchool />,
      title: "Schools",
      text: "Safe, hygienic environments for students and staff.",
    },
    {
      icon: <FaHospital />,
      title: "Healthcare",
      text: "High standards of cleanliness and professional care.",
    },
    {
      icon: <FaWarehouse />,
      title: "Industrial Sites",
      text: "Warehouses and operational facilities of all sizes.",
    },
    {
      icon: <FaHome />,
      title: "Residential",
      text: "Homes, apartments and residential communities.",
    },
  ];

  return (
    <section className="section industries-section">
      <div className="section-heading">
        <p className="section-label">Industries We Serve</p>

        <h2>Trusted solutions across multiple industries</h2>

        <p>
          PrimeLink Solutions provides professional services tailored to the
          unique requirements of each client and industry.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((item) => (
          <article className="industry-card" key={item.title}>
            <div className="industry-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}