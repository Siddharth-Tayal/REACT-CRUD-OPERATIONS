import React from "react";
import Founder from "../assets/logo.png"
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="founder">
        <h2>Our Founder </h2>
        <img src={Founder} alt="" />
        <h3>Siddharth Tayal</h3>
      </div>
      <div className="links">
        <h2>Our Brands :</h2>
        <a href="www.google.com">
          <FiInstagram /> Instagram
        </a>
        <a href="www.google.com">
          <FiTwitter /> Twitter
        </a>
        <a href="www.google.com">
          <FiYoutube /> YouTube
        </a>
      </div>
    </div>
  );
};

export default Footer;
