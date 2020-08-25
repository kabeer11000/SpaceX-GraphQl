import React from 'react';
import './App.css';
import './hover.css'
// components 
import LaunchFunction from './components/Launch/app'
import LaunchDetFunction from './components/LaunchDet/app'
import Navbar from './components/navbar/navbar'
// router 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />
        <Routes>
          {/* main root path */}
          <Route path='/' element={<LaunchFunction />} />
          {/* indiviual connection  to launches*/}
          <Route path='launch/:id' element={<LaunchDetFunction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
