import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State variable to track submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q076zv9",
        "template_hiudcfl",
        e.target,
        "OtyldcbYOdHaCwa89"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            description: ""
          });
          // Set isSubmitted to true after successful submission
          setIsSubmitted(true);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <div className="contact__content__form">
          {isSubmitted ? (
            <p className="thank-you-message">Thank you for your message! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type="text"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
