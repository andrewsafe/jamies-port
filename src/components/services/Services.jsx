import React from "react";
import "./services.css";
import { FaCheckSquare } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Document Workflow Automation & Portal Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Optimizing document workflow automation by refactoring PDF batch processing algorithms for scalability and efficiency.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Implementing quantum metrics functionality to enable session replays of customer interactions.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Leading release management processes and spearheading key RFC initiatives to ensure project excellence.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Initiating and implementing Selenium projects, reducing software adaptation workload by 2-3 days per site.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Full-Stack Web Development, AI Solutions & Secure Applications</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Developing web apps using React.js, .NET framework, Tailwind CSS, Express.js, and PostgreSQL.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Leading the development of secure full-stack applications with a focus on data security and seamless payment processing.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Implementing AI-driven solutions like a personalized AI writing guide for youth, utilizing natural language processing and machine learning.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Optimizing workflows and enhancing efficiency for non-profit organizations through innovative technology solutions.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>UI/UX Enhancement, IT Systems & Application Optimization</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Improving user interaction and satisfaction by optimizing application runtime speed and design.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Designing and developing a full-stack IT ticketing system using Vue, feathersjs, and MongoDB, to streamline internal support processes.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Conducting rigorous testing, debugging, and code reviews to enhance application stability and performance.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Collaborating with cross-functional teams to update Git and Github repositories, ensuring smooth integration and communication.</p>
            </li>
          </ul>
        </article>       
      </div>
    </section>
  );
};

export default Services;
