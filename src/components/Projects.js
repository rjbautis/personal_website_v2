import React from 'react';
import Slider from 'react-slick';
import projectData from '../assets/data/projectsData';
import styles from '../styles/Item.module.css';

const ProjectItem = props => {
  const { name, link, imgSrc, about, media } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item_container}>
        <a href={link} className={styles.item_company}>
          {name}
        </a>
      </div>
      <div className={styles.item_container}>
        {/* eslint-disable */}
        <Slider dots={true} speed={500} slidesToShow={1} slidesToScroll={1}>
          {imgSrc.map(image => {
            return (
              <img
                key={image}
                src={require(`../assets/images/${image}`)}
                alt={name}
                className={
                  media === 'mobile'
                    ? styles.item_img_mobile
                    : styles.item_img_web
                }
              />
            );
          })}
        </Slider>
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

const Projects = () => {
  const projectItems = projectData.map(item => {
    return (
      <ProjectItem
        key={item.id}
        name={item.name}
        link={item.link}
        imgSrc={item.imgSrc}
        about={item.about}
        tech={item.tech}
        media={item.media}
      />
    );
  });

  return <div className={styles.component_section}>{projectItems}</div>;
};

export default Projects;
