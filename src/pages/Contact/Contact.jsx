import React from 'react'
import './Contact.css'
import '../Projects/Projects.css'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-title-section">
            <h1>Contact <span>Me</span></h1>
        </div>

        <form className="contact-form">
            <div className="contact-info">
                <div className="multi-fields">
                    <input type="text" placeholder="FullName" />
                    <input type="tel" placeholder="Mobile number" />
                </div>
                <div className="multi-fields">
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Email Subject" />
                </div>
                <textarea name="description" rows="10" cols="50" placeholder="Your Messsage"></textarea>
            </div>
        </form>
        <button className="contact-btn">Send message</button>

    </div>
  )
}

export default Contact
