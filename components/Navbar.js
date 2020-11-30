import React, { Component } from 'react';
import styles from '../less/Navbar.less'
import { Link } from 'react-router-dom';

class Navbar extends Component{
   render(){
      return(
         <div class="navbar">
          <div><Link to="/">Home</Link></div>
		  <div><Link to="/music">Music</Link></div>
		  
			  <div class="dropdown">
			    <button class="dropbtn">Writing
			      <i class=""></i>
			    </button>
			    <div class="dropdown-content">
		    			<ul>
				      		<Link to="/poems">Poems</Link>
				      		<Link to="/">Short Stories</Link>
				      		<Link to="/">Blog</Link>
			      		</ul>
			      	
			    </div>
			  </div>
		
		</div>
      );
   }
}

export default Navbar;