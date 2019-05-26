import React from 'react';
import styles from '../styles/Landing.module.css';

const Landing = () => {
  return (
    <header className={styles.landing_header}>
      <h1>Ryan Bautista</h1>
      <br />
      <h2>
        {'Software Development Engineer '}
        <span role="img" alt="tech-man" aria-label="hidden">
          👨‍💻
        </span>
      </h2>
    </header>
  );
};

export default Landing;
