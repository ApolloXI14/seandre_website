import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Home from './home';
import Poems from './poems';
import Journal from './journal';
import About from './about';



class App extends Component{
   render(){
      return(
         <div className="navbar">
         	<Navbar />
            <Home />
         </div>
      );
   }
}

export default App;