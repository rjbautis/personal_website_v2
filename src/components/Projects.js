import React, { Component } from 'react';
import Slider from 'react-slick';
import projectData from '../assets/data/projectsData';
import styles from '../styles/Item.module.css';

class ProjectItem extends Component {
  componentDidMount() {
    window.addEventListener('touchstart', this.recordFirstTouch);
    window.addEventListener('touchmove', this.preventMove, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.recordFirstTouch);
    window.removeEventListener('touchmove', this.preventMove);
  }

  recordFirstTouch = e => {
    this.firstClientX = e.touches[0].clientX;
  };

  preventMove = e => {
    const threshold = 5;
    const clientX = e.touches[0].clientX - this.firstClientX;

    // If user scrolls horizontally past the threshold, then prevent vertical scroll movement
    if (Math.abs(clientX) > threshold) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }

    return true;
  };

  render() {
    const { name, link, imgSrc, about, media } = this.props;

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
  }
}

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
