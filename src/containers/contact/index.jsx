import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q076zv9',
        'template_hiudcfl',
        e.target,
        'OtyldcbYOdHaCwa89'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setFormData({
            name: '',
            email: '',
            description: ''
          });
          setIsSubmitted(true);
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
  };

  const SuccessMessage = () => (
    <div className="contact__success">
      <h4>Thank you for your message!</h4>
      <p>I'll get back to you soon.</p>
    </div>
  );

  const ContactForm = () => (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="contact__form-group">
        <input
          required
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="contact__input"
        />
        <label htmlFor="name" className="contact__label">Name</label>
      </div>

      <div className="contact__form-group">
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="contact__input"
        />
        <label htmlFor="email" className="contact__label">Email</label>
      </div>

      <div className="contact__form-group">
        <textarea
          required
          name="description"
          id="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          className="contact__input contact__textarea"
        />
        <label htmlFor="description" className="contact__label">Message</label>
      </div>

      <button type="submit" className="contact__button">
        Send Message
      </button>
    </form>
  );

  return (
    <section className="contact">
      <h2 className="contact__title">Contact Me</h2>
      <div className="contact__container">
        <div className="contact__content">
          <h3 className="contact__subtitle">Let's Talk</h3>
          <p className="contact__description">
            Feel free to reach out to me for any questions or opportunities.
          </p>
          {isSubmitted ? <SuccessMessage /> : <ContactForm />}
        </div>
      </div>
    </section>
  );
};

export default Contact;