/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Back to the top
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Patients</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/andrewsaifnoorian/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/andrewsafe">
          <FaGithub />
        </a>
        <a
          href="https://andrewsafe.github.io/andrews-portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileAlt />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          Disclaimer: This site only provides information about cosmetic surgery
          and this information is not meant to be taken as medical advice.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
