import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import "../Projects/Projects.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // Your EmailJS credentials
  const serviceID = "service_9l3o9uw";
  const templateID = "template_hgdkgvv";
  const publicKey = "yV0iNKrU3oLzXg8Pn";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.fullName,
      to_name: "Rahul Raman Budaraju",
      message: formData.message,
      email: formData.email,
      subject: formData.subject,
      mobile: formData.mobile,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setStatusMessage("Mail sent successfully! ✅");
        setFormData({ fullName: "", mobile: "", email: "", subject: "", message: "" });

        // Hide message after 10 seconds
            setTimeout(() => {
                setStatusMessage("");
            }, 5000);
      })

      .catch((error) => {
        setStatusMessage("Error sending message. Try again! ❌");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div className="contact">
      <div className="contact-title-section">
        <h1>Contact <span>Me</span></h1>
      </div>

      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-info">
          <div className="multi-fields">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="multi-fields">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            rows="10"
            cols="50"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default Contact;
