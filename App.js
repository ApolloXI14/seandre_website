import React, { Component } from 'react';
import Navbar from './components/Navbar'

class App extends Component{
   render(){
      return(

         <div class="intro">
         	<Navbar />
            <h1>Hello World</h1>
         </div>
      );
   }
}

export default App;
