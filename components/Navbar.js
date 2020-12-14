import React, { Component } from 'react';
import styles from '../less/Navbar.less'
import { Link } from 'react-router-dom';

class Navbar extends Component{
   render(){
   	// <Link> react component must be styled directly, not in less, because it won't work in minified CSS in prod
   	const fontSize = {fontSize: "50px"};
   	const dropdownStyles = {
   		fontSize: "30px",
   		marginLeft: "-40px"
   	};
      return(
         <div className="navbar">
          <div><Link style={fontSize} to="/">Home</Link></div>
		  <div><Link style={fontSize} to="/">Music</Link></div>
		  
			  <div className="dropdown">
			    <button className="dropbtn">Writing
			      <i className=""></i>
			    </button>
			    <div className="dropdown-content">
		    			<ul>
				      		<Link style={dropdownStyles} to="/poems">Poems</Link>
				      		<Link style={dropdownStyles} to="/">Short Stories</Link>
				      		<Link style={dropdownStyles} to="/journal">Journal</Link>
			      		</ul>
			      	
			    </div>
			  </div>
			  <div><Link style={fontSize} to="/about">About</Link></div>
		
		</div>
      );
   }
}

export default Navbar;