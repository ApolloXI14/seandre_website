import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Poems from './components/Poems';
import JournalContainer from './components/JournalContainer';
import About from './components/About';
import { Route, Switch, withRouter } from 'react-router-dom';



class App extends Component{
   render(){
      return(

         <div className="intro">
         	<Navbar />
            <Switch>
               <Route exact path="/poems" component={Poems} />
               <Route exact path="/journal" component={JournalContainer} />
               <Route exact path="/about" component={About} />
               <Route exact path="/" component={Home} />
   			</Switch>
         </div>
      );
   }
}

export default App;