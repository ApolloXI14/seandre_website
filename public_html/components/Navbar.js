import React, { Component } from 'react';
import styles from '../less/Navbar.less'
import { Link } from 'react-router-dom';

class Navbar extends Component{
   render(){
      return(
         <div className="navbar">
          <div><Link className="link" to="/">Home</Link></div>
		  <div><Link className="link" to="/">Music</Link></div>
		  
			  <div className="dropdown">
			    <button className="dropbtn">Writing
			      <i className=""></i>
			    </button>
			    <div className="dropdown-content">
		    			<ul>
				      		<Link className="link" to="/poems">Poems</Link>
				      		<Link className="link" to="/">Short Stories</Link>
				      		<Link className="link" to="/journal">Journal</Link>
			      		</ul>
			      	
			    </div>
			  </div>
			  <div><Link className="link" to="/about">About</Link></div>
		
		</div>
      );
   }
}

export default Navbar;