import React, { Component } from 'react';
import appStyles from './App.module.css';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 1
    }
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

  render() {
    const { activeItem } = this.state;

    return (
      <div className={appStyles.app}>
        <Landing/>
        <div className={appStyles.san_francisco_img}/>
        <AboutMe/>
        <Menu setItemActive={this.setItemActive} activeItem={activeItem}/>
        <span role="img" alt="finger-pointing-down" aria-label="hidden" className={appStyles.finger_animation}>👇</span>
      </div>
    );
  }
}

export default App;
