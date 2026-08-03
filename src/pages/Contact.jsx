import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import ContactExtras from "../components/ContactExtras";

export default function Contact() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to request a quotation.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="contact-page">
      <section className="page-hero contact-page-hero">
        <div className="page-hero-content">
          <p className="eyebrow">Let’s Work Together</p>

          <h1>Request a tailored PrimeLink quotation</h1>

          <p>
            Tell us what you need, and we will review your enquiry and respond
            with the appropriate next steps.
          </p>

          <a
            className="btn btn-whatsapp"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            Start on WhatsApp
          </a>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="contact-page-grid">
          <div className="contact-information">
            <p className="section-label">Contact PrimeLink</p>

            <h2>One Company. Every Solution.</h2>

            <p className="contact-introduction">
              Contact us about cleaning, solar solutions, delivery services,
              property care, websites, branding or other business support.
            </p>

            <div className="contact-information-list">
              <a href="tel:+6798654795">
                <FaPhoneAlt />

                <span>
                  <small>Phone</small>
                  +679 865 4795
                </span>
              </a>

              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <FaWhatsapp />

                <span>
                  <small>WhatsApp</small>
                  +679 865 4795
                </span>
              </a>

              <a href="mailto:primelinksolutions740@gmail.com">
                <FaEnvelope />

                <span>
                  <small>Email</small>
                  primelinksolutions740@gmail.com
                </span>
              </a>

              <div>
                <FaMapMarkerAlt />

                <span>
                  <small>Location</small>
                  Suva, Fiji Islands
                </span>
              </div>

              <div>
                <FaClock />

                <span>
                  <small>Enquiries</small>
                  Contact us to arrange a consultation
                </span>
              </div>
            </div>
          </div>

          <form
            className="professional-quote-form"
            action="https://formsubmit.co/primelinksolutions740@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New PrimeLink Solutions Quote Request"
            />

            <input type="hidden" name="_captcha" value="false" />

            <input type="hidden" name="_template" value="table" />

            <div className="form-heading">
              <p className="section-label">Free Initial Enquiry</p>
              <h2>Tell us about your requirements</h2>
            </div>

            <div className="form-row">
              <label>
                Full name
                <input
                  type="text"
                  name="Full Name"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Company or organisation
                <input
                  type="text"
                  name="Company"
                  placeholder="Company name, if applicable"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email address
                <input
                  type="email"
                  name="Email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  name="Phone"
                  placeholder="+679"
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Location
                <input
                  type="text"
                  name="Location"
                  placeholder="Town, city or project location"
                  required
                />
              </label>

              <label>
                Service required
                <select name="Service Required" defaultValue="" required>
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option>Cleaning Services</option>
                  <option>Solar Solutions</option>
                  <option>Delivery Services</option>
                  <option>Property Care</option>
                  <option>Website Development</option>
                  <option>Business Automation</option>
                  <option>Branding and Graphic Design</option>
                  <option>Other Business Services</option>
                  <option>Combined Service Package</option>
                </select>
              </label>
            </div>

            <label>
              Preferred contact method
              <select
                name="Preferred Contact Method"
                defaultValue="WhatsApp"
                required
              >
                <option>WhatsApp</option>
                <option>Phone Call</option>
                <option>Email</option>
              </select>
            </label>

            <label>
              Project or service details
              <textarea
                name="Project Details"
                rows="7"
                placeholder="Describe what you need, the property or business type, preferred timing and any important requirements."
                required
              />
            </label>

            <label className="consent-label">
              <input type="checkbox" name="Consent" required />

              <span>
                I confirm that the information provided is correct and may be
                used by PrimeLink Solutions to respond to this enquiry.
              </span>
            </label>

            <button className="btn btn-primary quote-submit-button" type="submit">
              Submit Quote Request
            </button>

            <p className="form-note">
              Submitting this form does not create a contract or confirm a
              booking. PrimeLink Solutions will review the request first.
            </p>
          </form>
        </div>
      </section>

      <ContactExtras />
    </div>
  );
}