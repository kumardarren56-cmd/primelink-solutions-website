import {
  FaComments,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaSlidersH,
  FaUserCheck,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Proudly Fijian-Owned",
      text: "A locally built company focused on serving businesses, property owners and communities across Fiji.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Five Service Divisions",
      text: "Cleaning, solar, delivery, property care and business services are available through one professional brand.",
    },
    {
      icon: <FaSlidersH />,
      title: "Flexible Service Packages",
      text: "Services can be adapted around the client’s needs, schedule, location and available budget.",
    },
    {
      icon: <FaComments />,
      title: "Responsive Communication",
      text: "We aim to provide clear updates, practical guidance and straightforward next steps.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Focused Approach",
      text: "Every recommendation begins with understanding the client’s actual problem and desired outcome.",
    },
  ];

  return (
    <section
      className="section prime-benefits-section"
      data-aos="fade-up"
    >
      <div className="section-heading">
        <p className="section-label">Why Choose PrimeLink</p>

        <h2>One reliable partner for multiple business needs</h2>

        <p>
          PrimeLink Solutions brings practical services together with clear
          communication, flexible options and a commitment to professional
          client support.
        </p>
      </div>

      <div className="prime-benefits-grid">
        {reasons.map((reason) => (
          <article
            className="prime-benefit-card"
            key={reason.title}
            data-aos="fade-up"
          >
            <div className="prime-benefit-icon">
              {reason.icon}
            </div>

            <h3>{reason.title}</h3>

            <p>{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}