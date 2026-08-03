import {
  FaArrowRight,
  FaCheckCircle,
  FaCrown,
  FaGem,
  FaMedal,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router";

export default function PricingPackages() {
  const packages = [
    {
      icon: <FaMedal />,
      name: "Bronze",
      subtitle: "Essential Cleaning",
      idealFor: "Small offices, shops and apartments",
      features: [
        "General cleaning",
        "Dusting and surface wiping",
        "Vacuuming and mopping",
        "Washroom cleaning",
        "Waste removal",
        "Flexible scheduling",
      ],
      className: "pricing-bronze",
    },
    {
      icon: <FaStar />,
      name: "Silver",
      subtitle: "Enhanced Cleaning",
      idealFor: "Medium offices and commercial spaces",
      features: [
        "Everything included in Bronze",
        "Kitchen and lunchroom cleaning",
        "High-touch surface sanitising",
        "Internal glass cleaning",
        "Scheduled quality checks",
        "Priority communication",
      ],
      className: "pricing-silver",
    },
    {
      icon: <FaCrown />,
      name: "Gold",
      subtitle: "Complete Cleaning",
      idealFor: "Large offices, schools and facilities",
      features: [
        "Everything included in Silver",
        "Deep-cleaning support",
        "Floor-care options",
        "Carpet-cleaning coordination",
        "Detailed glass cleaning",
        "Dedicated service coordination",
      ],
      className: "pricing-gold",
      featured: true,
      badge: "Most Popular",
    },
    {
      icon: <FaGem />,
      name: "Platinum",
      subtitle: "Premium Facility Support",
      idealFor: "Corporate buildings and major facilities",
      features: [
        "Everything included in Gold",
        "Custom cleaning programme",
        "Priority call-out support",
        "Monthly service reporting",
        "Combined facility support",
        "Tailored service agreement",
      ],
      className: "pricing-platinum",
    },
  ];

  return (
    <section className="section pricing-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">Cleaning Packages</p>

        <h2>Flexible service options for different property needs</h2>

        <p>
          Select a starting package and PrimeLink will tailor the final scope,
          frequency and quotation around your property.
        </p>
      </div>

      <div className="pricing-grid">
        {packages.map((item, index) => (
          <article
            className={`pricing-card ${item.className} ${
              item.featured ? "pricing-featured" : ""
            }`}
            key={item.name}
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            {item.badge && (
              <span className="pricing-badge">{item.badge}</span>
            )}

            <div className="pricing-icon">{item.icon}</div>

            <p className="pricing-level">{item.name}</p>

            <h3>{item.subtitle}</h3>

            <p className="pricing-ideal">
              <strong>Ideal for:</strong> {item.idealFor}
            </p>

            <ul className="pricing-features">
              {item.features.map((feature) => (
                <li key={feature}>
                  <FaCheckCircle />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              className={`btn ${
                item.featured ? "btn-primary" : "pricing-button"
              }`}
              to={`/contact?package=${item.name.toLowerCase()}`}
            >
              Request {item.name} Quote
              <FaArrowRight />
            </Link>
          </article>
        ))}
      </div>

      <div className="pricing-note" data-aos="fade-up">
        <h3>Every property is different</h3>

        <p>
          Final quotations depend on property size, service frequency,
          location, access requirements and the agreed scope of work. PrimeLink
          provides a free initial consultation and tailored quotation.
        </p>

        <Link className="text-link" to="/contact">
          Discuss a custom cleaning package
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}