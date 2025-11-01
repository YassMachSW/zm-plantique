import React from "react";
import { FaPhoneAlt, FaInstagram, FaWhatsapp, FaCreditCard } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact fade-in-up">
      <h2 className="section-title">יצירת קשר</h2>
      <div className="contact-links">
        {/* טלפון */}
        <a href="tel:+972523240488" className="contact-link icon-btn" title="התקשר">
          <FaPhoneAlt />
        </a>

        {/* אינסטגרם */}
        <a
          href="instagram://user?username=zm.plantique"
          target="_blank"
          rel="noreferrer"
          className="contact-link icon-btn"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        {/* וואטסאפ */}
        <a
          href="https://wa.me/972523240488"
          target="_blank"
          rel="noreferrer"
          className="contact-link icon-btn"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* ביט */}
        <a
          href="https://www.bitpay.co.il/app/me/7FF9BBC5-DD9C-E996-A24C-D7A6F98E0B482178"
          target="_blank"
          rel="noreferrer"
          className="contact-link icon-btn"
          title="תשלום בביט"
        >
          <FaCreditCard />
        </a>
      </div>
    </section>
  );
};

export default Contact;
