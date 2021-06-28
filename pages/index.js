import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Home from './home';
import Poems from './poems';
import Journal from './journal';
import About from './about';
import { Route, Switch, withRouter } from 'react-router-dom';



class App extends Component{
   render(){
      return(
         <div className="navbar">
         	<Navbar />
           
         </div>
      );
   }
}

export default App;