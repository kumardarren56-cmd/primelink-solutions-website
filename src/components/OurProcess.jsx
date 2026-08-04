import {
  FaCalendarCheck,
  FaCheckCircle,
  FaClipboardList,
  FaComments,
  FaFileInvoiceDollar,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router";

const processSteps = [
  {
    number: "01",
    icon: <FaComments />,
    title: "Contact PrimeLink",
    description:
      "Tell us the service you need, your location, preferred timing and the main project requirements.",
  },
  {
    number: "02",
    icon: <FaClipboardList />,
    title: "Requirement Review",
    description:
      "We review the enquiry and confirm whether a site visit, photographs or additional information is required.",
  },
  {
    number: "03",
    icon: <FaFileInvoiceDollar />,
    title: "Tailored Quotation",
    description:
      "PrimeLink prepares a clear quotation based on the agreed scope, schedule, location and service requirements.",
  },
  {
    number: "04",
    icon: <FaCalendarCheck />,
    title: "Schedule the Service",
    description:
      "Once approved, we confirm the service date, access arrangements and any preparation required from the client.",
  },
  {
    number: "05",
    icon: <FaTools />,
    title: "Complete the Work",
    description:
      "The service is carried out according to the agreed requirements with professional communication throughout.",
  },
  {
    number: "06",
    icon: <FaCheckCircle />,
    title: "Final Review",
    description:
      "We review the completed work, address any agreed follow-up items and maintain communication for ongoing support.",
  },
];

export default function OurProcess() {
  return (
    <section className="section process-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">How PrimeLink Works</p>

        <h2>A clear process from enquiry to completion</h2>

        <p>
          We keep every service request straightforward, organised and focused
          on the client’s actual requirements.
        </p>
      </div>

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article
            className="process-card"
            key={step.number}
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >
            <div className="process-card-top">
              <span className="process-number">{step.number}</span>

              <div className="process-icon">{step.icon}</div>
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <div className="process-cta" data-aos="fade-up">
        <div>
          <p className="process-cta-label">Ready to begin?</p>

          <h3>Tell us what service you need</h3>

          <p>
            Start with a free initial discussion and PrimeLink will recommend
            the most suitable next step.
          </p>
        </div>

        <Link className="btn btn-primary" to="/contact">
          Start Your Enquiry
        </Link>
      </div>
    </section>
  );
}