import "../App.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <p className="section-label">Legal Information</p>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how PrimeLink Solutions collects,
            uses, stores and protects information submitted through our
            website.
          </p>
          <span>Last updated: 4 August 2026</span>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="legal-content">
          <section>
            <h2>1. About PrimeLink Solutions</h2>
            <p>
              PrimeLink Solutions is a Fiji-based service company providing
              cleaning, solar, delivery, property care and business services.
              References to “PrimeLink”, “we”, “our” or “us” refer to
              PrimeLink Solutions.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect information that you voluntarily provide when
              requesting a quotation, submitting an enquiry, using our website
              calculator, contacting us by email or communicating through
              WhatsApp.
            </p>

            <ul>
              <li>Name and company name</li>
              <li>Email address and phone number</li>
              <li>Service location</li>
              <li>Service type and preferred schedule</li>
              <li>Property or project information</li>
              <li>Messages and enquiry details</li>
              <li>Any documents or photographs you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Information</h2>
            <p>Information may be used to:</p>

            <ul>
              <li>Respond to enquiries and quotation requests</li>
              <li>Assess service requirements</li>
              <li>Prepare quotations and service recommendations</li>
              <li>Arrange site visits, appointments or service delivery</li>
              <li>Communicate about an existing enquiry or service</li>
              <li>Improve our website and customer experience</li>
              <li>Maintain appropriate business and service records</li>
              <li>Comply with legal or regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2>4. Website Estimates</h2>
            <p>
              Estimates produced by the website calculator are general
              planning ranges only. Information entered into the calculator
              may be included in a WhatsApp message or enquiry when the user
              chooses to submit it.
            </p>
          </section>

          <section>
            <h2>5. Sharing of Information</h2>
            <p>
              PrimeLink does not sell personal information. Information may be
              shared only where reasonably necessary with trusted service
              providers, contractors, technology platforms or professional
              advisers assisting us with website hosting, communications,
              administration or service delivery.
            </p>

            <p>
              Information may also be disclosed where required by law, court
              order or an authorised government agency.
            </p>
          </section>

          <section>
            <h2>6. Third-Party Services</h2>
            <p>
              Our website may use or link to third-party services including
              WhatsApp, email services, maps, website hosting and analytics.
              Those services operate under their own privacy policies and
              terms.
            </p>
          </section>

          <section>
            <h2>7. Cookies and Website Data</h2>
            <p>
              The website may use essential cookies, browser storage and
              technical information required for security, performance and
              functionality. Analytics tools may be added in the future to
              understand website traffic and improve the service.
            </p>
          </section>

          <section>
            <h2>8. Information Security</h2>
            <p>
              We take reasonable steps to protect information against
              unauthorised access, loss, misuse or disclosure. However, no
              internet transmission or electronic storage system can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2>9. Information Retention</h2>
            <p>
              Information is retained only for as long as reasonably required
              to manage enquiries, provide services, maintain business records,
              resolve disputes and meet legal or accounting obligations.
            </p>
          </section>

          <section>
            <h2>10. Your Choices</h2>
            <p>
              You may contact PrimeLink to request access to, correction of or
              deletion of personal information we hold about you, subject to
              any legal or legitimate business recordkeeping requirements.
            </p>
          </section>

          <section>
            <h2>11. Children’s Information</h2>
            <p>
              This website is intended for business customers, property owners
              and adults requesting services. We do not knowingly request
              personal information directly from children.
            </p>
          </section>

          <section>
            <h2>12. Policy Updates</h2>
            <p>
              We may update this Privacy Policy when our services, website or
              business practices change. The latest version will be published
              on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2>13. Contact PrimeLink</h2>

            <div className="legal-contact-box">
              <p>
                Questions or privacy requests can be directed to:
              </p>

              <a href="mailto:primelinksolutions740@gmail.com">
                <FaEnvelope />
                primelinksolutions740@gmail.com
              </a>

              <a href="tel:+6798654795">
                <FaPhone />
                +679 865 4795
              </a>

              <p>PrimeLink Solutions, Suva, Fiji Islands</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}