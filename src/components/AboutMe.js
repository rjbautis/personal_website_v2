import React from 'react';
import aboutMeStyles from '../styles/AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={aboutMeStyles.about_me_section}>
      <div className={aboutMeStyles.san_francisco_img}/>
      <div className={aboutMeStyles.about_me_blurb}>
        {'Hi, I\'m Ryan Bautista -'}
        <br/>
        {'incoming Software Development Engineer at Amazon.'}
      </div>
    </div>
  );
};

export default AboutMe;
