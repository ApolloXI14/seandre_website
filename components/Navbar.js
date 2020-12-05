import React, { Component } from 'react';
import styles from '../less/Navbar.less'
import { Link } from 'react-router-dom';

class Navbar extends Component{
   render(){
      return(
         <div className="navbar">
          <div><Link to="/">Home</Link></div>
		  <div><Link to="/">Music</Link></div>
		  
			  <div className="dropdown">
			    <button className="dropbtn">Writing
			      <i className=""></i>
			    </button>
			    <div className="dropdown-content">
		    			<ul>
				      		<Link to="/poems">Poems</Link>
				      		<Link to="/">Short Stories</Link>
				      		<Link to="/journal">Journal</Link>
			      		</ul>
			      	
			    </div>
			  </div>
			  <div><Link to="/about">About</Link></div>
		
		</div>
      );
   }
}

export default Navbar;