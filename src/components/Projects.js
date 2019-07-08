import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import projectData from '../assets/data/projectsData';
import styles from '../styles/Item.module.css';

const ProjectItem = props => {
  const { name, link, imgSrc, about, media } = props;

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.item}>
      <div className={styles.item_container}>
        <a href={link} className={styles.item_company}>
          {name}
        </a>
      </div>
      <div className={styles.item_container}>
        {/* eslint-disable */}
        <Slider {...settings}>
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
  const [firstClientX, setFirstClientX] = useState(null);

  useEffect(() => {
    window.addEventListener('touchstart', recordFirstTouch);
    window.addEventListener('touchmove', preventMove, { passive: false });

    return () => {
      window.removeEventListener('touchstart', recordFirstTouch);
      window.removeEventListener('touchmove', preventMove);
    };
  });

  const recordFirstTouch = e => {
    setFirstClientX(e.touches[0].clientX);
  };

  const preventMove = e => {
    const threshold = 10;
    const clientX = e.touches[0].clientX - firstClientX;

    // If user scrolls horizontally past the threshold, then prevent vertical scroll movement
    if (Math.abs(clientX) > threshold) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }

    return true;
  };

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
