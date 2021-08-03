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
          <div className={styles.linkDiv}><Link href="/">Home</Link></div>
		  <div className={styles.linkDiv}><Link href="/">Music</Link></div>
		  
			  <div className={styles.dropdown}>
			    <button id="dropbtn" className={styles.dropbtn}>Writing</button>
			    <div className={styles['dropdown-content']}>
		    			<ul className={styles['ul-class']}>
				      		<div><Link href="/poems">Poems</Link></div>
				      		<div><Link href="/">Short Stories</Link></div>
				      		<div><Link href="/journal">Journal</Link></div>
			      		</ul>			      	
			    </div>
			  </div>
			  <div className={styles.linkDiv}><Link href="/about">About</Link></div>
		
		</div>
      );
   }
}

export default Navbar;