import React from "react";
import "./WhatsAppButton.css"; // Importa o CSS

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
    >
      <img
        src="https://img.icons8.com/?size=100&id=16712&format=png&color=FFFFFF"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
