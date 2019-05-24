import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.about_me_section}>
      {'Hi '}
      <span
        role="img"
        alt="waving-hand"
        aria-label="hidden"
        className={styles.hand_animation}
      >
        👋
      </span>
      {", I'm Ryan Bautista -"}
      <br />
      {'incoming Software Development Engineer at Amazon.'}
    </div>
  );
};

export default AboutMe;
