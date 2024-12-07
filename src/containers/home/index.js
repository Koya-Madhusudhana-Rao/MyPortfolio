import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();
  

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hey there 👋 I'm Madhusudhanarao Koya
          <br />
          An aspiring Learner
        </h1>
      </div>
      
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      
    </section>
  );
};

export default Home;
