import React from "react";
import "./about.css";
import Me from "../../assets/me.png";
import { FaAward, FaCertificate, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hey I'm</h5>
      <h2>Jamie Mohitiasli F.N.P/M.D.</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>15+ Years Working</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Treatments</h5>
              <small>500+ botox injections</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>3</small>
            </article>
          </div>
          <p>
            Hi, I am a Family Nurse Practitioner (FNP) with over 15 years of
            experience in medical and cosmetic care. After earning my FNP degree
            from the College of New Rochelle, I spent over a decade at Mount
            Sinai Hospital in NYC, specializing in the Liver and Small Bowel
            Department, where I honed my clinical expertise.
            <br />
            For the past 15 years, I have worked alongside Dr. Kassir,
            specializing in Botox and cosmetic injectables, blending medical
            precision with an artistic approach to deliver natural,
            confidence-boosting results. My passion lies in providing
            compassionate, high-quality care tailored to each patient’s unique
            needs.
          </p>

          <a href="#project" className="btn btn-primary">
            {" "}
            See my successful treatments
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
