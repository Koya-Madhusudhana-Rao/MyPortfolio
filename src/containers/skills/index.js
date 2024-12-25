import React from 'react';
import './styles.css';

const Skills = () => {
  const progrmaingSkills = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    }
  ]
  const frontEndSkills = [
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }
  ];

  const backEndSkills = [
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    }
  ];

  const SkillCard = ({ name, icon }) => (
    <div className="skill-card">
      <img src={icon} alt={name} className="skill-card__icon" />
      <h3 className="skill-card__name">{name}</h3>
    </div>
  );

  return (
    <section className="skills">
      <h2 className="skills__title">My Skills</h2>
      
      <div className="skills__container">
      <div className="skills__category">
          <h3 className="skills__category-title">Programing Laguages</h3>
          <div className="skills__grid">
            {progrmaingSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="skills__category">
          <h3 className="skills__category-title">Frontend Development</h3>
          <div className="skills__grid">
            {frontEndSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="skills__category">
          <h3 className="skills__category-title">Backend Development</h3>
          <div className="skills__grid">
            {backEndSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;