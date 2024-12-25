import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      <motion.div 
        className="home__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="home__greeting">Hey there 👋</h1>
        <h2 className="home__name">I'm Madhusudhanarao Koya</h2>
        <h3 className="home__title">An aspiring Learner</h3>
        
        <div className="home__cta">
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            Hire Me
          </motion.button>
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/portfolio')}
          >
            View Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;