import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Poems from './components/Poems';
import { Route, Switch, withRouter } from 'react-router-dom';



class App extends Component{
   render(){
      return(

         <div class="intro">
         	<Navbar />
            <h1>Hello World</h1>
            <Switch>
               <Route exact path="/poems" component={Poems} />
               <Route exact path="/home" component={Home} />
   			</Switch>
         </div>
      );
   }
}

export default App;