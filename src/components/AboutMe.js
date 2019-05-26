import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/ryan-j-bautista/">
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
          </li>
          <li>
            <a href="mailto:rjbautis1@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size='2x' />
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
