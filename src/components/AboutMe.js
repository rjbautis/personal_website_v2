import React from 'react';
import styles from '../styles/AboutMe.module.css';
import icons from '../styles/icons.module.css';

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
      {'incoming Software Development Engineer at Amazon'}
      <div className={icons.container}>
        <ul>
          <li>
            <a href="https://github.com/rjbautis">
              <span className={icons.github} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/ryan-j-bautista/">
              <span className={icons.linkedin} />
            </a>
          </li>
          <li>
            <a href="mailto:rjbautis1@gmail.com">
              <span className={icons.email} />
            </a>
          </li>
        </ul>
      </div>
      <div className={icons.container}>
        <a className={icons.btn} href='./RyanBautista_Resume.pdf'>
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
