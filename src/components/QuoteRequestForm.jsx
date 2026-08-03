import { useMemo, useState } from "react";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";

const serviceOptions = [
  "Commercial Cleaning",
  "Office Cleaning",
  "Residential Cleaning",
  "Solar Solutions",
  "Delivery Services",
  "Property Care",
  "Business Services",
  "Combined Service Package",
];

const propertyOptions = [
  "Office",
  "Retail Store",
  "Home or Apartment",
  "School or Training Centre",
  "Warehouse",
  "Commercial Facility",
  "Other",
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  service: "Commercial Cleaning",
  propertyType: "Office",
  preferredDate: "",
  frequency: "One-Time",
  details: "",
};

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const isComplete = useMemo(() => {
    return (
      formData.fullName.trim() &&
      formData.phone.trim() &&
      formData.location.trim() &&
      formData.details.trim()
    );
  }, [formData]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isComplete) {
      setSubmitted(true);
      return;
    }

    const message = `
Hello PrimeLink Solutions,

I would like to request an official quotation.

CLIENT DETAILS
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Location: ${formData.location}

SERVICE DETAILS
Service: ${formData.service}
Property type: ${formData.propertyType}
Frequency: ${formData.frequency}
Preferred date: ${formData.preferredDate || "Flexible"}

PROJECT INFORMATION
${formData.details}

Please contact me to discuss the quotation.
    `.trim();

    const whatsappUrl = `https://wa.me/6798654795?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section quote-request-section">
      <div className="section-heading" data-aos="fade-up">
        <p className="section-label">Request an Official Quote</p>

        <h2>Tell us what service you need</h2>

        <p>
          Share the main details of your project and PrimeLink Solutions will
          review your request before confirming the scope and final quotation.
        </p>
      </div>

      <div className="quote-request-layout" data-aos="fade-up">
        <div className="quote-request-intro">
          <p className="quote-request-kicker">Simple enquiry process</p>

          <h3>Start with the important details</h3>

          <p>
            The more information you provide, the easier it is for PrimeLink to
            understand your requirements and prepare the right next step.
          </p>

          <ul>
            <li>
              <FaCheckCircle />
              Free initial discussion
            </li>

            <li>
              <FaCheckCircle />
              Tailored recommendations
            </li>

            <li>
              <FaCheckCircle />
              Clear quotation process
            </li>

            <li>
              <FaCheckCircle />
              Direct WhatsApp submission
            </li>
          </ul>

          <div className="quote-request-contact">
            <div>
              <FaPhone />
              <span>+679 865 4795</span>
            </div>

            <div>
              <FaEnvelope />
              <span>primelinksolutions740@gmail.com</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Suva, Fiji Islands</span>
            </div>
          </div>
        </div>

        <form className="quote-request-form" onSubmit={handleSubmit}>
          <div className="quote-form-grid">
            <label className="quote-form-field">
              <span>
                <FaUser />
                Full name *
              </span>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </label>

            <label className="quote-form-field">
              <span>
                <FaPhone />
                Phone number *
              </span>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your contact number"
              />
            </label>

            <label className="quote-form-field">
              <span>
                <FaEnvelope />
                Email address
              </span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </label>

            <label className="quote-form-field">
              <span>
                <FaMapMarkerAlt />
                Service location *
              </span>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Example: Suva, Nasinu or Pacific Harbour"
              />
            </label>

            <label className="quote-form-field">
              <span>
                <FaBuilding />
                Service required
              </span>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="quote-form-field">
              <span>
                <FaBuilding />
                Property type
              </span>

              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              >
                {propertyOptions.map((property) => (
                  <option key={property} value={property}>
                    {property}
                  </option>
                ))}
              </select>
            </label>

            <label className="quote-form-field">
              <span>
                <FaCalendarAlt />
                Preferred date
              </span>

              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </label>

            <label className="quote-form-field">
              <span>
                <FaCalendarAlt />
                Service frequency
              </span>

              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
              >
                <option value="One-Time">One-Time</option>
                <option value="Weekly">Weekly</option>
                <option value="Fortnightly">Fortnightly</option>
                <option value="Monthly">Monthly</option>
                <option value="To Be Discussed">To Be Discussed</option>
              </select>
            </label>
          </div>

          <label className="quote-form-field quote-form-message">
            <span>Project details *</span>

            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="6"
              placeholder="Describe the property, work required, approximate size, preferred timing and any important information."
            />
          </label>

          {submitted && !isComplete && (
            <p className="quote-form-error">
              Please complete your name, phone number, location and project
              details.
            </p>
          )}

          <button
            type="submit"
            className="btn btn-whatsapp quote-submit-button"
          >
            <FaWhatsapp />
            Send Quote Request on WhatsApp
          </button>

          <p className="quote-form-note">
            Submitting this form opens WhatsApp with your completed enquiry.
            Final prices are confirmed only after PrimeLink reviews the actual
            requirements.
          </p>
        </form>
      </div>
    </section>
  );
}