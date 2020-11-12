import React, { Component } from 'react';
import styles from '../less/Navbar.less'
import { Switch, Link } from 'react-router-dom';

class Navbar extends Component{
   render(){
      return(
         <div class="navbar">
          <div><a href="#home">Home</a></div>
		  <div><a href="#news">Music</a></div>
		  
			  <div class="dropdown">
			    <button class="dropbtn">Writing
			      <i class=""></i>
			    </button>
			    <div class="dropdown-content">
		    		<Switch>
		    			<ul>
				      		<Link to="/poems">Poems</Link>
				      		<Link to="/">Short Stories</Link>
				      		<Link to="/">Blog</Link>
			      		</ul>
			      	</Switch>
			    </div>
			  </div>
		
		</div>
      );
   }
}
export default Navbar;
