import { FaUsers, FaClipboardCheck, FaClock, FaBuilding } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaBuilding />,
      number: "5",
      label: "Professional Service Divisions",
    },
    {
      icon: <FaClipboardCheck />,
      number: "100%",
      label: "Commitment to Client Satisfaction",
    },
    {
      icon: <FaClock />,
      number: "24/7",
      label: "Response & Support",
    },
    {
      icon: <FaUsers />,
      number: "Fiji",
      label: "Locally Owned & Operated",
    },
  ];

  return (
    <section className="section stats-section">
      <div className="section-heading">
        <p className="section-label">PrimeLink At A Glance</p>

        <h2>Reliable solutions backed by professional service</h2>

        <p>
          We combine multiple services under one trusted company, making it
          easier for businesses and property owners to work with a single,
          dependable team.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <article className="stat-card" key={item.label}>
            <div className="stat-icon">{item.icon}</div>

            <h3>{item.number}</h3>

            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}