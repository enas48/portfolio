import './contact.css'
import React, { useRef } from 'react';
import { sendEmailFn } from './sendemail';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    sendEmailFn(form);
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
       <form ref={form} onSubmit={sendEmail} className='col-md-7'>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary btn-custom'>Send Message</button>
       </form>
      </div>
    </section>
  )
}
