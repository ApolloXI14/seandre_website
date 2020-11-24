import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Poems from './components/Poems'
import { Route, Switch, Link, withRouter } from 'react-router-dom';



class App extends Component{
   render(){
      return(

         <div class="intro">
         	<Navbar />
            <h1>Hello World</h1>
            <Switch>
   				<Route exact path="/poems" component={Poems} />
   			</Switch>
         </div>
      );
   }
}

export default App;
