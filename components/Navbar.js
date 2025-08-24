'use client'

import React, { Component } from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
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
				      		<div><Link href="/stories">Short Stories</Link></div>
				      		<div><Link href="/journals">Journal</Link></div>
			      		</ul>
			    </div>
			  </div>
			  <div className={styles.linkDiv}><Link href="/about">About</Link></div>

		</div>
      );
}
