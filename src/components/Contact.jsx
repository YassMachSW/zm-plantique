import React from "react";
import instagram from "../assets/insta.png";

const Contact = () => {
  return (
    <section className="contact fade-in-up">
      <h2 className="section-title">צרי קשר</h2>
      <div className="contact-links">
        <a href="tel:+972501234567" className="contact-link">📞 050-1234567</a>
        {/* <a href="https://www.instagram.com/zm.plantique?igsh=MWFoMzh2d2Y2YmlxOQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="contact-link"> */}
        <a
  href="instagram://user?username=zm.plantique"
  target="_blank"
  rel="noreferrer"
  className="contact-link"
>
            <img src={instagram} alt="ZM Plantique Logo"  className="logo bounce" />
        </a>
        <a href="https://wa.me/972523240488" target="_blank" rel="noreferrer" className="contact-link">
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
