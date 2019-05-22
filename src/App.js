import React from 'react';
import './App.css';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Landing/>
      <span role="img" alt="finger-pointing-down" aria-label="hidden" className="expandIcon">👇</span>
    </div>
  );
}

export default App;
