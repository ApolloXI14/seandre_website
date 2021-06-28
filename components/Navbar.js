import React, { Component } from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';

class Navbar extends Component{
   render(){
   	// <Link> react component must be styled directly, not in less, because it won't work in minified CSS in prod
   	const fontSize = {fontSize: "50px"};
   	const dropdownStyles = {
   		fontSize: "30px",
   		marginLeft: "-40px"
   	};
      return(
         <div className={styles.navbarDiv}>
          <div><Link style={fontSize} href="/home">Home</Link></div>
		  <div><Link style={fontSize} href="/">Music</Link></div>
		  
			  <div className={styles.dropdown}>
			    <button className={styles.dropbtn}>Writing
			      <i className=""></i>
			    </button>
			    <div className={styles['dropdown-content']}>
		    			<ul className="ul-class">
				      		<div><Link style={dropdownStyles} href="/poems">Poems</Link></div>
				      		<div><Link style={dropdownStyles} href="/">Short Stories</Link></div>
				      		<div><Link style={dropdownStyles} href="/journal">Journal</Link></div>
			      		</ul>			      	
			    </div>
			  </div>
			  <div><Link style={fontSize} href="/about">About</Link></div>
		
		</div>
      );
   }
}

export default Navbar;