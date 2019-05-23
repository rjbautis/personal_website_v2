import React, { Component } from 'react';
import appStyles from './App.module.css';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 1
    };
    this.contentRef = React.createRef();
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

    return (
      <div className={appStyles.app}>
        <Landing/>
        <div className={appStyles.san_francisco_img}/>
        <div ref={this.contentRef}>
          <AboutMe/>
          <Menu setItemActive={this.setItemActive} activeItem={activeItem}/>
          { activeItem === 1 ? <Experience/> : <div>Hi</div> }
        </div>
        {/* eslint-disable */}
        <span
          role="img"
          alt="finger-pointing-down"
          aria-label="hidden"
          className={appStyles.finger_animation}
          onClick={this.scrollToContent}
        >
          👇
        </span>
      </div>
    );
  }
}

export default App;
