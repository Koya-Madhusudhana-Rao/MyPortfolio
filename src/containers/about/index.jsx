import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PageHeader from '../../components/pageHeaderContent/index';
import './styles.css';

const About = () => {
  return (
    <section className="about">
      <PageHeader title="About Me" icon={<BsInfoCircleFill size={40} />} />
      
      <motion.div 
        className="about__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about__photo">
          <motion.img 
            src="/Madhusudhana rao Image.png" 
            alt="Koya Madhusudhana Rao"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="about__details">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about__title"
          >
            Aspiring Learner
          </motion.h3>
          
          <motion.p 
            className="about__summary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            An Aspiring Computer Science Engineer seeking an internship opportunity 
            to gain valuable industry experience and contribute my enthusiasm and 
            knowledge to a dynamic organization. I am eager to learn, grow, and 
            apply my knowledge to solve real-world challenges.
          </motion.p>

          <motion.div 
            className="about__info-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="about__subheader">Personal Information</h3>
            <ul className="about__info">
              <li><strong>Name:</strong> Koya Madhusudhana Rao</li>
              <li><strong>Age:</strong> 21</li>
              <li><strong>Address:</strong> Pallegunta/Gurazala Mandal/Andhra Pradesh</li>
              <li><strong>Email:</strong> madhusudhanaraokoya@gmail.com</li>
              <li><strong>Contact No:</strong> +91 6309699518</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
