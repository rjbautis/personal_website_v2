import React from 'react';
import experienceStyle from '../styles/Experience.module.css'
import experienceData from '../assets/data/experienceData'


const ExperienceItem = (props) => {

  const { company, imgSrc, title, about } = props;

  return (
    <div className={experienceStyle.experience_item}>
      <div className={experienceStyle.experience_container}>
        <span className={experienceStyle.experience_company}>{company}</span>
        <br/>
        <span className={experienceStyle.experience_title}>{title}</span>
      </div>
      <div className={experienceStyle.experience_container}>
        {/* eslint-disable */}
        <img src={require(`../assets/images/${imgSrc}.png`)} alt="dockstore" className={experienceStyle.experience_img}/>
      </div>
      <div className={experienceStyle.experience_container}>
        <span className={experienceStyle.experience_about}>
          {about}
        </span>
      </div>

    </div>
  )
};

const Experience = () => {
  const experienceItems = experienceData.map(item => {
    return (
      <ExperienceItem
        key={item.id}
        company={item.company}
        imgSrc={item.imgSrc}
        title={item.title}
        about={item.about}
      />
    )
  });

  return (
    <div className={experienceStyle.experience_section}>
      { experienceItems }
    </div>
  );
};

export default Experience;
