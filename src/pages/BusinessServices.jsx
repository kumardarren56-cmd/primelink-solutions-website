import {
  FaArrowRight,
  FaBriefcase,
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaComments,
  FaFileInvoice,
  FaLightbulb,
  FaPalette,
  FaProjectDiagram,
  FaRobot,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";

export default function BusinessServices() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to discuss business and digital services.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      text: "Professional responsive websites designed to strengthen credibility, explain services and generate enquiries.",
    },
    {
      icon: <FaRobot />,
      title: "Business Automation",
      text: "Practical automation solutions that reduce repetitive work and improve daily business processes.",
    },
    {
      icon: <FaPalette />,
      title: "Branding and Design",
      text: "Logos, flyers, social media graphics and branded materials that support a consistent business identity.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Digital Forms and Quotations",
      text: "Online enquiry forms, quotation systems and structured digital workflows for client-facing operations.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Business Systems",
      text: "Simple digital tools designed around customer management, job tracking and operational needs.",
    },
    {
      icon: <FaComments />,
      title: "Ongoing Digital Support",
      text: "Continued technical assistance, website updates and practical guidance as the business grows.",
    },
  ];

  const benefits = [
    "Professional online presence",
    "Solutions tailored to the business",
    "Mobile-friendly digital experiences",
    "Clear customer enquiry pathways",
    "Reduced repetitive administration",
    "Ongoing improvement support",
  ];

  const process = [
    {
      number: "01",
      icon: <FaComments />,
      title: "Discovery",
      text: "We discuss the business, current challenges, customers, priorities and desired outcome.",
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: "Solution Planning",
      text: "PrimeLink prepares a practical recommendation covering the most suitable digital approach.",
    },
    {
      number: "03",
      icon: <FaCode />,
      title: "Design and Build",
      text: "The agreed website, system or branded material is created and reviewed.",
    },
    {
      number: "04",
      icon: <FaChartLine />,
      title: "Launch and Improve",
      text: "The solution is delivered, tested and improved over time as the business develops.",
    },
  ];

  return (
    <div className="business-service-page">
      <section className="business-service-hero">
        <div className="business-service-hero-overlay" />

        <div className="business-service-hero-content">
          <p className="eyebrow">PrimeLink Business Services</p>

          <h1>Digital solutions designed to help businesses grow professionally</h1>

          <p>
            PrimeLink Solutions provides website development, branding,
            automation and digital business systems designed around real
            operational and customer needs.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Discuss Your Project
              <FaArrowRight />
            </Link>

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

          <div className="business-hero-trust">
            <span>
              <FaCheckCircle />
              Tailored digital solutions
            </span>

            <span>
              <FaCheckCircle />
              Professional design
            </span>

            <span>
              <FaCheckCircle />
              Ongoing support
            </span>
          </div>
        </div>
      </section>

      <section className="section business-intro-section">
        <div className="business-intro-grid">
          <div data-aos="fade-right">
            <p className="section-label">Digital Support With a Purpose</p>

            <h2>Technology that solves practical business problems</h2>

            <p>
              A website or digital system should do more than look good. It
              should make the business easier to understand, easier to contact
              and easier to operate.
            </p>

            <p>
              PrimeLink begins by identifying the real business challenge
              before recommending a suitable website, automation or digital
              workflow.
            </p>

            <div className="business-intro-highlights">
              <div>
                <FaBriefcase />

                <span>
                  <strong>Business-focused planning</strong>
                  Solutions designed around customers, operations and growth.
                </span>
              </div>

              <div>
                <FaChartLine />

                <span>
                  <strong>Built to grow</strong>
                  Digital foundations that can improve as the business expands.
                </span>
              </div>
            </div>
          </div>

          <div className="business-intro-image" data-aos="fade-left">
            <div className="business-image-stat">
              <strong>Digital</strong>
              <span>Solutions for modern business</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section business-services-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Business Services</p>

          <h2>Professional digital tools under one PrimeLink division</h2>

          <p>
            Choose one service or combine several into a tailored digital
            package based on your business goals.
          </p>
        </div>

        <div className="business-services-grid">
          {services.map((service, index) => (
            <article
              className="business-service-card"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 70}
            >
              <span className="business-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="business-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section business-benefits-section">
        <div className="business-benefits-grid">
          <div className="business-benefits-image" data-aos="fade-right" />

          <div data-aos="fade-left">
            <p className="section-label">Why PrimeLink Business Services?</p>

            <h2>Digital work connected to real business outcomes</h2>

            <p>
              PrimeLink focuses on practical solutions that improve how a
              business presents itself, communicates with customers and manages
              everyday tasks.
            </p>

            <div className="business-benefits-list">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <FaCheckCircle />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section business-process-section">
        <div className="section-heading" data-aos="fade-up">
          <p className="section-label">Our Process</p>

          <h2>From business challenge to working digital solution</h2>

          <p>
            Every project follows a clear process so expectations, scope and
            next steps remain easy to understand.
          </p>
        </div>

        <div className="business-process-grid">
          {process.map((step, index) => (
            <article
              className="business-process-card"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="business-process-top">
                <span>{step.number}</span>
                <div>{step.icon}</div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section business-assurance-section">
        <div className="business-assurance-content" data-aos="zoom-in">
          <div>
            <p className="section-label">PrimeLink Digital Partnership</p>

            <h2>Websites, branding and automation through one company</h2>

            <p>
              PrimeLink can combine suitable digital services into one package,
              giving clients a consistent brand, clearer communication and
              fewer providers to coordinate.
            </p>
          </div>

          <FaBriefcase />
        </div>
      </section>

      <section className="section business-service-cta">
        <div data-aos="zoom-in">
          <p className="section-label">Start a Business Project</p>

          <h2>Tell us what you want your business to improve</h2>

          <p>
            Share your current challenge, desired outcome, business type and
            preferred timing. PrimeLink will review the enquiry and recommend
            the next step.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Request a Consultation
              <FaArrowRight />
            </Link>

            <a
              className="btn btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp PrimeLink
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}