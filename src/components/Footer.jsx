import React from "react";
import Founder from "../assets/logo.png";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="founder">
        <h2>Developed By </h2>
        <img src={Founder} alt="" />
        <h3>Siddharth Tayal</h3>
      </div>
      <div className="links">
        <h2>Visit at :</h2>
        <a href="https://github.com/Siddharth-Tayal/" target="_blank">
          <FiGithub /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/siddharth-tayal-65203a266/www.google.com"
          target="_blank"
        >
          <FiLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/s_tayal_01/" target="_blank">
          <FiInstagram /> Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
