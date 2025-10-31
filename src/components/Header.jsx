import React from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="ZM Plantique Logo" className="logo" />
      <h1 className="title">ZM PLANTIQUE</h1>
      <p className="subtitle">עיצוב טרריומים בעבודת יד 🌿</p>
    </header>
  );
};

export default Header;
