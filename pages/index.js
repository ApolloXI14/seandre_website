import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Home from './home';
import Poems from './poems';
import Journal from './journal';
import About from './about';

function App() {
   return (
      <div className="navbar">
         	<Navbar />
            <Home />
         </div>
   )
}

export default App;
