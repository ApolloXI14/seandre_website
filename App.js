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
               <Route path="/poems" component={Poems} exact />
               <Route path="/" component={Home} exact />
   			</Switch>
         </div>
      );
   }
}

export default App;