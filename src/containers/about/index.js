import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.css"; // Changed the import from .scss to .css

const personalDetails = [
  {
    label: "Name",
    value: "Koya Madhusudhana Rao",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "Address",
    value: "Pallegunta/Gurazala Mandal/Andhra Pradesh",
  },
  {
    label: "Email",
    value: "madhusudhanaraokoya@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 6309699518",
  },
];

const jobSummary = `
  An Aspiring Computer Science Engineer seeking an internship opportunity 
  to gain valuable industry experience and contribute my enthusiasm and 
  knowledge to a dynamic organization. I am eager to learn, grow, and 
  apply my knowledge to solve real-world challenges.
`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Aspiring Learner</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, index) => (
                <li key={index}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper"></div>
      </div>
    </section>
  );
};

export default About;
