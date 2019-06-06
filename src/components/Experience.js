import React from 'react';
import styles from '../styles/Item.module.css';
import experienceData from '../assets/data/experienceData';

const ExperienceItem = props => {
  const { company, link, imgSrc, title, duration, about } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item_container}>
        <a href={link} className={styles.item_company}>
          {company}
        </a>
        <br />
        <span className={styles.item_title}>{title}</span>
        <br />
        <span className={styles.item_duration}>{duration}</span>
      </div>
      <div className={styles.item_container}>
        {/* eslint-disable */}
        {imgSrc.map(image => {
          return (
            <img
              key={image}
              src={require(`../assets/images/${image}`)}
              alt={company}
              className={styles.item_img_web}
            />
          );
        })}
      </div>
      <div className={styles.item_container}>
        <span
          className={styles.item_about}
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

  return <div className={styles.component_section}>{experienceItems}</div>;
};

export default Experience;
