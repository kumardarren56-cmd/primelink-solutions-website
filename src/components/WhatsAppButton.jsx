import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const message =
    "Hello PrimeLink Solutions, I would like to discuss your services.";

  const whatsappLink = `https://wa.me/6798654795?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      className="floating-whatsapp"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with PrimeLink Solutions on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}