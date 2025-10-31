import React from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="header fade-in">
      <img src={logo} alt="ZM Plantique Logo" className="logo bounce" />
      <h1 className="title">ZM PLANTIQUE</h1>
      <p className="subtitle">עיצוב טרריומים בעבודת יד 🌿 <br/>
      עולמות קטנים של טבע 🌱<br/>
      📍 משלוחים לכל הארץ
      </p>
    </header>
  );
};

export default Header;
