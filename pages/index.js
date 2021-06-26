import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Home from './home';
import Poems from './poems';
import Journal from './journal';
import About from './about';
import { Route, Switch, withRouter } from 'react-router-dom';



// class App extends Component{
//    render(){
//       return(
//          <div className="navbar">
//          	<Navbar />
//             <Switch> 
//                <Route exact path="/journal/:id" component={Journal} />
//                <Route exact path="/poems" component={Poems} />
//                <Route exact path="/journal" component={Journal} />
//                <Route exact path="/about" component={About} />
//                <Route exact path="/" component={Home} />
//    			</Switch>
//          </div>
//       );
//    }
// }

// export default App;

function HomePage() {
  return <div>Welcome to Next.js!</div>

}

export default HomePage