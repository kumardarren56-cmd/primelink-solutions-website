import "./App.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function App() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to request a free quote.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="App">
      <header id="home" className="hero">
        <nav className="navbar">
          <a className="brand" href="#home">
            <span className="brand-mark">PL</span>

            <span>
              <strong>PrimeLink</strong>
              <small>Solutions</small>
            </span>
          </a>

          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#why-us">Why Us</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <a className="nav-quote" href="#contact">
            Get a Quote
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Reliable • Professional • Trusted</p>

          <h1>
            Complete Cleaning and Facility Solutions for Businesses Across Fiji
          </h1>

          <p className="hero-description">
            PrimeLink Solutions helps offices, commercial properties and
            organisations maintain clean, safe and professional environments
            through dependable facility support.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Request a Free Quote
            </a>

            <a
              className="btn btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>

          <div className="hero-trust">
            <span>
              <FaCheckCircle /> Proudly Fijian-owned
            </span>

            <span>
              <FaCheckCircle /> Custom service plans
            </span>

            <span>
              <FaCheckCircle /> Responsive support
            </span>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="section-label">Who We Are</p>
            <h2>About PrimeLink Solutions</h2>

            <p>
              We are a proudly Fijian-owned cleaning and facility management
              company committed to dependable service, professional standards
              and long-term client relationships.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <h3>A dependable partner for cleaner, safer facilities</h3>

              <p>
                From routine office cleaning to property maintenance and
                specialised support, we create practical service plans around
                each client’s needs, schedule and working environment.
              </p>

              <p>
                Our goal is simple: deliver consistent results that help your
                team work in a clean, healthy and professional space.
              </p>
            </div>

            <div className="about-highlights">
              <div>
                <strong>100%</strong>
                <span>Commitment to service</span>
              </div>

              <div>
                <strong>Flexible</strong>
                <span>Daily, weekly and custom plans</span>
              </div>

              <div>
                <strong>Suva</strong>
                <span>Serving businesses across Fiji</span>
              </div>

              <div>
                <strong>Responsive</strong>
                <span>Fast communication and support</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading">
            <p className="section-label">What We Do</p>
            <h2>Professional Facility Services</h2>

            <p>
              Flexible support for offices, commercial properties, homes and
              organisations.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <span>01</span>
              <h3>Commercial Cleaning</h3>
              <p>
                Scheduled cleaning for offices, retail spaces and commercial
                facilities.
              </p>
            </article>

            <article className="service-card">
              <span>02</span>
              <h3>Office Cleaning</h3>
              <p>
                Clean and presentable workspaces that support productivity and
                wellbeing.
              </p>
            </article>

            <article className="service-card">
              <span>03</span>
              <h3>Deep Cleaning</h3>
              <p>
                Detailed cleaning for high-use areas, move-ins, move-outs and
                special requirements.
              </p>
            </article>

            <article className="service-card">
              <span>04</span>
              <h3>Window Cleaning</h3>
              <p>
                Interior and exterior window care for a polished professional
                appearance.
              </p>
            </article>

            <article className="service-card">
              <span>05</span>
              <h3>Property Maintenance</h3>
              <p>
                Reliable assistance with routine upkeep and facility support.
              </p>
            </article>

            <article className="service-card">
              <span>06</span>
              <h3>Landscaping</h3>
              <p>
                Lawn care, gardening and outdoor maintenance for welcoming
                properties.
              </p>
            </article>

            <article className="service-card">
              <span>07</span>
              <h3>Pest Control Support</h3>
              <p>
                Coordinated prevention and treatment solutions based on client
                requirements.
              </p>
            </article>

            <article className="service-card">
              <span>08</span>
              <h3>Custom Facility Support</h3>
              <p>
                Tailored service packages for unique sites, schedules and
                operational needs.
              </p>
            </article>
          </div>
        </section>

        <section id="why-us" className="section why-section">
          <div className="section-heading light-heading">
            <p className="section-label">Why PrimeLink</p>
            <h2>Service you can depend on</h2>

            <p>
              We combine responsive communication, careful work and flexible
              service plans.
            </p>
          </div>

          <div className="why-grid">
            <article>
              <FaCheckCircle />
              <h3>Professional Standards</h3>
              <p>
                Clear processes and careful attention to every service detail.
              </p>
            </article>

            <article>
              <FaCheckCircle />
              <h3>Reliable Scheduling</h3>
              <p>
                Services arranged around your operating hours and priorities.
              </p>
            </article>

            <article>
              <FaCheckCircle />
              <h3>Flexible Packages</h3>
              <p>
                One-off, recurring and customised support options are
                available.
              </p>
            </article>

            <article>
              <FaCheckCircle />
              <h3>Customer Focus</h3>
              <p>
                We listen, communicate clearly and work toward long-term
                satisfaction.
              </p>
            </article>
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading">
            <p className="section-label">Simple Process</p>
            <h2>Getting started is easy</h2>
          </div>

          <div className="process-grid">
            <article>
              <strong>1</strong>
              <h3>Tell us what you need</h3>
              <p>Contact us and describe your property or facility needs.</p>
            </article>

            <article>
              <strong>2</strong>
              <h3>Receive a tailored quote</h3>
              <p>We prepare a clear service plan based on your requirements.</p>
            </article>

            <article>
              <strong>3</strong>
              <h3>We deliver the service</h3>
              <p>Our team completes the work professionally and reliably.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-wrap">
            <div className="contact-intro">
              <p className="section-label">Let’s Work Together</p>
              <h2>Request your free quote</h2>

              <p>
                Tell us about your cleaning or facility requirements. We’ll
                respond with the next steps and a tailored service option.
              </p>

              <div className="contact-list">
                <a href="tel:+6798654795">
                  <FaPhoneAlt />
                  <span>
                    <small>Call us</small>
                    +679 865 4795
                  </span>
                </a>

                <a href="mailto:primelinksolutions740@gmail.com">
                  <FaEnvelope />
                  <span>
                    <small>Email us</small>
                    primelinksolutions740@gmail.com
                  </span>
                </a>

                <div>
                  <FaMapMarkerAlt />
                  <span>
                    <small>Location</small>
                    Suva, Fiji
                  </span>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/primelinksolutions740@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New PrimeLink Solutions Quote Request"
              />

              <input type="hidden" name="_captcha" value="false" />

              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+679"
                  required
                />
              </label>

              <label>
                Service needed
                <select name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Commercial Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Window Cleaning</option>
                  <option>Property Maintenance</option>
                  <option>Landscaping</option>
                  <option>Other Facility Support</option>
                </select>
              </label>

              <label>
                Tell us about the job
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Property type, location, schedule and requirements"
                  required
                />
              </label>

              <button className="btn btn-primary form-button" type="submit">
                Send Quote Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact PrimeLink Solutions on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <footer className="footer">
        <div>
          <strong>PrimeLink Solutions</strong>
          <p>Reliable. Professional. Trusted.</p>
        </div>

        <p>© 2026 PrimeLink Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;