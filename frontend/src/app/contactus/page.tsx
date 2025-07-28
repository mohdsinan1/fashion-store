"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import "./contact.css";

import contactAnimation from "../../assets/contact.json.json";
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="main_container">
      <div className="left-container">
        <div className="left-container-content">
          <h1>Connect With Us</h1>
          <p>Ready to take your fashion journey to the next level? We're here to help you every step of the way. Our team of fashion experts is ready to assist you with any questions or inquiries you may have.</p>
          <p>Whether you're looking for styling advice, product information, or just want to share your thoughts, we're all ears!</p>
        </div>
      </div>

      <div className="right-container">
        <div className="contact-content">
          <h2 className="contact-heading">Contact Information</h2>
          <ul className="contact-list">
            <li>
              <i className="fas fa-phone"></i>
              <span>Call Us: +1 (555) 123-4567</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>Email: info@borcellesite.com</span>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
              <span>Instagram: @borcellesite</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Visit Us: 123 Fashion Avenue, Style City, 90210</span>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h2 className="contact-heading">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="name">Full Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="email">Email Address</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="subject">Subject</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
              <label className="form-label" htmlFor="message">Message</label>
            </div>

            <button type="submit" className="form-submit">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>

        <div className="contact-animation">
          <Lottie
            animationData={contactAnimation}
            loop
            style={{ height: "200px", width: "200px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
