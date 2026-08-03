import "../App.css";
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
import logo from "../assets/brand/primelink-logo.png";

import CoreServices from "../components/CoreServices";
import StatsSection from "../components/StatsSection";
import CompanyHighlights from "../components/CompanyHighlights";
import WhyChooseUs from "../components/WhyChooseUs";
import IndustriesWeServe from "../components/IndustriesWeServe";
import ClientLogos from "../components/ClientLogos";
import Testimonials from "../components/Testimonials";
import PricingPackages from "../components/PricingPackages";
import QuoteCalculator from "../components/QuoteCalculator";
import QuoteRequestForm from "../components/QuoteRequestForm";
import PortfolioShowcase from "../components/PortfolioShowcase";
import FAQ from "../components/FAQ";

export default function Home() {
  const whatsappMessage =
    "Hello PrimeLink Solutions, I would like to discuss your services.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const divisions = [
    {
      icon: <FaBuilding />,
      title: "Cleaning",
      text: "Commercial, office, residential and specialised cleaning.",
    },
    {
      icon: <FaSolarPanel />,
      title: "Solar Solutions",
      text: "Solar supply, coordination, maintenance and consultation.",
    },
    {
      icon: <FaTruck />,
      title: "Delivery Services",
      text: "Flexible local delivery and business logistics support.",
    },
    {
      icon: <FaHome />,
      title: "Property Care",
      text: "Maintenance, landscaping, repairs and grounds care.",
    },
    {
      icon: <FaBriefcase />,
      title: "Business Services",
      text: "Websites, automation, branding and digital support.",
    },
  ];

  return (
    <div className="home-page">
      <section className="brand-hero">
        <div className="brand-hero-overlay" />

        <div className="brand-hero-content">
          <img
            src={logo}
            alt="PrimeLink Solutions"
            className="hero-brand-logo"
          />

          <p className="eyebrow">Proudly serving businesses across Fiji</p>

          <h1>One Company. Every Solution.</h1>

          <p className="hero-description">
            PrimeLink Solutions provides cleaning, solar, delivery, property
            care and business services through one professional and dependable
            brand.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/services">
              Explore Our Services
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

          <div className="hero-trust">
            <span>
              <FaCheckCircle />
              Fijian-owned
            </span>

            <span>
              <FaCheckCircle />
              Five service divisions
            </span>

            <span>
              <FaCheckCircle />
              Tailored solutions
            </span>
          </div>
        </div>
      </section>

      <section className="section home-intro">
        <div className="section-heading">
          <p className="section-label">How We Help</p>

          <h2>Practical support for your property, operations and growth</h2>

          <p>
            PrimeLink brings essential physical and digital services together,
            helping clients work with fewer providers while receiving clear
            communication and dependable support.
          </p>
        </div>

        <div className="division-preview-grid">
          {divisions.map((division) => (
            <article className="division-preview-card" key={division.title}>
              <div className="division-preview-icon">{division.icon}</div>

              <h3>{division.title}</h3>

              <p>{division.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CoreServices />

      <section className="section home-about">
        <div className="home-about-grid">
          <div>
            <p className="section-label">About PrimeLink</p>

            <h2>A modern multi-service company built around client needs</h2>

            <p>
              We believe businesses and property owners deserve reliable
              support, straightforward communication and solutions designed
              around their actual requirements.
            </p>

            <p>
              Led by Founder and Managing Director Daren Kumar, PrimeLink
              Solutions is building a trusted service network for clients
              throughout Fiji.
            </p>

            <Link className="text-link" to="/about">
              Learn more about PrimeLink
              <FaArrowRight />
            </Link>
          </div>

          <div className="home-stat-grid">
            <div>
              <strong>5</strong>
              <span>Core service divisions</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Commitment to client service</span>
            </div>

            <div>
              <strong>Flexible</strong>
              <span>Custom and combined packages</span>
            </div>

            <div>
              <strong>Fiji</strong>
              <span>Local service and support</span>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <CompanyHighlights />

      <WhyChooseUs />

      <IndustriesWeServe />

      <ClientLogos />

      <Testimonials />

      <PricingPackages />

      <QuoteCalculator />

      <QuoteRequestForm />

      <PortfolioShowcase />

      <FAQ />

      <section className="section home-cta">
        <div>
          <p className="section-label">Let&apos;s Work Together</p>

          <h2>Tell us what solution you need</h2>

          <p>
            Contact PrimeLink Solutions for a tailored recommendation and free
            initial quotation.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Request a Free Quote
            </Link>

            <a
              className="btn btn-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}