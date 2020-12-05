import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../less/Home.less'

class Home extends Component{
   render(){
      return(
         <div>
          	<h1>Welcome to my writing/music website!</h1>
          	<div>Please check out the <Link to="/journal">Journal</Link>, <Link to="/poems">Poems</Link>, and <Link to="/about">About Me</Link> sections. All other sections
will be coming soon!</div>
		</div>
      );
   }
}
export default Home;
