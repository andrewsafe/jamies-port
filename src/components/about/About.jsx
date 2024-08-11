import React from "react";
import "./about.css";
import Me from "../../assets/me.png";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hey I'm</h5>
        <h2>Andrew Saifnoorian</h2>
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
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>7+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>40+ projects completed</small>
            </article>
          </div>
          <p>Full Stack Developer with comprehensive knowledge in a wide range of programming languages, 
            including Java, Python, Angular, and JavaScript. Proficient in web development using React.js, 
            and Node.js and experienced in database management with SQL. Demonstrated skill in secure application 
            development with the .NET Framework. Well-versed in version control (Git) and DevOps tools (Docker). 
            Adept at implementing the dynamics of scripting languages and constructing foundational frameworks 
            to derive insightful analyses. Passionate about leveraging advanced coding skills to drive innovative 
            solutions and make meaningful contributions to technology-driven projects. 
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
