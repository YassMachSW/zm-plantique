import React from "react";

const Contact = () => {
  return (
    <section className="contact fade-in-up">
      <h2 className="section-title">צרי קשר</h2>
      <div className="contact-links">
        <a href="tel:+972501234567" className="contact-link">📞 050-1234567</a>
        <a href="https://instagram.com/zmplantique" target="_blank" rel="noreferrer" className="contact-link">
          📸 אינסטגרם
        </a>
        <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer" className="contact-link">
          💬 וואטסאפ
        </a>
        <a href="https://bitpay.co.il/paymentlink" target="_blank" rel="noreferrer" className="contact-link">
          💳 תשלום בביט
        </a>
      </div>
    </section>
  );
};

export default Contact;
