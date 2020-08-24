import React from 'react';
import './App.css';

// components 
import LaunchFunction from './components/Launch/app'
import LaunchDetFunction from './components/LaunchDet/app'

// router 
import { Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div>
      {/* <LaunchFunction />
      <LaunchDetFunction /> */}
      <Routes>
        <Route path='/' element={<LaunchFunction />}/>
        <Route path='/launch/:id' element={<LaunchDetFunction />} />
      </Routes>
    </div>
  );
}

export default App;
