import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        {/* <div className="contact-options">
        <div className="contact-option">
          <MdOutlineEmail/>
          <h4>Email</h4>
          <h5>enas@gmail.com</h5>
          <a href="mailto:enasm4829@gmail.com">Send a message</a>
        </div>
        </div> */}
       <form action="" className='col-md-7'>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="17" placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send</button>
       </form>
      </div>
    </section>
  )
}
