import {
  FaComments,
  FaHandshake,
  FaMapMarkerAlt,
  FaSlidersH,
  FaUserCheck,
} from "react-icons/fa";

export default function Testimonials() {
  const commitments = [
    {
      icon: <FaComments />,
      title: "Clear Communication",
      text: "We aim to explain the service, next steps and expectations in a straightforward way.",
    },
    {
      icon: <FaSlidersH />,
      title: "Tailored Solutions",
      text: "Recommendations are shaped around the client’s property, schedule, goals and available budget.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Focused Support",
      text: "We begin by understanding the actual requirement before suggesting a suitable solution.",
    },
    {
      icon: <FaHandshake />,
      title: "Professional Relationships",
      text: "PrimeLink is being built around dependable service and long-term business relationships.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Proudly Local",
      text: "A Fijian-owned company focused on supporting businesses, properties and communities across Fiji.",
    },
  ];

  return (
    <section className="section service-commitment-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">Our Service Commitment</p>

        <h2>What clients can expect from PrimeLink</h2>

        <p>
          As our portfolio grows, real verified client reviews will be added.
          For now, these are the standards guiding every PrimeLink enquiry and
          service relationship.
        </p>
      </div>

      <div className="service-commitment-grid">
        {commitments.map((commitment, index) => (
          <article
            className="service-commitment-card"
            key={commitment.title}
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >
            <div className="service-commitment-icon">{commitment.icon}</div>

            <h3>{commitment.title}</h3>

            <p>{commitment.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}