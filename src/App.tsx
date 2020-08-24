import React from 'react';
import './App.css';

// components 
import LaunchFunction from './components/Launch/app'
import LaunchDetFunction from './components/LaunchDet/app'

function App() {
  return (
    <div className="App">
      <LaunchFunction />
      <LaunchDetFunction />
    </div>
  );
}

export default App;
