import React from "react";
import "./Footer.css";
import logo from './assets/MovieDatabaseLogo.png';

const Footer = () => {
  return (
    <footer>
      <p>Carefully made by Remi Russell</p>
      <img src={logo} alt="Logo" />
      <p>API by The Movie Database</p>
    </footer>
  );
};

export default Footer;
