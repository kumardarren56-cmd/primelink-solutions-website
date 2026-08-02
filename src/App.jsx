import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <nav className="navbar">
          <h1 className="logo">PrimeLink Solutions</h1>

          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="hero-content">
          <h2>Your Trusted Facilities Management Partner</h2>

          <p>
            Delivering professional cleaning, maintenance, landscaping,
            security, pest control and contracting services across Fiji.
          </p>

          <a href="#contact" className="btn">
            Request a Quote
          </a>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About PrimeLink Solutions</h2>

        <p>
          PrimeLink Solutions is a proudly Fijian-owned facilities management
          company serving commercial and residential clients. We deliver
          reliable, professional and high-quality services that help our
          clients maintain clean, safe and productive environments.
        </p>
      </section>

      <section id="services" className="section services-section">
        <h2>Our Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Commercial Cleaning</h3>
            <p>
              Professional cleaning for offices, retail stores and commercial
              facilities.
            </p>
          </div>

          <div className="service-card">
            <h3>Residential Cleaning</h3>
            <p>Reliable home cleaning services tailored to your schedule.</p>
          </div>

          <div className="service-card">
            <h3>Office Cleaning</h3>
            <p>Maintain a clean, healthy and productive workplace.</p>
          </div>

          <div className="service-card">
            <h3>Landscaping</h3>
            <p>Professional lawn care, gardening and outdoor maintenance.</p>
          </div>

          <div className="service-card">
            <h3>Property Maintenance</h3>
            <p>Keeping your property operating safely and efficiently.</p>
          </div>

          <div className="service-card">
            <h3>Security Services</h3>
            <p>
              Reliable security solutions for residential and commercial
              properties.
            </p>
          </div>

          <div className="service-card">
            <h3>Pest Control</h3>
            <p>Effective pest prevention and treatment services.</p>
          </div>

          <div className="service-card">
            <h3>General Contracting</h3>
            <p>Support for maintenance, repairs and project requirements.</p>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <h2>Why Choose PrimeLink Solutions?</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Professional Team</h3>
            <p>Committed professionals focused on quality service.</p>
          </div>

          <div className="service-card">
            <h3>Reliable Service</h3>
            <p>Consistent and dependable results for every client.</p>
          </div>

          <div className="service-card">
            <h3>Customer Focused</h3>
            <p>Your satisfaction and business needs come first.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact PrimeLink Solutions</h2>

        <p>
          Contact us today to discuss your cleaning, maintenance or facilities
          management needs.
        </p>

        <div className="contact-details">
          <a href="tel:+6798654795">Phone: +679 865 4795</a>

          <a href="mailto:primelinksolutions740@gmail.com">
            Email: primelinksolutions740@gmail.com
          </a>

          <p>Location: Suva, Fiji</p>
        </div>

        <a
          className="btn"
          href="mailto:primelinksolutions740@gmail.com?subject=Request for a PrimeLink Solutions Quote"
        >
          Request a Free Quote
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 PrimeLink Solutions. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;