import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.css";
import ProfilePhoto from "./21BCE9905_KoyaMadhusudhanaRao.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <header className="about__header">
        <h2>
          <BsInfoCircleFill size={40} className="about__icon" /> About Me
        </h2>
      </header>

      <div className="about__content">
        <div className="about__photo">
          <img src={ProfilePhoto} alt="Koya Madhusudhana Rao" />
        </div>

        <div className="about__details">
          <h3>Aspiring Learner</h3>
          <p className="about__summary">
            An Aspiring Computer Science Engineer seeking an internship opportunity 
            to gain valuable industry experience and contribute my enthusiasm and 
            knowledge to a dynamic organization. I am eager to learn, grow, and 
            apply my knowledge to solve real-world challenges.
          </p>

          <h3 className="about__subheader">Personal Information</h3>
          <ul className="about__info">
            <li><strong>Name:</strong> Koya Madhusudhana Rao</li>
            <li><strong>Age:</strong> 20</li>
            <li><strong>Address:</strong> Pallegunta/Gurazala Mandal/Andhra Pradesh</li>
            <li><strong>Email:</strong> madhusudhanaraokoya@gmail.com</li>
            <li><strong>Contact No:</strong> +91 6309699518</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
