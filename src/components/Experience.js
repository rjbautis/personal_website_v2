import React from 'react';
import experienceStyle from '../styles/Experience.module.css';
import experienceData from '../assets/data/experienceData';

const ExperienceItem = props => {
  const { company, link, imgSrc, title, duration, about } = props;

  return (
    <div className={experienceStyle.experience_item}>
      <div className={experienceStyle.experience_container}>
        <a href={link} className={experienceStyle.experience_company}>
          {company}
        </a>
        <br />
        <span className={experienceStyle.experience_title}>{title}</span>
        <br />
        <span className={experienceStyle.experience_duration}>{duration}</span>
      </div>
      <div className={experienceStyle.experience_container}>
        {/* eslint-disable */}
        <img
          src={require(`../assets/images/${imgSrc}`)}
          alt="dockstore"
          className={experienceStyle.experience_img}
        />
      </div>
      <div className={experienceStyle.experience_container}>
        <span
          className={experienceStyle.experience_about}
          dangerouslySetInnerHTML={{ __html: about }}
        />
      </div>
    </div>
  );
};

const Experience = () => {
  const experienceItems = experienceData.map(item => {
    return (
      <ExperienceItem
        key={item.id}
        company={item.company}
        link={item.link}
        imgSrc={item.imgSrc}
        title={item.title}
        duration={item.duration}
        about={item.about}
      />
    );
  });

  return (
    <div className={experienceStyle.experience_section}>{experienceItems}</div>
  );
};

export default Experience;
