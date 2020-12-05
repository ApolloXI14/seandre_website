import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
   render(){
      return(
         <div>
          	<h2>Welcome to my writing/music website!</h2>
          	<div>Please check out the <Link to="/journal">Journal</Link>, <Link to="/poems">Poems</Link>, and <Link to="/about">About Me</Link> sections. All other sections
will be coming soon!</div>
		</div>
      );
   }
}
export default Home;
