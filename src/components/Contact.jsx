import React from "react";
import { FaPhoneAlt, FaInstagram, FaWhatsapp, FaCreditCard } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact fade-in-up">
      <h2 className="section-title">יצירת קשר</h2>
      <div className="contact-links">
        {/* טלפון */}
        <a href="tel:+972523240488" className="contact-link" title="התקשר">
          <FaPhoneAlt className="icon"/>
        </a>

        {/* אינסטגרם */}
        <a
          href="instagram://user?username=zm.plantique"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
          title="Instagram"
        >
          <FaInstagram className="icon"/>
        </a>

        {/* וואטסאפ */}
        <a
          href="https://wa.me/972523240488"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
          title="WhatsApp"
        >
          <FaWhatsapp className="icon"/>
        </a>

        {/* ביט */}
        <a
          href="https://www.bitpay.co.il/app/me/7FF9BBC5-DD9C-E996-A24C-D7A6F98E0B482178"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
          title="תשלום בביט"
        >
          <FaCreditCard className="icon"/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
