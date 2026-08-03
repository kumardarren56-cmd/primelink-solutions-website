import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaHome,
  FaSolarPanel,
  FaTruck,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";

const services = [
  {
    id: "commercial-cleaning",
    name: "Commercial Cleaning",
    icon: <FaBuilding />,
    baseMin: 180,
    baseMax: 300,
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    icon: <FaBriefcase />,
    baseMin: 140,
    baseMax: 240,
  },
  {
    id: "residential-cleaning",
    name: "Residential Cleaning",
    icon: <FaHome />,
    baseMin: 100,
    baseMax: 180,
  },
  {
    id: "property-care",
    name: "Property Care",
    icon: <FaHome />,
    baseMin: 150,
    baseMax: 280,
  },
  {
    id: "solar-solutions",
    name: "Solar Solutions",
    icon: <FaSolarPanel />,
    baseMin: 250,
    baseMax: 600,
  },
  {
    id: "delivery-services",
    name: "Delivery Services",
    icon: <FaTruck />,
    baseMin: 40,
    baseMax: 120,
  },
  {
    id: "business-services",
    name: "Business Services",
    icon: <FaBriefcase />,
    baseMin: 300,
    baseMax: 900,
  },
];

const propertySizes = [
  {
    id: "small",
    name: "Small",
    description: "Small office, shop, home or project",
    multiplier: 1,
  },
  {
    id: "medium",
    name: "Medium",
    description: "Medium workplace, property or project",
    multiplier: 1.55,
  },
  {
    id: "large",
    name: "Large",
    description: "Large facility, property or detailed project",
    multiplier: 2.35,
  },
];

const frequencies = [
  {
    id: "one-time",
    name: "One-Time",
    multiplier: 1,
  },
  {
    id: "weekly",
    name: "Weekly",
    multiplier: 0.88,
  },
  {
    id: "fortnightly",
    name: "Fortnightly",
    multiplier: 0.94,
  },
  {
    id: "monthly",
    name: "Monthly",
    multiplier: 0.98,
  },
];

export default function QuoteCalculator() {
  const [serviceId, setServiceId] = useState("commercial-cleaning");
  const [sizeId, setSizeId] = useState("small");
  const [frequencyId, setFrequencyId] = useState("one-time");

  const selectedService = services.find(
    (service) => service.id === serviceId
  );

  const selectedSize = propertySizes.find((size) => size.id === sizeId);

  const selectedFrequency = frequencies.find(
    (frequency) => frequency.id === frequencyId
  );

  const estimate = useMemo(() => {
    const minimum =
      selectedService.baseMin *
      selectedSize.multiplier *
      selectedFrequency.multiplier;

    const maximum =
      selectedService.baseMax *
      selectedSize.multiplier *
      selectedFrequency.multiplier;

    return {
      minimum: Math.round(minimum / 10) * 10,
      maximum: Math.round(maximum / 10) * 10,
    };
  }, [selectedService, selectedSize, selectedFrequency]);

  const whatsappMessage = `
Hello PrimeLink Solutions,

I used the website estimate calculator and would like an official quotation.

Service: ${selectedService.name}
Size: ${selectedSize.name}
Frequency: ${selectedFrequency.name}
Indicative estimate: FJD ${estimate.minimum} - ${estimate.maximum}

Please contact me to discuss the requirements.
  `.trim();

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="section quote-calculator-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">Instant Estimate</p>

        <h2>Build a service estimate in under a minute</h2>

        <p>
          Select your service, approximate project size and preferred
          frequency. PrimeLink will prepare a final quotation after confirming
          the actual requirements.
        </p>
      </div>

      <div className="quote-calculator" data-aos="fade-up">
        <div className="quote-calculator-form">
          <div className="quote-step">
            <div className="quote-step-heading">
              <span>01</span>

              <div>
                <h3>Choose a service</h3>
                <p>Select the main service you are interested in.</p>
              </div>
            </div>

            <div className="quote-service-grid">
              {services.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  className={`quote-option quote-service-option ${
                    serviceId === service.id ? "quote-option-active" : ""
                  }`}
                  onClick={() => setServiceId(service.id)}
                >
                  <span className="quote-option-icon">{service.icon}</span>
                  <span>{service.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="quote-step">
            <div className="quote-step-heading">
              <span>02</span>

              <div>
                <h3>Select the approximate size</h3>
                <p>Choose the option that best matches your requirement.</p>
              </div>
            </div>

            <div className="quote-size-grid">
              {propertySizes.map((size) => (
                <button
                  type="button"
                  key={size.id}
                  className={`quote-option quote-size-option ${
                    sizeId === size.id ? "quote-option-active" : ""
                  }`}
                  onClick={() => setSizeId(size.id)}
                >
                  <strong>{size.name}</strong>
                  <span>{size.description}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="quote-step">
            <div className="quote-step-heading">
              <span>03</span>

              <div>
                <h3>Choose a frequency</h3>
                <p>Select how often you may require the service.</p>
              </div>
            </div>

            <div className="quote-frequency-grid">
              {frequencies.map((frequency) => (
                <button
                  type="button"
                  key={frequency.id}
                  className={`quote-option ${
                    frequencyId === frequency.id
                      ? "quote-option-active"
                      : ""
                  }`}
                  onClick={() => setFrequencyId(frequency.id)}
                >
                  {frequency.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="quote-result">
          <p className="quote-result-label">Indicative estimate</p>

          <h3>
            FJD {estimate.minimum.toLocaleString()} –{" "}
            {estimate.maximum.toLocaleString()}
          </h3>

          <p className="quote-result-description">
            This is an initial planning range only. The final amount may change
            after PrimeLink confirms the location, condition, access,
            materials, timing and complete scope of work.
          </p>

          <div className="quote-summary">
            <div>
              <span>Service</span>
              <strong>{selectedService.name}</strong>
            </div>

            <div>
              <span>Approximate size</span>
              <strong>{selectedSize.name}</strong>
            </div>

            <div>
              <span>Frequency</span>
              <strong>{selectedFrequency.name}</strong>
            </div>
          </div>

          <ul className="quote-benefits">
            <li>
              <FaCheckCircle />
              Free initial consultation
            </li>

            <li>
              <FaCheckCircle />
              Tailored final quotation
            </li>

            <li>
              <FaCheckCircle />
              No obligation to proceed
            </li>
          </ul>

          <a
            className="btn btn-whatsapp quote-whatsapp-button"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            Send Estimate on WhatsApp
          </a>

          <Link className="quote-contact-link" to="/contact">
            Request a detailed quotation
            <FaArrowRight />
          </Link>
        </aside>
      </div>

      <p className="quote-disclaimer" data-aos="fade-up">
        Estimates are provided as a general guide and are not fixed offers.
        PrimeLink Solutions will confirm final pricing after reviewing the
        client’s actual requirements.
      </p>
    </section>
  );
}