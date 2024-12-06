import React from "react";
import "./experience.css";
import star from "../../assets/star.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I use on a daily basis</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Family Nurse Practioner</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Primary & Preventive Care</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Clinical Decision-Making</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Emergency Response</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Family & Community Health</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Collaboration with Other Healthcare Professionals</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Comprehensive Health Assessments</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Cosmetic Nurse</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Aesthetic Treatments</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Facial Anatomy Knowledge</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Artistic Eye</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Skin Assessment</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Pain Management</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={star} className="experience_details-icon" alt="star" />
              <div>
                <h4>Client Retention</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
