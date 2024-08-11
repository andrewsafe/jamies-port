import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { MdEmail } from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xdthdyk', 'template_xi8zwe7', form.current, 'cTGWawCLI7aVlwsN2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>andrewsafe@gmail.com</h5>
            <a href='andrewsafe@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>
            <article className='contact_option'>
            <FaLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>andrewsaifnoorian</h5>
            <a href='https://www.linkedin.com/in/andrewsaifnoorian/' target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <textarea name='message' rows="15" placeholder="Please include your full name, email, and message here!" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact