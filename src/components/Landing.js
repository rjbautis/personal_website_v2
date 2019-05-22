import React from 'react';
import landingStyles from '../styles/Landing.module.css';

const Landing = () => {
  return (
    <header className={landingStyles.landing_header}>
      <h1 className="important">Ryan Bautista</h1>
      <br />
      <h2 className="important">
        {'Software Development Engineer '}
        <span role="img" alt="tech-man" aria-label="hidden">
          👨‍💻
        </span>
      </h2>
    </header>
  );
};

export default Landing;
