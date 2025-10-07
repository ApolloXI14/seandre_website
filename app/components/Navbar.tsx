'use client'

import React, { Component } from 'react';
import styles from '../styles/navbar.module.scss';
import { Link } from 'react-router';

export function Navbar() {
	const fontSize = {fontSize: "50px"};
   	const dropdownStyles = {
   		fontSize: "30px",
   		marginLeft: "-40px"
   	};
      return(
         <div className={styles.navbarDiv}>
          <div className={styles.linkDiv}><Link to="/" reloadDocument>Home</Link></div>
		  <div className={styles.linkDiv}><Link to="/">Music</Link></div>

			  <div className={styles.dropdown}>
			    <button id="dropbtn" className={styles.dropbtn}>Writing</button>
			    <div className={styles['dropdown-content']}>
		    			<ul className={styles['ul-class']}>
				      		<div><Link to="/poems">Poems</Link></div>
				      		<div><Link to="/stories">Short Stories</Link></div>
				      		<div><Link to="/journals">Journal</Link></div>
			      		</ul>
			    </div>
			  </div>
			  <div className={styles.linkDiv}><Link to="/about">About</Link></div>

		</div>
      );
}
