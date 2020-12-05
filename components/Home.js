import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
   render(){
      return(
         <div>
          	<p>Welcome to my writing/music website!</p>
          	<p>Please check out the <Link to="/home">Journal</Link>, <Link to="/poems">Poems</Link>, and <Link to="/about">About Me</Link> sections. All other sections
will be coming soon!</p>
		</div>
      );
   }
}
export default Home;
