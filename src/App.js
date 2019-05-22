import React from 'react';
import './App.css';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Landing/>
      <div>
        <AboutMe/>
      </div>
      <span role="img" alt="finger-pointing-down" aria-label="hidden" className="expandIcon">👇</span>
    </div>
  );
}

export default App;
