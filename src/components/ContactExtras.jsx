import {
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactExtras() {
  const faqs = [
    {
      question: "Which PrimeLink services can I request?",
      answer:
        "You can enquire about cleaning, solar solutions, delivery services, property care, website development, branding, automation and other business support.",
    },
    {
      question: "Can I request more than one service?",
      answer:
        "Yes. PrimeLink can review your requirements and prepare a combined service package where appropriate.",
    },
    {
      question: "Does submitting the form confirm my booking?",
      answer:
        "No. Submitting the form creates an enquiry only. We will review your requirements before confirming availability, pricing or any service arrangement.",
    },
    {
      question: "How will PrimeLink contact me?",
      answer:
        "We can respond through WhatsApp, phone or email depending on the contact method selected in your enquiry.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        "PrimeLink is based in Suva, Fiji. Service availability depends on the location, project type and requirements.",
    },
  ];

  return (
    <>
      <section className="section location-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Location</p>

          <h2>Based in Suva, serving clients across Fiji</h2>

          <p>
            Contact us to confirm whether your location and required service
            are currently available.
          </p>
        </div>

        <div className="location-map-wrap" data-aos="zoom-in">
          <div className="location-map-heading">
            <FaMapMarkerAlt />

            <div>
              <strong>PrimeLink Solutions</strong>
              <span>Suva, Fiji Islands</span>
            </div>
          </div>

          <iframe
            title="PrimeLink Solutions location in Suva, Fiji"
            src="https://www.google.com/maps?q=Suva%2C%20Fiji&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Frequently Asked Questions</p>

          <h2>Important information before requesting a service</h2>

          <p>
            These answers explain how PrimeLink enquiries and service requests
            are handled.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details
              className="faq-item"
              key={faq.question}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <summary>
                <span>{faq.question}</span>
                <FaChevronDown />
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}