'use client'

import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/journalentry.module.scss";
import Link from "next/link";
import parse from "html-react-parser";

export default function JournalEntry({prevEntryTitle, nextEntryTitle, currentEntryId, html}) {
    return(
      	<div  id="journalEntryContainer">
			<Navbar/>
	      	<div id={styles['journalEntryDiv-flex']}>
	      		<div className={styles.previous}>
	      			{({prevEntryTitle}) &&
			    		<Link href={`/journal/${prevEntryTitle}`}>&#10094;</Link> ||
			    		<div><Link href="/journal">&#10094;</Link></div>
			    	 }
	      		</div>
		         <div id={styles.htmlDiv}>
		      		{parse(html)}
			    </div>
			    <div className={styles.nextBtn}>
			    	{({nextEntryTitle}) &&
			    		<div><Link  href={`/journal/${nextEntryTitle}`}>&#10095;</Link></div> ||
			    		<div><Link href="/journal">&#10095; </Link></div>
			    	 }
			    </div>
		    </div>
	    </div>

      );

}
