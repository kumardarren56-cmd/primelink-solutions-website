import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      question: "Which areas does PrimeLink Solutions serve?",
      answer:
        "PrimeLink is based in Suva and reviews service requests based on the location, type of work and required schedule. Contact us to confirm availability for your area.",
    },
    {
      question: "Can I request more than one service?",
      answer:
        "Yes. Cleaning, property care, delivery, solar support and business services may be combined into a tailored package where suitable.",
    },
    {
      question: "Do you provide free quotations?",
      answer:
        "Yes. PrimeLink provides a free initial discussion and quotation. Some services may require a site assessment before final pricing is confirmed.",
    },
    {
      question: "Do you offer one-off and ongoing services?",
      answer:
        "Yes. Services may be arranged as one-time projects, scheduled visits or ongoing support depending on the client’s requirements.",
    },
    {
      question: "How do I request a service?",
      answer:
        "You can use the contact page, request a quote button or WhatsApp PrimeLink directly. Share the service needed, location, preferred timing and any important details.",
    },
    {
      question: "Can PrimeLink create a website for another business?",
      answer:
        "Yes. PrimeLink Business Services provides website development, branding, digital forms, automation and ongoing digital support.",
    },
  ];

  return (
    <section className="section faq-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">Frequently Asked Questions</p>

        <h2>Clear answers before you get started</h2>

        <p>
          Learn more about PrimeLink services, quotations and how to begin an
          enquiry.
        </p>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              key={item.question}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>

                <FaChevronDown />
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
