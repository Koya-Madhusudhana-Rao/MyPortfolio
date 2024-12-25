import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeader from '../../components/pageHeaderContent/index';
import './styles.css';

const portfolioData = [
  {
    id: 2,
    name: "AuctionSphereX",
    image: require("./images/image1.jpg"),
    link: "https://msrbidding.onrender.com/Main",
  },
  {
    id: 3,
    name: "Sign Language Translator",
    image: require("./images/image2.jpg"),
    link: "link-to-capstone-project",
  },
  {
    id: 2,
    name: "Ecommerce",
    image:"/projects/ecom.jpg",
    link: "#",
  },
  {
    id: 2,
    name: "Notes App",
    image: "/projects/image3.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: "/projects/cart.jpg",
    link: "#",
  },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Mern Stack" },
  { filterId: 3, label: "AI ML" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const filteredItems = filteredValue === 1
    ? portfolioData
    : portfolioData.filter(item => item.id === filteredValue);

  return (
    <section className="portfolio">
      <PageHeader title="My Portfolio" icon={<BsInfoCircleFill size={40} />} />
      
      <motion.div 
        className="portfolio__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Filter Tabs */}
        <ul className="filter-tabs">
          {filterData.map((filter) => (
            <motion.li
              key={filter.filterId}
              className={`filter-tabs__item ${filter.filterId === filteredValue ? 'active' : ''}`}
              onClick={() => setFilteredValue(filter.filterId)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.li>
          ))}
        </ul>

        {/* Project Grid */}
        <div className="portfolio__grid">
          {filteredItems.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-card"
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.name} />
              </div>
              
              <motion.div 
                className="project-card__overlay"
                animate={{ opacity: hoveredValue === index ? 1 : 0 }}
              >
                <h3>{project.name}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-card__button"
                >
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;