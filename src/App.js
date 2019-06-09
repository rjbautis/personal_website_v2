import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './App.module.css';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Projects from './components/Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 1
    };
    this.contentRef = React.createRef();

    ReactGA.initialize('UA-140860145-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  // Set menu item with key as active item
  setItemActive = (key) => {
    this.setState((prevState) => {
      return {
        prevState,
        activeItem: key
      }
    });
  };

  scrollToContent = () => {
    if (this.contentRef.current) {
      this.contentRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  render() {
    const { activeItem } = this.state;
    const isExperience = activeItem === 1;

    return (
      <div className={styles.app}>
        <Landing/>
        <div className={styles.banner_img}/>
        <div className="content" ref={this.contentRef}>
          <AboutMe/>
          <Menu setItemActive={this.setItemActive} activeItem={activeItem}/>
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            { isExperience ? (
              <Experience key="experience_component"/>
            ) : (
              <Projects key="projects_component"/>
            )}
          </CSSTransitionGroup>
        </div>
        {/* eslint-disable */}
        <span
          role="img"
          alt="finger-pointing-down"
          aria-label="hidden"
          className={styles.finger_animation}
          onClick={this.scrollToContent}
        >
          👇
        </span>
      </div>
    );
  }
}

export default App;
