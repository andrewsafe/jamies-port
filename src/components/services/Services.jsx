import React from "react";
import "./services.css";
import { FaCheckSquare } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Cosmetic Botox Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Botox Treatments for Wrinkle Reduction</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                I provide expert-administered Botox treatments to effectively
                reduce the appearance of fine lines and wrinkles, targeting
                areas such as the forehead, crow's feet, and frown lines for a
                smoother, youthful look.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Using state-of-the-art techniques, I ensure that results are
                natural and enhance your facial aesthetics, catering to clients
                across Bergen County and Manhattan.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                My personalized consultations allow me to design treatments that
                align with your unique skin type, lifestyle, and aesthetic
                goals.
              </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Facial Contouring & Jawline Refinement</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Achieve enhanced facial symmetry and a more defined jawline
                through Botox treatments designed for non-surgical contouring
                and refinement.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                I provide tailored solutions for both men and women, delivering
                sculpted and rejuvenated appearances without invasive
                procedures.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                Trusted by clients across North Jersey and Manhattan, I pride
                myself on meticulous attention to detail and exceptional care.
              </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Preventative Botox & Skincare Consultations</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                My preventative Botox treatments help maintain youthful skin by
                addressing early signs of aging and preserving smooth,
                wrinkle-free features.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                I create customized skincare plans to complement Botox
                treatments, ensuring optimal results tailored to your needs.
              </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                By collaborating with top-tier skincare professionals in Bergen
                County and Manhattan, I provide a holistic approach to your
                aesthetic journey.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
