import React from 'react';
import aboutMeStyles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={aboutMeStyles.about_me_section}>
      {'Hi '}
      <span
        role="img"
        alt="waving-hand"
        aria-label="hidden"
        className={aboutMeStyles.hand_animation}
      >
        👋
      </span>
      {", I'm Ryan Bautista -"}
      <br/>
      {'incoming Software Development Engineer at Amazon.'}
    </div>
  );
};

export default AboutMe;
