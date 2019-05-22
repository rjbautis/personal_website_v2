import React from 'react';
import appStyles from './App.module.css';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className={appStyles.app}>
      <Landing/>
      <div className={appStyles.san_francisco_img}/>
      <div>
        <AboutMe/>
        <Projects/>
      </div>
      <span role="img" alt="finger-pointing-down" aria-label="hidden" className={appStyles.finger_animation}>👇</span>
    </div>
  );
}

export default App;
