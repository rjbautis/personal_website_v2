import React from 'react';
import appStyles from './App.module.css';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu';

function App() {
  return (
    <div className={appStyles.app}>
      <Landing/>
      <div className={appStyles.san_francisco_img}/>
      <AboutMe/>
      <Menu/>
      <span role="img" alt="finger-pointing-down" aria-label="hidden" className={appStyles.finger_animation}>👇</span>
    </div>
  );
}

export default App;
