import React from "react";
import { Line } from "rc-progress";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.css";

const Skills = () => {
  // Front-End skills data
  const frontEndSkills = [
    { skillName: "HTML", percentage: 90 },
    { skillName: "CSS", percentage: 70 },
    { skillName: "JAVASCRIPT", percentage: 50 },
    { skillName: "REACTJS", percentage: 50 }
  ];

  // Back-End skills data
  const backEndSkills = [
    { skillName: "JAVA", percentage: 70 },
    { skillName: "PYTHON", percentage: 65 },
    { skillName: "ANDROID STUDIO", percentage: 35 }
  ];

  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills"/>
      <div className="skills__content-wrapper">
        {/* Front-End Section */}
        <div className="skills__category front-end">
          <h3 className="skills__category-text">Front-End</h3>
          <div className="skills__progressbars">
            {frontEndSkills.map((skillItem, index) => (
              <div key={index} className="progressbar-wrapper">
                <p>{skillItem.skillName}</p>
                <Line
                  percent={skillItem.percentage}
                  strokeWidth="2"
                  strokeColor="#82f312"
                  trailWidth="2"
                  strokeLinecap="square"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Back-End Section */}
        <div className="skills__category back-end">
          <h3 className="skills__category-text">Back-End</h3>
          <div className="skills__progressbars">
            {backEndSkills.map((skillItem, index) => (
              <div key={index} className="progressbar-wrapper">
                <p>{skillItem.skillName}</p>
                <Line
                  percent={skillItem.percentage}
                  strokeWidth="2"
                  strokeColor="#82f312"
                  trailWidth="2"
                  strokeLinecap="square"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
